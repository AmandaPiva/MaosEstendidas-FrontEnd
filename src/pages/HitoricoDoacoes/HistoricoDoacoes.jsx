import { Typography, Box } from "@mui/material";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import axios from "axios";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

import { useState, useEffect } from "react";

function HistoricoDoacoes() {
  const [historicoDoacoes, setHistoricoDoacoes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const handleClose = () => setOpenModal(false);
  const handleOpen = () => setOpenModal(true);

  const email = localStorage.getItem("email");

  const handleHistoricoDoacoes = async () => {
    setLoading(true);
    const token = localStorage.getItem("token");
    if (!token) {
      location.href = "/Login";
    } else {
      await axios
        .get(
          `http://localhost:8080/api/v1/doacoes/buscaDoacoesPelaPessoa/${email}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((response) => {
          setHistoricoDoacoes(response.data);
          console.log(response.data);
        })
        .catch((erro) => {
          console.error(
            "Erro ao buscar o histórico de doações deste doador:",
            erro
          );
        });
    }
  };

  {
    /**MUDAR STATUS DA REQUISIÇÃO */
  }
  const handleMudaStatusDaRequisicao = async (idRequisicao) => {
    setLoading(true);

    const token = localStorage.getItem("token");

    if (!token) {
      location.href = "/Login";
    } else {
      await axios
        .patch(
          `http://localhost:8080/api/v1/requisicao/mudarStatusRequisicao/${idRequisicao}/CONCLUIDA`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((response) => {
          setLoading(false);
          console.log(response.data);
        })
        .catch((erro) => {
          console.error(erro);
        });
      setLoading(false);
    }
  };

  useEffect(() => {
    handleHistoricoDoacoes();
  }, []);

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
      <Modal
        open={openModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            sx={{
              color: "#04BFAF",
              fontFamily: "montserrat",
              fontSize: "36px",
              fontWeight: "600",
              textAlign: "center",
            }}
          >
            Muito Bem! Sua doação foi concluída
          </Typography>
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
            Obrigada por fazer uma boa ação! Continue fazendo a diferença
          </Typography>
          <Button
            variant="contained"
            onClick={() => {
              handleClose();
              location.reload();
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
          heigth: "100vh",
        }}
      >
        {/**PARTE DE CIMA COM O TÍTULO E BOTÃO DE VOLTAR UMA PÁGINA */}
        <Box sx={{ display: "flex", flexDirection: "row" }}>
          <Box sx={{ marginTop: "5.5vh", marginLeft: "5vw" }}>
            <Button
              onClick={() => (location.href = "/HomeDoador")}
              variant="outlined"
            >
              Voltar
            </Button>
          </Box>

          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography
              sx={{
                fontSize: "36px",
                fontWeight: "600",
                color: "#E64097",
                fontFamily: "montserrat",
                margin: "5vh ",
                textAlign: "center",
              }}
            >
              Histórico de doações{" "}
            </Typography>
            <Typography
              sx={{
                fontSize: "24px",
                fontWeight: "500",
                color: "#231F20",
                fontFamily: "montserrat",
                margin: "1vh ",
                textAlign: "center",
              }}
            >
              Veja o histórico de suas ultimas doações
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            // marginLeft: "5vw",
            padding: "30px",
            overflowX: "scroll",
            minHeight: "70vh",
            background: "#F3EDF7",
            marginTop: "5vh",
            boxShadow: "5px 0px 10px rgba(0, 0, 0, 0.3)",
          }}
        >
          {/**HISTÓRICO DAS DOAÇÕES */}
          {historicoDoacoes.map((historico) => {
            return (historico &&
              historico.requisicao.statusRequisicao === "EM_ANDAMENTO") ||
              historico.requisicao.statusRequisicao === "CONCLUIDA" ? (
              <Box
                key={historico.idDoacao}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  borderRadius: "20px",
                  backgroundColor: "#FFFFFF",
                  boxShadow: "5px 0px 10px rgba(0, 0, 0, 0.3)",
                  height: "50vh",
                  width: "20vw",
                  alignItems: "center",
                  padding: "2rem",
                  marginLeft: "2vw",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "24px",
                    fontFamily: "montserrat",
                    color: "#E64097",
                    fontWeight: "600",
                  }}
                >
                  {historico.requisicao.pessoaDonataria.nomePessoa}
                </Typography>
                <Typography
                  sx={{
                    fontSize: "24px",
                    fontFamily: "montserrat",
                    color: "#231F20",
                    fontWeight: "500",
                    marginTop: "5vh",
                  }}
                >
                  {historico.requisicao.tituloRequisicao}
                </Typography>
                <Typography
                  sx={{
                    fontSize: "20px",
                    fontFamily: "montserrat",
                    color: "#231F20",
                    fontWeight: "500",
                    margin: "2vh auto",
                  }}
                >
                  {historico.requisicao.descricaoRequisicao}
                </Typography>
                <Typography
                  sx={{ fontFamily: "montserrat", marginRight: "15px" }}
                >
                  {historico.requisicao.pessoaDonataria.endereco.bairro} -
                  {historico.requisicao.pessoaDonataria.endereco.cidade}/
                  {historico.requisicao.pessoaDonataria.endereco.estado}
                </Typography>

                <Stack
                  direction="row"
                  spacing={1}
                  sx={{ marginLeft: "auto", marginTop: "5vh" }}
                >
                  <Chip
                    sx={{
                      backgroundColor: "#48E54E",
                      color: "#FFFFFF",
                    }}
                    label={historico.requisicao.statusRequisicao}
                  />
                </Stack>

                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#04BFAF",
                    marginTop: "auto",
                    height: "40px",
                    "&:hover": {
                      backgroundColor: "#04BFAF",
                    },
                  }}
                  onClick={() => {
                    handleMudaStatusDaRequisicao(
                      historico.requisicao.idRequisicao
                    );

                    handleOpen();
                  }}
                >
                  Concluir doação
                </Button>
              </Box>
            ) : null;
          })}
        </Box>
      </Box>
    </>
  );
}

export default HistoricoDoacoes;
