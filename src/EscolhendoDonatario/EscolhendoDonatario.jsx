import { Box, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

function EscolhendoDonatario() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100vw",
        heigth: "100vh",
      }}
    >
      {/**PARTE DE CIMA COM O TÍTULO E BOTÃO DE VOLTAR UMA PÁGINA */}
      <Box sx={{ display: "flex", flexDirection: "row" }}>
        <Box sx={{ marginTop: "5.5vh", marginLeft: "5vw" }}>
          <Button variant="outlined">Voltar</Button>
        </Box>

        <Typography
          sx={{
            fontSize: "36px",
            fontWeight: "600",
            color: "#E64097",
            fontFamily: "montserrat",
            margin: "5vh ",
            textAlign: "center",
          }}
        >
          Ajudar esta pessoa
        </Typography>
      </Box>

      {/*CARD COM AS INFORMAÇÕES DA PESSOA */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          borderRadius: "20px",
          backgroundColor: "#FFFFFF",
          boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.3)",
          height: "50vh",
          width: "40vw",
          margin: "5vh 7vw ",
        }}
      ></Box>

      <TextField
        sx={{
          width: "85vw",
          backgroundColor: "#FFFFFF",
          margin: "2vh 7vw",
        }}
        id="outlined-basic"
        label="Descrição"
        variant="outlined"
        multiline
        rows={5}
      />
      <Button
        variant="contained"
        sx={{
          margin: "2vh 7vw",
          width: "15vw",
          backgroundColor: "#04BFAF",
          "&:hover": {
            backgroundColor: "#E64097", // Altere a cor desejada para o efeito hover
          },
        }}
      >
        Mandar para o chat
      </Button>
    </Box>
  );
}

export default EscolhendoDonatario;
