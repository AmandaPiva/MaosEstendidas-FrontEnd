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
            Ou cadastre automaticamente apenas digitando seu CEP:
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

          <Box sx={{ margin: "auto" }}>
            <Button
              variant="contained"
              sx={{
                width: "25vw",
                margin: "5vh auto",
                backgroundColor: "#E64097",
                "&:hover": {
                  backgroundColor: "#04BFAF", // Altere a cor desejada para o efeito hover
                },
              }}
            >
              Cadastrar Automático
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Endereco;
