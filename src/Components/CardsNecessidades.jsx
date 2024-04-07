import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

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
            flexDirection: "row",
            marginTop: "auto",
            marginLeft: "auto",
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
            Editar
          </Button>

          <Button>
            <DeleteOutlineIcon sx={{ fontSize: "30px", color: "#E64097" }} />
          </Button>
        </Box>
      </Box>
    </>
  );
}

export default CardNecessidade;
