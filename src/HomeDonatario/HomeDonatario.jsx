import Header from "../Components/Header";
import { Box } from "@mui/material";
import CriancasPcds from "../../public/criancasPcds.png";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";

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
            Cadastre sua necessidade
          </Typography>
        </Box>

        <Box sx={{ margin: "2vh auto" }}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#04BFAF",
              color: "#FFFFFF",
              width: "270px",
              "&:hover": {
                backgroundColor: "#E64097", // Altere a cor desejada para o efeito hover
              },
            }}
          >
            Cadastrar Necessidade
          </Button>
        </Box>
      </Box>

      {/*HISTÓRICO DAS REQUISIÇÕES */}
      <Typography
        sx={{
          fontWeight: "600",
          color: "#04BFAF",
          fontFamily: "montserrat",
          fontSize: "36px",
          padding: "3rem",
        }}
      >
        Minhas requisições recentes
      </Typography>
    </>
  );
}
export default HomeDonartario;
