import { Typography, Box } from "@mui/material";
import Logo from "../../../public/logo.png";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function Doadores() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100vw",
        heigth: "100vh",
      }}
    >
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
          Perfis de doadores que podem ajudar
        </Typography>
      </Box>

      <Box
        sx={{
          height: "65vh",
          width: "80vw",
          backgroundImage: "linear-gradient(to bottom, #B2FDF6, #FBD3E8)",
          borderRadius: "50px",
          margin: "5vh auto",
          border: 1,
          borderColor: "white",
          boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.3)",
        }}
      ></Box>
    </Box>
  );
}

export default Doadores;
