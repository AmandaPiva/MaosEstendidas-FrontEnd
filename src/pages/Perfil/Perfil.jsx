import { Box, Typography } from "@mui/material";
import Logo from "../../../public/logo.png";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import CriancasPcds from "../../../public/criancasPcds.png";
import ReplyAllIcon from "@mui/icons-material/ReplyAll";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { pink } from "@mui/material/colors";

function Perfil() {
  const role = localStorage.getItem("role");
  const email = localStorage.getItem("email");

  const [loading, setLoading] = useState(false);
  const [pessoa, setPessoa] = useState("");

  const handleValidaRole = () => {
    if (role === "DOADORA") {
      window.location.href = "/HomeDoador";
    } else if (role === "DONATARIA") {
      window.location.href = "/HomeDonatario";
    }
  };

  const handleBuscarPessoa = async () => {
    setLoading(true);
    const token = localStorage.getItem("token");
    if (!token) {
      location.href = "/Login";
    } else {
      await axios
        .get(`http://localhost:8080/api/v1/pessoa/buscaPeloEmail/${email}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          setPessoa(response.data);
          console.log(response.data);
        })
        .catch((erro) => {
          console.error("Erro ao buscar usuário pelo e-mail:", erro);
        });
    }
  };

  useEffect(() => {
    handleBuscarPessoa();
  }, []);

  return (
    <>
      {/*BOX PAGINA COMPLETA */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100vw",
          height: "100vh",
        }}
      >
        {/*BOX HEADER */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            width: "100vw",
            height: "20vh",
          }}
        >
          {/*BOX METADE ESQUERDA HEADER */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              padding: "2rem",
            }}
          >
            <Button
              variant="outlined"
              onClick={() => handleValidaRole()}
              sx={{
                padding: "8px 18px 8px 5px",
              }}
              size="small"
            >
              <ReplyAllIcon sx={{ marginRight: "8px" }} />
              Voltar
            </Button>
          </Box>

          {/*BOX METADE DIREITA HEADER */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              padding: "1rem",
              marginLeft: "auto",
              width: "15vw",
            }}
          >
            <img
              width={300}
              src={Logo}
              alt="logo"
              style={{
                borderRadius: "500px",
                width: "200px",
                height: "200px",
                padding: "2rem",
              }}
            />
          </Box>
        </Box>

        {/*BOX TITULO DA PAGINA */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            width: "100vw",
            height: "10vh",
          }}
        >
          <Typography
            sx={{
              color: "#E64097",
              fontFamily: "montserrat",
              fontSize: "36px",
              fontWeight: "600",
              textAlign: "right",
              margin: "10px 80px",
            }}
          >
            Meu Perfil
          </Typography>
        </Box>

        {/*BOX CARDS PERFIL */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            width: "100vw",
            height: "auto",
          }}
        >
          {/*BOX CARD PERFIL ESQUERDA */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "40vw",
              height: "auto",
              borderRadius: "50px",
              boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.3)",
              margin: "10px 30px",
            }}
          >
            <Typography
              sx={{
                color: "#E64097",
                fontFamily: "montserrat",
                fontSize: "30px",
                fontWeight: "600",
                textAlign: "center",
                margin: "10px 60px",
              }}
            >
              {pessoa.nomePessoa}
            </Typography>

            <Typography
              sx={{
                color: "black",
                fontFamily: "montserrat",
                fontSize: "30px",
                fontWeight: "600",
                textAlign: "center",
                margin: "10px 60px",
              }}
            >
              {pessoa.rolePessoa.rolePessoa}
            </Typography>

            <Button
              variant="contained"
              sx={{
                margin: "5vh auto 2vh",
                width: "10vw",
                backgroundColor: "#E64097",
                "&:hover": {
                  backgroundColor: "#04BFAF", // Altere a cor desejada para o efeito hover
                },
              }}
            >
              Editar
            </Button>
          </Box>

          {/*BOX CARD EDITAR PERFIL DIREITA */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "50vw",
              height: "auto",
              borderRadius: "50px",
              boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.3)",
              margin: "10px 30px",
            }}
          >
            <Typography
              sx={{
                color: "#E64097",
                fontFamily: "montserrat",
                fontSize: "30px",
                fontWeight: "600",
                textAlign: "left",
                margin: "10px 60px",
              }}
            >
              Editar Perfil
            </Typography>

            <TextField
              sx={{
                width: "40vw",
                margin: "10px auto",
              }}
              label="Nome"
              id="outlined-size-small"
              size="small"
            />

            <TextField
              sx={{
                width: "40vw",
                margin: "10px auto",
              }}
              label="E-mail"
              id="outlined-size-small"
              size="small"
            />

            <TextField
              sx={{
                width: "40vw",
                backgroundColor: "#FFFFFF",
                margin: "1vh auto",
              }}
              name="dataNascimentoPessoa"
              id="outlined-basic"
              label=""
              placeholder="DD/MM/AAAA"
              type="date"
              variant="outlined"
            />

            <TextField
              sx={{
                width: "40vw",
                backgroundColor: "#FFFFFF",
                margin: "1vh auto",
              }}
              name="documentoPessoa"
              id="outlined-basic"
              placeholder="99.999.999/9999-99"
              label="CNPJ"
              variant="outlined"
            />

            <TextField
              sx={{
                width: "40vw",
                backgroundColor: "#FFFFFF",
                margin: "1vh auto",
              }}
              name="documentoPessoa"
              id="outlined-basic"
              label="CPF"
              placeholder="999.999.999-99"
              variant="outlined"
            />

            <Button
              variant="contained"
              sx={{
                margin: "5vh auto 2vh",
                width: "10vw",
                backgroundColor: "#E64097",
                "&:hover": {
                  backgroundColor: "#04BFAF", // Altere a cor desejada para o efeito hover
                },
              }}
            >
              Salvar
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
}
export default Perfil;
