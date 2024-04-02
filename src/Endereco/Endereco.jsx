import { Typography, Box } from "@mui/material";
import Logo from "../../public/logo.png";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function Endereco() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100vw",
          heigth: "100vh",
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
            Cadastro do endereço
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

        <Box sx={{ display: "flex", flexDirection: "column", width: "50vw" }}>
          <Typography
            sx={{
              fontSize: "24px",
              fontWeight: "600",
              color: "#04BFAF",
              paddingLeft: "5vw",
              width: "50vw",
            }}
          >
            Cadastre automaticamente apenas digitando seu CEP:
          </Typography>

          <Box sx={{ paddingLeft: "5vw" }}>
            <TextField
              sx={{
                width: "35vw",
                backgroundColor: "#FFFFFF",
                marginTop: "5vh",
              }}
              id="outlined-basic"
              label="CEP"
              variant="outlined"
            />
          </Box>

          <Box
            sx={{
              width: "35vw",
              marginLeft: "5vw",
            }}
          >
            <Button
              variant="contained"
              sx={{
                width: "25vw",
                margin: "5vh 100px",
                backgroundColor: "#E64097",
                "&:hover": {
                  backgroundColor: "#04BFAF", // Altere a cor desejada para o efeito hover
                },
              }}
            >
              Cadastrar Automático
            </Button>
            <Typography
              sx={{
                fontFamily: "montserrat",
                color: "black",
                fontSize: "24px",
                fontWeight: "500",
                textAlign: "center",
              }}
            >
              Ou
            </Typography>
          </Box>
        </Box>

        {/**FORM CADASTRO MANUAL */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.3)",
            paddingTop: "2em",
            paddingBottom: "2em",
            width: "90vw",
            margin: "10vh auto",
            borderRadius: "20px",
          }}
        >
          {/**LADO ESQUERDO */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              paddingLeft: "5vw",
            }}
          >
            <Typography
              sx={{
                fontFamily: "montserrat",
                fontSize: "18",
                fontWeight: "500",
                marginBottom: "10px",
              }}
            >
              Cadastre manualmente
            </Typography>
            <TextField
              sx={{
                width: "25vw",
                backgroundColor: "#FFFFFF",
              }}
              id="outlined-basic"
              label="Logradouro"
              variant="outlined"
            />

            <TextField
              sx={{
                width: "10vw",
                backgroundColor: "#FFFFFF",
                marginTop: "2vh",
              }}
              id="outlined-basic"
              type="number"
              label="Número"
              variant="outlined"
            />

            <TextField
              sx={{
                width: "25vw",
                backgroundColor: "#FFFFFF",
                marginTop: "2vh",
              }}
              id="outlined-basic"
              label="Bairro"
              variant="outlined"
            />
            <TextField
              sx={{
                width: "25vw",
                backgroundColor: "#FFFFFF",
                marginTop: "2vh",
              }}
              id="outlined-basic"
              label="Cidade"
              variant="outlined"
            />
          </Box>
          {/**LADO DIREITO */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              paddingLeft: "5vw",
            }}
          >
            <TextField
              sx={{
                width: "25vw",
                backgroundColor: "#FFFFFF",
              }}
              id="outlined-basic"
              label="CEP"
              type="number"
              variant="outlined"
            />
            <TextField
              sx={{
                width: "25vw",
                backgroundColor: "#FFFFFF",
                marginTop: "2vh",
              }}
              id="outlined-basic"
              label="Estado"
              variant="outlined"
            />

            {/*BOTOES*/}
            <Box
              sx={{ display: "flex", flexDirection: "row", marginTop: "3vh" }}
            >
              <Button
                variant="contained"
                sx={{
                  height: "5vh",
                  width: "8vw",
                  backgroundColor: "#04BFAF",
                  "&:hover": {
                    backgroundColor: "#E64097", // Altere a cor desejada para o efeito hover
                  },
                }}
              >
                Cadastrar
              </Button>
              <Button
                variant="contained"
                sx={{
                  height: "5vh",
                  marginLeft: "2vh",
                  backgroundColor: "#E64097",
                  "&:hover": {
                    backgroundColor: "#04BFAF", // Altere a cor desejada para o efeito hover
                  },
                }}
              >
                Próximos Passos
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Endereco;
