import { Box } from "@mui/material";
import Button from "@mui/material/Button";

function CardNecessidade() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          borderRadius: "20px",
          backgroundColor: "#FFFFFF",
          boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.3)",
          height: "50vh",
          width: "20vw",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "row",
            marginTop: "auto",
            padding: "2rem",
          }}
        >
          <Button
            sx={{
              backgroundColor: "#E64097",
              "&:hover": {
                backgroundColor: "#04BFAF", // Altere a cor desejada para o efeito hover
              },
            }}
            variant="contained"
            size="small"
          >
            Ajudar esta pessoa
          </Button>
        </Box>
      </Box>
    </>
  );
}

export default CardNecessidade;
