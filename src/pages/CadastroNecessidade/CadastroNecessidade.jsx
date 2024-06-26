import { Box, Typography } from "@mui/material";
import Logo from "../../../public/logo.png";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import CriancasPcds from "../../../public/criancasPcds.png";
import { Link } from "react-router-dom";
import ReplyAllIcon from "@mui/icons-material/ReplyAll";
import { useState } from "react";
import Modal from "@mui/material/Modal";
import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import axios from "axios";

function CadastroNecessidade() {
  const [form, setForm] = useState({
    pessoaDonataria: "",
    tituloRequisicao: "",
    descricaoRequisicao: "",
    statusRequisicao: "",
  });
  const [loading, setLoading] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const [alerta, setAlerta] = useState(false);
  const [alertaMensagem, setAlertaMensagem] = useState("");
  const [alertaTipo, setAlertaTipo] = useState("");

  //pegando o email da pessoa logada no navegador
  const email = localStorage.getItem("email");

  const handleClose = () => setOpenModal(false);
  const handleOpen = () => setOpenModal(true);

  const handleCadastraNecessidade = () => {
    setLoading(true);

    if (form.tituloRequisicao == "" || form.descricaoRequisicao == "") {
      handleAbreAlerta(
        "error",
        "Os campos não foram preenchidos corretamente, revise-os"
      );
    } else {
      const token = localStorage.getItem("token"); //pega o token gerado do Browser e armazena na variável token

      if (!token) {
        handleAbreAlerta(
          "error",
          "Token não encontrado --> Redirecionando a tela de Login"
        );

        location.href = "/Login";
      } else {
        axios
          .post(
            `http://localhost:8080/api/v1/requisicao`,
            {
              pessoaDonataria: email,
              tituloRequisicao: form.tituloRequisicao,
              descricaoRequisicao: form.descricaoRequisicao,
              statusRequisicao: "ABERTA",
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

            handleOpen();
          })
          .catch((erro) => {
            console.error(erro);
            handleAbreAlerta(
              "error",
              "Ocorreu um erro ao cadastrar Requisição"
            );
          });
      }
      setLoading(false);
    }
  };

  const handleChangeForm = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  //FUNÇÃO QUE ABRE O ALERTA
  const handleAbreAlerta = (tipo, mensagem) => {
    setAlertaMensagem(mensagem);
    setAlertaTipo(tipo);
    setAlerta(true);
  };

  //FUNÇÃO QUE ENIBE O ALERTA
  const handleFechaAlerta = () => {
    setAlerta(false);
    setAlertaTipo("success");
    setAlertaMensagem("");
  };

  const style = {
    position: "absolute",
    top: "25%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 700,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
  };

  return (
    <>
      <Snackbar
        sx={{ width: "100%" }}
        open={alerta}
        autoHideDuration={6000}
        onClose={handleFechaAlerta}
        spacing={2}
      >
        <Alert
          onClose={handleFechaAlerta}
          severity={alertaTipo}
          sx={{ width: "30%" }}
          variant="filled"
        >
          {alertaMensagem}
        </Alert>
      </Snackbar>
      {/**MODAL */}
      <Modal
        open={openModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            sx={{
              color: "#E64097",
              fontFamily: "montserrat",
              fontSize: "24px",
              fontWeight: "500",
              textAlign: "center",
              marginTop: "2vh",
            }}
          >
            Requisição cadastrada com sucesso, aguarde um doador entrar em
            contato com você!
          </Typography>
          <Button
            variant="contained"
            onClick={() => {
              handleClose();
              location.href = "/HomeDonatario";
            }}
            sx={{
              backgroundColor: "#E64097",
              width: "100px",
              display: "flex",
              flexDirection: "column",
              margin: "5vh auto",
              "&:hover": {
                backgroundColor: "#E64097", // Altere a cor desejada para o efeito hover
              },
            }}
          >
            OK
          </Button>
        </Box>
      </Modal>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100vw",
          height: "100vh",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundImage: `linear-gradient(to bottom, rgba(230, 64, 151, 0.8), rgba(230, 64, 151, 0)), url(${CriancasPcds})`,
        }}
      >
        <Box sx={{ marginTop: "5.5vh", marginLeft: "5vw" }}>
          <Link to={"/HomeDonatario"}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#04BFAF",
                "&:hover": {
                  backgroundColor: "#E64097", // Altere a cor desejada para o efeito hover
                },
                padding: "8px 18px 8px 5px",
              }}
              size="small"
            >
              <ReplyAllIcon sx={{ marginRight: "8px" }} />
              Voltar
            </Button>
          </Link>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "100vw",
            height: "100vh",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{ position: "relative", width: "100%", textAlign: "center" }}
          >
            <Typography
              sx={{
                fontSize: "36px",
                fontWeight: "600",
                color: "#FFFFFf",
                fontFamily: "montserrat",
                display: "inline-block", // Necessário para centralizar corretamente a frase
              }}
            >
              Cadastrando Necessidade
            </Typography>
            <Typography
              sx={{
                color: "#FFFFFf",
                fontFamily: "montserrat",
                fontSize: "20px",
                fontWeight: "500",
              }}
            >
              Cadastre aqui o que você está precisando!
            </Typography>

            <Box
              sx={{
                position: "absolute",
                right: 50,
                top: "50%",
                transform: "translateY(-50%)",
              }}
            >
              <img
                src={Logo}
                alt="logo"
                style={{
                  borderRadius: "70%",
                  width: "220px",
                  height: "200px",
                }}
              />
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            width: "100vw",
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Box
            sx={{
              height: "65vh",
              width: "70vw",
              backgroundColor: "#FFFFFF",
              borderRadius: "50px",
              margin: "2vh auto",
              border: 1,
              borderColor: "white",
              boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.3)",
            }}
          >
            <Box
              sx={{
                marginTop: "8vh",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <TextField
                sx={{
                  width: "60vw",
                  backgroundColor: "#FFFFFF",
                  margin: "2vh auto",
                }}
                id="outlined-basic"
                name="tituloRequisicao"
                onChange={handleChangeForm}
                value={form.tituloRequisicao}
                label="Título"
                variant="outlined"
              />
              <TextField
                sx={{
                  width: "60vw",
                  backgroundColor: "#FFFFFF",
                  margin: "2vh auto",
                }}
                id="outlined-basic"
                name="descricaoRequisicao"
                onChange={handleChangeForm}
                value={form.descricaoRequisicao}
                label="Descrição"
                variant="outlined"
                multiline
                rows={5}
              />

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  margin: "2vh 46px",
                }}
              >
                <Button
                  variant="contained"
                  onClick={handleCadastraNecessidade}
                  sx={{
                    margin: "5vh auto",
                    width: "15vw",
                    backgroundColor: "#04BFAF",
                    "&:hover": {
                      backgroundColor: "#E64097", // Altere a cor desejada para o efeito hover
                    },
                  }}
                >
                  Cadastrar
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default CadastroNecessidade;
