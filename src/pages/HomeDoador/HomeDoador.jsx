import Header from "../../Components/Header";
import { Box } from "@mui/material";
import CriancasPcds from "../../../public/criancasPcds.png";
import { Typography } from "@mui/material";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { useEffect, useState } from "react";
import axios from "axios";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
// import { useChat } from "../../context/ChatContext"; // Certifique-se de usar o caminho correto para o ChatContext

function HomeDoador({ requisicoesInicial }) {
  const [requisicoes, setRequisicoes] = useState([]);
  const [reqInicial, setReqInicial] = useState(requisicoesInicial);
  const [doacao, setDoacao] = useState("");
  const [loading, setLoading] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [filtro, setFiltro] = useState(""); //HOOK PARA ARMAZENAR O VALOR DO FILTRO
  // const { openChatDialog } = useChat();

  const handleClose = () => setOpenModal(false);
  const handleOpen = () => setOpenModal(true);

  //PEGANDO O VALOR DIGITADO NO INPUT
  const handleFilterChange = (event) => {
    setFiltro(event.target.value);
  };

  const filteredRequisicoes = requisicoes.filter(
    (requisicao) =>
      requisicao.pessoaDonataria.nomePessoa
        .toLowerCase()
        .includes(filtro.toLowerCase()) ||
      requisicao.tituloRequisicao
        .toLowerCase()
        .includes(filtro.toLowerCase()) ||
      requisicao.descricaoRequisicao
        .toLowerCase()
        .includes(filtro.toLowerCase()) ||
      requisicao.pessoaDonataria.endereco.bairro
        .toLowerCase()
        .includes(filtro.toLowerCase()) ||
      requisicao.pessoaDonataria.endereco.cidade
        .toLowerCase()
        .includes(filtro.toLowerCase()) ||
      requisicao.pessoaDonataria.endereco.estado
        .toLowerCase()
        .includes(filtro.toLowerCase())
  );

  //pegando o email da pessoa logada no navegador
  const email = localStorage.getItem("email");

  const handleRemoveRequisicao = (idRequisicao) => {
    setRequisicoes(
      requisicoes.filter(
        (requisicao) => requisicao.idRequisicao !== idRequisicao
      )
    );
  };

  const formatPhoneNumber = (phone) => {
    // Remove todos os caracteres não numéricos
    let cleaned = ("" + phone).replace(/\D/g, "");
    // Adiciona o código do país, se necessário
    if (cleaned.length === 11) {
      cleaned = "55" + cleaned;
    }
    return cleaned;
  };

  const handleBuscarRequisicoes = async () => {
    setLoading(true);
    const token = localStorage.getItem("token");
    if (!token) {
      location.href = "/Login";
    } else {
      await axios
        .get(`http://localhost:8080/api/v1/requisicao`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          setRequisicoes(response.data);
          console.log(response.data);
        })
        .catch((erro) => {
          console.error("Erro ao buscar donatarios pela role:", erro);
        });
    }
  };

  const handleCadastraDoacao = async (idRequisicao) => {
    setLoading(true);

    const token = localStorage.getItem("token");

    if (!token) {
      alert("Token não encontrado --> Redirecionando a tela de Login");
      location.href = "/Login";
    } else {
      await axios
        .post(
          `http://localhost:8080/api/v1/doacoes`,
          {
            pessoaDoadora: email,
            requisicao: idRequisicao,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((response) => {
          setLoading(false);
          setDoacao(response.data);
          console.log(response.data);
        })
        .catch((erro) => {
          console.error(erro);
        });
      setLoading(false);
    }
  };

  {
    /**MUDAR STATUS DA REQUISIÇÃO */
  }
  const handleMudaStatusDaRequisicao = async (idRequisicao) => {
    setLoading(true);

    const token = localStorage.getItem("token");

    if (!token) {
      alert("Token não encontrado --> Redirecionando a tela de Login");
      location.href = "/Login";
    } else {
      await axios
        .patch(
          `http://localhost:8080/api/v1/requisicao/mudarStatusRequisicao/${idRequisicao}/EM_ANDAMENTO`,
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
    handleBuscarRequisicoes();
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
              color: "#04BFAF",
              fontFamily: "montserrat",
              fontSize: "36px",
              fontWeight: "600",
              textAlign: "center",
            }}
          >
            Fantástico!
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
            Agora você está pronto para fazer o bem. Vamos direcionar você para
            o chat desse donatário
          </Typography>
          <Button
            variant="contained"
            onClick={() => {
              handleClose();

              // openChatDialog();
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
            Donatários mais próximos de você
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          padding: "5px",
          marginTop: "6vh", // Ajuste conforme necessário para mover abaixo da imagem
          marginLeft: "30px", // Ajuste conforme necessário para a margem da esquerda
          backgroundColor: "white",
          boxShadow: "0px 2px 4px rgba(0,0,0,0.2)",
          borderRadius: "50px",
          border: 1,
          borderColor: "#E64097",
          height: "5vh",
          width: "20vw",
        }}
      >
        <IconButton sx={{ color: "#E64097", p: "10px" }} aria-label="menu">
          <MenuIcon />
        </IconButton>
        <InputBase
          sx={{ color: "#E64097", ml: 1, flex: 1 }}
          placeholder="Filtrar por Palavras Chave"
          inputProps={{ "aria-label": "pesquisar" }}
          handleFilterChange
          value={filtro}
          onChange={handleFilterChange}
        />
        <IconButton
          type="submit"
          sx={{ color: "#E64097", p: "10px" }}
          aria-label="search"
        >
          <SearchIcon />
        </IconButton>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          marginLeft: "5vw",
          marginTop: "5vh",
        }}
      >
        {/**REQUISICOES */}
        {filteredRequisicoes.map((requisicao) => {
          return requisicao && requisicao.statusRequisicao === "ABERTA" ? (
            <Box
              key={requisicao.idRequisicao}
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
                {requisicao.pessoaDonataria.nomePessoa}
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
                {requisicao.tituloRequisicao}
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
                {requisicao.descricaoRequisicao}
              </Typography>
              <Typography
                sx={{ fontFamily: "montserrat", marginRight: "15px" }}
              >
                {requisicao.pessoaDonataria.endereco.bairro} -
                {requisicao.pessoaDonataria.endereco.cidade}/
                {requisicao.pessoaDonataria.endereco.estado}
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
                  label={requisicao.statusRequisicao}
                />
              </Stack>

              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#E64097",
                  marginTop: "auto",
                  height: "40px",
                  "&:hover": {
                    backgroundColor: "#E64097",
                  },
                }}
                onClick={() => {
                  const phoneNumber = formatPhoneNumber(
                    requisicao.pessoaDonataria.celular
                  );

                  const whatsappLink = `https://wa.me/${phoneNumber}?text=Olá%20${requisicao.pessoaDonataria.nomePessoa},%20quero%20ajudar%20com%20a%20sua%20requisição!`;
                  window.open(whatsappLink, "_blank");

                  handleCadastraDoacao(requisicao.idRequisicao);
                  handleMudaStatusDaRequisicao(requisicao.idRequisicao);
                  handleRemoveRequisicao(requisicao.idRequisicao);
                  handleOpen();
                }}
              >
                Ajudar esta pessoa
              </Button>
            </Box>
          ) : null;
        })}
      </Box>
    </>
  );
}
export default HomeDoador;
