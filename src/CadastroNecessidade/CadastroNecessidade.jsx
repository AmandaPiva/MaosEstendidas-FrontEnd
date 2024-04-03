import { Box, Typography } from "@mui/material";
import Logo from "../../public/logo.png";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

function CadastroNecessidade() {


  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
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
            Cadastrando Necessidade
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
            width: "50vw",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              height: "95vh",
              width: "30vw",
              backgroundColor: "#FFFFFF",
              borderRadius: "50px",
              margin: "auto",
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
                  width: "25vw",
                  backgroundColor: "#FFFFFF",
                  margin: "2vh auto",
                }}
                id="outlined-basic"
                label="Título"
                variant="outlined"
              />
              <TextField
                sx={{
                  width: "25vw",
                  backgroundColor: "#FFFFFF",
                  margin: "2vh auto",
                }}
                id="outlined-basic"
                label="Descrição"
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
