import { Typography, Box } from "@mui/material";
import Button from "@mui/material/Button";

function ModalCadastroEndereco() {
  return (
    <>
      <Box
        sx={{
          alignItems: "center",
          margin: "auto",
          display: "flex",
          flexDirection: "column",
          width: "50vw",
          backgroundColor: "#FFFFFF",
          padding: "4rem",
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
          // onClick={() => window.location.reload()}
          sx={{
            backgroundColor: "#E64097",
            "&:hover": {
              backgroundColor: "#04BFAF", // Altere a cor desejada para o efeito hover
            },
            marginTop: "5vh",
          }}
        >
          OK
        </Button>
      </Box>
    </>
  );
}

export default ModalCadastroEndereco;
