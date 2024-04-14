import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import "@fontsource/montserrat/300.css";
import "@fontsource/montserrat/400.css";
import "@fontsource/montserrat/500.css";
import "@fontsource/montserrat/700.css";
import { Typography } from "@mui/material";
import Logo from "../../../public/logo.png";
import CapaLogin from "../../../public/Senhora.png";
import LinkPss from "@mui/material/Link";
import ReplyAllIcon from "@mui/icons-material/ReplyAll";
import { Link } from "react-router-dom";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import FacebookIcon from "@mui/icons-material/Facebook";
import Pesquisa from "../../../public/pesquisa.png";

function Login() {
  //logica

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          width: "100vw",
          height: "100vh",
          overflowX: "hidden",
        }}
      >
        {/*DIVS FILHAS */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "50vw",
            backgroundImage: `url(${CapaLogin})`, // Defina a imagem de fundo aqui
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/*IMAGEM DA SENHORINHA */}
        </Box>

        <Box
          component="form"
          sx={{
            height: "50vh",
            width: "50vw",
            display: "flex",
            flexDirection: "column",
            padding: "2em",
          }}
        >
          {/*FORMULARIO */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              width: "50vw",
            }}
          >
            <Link to={"/Cadastro"}>
              <Button
                variant="outlined"
                sx={{
                  padding: "8px 18px 8px 5px",
                }}
                size="small"
              >
                <ReplyAllIcon sx={{ marginRight: "8px" }} />
                Voltar
              </Button>
            </Link>
            <Typography
              sx={{
                color: "#E64097",
                fontFamily: "montserrat",
                fontSize: "36px",
                fontWeight: "600",
                textAlign: "center",
                margin: "70px auto",
              }}
            >
              Faça seu Login
            </Typography>
            <img width={250} src={Logo} alt="logo" />
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              margin: "2vh auto 5vh",
              width: "30vw",
              height: "300px",
              padding: "6rem",
              borderRadius: "50px",
              backgroundImage: "linear-gradient(to bottom, #B2FDF6, #FBD3E8)",
              boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.3)", // Adicionando sombra no lado direito e abaixo
            }}
          >
            <TextField
              sx={{
                width: "30vw",
                backgroundColor: "#FFFFFF",
                borderColor: "#FFFFFF",
              }}
              id="outlined-basic"
              label="Email"
              variant="outlined"
            />
            <TextField
              sx={{
                marginTop: "5vh",
                width: "30vw",
                backgroundColor: "#FFFFFF",
              }}
              id="outlined-basic"
              type="password"
              label="Senha"
              variant="outlined"
            />
            {/*LINK FORGET PASSWORD */}
            <LinkPss
              href="/EsqueceuSenha"
              sx={{
                color: "#E64097",
                fontFamily: "montserrat",
                margin: "2vh 0 0 auto ",
                textDecoration: "none",
              }}
            >
              Esqueci minha senha
            </LinkPss>

            <Button
              variant="contained"
              sx={{
                margin: "5vh auto 2vh",
                width: "20vw",
                backgroundColor: "#E64097",
                "&:hover": {
                  backgroundColor: "#04BFAF", // Altere a cor desejada para o efeito hover
                },
              }}
            >
              Login
            </Button>

            {/*BUTTONS SOCIAL MEDIA */}
            <ButtonGroup
              disableElevation
              variant="contained"
              aria-label="Disabled button group"
              sx={{ display: "flex", flexDirection: "row", margin: "auto" }}
            >
              <Button sx={{ width: "5vw" }}>
                <FacebookIcon />
              </Button>
              <Button
                sx={{
                  width: "5vw",
                  backgroundColor: "#FFFFFF",
                  "&:hover": {
                    backgroundColor: "#FFFFFF", // Altere a cor desejada para o efeito hover
                  },
                }}
              >
                {" "}
                <img width={20} src={Pesquisa} alt="icon" />
              </Button>
            </ButtonGroup>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Login;
