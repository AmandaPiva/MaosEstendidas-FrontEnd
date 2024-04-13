import { Typography, Box } from "@mui/material";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";

import Button from "@mui/material/Button";

function HistoricoDoacoes() {
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
          Histórico de doações{" "}
        </Typography>
      </Box>

      {/**INPUT DO FILTRO */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "80vw",
          margin: "auto",
          alignItems: "center",
          padding: "1rem",
        }}
      >
        <Box
          sx={{
            display: "flex",
            padding: "5px",
            marginTop: "3vh", // Ajuste conforme necessário para mover abaixo da imagem
            marginRight: "auto",
            backgroundColor: "white",
            boxShadow: "0px 2px 4px rgba(0,0,0,0.2)",
            borderRadius: "50px",
            border: 1,
            borderColor: "#E64097",
            height: "5vh",
            width: "20vw",
          }}
        >
          <IconButton sx={{ color: "#E64097", p: "10px" }} aria-label="menu">
            <MenuIcon />
          </IconButton>
          <InputBase
            sx={{ color: "#E64097", ml: 1, flex: 1 }}
            placeholder="Filtrar por data de doação"
            inputProps={{ "aria-label": "pesquisar" }}
          />
          <IconButton
            type="submit"
            sx={{ color: "#E64097", p: "10px" }}
            aria-label="search"
          >
            <SearchIcon />
          </IconButton>
        </Box>
        {/*ESPAÇO ONDE FICARÁ OS DADOS DO HISTÓRICO */}
        <Box
          sx={{
            height: "65vh",
            width: "80vw",
            backgroundImage: "linear-gradient(to bottom, #B2FDF6, #FBD3E8)",
            borderRadius: "50px",
            marginTop: "5vh",

            border: 1,
            borderColor: "white",
            boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.3)",
          }}
        ></Box>
      </Box>
    </Box>
  );
}

export default HistoricoDoacoes;
