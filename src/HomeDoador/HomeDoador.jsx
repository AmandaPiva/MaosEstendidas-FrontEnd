import Header from "../Components/Header";
import { Box } from "@mui/material";
import CriancasPcds from "../../public/criancasPcds.png";
import { Typography } from "@mui/material";
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';

function HomeDonartario() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100vw",
          height: "60vh",
          backgroundImage: `linear-gradient(to bottom, rgba(230, 64, 151, 0.8), rgba(230, 64, 151, 0)), url(${CriancasPcds})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/*HEADER */}
        <Header />

        <Box sx={{ margin: "10vh auto 2vh", width: "60vw" }}>
          <Typography
            sx={{
              fontWeight: "600",
              color: "#FFFFFF",
              fontFamily: "montserrat",
              fontSize: "36px",
              textAlign: "center",
            }}
          >
            Donatários mais próximos de você
          </Typography>
        </Box>

      </Box>

      <Box
        sx={{
          display: 'flex',
          padding: '5px',
          marginTop: '6vh', // Ajuste conforme necessário para mover abaixo da imagem
          marginLeft: '30px', // Ajuste conforme necessário para a margem da esquerda
          backgroundColor: 'white',
          boxShadow: '0px 2px 4px rgba(0,0,0,0.2)',
          borderRadius: '50px',
          border: 1,
          borderColor: "#E64097",
          height: "5vh",
          width: "20vw",
        }}
      >
        <IconButton sx={{ color: "#E64097", p: '10px' }} aria-label="menu">
          <MenuIcon />
        </IconButton>
        <InputBase
          sx={{ color: "#E64097", ml: 1, flex: 1 }}
          placeholder="Filtrar por Região"
          inputProps={{ 'aria-label': 'pesquisar' }}
        />
        <IconButton type="submit" sx={{ color: "#E64097", p: '10px' }} aria-label="search">
          <SearchIcon />
        </IconButton>
      </Box>
    </>
  );
}
export default HomeDonartario;
