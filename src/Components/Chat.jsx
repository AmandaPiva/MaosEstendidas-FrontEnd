import React from "react";
import { useState, useEffect, useRef } from "react";
import { useChat } from "./../context/ChatContext"; // Certifique-se de usar o caminho correto para o ChatContext
import {
  Dialog,
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  TextField,
  Fab,
  List,
  ListItemButton,
  Divider,
  Slide,
} from "@mui/material";
import { Close as CloseIcon, Send as SendIcon } from "@mui/icons-material";
import axios from "axios";
import dayjs from "dayjs"; // Biblioteca para manipulação de datas

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function Chat() {
  const { openChat, closeChatDialog } = useChat();
  const [mensagem, setMensagem] = useState("");
  const [loading, setLoading] = useState(false);
  const [mensagens, setMensagens] = useState([]);
  const [todasMensagens, setTodasMensagens] = useState([]);
  const messagesEndRef = useRef(null);

  const email = localStorage.getItem("email");

  const handleMandaMensagem = () => {
    setLoading(true);
    const token = localStorage.getItem("token"); //pega o token gerado do Browser e armazena na variável token

    if (!token) {
      location.href = "/Login";
    } else {
      axios
        .post(
          `http://localhost:8080/api/v1/mensagem`,
          {
            pessoaRemetente: email,
            pessoaDestinataria: "renato_luiz_cardoso@me.com",
            mensagem: mensagem,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((response) => {
          setLoading(false);
          console.log(response.data);
          setMensagem("");
          handleBuscarTodasMensagensRemetenteAndDestinatario(); // Atualizar as mensagens após enviar
        })
        .catch((erro) => {
          console.error(erro);
          alert("Ocorreu um erro ao cadastrar Requisição");
        });
    }
  };

  const handleBuscarTodasMensagensRemetenteAndDestinatario = () => {
    setLoading(true);
    const token = localStorage.getItem("token"); //pega o token gerado do Browser e armazena na variável token

    if (!token) {
      location.href = "/Login";
    } else {
      axios
        .get(
          `http://localhost:8080/api/v1/mensagem/buscaMensagemPeloDestinatarioERemetente/${email}/marialinda@gmail.com`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((response) => {
          console.log(response.data);
          const mensagensOrdenadas = response.data.sort((a, b) =>
            dayjs(a.timestamp).isAfter(dayjs(b.timestamp)) ? 1 : -1
          );
          setTodasMensagens(mensagensOrdenadas);
          scrollToBottom(); // Scroll para a parte inferior após atualizar as mensagens
        })
        .catch((erro) => {
          console.error(erro);
          alert("Ocorreu um erro ao buscar mensagens");
        });
    }
    setLoading(false);
  };

  const handleBuscarMensagensPeloRemetente = () => {
    setLoading(true);
    const token = localStorage.getItem("token"); //pega o token gerado do Browser e armazena na variável token

    if (!token) {
      location.href = "/Login";
    } else {
      axios
        .get(
          `http://localhost:8080/api/v1/mensagem/buscaMensagemPeloRementente/${email}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((response) => {
          console.log(response.data);
          const mensagensAgrupadas = agruparMensagensPorDestinatario(
            response.data
          );

          setMensagens(mensagensAgrupadas);
        })
        .catch((erro) => {
          console.error(erro);
          alert("Ocorreu um erro ao buscar mensagens");
        });
    }
    setLoading(false);
  };

  const agruparMensagensPorDestinatario = (mensagens) => {
    const agrupadas = {};
    mensagens.forEach((mensagem) => {
      const destinatario = mensagem.pessoaDestinataria.nomePessoa;
      if (!agrupadas[destinatario]) {
        agrupadas[destinatario] = mensagem;
      }
    });
    return Object.values(agrupadas);
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    handleBuscarMensagensPeloRemetente();
  }, []);

  useEffect(() => {
    handleBuscarTodasMensagensRemetenteAndDestinatario();
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [todasMensagens]);

  console.log(todasMensagens);

  return (
    <Dialog
      fullScreen
      open={openChat}
      onClose={closeChatDialog}
      TransitionComponent={Transition}
    >
      <AppBar sx={{ position: "relative", background: "#E64097" }}>
        <Toolbar>
          <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
            Chat
          </Typography>
          <Button autoFocus color="inherit" onClick={closeChatDialog}>
            <CloseIcon />
          </Button>
        </Toolbar>
      </AppBar>

      <Box sx={{ display: "flex", flexDirection: "row", height: "100vh" }}>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          {mensagens.map((m, index) => (
            <List key={index} sx={{ width: "50vw" }}>
              <React.Fragment>
                <ListItemButton
                  sx={{
                    fontFamily: "montserrat",
                    fontSize: "16px",
                    fontWeight: "500",
                  }}
                >
                  {m.pessoaDestinataria.nomePessoa} -{" "}
                  {m.pessoaDestinataria.rolePessoa.rolePessoa}
                </ListItemButton>
                <Divider />
              </React.Fragment>
            </List>
          ))}
        </Box>

        <Box
          sx={{
            width: "50vw",
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.6)",
          }}
        >
          <Box
            sx={{
              flexGrow: 1,
              overflowY: "auto",
              display: "flex",
              flexDirection: "column",
              padding: "10px",
            }}
          >
            {/**corpo do chat */}
            {todasMensagens.map((t, index) => {
              const isRemetente = t.pessoaRemetente.emailPessoa === email;

              return (
                <Box
                  key={index}
                  sx={{
                    display: "flex",
                    justifyContent: isRemetente ? "flex-end" : "flex-start",
                    mb: 1,
                  }}
                >
                  <Box
                    sx={{
                      background: isRemetente ? "#E64097" : "#f1f1f1",
                      color: isRemetente ? "#FFFFFF" : "#000000",
                      padding: "10px",
                      borderRadius: "10px",
                      maxWidth: "60%",
                      wordWrap: "break-word",
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: "montserrat",
                        fontSize: "16px",
                        fontWeight: "500",
                      }}
                    >
                      {t.mensagem}
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: "montserrat",
                        fontSize: "12px",
                        fontWeight: "400",
                        textAlign: "right",
                      }}
                    >
                      {dayjs(t.timestamp).format("DD/MM/YYYY HH:mm")}
                    </Typography>
                  </Box>
                </Box>
              );
            })}
            <div ref={messagesEndRef} />
          </Box>

          <Box
            sx={{
              position: "fixed",
              bottom: 0,
              display: "flex",
              flexDirection: "row",
              width: "50vw",
              background: "#fff",
              padding: "10px",
            }}
          >
            <TextField
              value={mensagem}
              onChange={(event) => setMensagem(event.target.value)}
              name="mensagem"
              sx={{ flexGrow: 1, marginRight: "10px" }}
              label="Digite uma mensagem..."
              variant="outlined"
            />
            <Fab
              sx={{ background: "#E64097" }}
              color="primary"
              aria-label="send"
              onClick={() => handleMandaMensagem()}
            >
              <SendIcon />
            </Fab>
          </Box>
        </Box>
      </Box>
    </Dialog>
  );
}

export default Chat;
