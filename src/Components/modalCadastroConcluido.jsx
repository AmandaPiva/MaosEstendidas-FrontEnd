import { Typography, Box } from "@mui/material";
import Button from "@mui/material/Button";

function ModalCadastroConcluido() {
  return (
    <>
      <Box
        sx={{
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
          width: "100vw",
        }}
      >
        <Typography
          sx={{
            fontSize: "36px",
            color: "#E64097",
            fontFamily: "montserrat",
            fontWeight: "600",
          }}
        >
          Parabéns, cadastro realizado com sucesso!
        </Typography>
        <Typography
          sx={{
            fontSize: "24px",
            color: "#04BFAF",
            fontFamily: "montserrat",
            fontWeight: "500",
          }}
        >
          Vamos voltar para a tela de login
        </Typography>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#04BFAF",
            "&:hover": {
              backgroundColor: "#E64097", // Altere a cor desejada para o efeito hover
            },
          }}
        >
          Voltar para o login
        </Button>
      </Box>
    </>
  );
}

export default ModalCadastroConcluido;
