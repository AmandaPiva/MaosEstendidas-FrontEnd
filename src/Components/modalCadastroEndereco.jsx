import { Typography, Box } from "@mui/material";
import Button from "@mui/material/Button";

function ModalCadastroEndereco() {
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
          Endereço cadastrado com sucesso!
        </Typography>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#E64097",
            "&:hover": {
              backgroundColor: "#04BFAF", // Altere a cor desejada para o efeito hover
            },
          }}
        >
          OK
        </Button>
      </Box>
    </>
  );
}

export default ModalCadastroEndereco;
