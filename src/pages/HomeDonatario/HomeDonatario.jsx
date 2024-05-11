import { Box } from "@mui/material";
import CriancasPcds from "../../../public/criancasPcds.png";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import Header from "../../Components/Header";
import { useEffect, useState } from "react";
import axios from "axios";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import DeleteIcon from "@mui/icons-material/Delete";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";

function HomeDonartario() {
  //hook como um array, pois vamos armazenar as requisições dentro de um array
  const [requisicoes, setRequisicoes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [idRequisicao, setIdRequisicao] = useState("");
  const [openModal, setOpenModal] = useState(false);

  //funções abrir modal de editar requisição
  const handleOpen = (idRequisicao) => {
    setIdRequisicao(idRequisicao);
    const selectedRequisicao = requisicoes.find(
      (req) => req.idRequisicao === idRequisicao
    );

    console.log(selectedRequisicao);
    if (selectedRequisicao) {
      setForm({
        tituloRequisicao: selectedRequisicao.tituloRequisicao,
        descricaoRequisicao: selectedRequisicao.descricaoRequisicao,
      });
      console.log("chegou aqui");

      setOpenModal(true);
    }
  };
  const handleClose = () => setOpenModal(false);

  const [form, setForm] = useState({
    tituloRequisicao: "",
    descricaoRequisicao: "",
  });

  const handleChangeForm = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  //pegando o email da pessoa logada no navegador
  const email = localStorage.getItem("email");

  //trazer requuisições
  const handleBuscaRequisicoesPelaPessoa = () => {
    setLoading(true);
    const token = localStorage.getItem("token"); //pega o token gerado do Browser e armazena na variável token
    if (!token) {
      alert("Token não encontrado --> Redirecionando a tela de Login");
      location.href = "/Login";
    } else {
      axios
        .get(
          `http://localhost:8080/api/v1/requisicao/buscaRequisicoesPelaPessoa/${email}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((response) => {
          console.log(response.data);
          setRequisicoes(response.data);
          setLoading(false);
        })
        .catch((erro) => {
          console.log(erro);
          alert("Não foi possível retornar as requisições deste usuário");
        });
    }
    setLoading(false);
  };

  //atualizar requisição
  const handleEditarRequisicao = async () => {
    if (!idRequisicao || idRequisicao === "") {
      alert("Não foi possível pegar o id");
    } else {
      setLoading(true);
      const token = localStorage.getItem("token");

      await axios
        .patch(
          `http://localhost:8080/api/v1/requisicao/${idRequisicao}`,
          {
            tituloRequisicao: form.tituloRequisicao,
            descricaoRequisicao: form.descricaoRequisicao,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((response) => {
          console.log("Resposta da requisição PATCH:", response);

          handleBuscaRequisicoesPelaPessoa();
          setLoading(false);
          alert("Requisição editada com sucesso");
          handleClose();
        })
        .catch((erro) => {
          console.log(erro);
          alert("Ocorreu um erro ao editar essa requisição");
        });
    }
  };

  const handleExcluirRequisicao = async (idRequisicao) => {
    if (!idRequisicao || idRequisicao === "") {
      alert("Não foi possível pegar o id");
    } else {
      setLoading(true);
      const token = localStorage.getItem("token");

      await axios
        .delete(
          `http://localhost:8080/api/v1/requisicao/deleteRequisicao/${idRequisicao}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then(() => {
          handleBuscaRequisicoesPelaPessoa();
          setLoading(false);
          alert("Requisição excluida com sucesso");
        })
        .catch((erro) => {
          console.log(erro);
          alert("Ocorreu um erro ao remover uma requisição");
        });
    }
  };

  useEffect(() => {
    handleBuscaRequisicoesPelaPessoa();
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
      {/**MODAL EDTAR REQUISIÇÃO */}
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
            }}
          >
            Editar requisição
          </Typography>

          <TextField
            sx={{
              width: "100%",
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
              width: "100%",
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
              alignItems: "center",
            }}
          >
            <Button
              variant="contained"
              onClick={handleEditarRequisicao}
              sx={{
                backgroundColor: "#04BFAF",
                width: "200px",
                "&:hover": {
                  backgroundColor: "#E64097", // Altere a cor desejada para o efeito hover
                },
              }}
            >
              Editar
            </Button>
          </Box>
        </Box>
      </Modal>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100vw",
          height: "60vh",
          backgroundImage: `linear-gradient(to bottom, rgba(230, 64, 151, 0.8), rgba(230, 64, 151, 0)), url(${CriancasPcds})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/*HEADER */}
        <Header />

        <Box sx={{ margin: "10vh auto 2vh", width: "60vw" }}>
          <Typography
            sx={{
              fontWeight: "600",
              color: "#FFFFFF",
              fontFamily: "montserrat",
              fontSize: "36px",
              textAlign: "center",
            }}
          >
            Cadastre sua necessidade
          </Typography>
        </Box>

        <Box sx={{ margin: "2vh auto" }}>
          <Button
            variant="contained"
            onClick={() => (location.href = "/CadastroNecessidade")}
            sx={{
              backgroundColor: "#04BFAF",
              color: "#FFFFFF",
              width: "270px",
              "&:hover": {
                backgroundColor: "#E64097", // Altere a cor desejada para o efeito hover
              },
            }}
          >
            Cadastrar Necessidade
          </Button>
        </Box>
      </Box>

      {/*HISTÓRICO DAS REQUISIÇÕES */}
      <Typography
        sx={{
          fontWeight: "600",
          color: "#04BFAF",
          fontFamily: "montserrat",
          fontSize: "36px",
          padding: "3rem",
        }}
      >
        Minhas requisições recentes
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          marginLeft: "5vw",
          marginTop: "5vh",
        }}
      >
        {requisicoes.map((requisicao) => {
          //Formatando a data em padrão brasileiro
          const dataRequisicao = new Date(requisicao.dataRequisicao);
          const formattedDate = `${dataRequisicao.getDate()}/${
            dataRequisicao.getMonth() + 1
          }/${dataRequisicao.getFullYear()}`;

          return (
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                borderRadius: "20px",
                backgroundColor: "#FFFFFF",
                boxShadow: "5px 0px  10px rgba(0, 0, 0, 0.3)",
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
                {" "}
                {requisicao.tituloRequisicao}
              </Typography>
              <Typography
                sx={{
                  fontSize: "20px",
                  fontFamily: "montserrat",
                  color: "#231F20",
                  fontWeight: "500",
                  margin: "5vh auto",
                }}
              >
                {" "}
                {requisicao.descricaoRequisicao}
              </Typography>

              <Box sx={{ display: "flex", flexDirection: "row" }}>
                <Typography
                  sx={{ fontFamily: "montserrat", marginRight: "15px" }}
                >
                  Criado em: {formattedDate}
                </Typography>

                <Stack direction="row" spacing={1} sx={{ marginLeft: "auto" }}>
                  <Chip
                    sx={{
                      backgroundColor: "#48E54E",
                      color: "#FFFFFF",
                    }}
                    label={requisicao.statusRequisicao}
                  />
                </Stack>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  marginTop: "auto",
                  marginLeft: "auto",
                }}
              >
                <Button
                  variant="contained"
                  onClick={() => handleOpen(requisicao.idRequisicao)}
                  sx={{
                    backgroundColor: "#04BFAF",
                    height: "40px",
                    "&:hover": {
                      backgroundColor: "#E64097", // Altere a cor desejada para o efeito hover
                    },
                  }}
                >
                  Editar
                </Button>

                <Button
                  onClick={() =>
                    handleExcluirRequisicao(requisicao.idRequisicao)
                  }
                >
                  <DeleteIcon sx={{ fontSize: "40px", color: "#E64097" }} />
                </Button>
              </Box>
            </Box>
          );
        })}
      </Box>
    </>
  );
}
export default HomeDonartario;
