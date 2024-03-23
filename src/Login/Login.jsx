import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import "@fontsource/montserrat/300.css";
import "@fontsource/montserrat/400.css";
import "@fontsource/montserrat/500.css";
import "@fontsource/montserrat/700.css";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Logo from "../../public/logo.png";

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
        }}
      >
        {/*DIVS FILHAS */}
        <Box sx={{ display: "flex", flexDirection: "column", width: "50vw" }}>
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
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              marginLeft: "200px",
              width: "50vw",
            }}
          >
            {/*FORMULARIO */}
            <Typography
              sx={{
                color: "#E64097",
                fontFamily: "montserrat",
                fontSize: "36px",
                fontWeight: "600",
                textAlign: "center",
                marginTop: "70px",
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
              margin: "5vh auto 5vh",
              width: "20vw",
              height: "400px",
              padding: "5rem",
              borderRadius: "50px",
              backgroundImage: "linear-gradient(to bottom, #B2FDF6, #FBD3E8)",
              boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.3)", // Adicionando sombra no lado direito e abaixo
            }}
          >
            <TextField
              sx={{
                width: "20vw",
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
                width: "20vw",
                backgroundColor: "#FFFFFF",
              }}
              id="outlined-basic"
              type="password"
              label="Senha"
              variant="outlined"
            />

            <Button
              variant="contained"
              sx={{
                marginTop: "5vh",
                backgroundColor: "#E64097",
                "&:hover": {
                  backgroundColor: "#04BFAF", // Altere a cor desejada para o efeito hover
                },
              }}
            >
              Login
            </Button>
          </Box>

          {/*BUTTONS SOCIAL MEDIA */}
        </Box>
      </Box>
    </>
  );
}

export default Login;
