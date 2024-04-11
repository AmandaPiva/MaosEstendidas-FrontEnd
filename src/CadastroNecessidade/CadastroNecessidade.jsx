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
          flexDirection: "column",
          width: "100vw",
          height: "100vh",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
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
          <Box sx={{ position: "relative", width: "100%", textAlign: "center" }}>
            <Typography
              sx={{
                fontSize: "36px",
                fontWeight: "600",
                color: "#E64097",
                fontFamily: "montserrat",
                display: "inline-block", // Necessário para centralizar corretamente a frase
              }}
            >
              Cadastrando Necessidade
            </Typography>

            <Box
              sx={{
                position: "absolute",
                right: 20,
                top: "50%",
                transform: "translateY(-50%)",
              }}
            >
              <img
                src={Logo}
                alt="logo"
                style={{
                  borderRadius: "500px",
                  width: "250px",
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
              width: "80vw",
              backgroundColor: "#FFFFFF",
              borderRadius: "50px",
              margin: "auto",
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
                label="Descrição"
                variant="outlined"
                multiline rows={5}
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
