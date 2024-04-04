import { Box, Typography } from "@mui/material";
import Logo from "../../public/logo.png";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

function SenhaAcesso() {


  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100vw",
          height: "100vh",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "row" }}>
          <Typography
            sx={{
              fontSize: "36px",
              fontWeight: "600",
              color: "#E64097",
              fontFamily: "montserrat",
              margin: "5vh auto",
            }}
          >
            Crie uma senha de acesso
          </Typography>

          <img
            width={200}
            src={Logo}
            alt="logo"
            style={{
              borderRadius: "500px",
              width: "250px",
              height: "200px",
            }}
          />
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
              width: "40vw",
              backgroundColor: "#FFFFFF",
              borderRadius: "50px",
              margin: "auto",
              border: 1,
              borderColor: "white",
              boxShadow: `0 0 0 0px rgba(0,0,0,0.1), 
                0 1px 2px rgba(0,0,0,0.8), 
                0 2px 3px rgba(0,0,0,0.8)`,
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
                  width: "30vw",
                  backgroundColor: "#FFFFFF",
                  margin: "2vh auto",
                }}
                id="outlined-basic"
                label="Senha"
                variant="outlined"
              />
              <TextField
                sx={{
                  width: "30vw",
                  backgroundColor: "#FFFFFF",
                  margin: "2vh auto",
                }}
                id="outlined-basic"
                label="Confirme sua senha"
                variant="outlined"
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
                sx={{
                  margin: "5vh auto",
                  width: "15vw",
                  backgroundColor: "#04BFAF",
                  "&:hover": {
                    backgroundColor: "#E64097", // Altere a cor desejada para o efeito hover
                  },
                }}
              >
                Criar
              </Button>
            </Box>
          </Box>
        </Box>

      </Box>
      </Box>
    </>
  );
}

export default SenhaAcesso;
