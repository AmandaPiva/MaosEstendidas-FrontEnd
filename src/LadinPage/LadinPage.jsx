import Box from "@mui/material/Box";
import pcdCadeiraRodas from "../../public/pcdCadeiraRodas.png";
import Logo from "../../public/logo.png";
import IdosoCriancas from "../../public/idosoECriancas.png";
import { Typography } from "@mui/material";
import "@fontsource/montserrat/300.css";
import "@fontsource/montserrat/400.css";
import "@fontsource/montserrat/500.css";
import "@fontsource/montserrat/700.css";
import Button from "@mui/material/Button";

function LadinPage() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/*SESSAO CADASTRO */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "100vw",
            height: "100vh",
            backgroundImage: `linear-gradient(to bottom, rgba(230, 64, 151, 0) 30%, rgba(230, 64, 151, 0.8)), url(${pcdCadeiraRodas})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <img
            width={200}
            src={Logo}
            alt="logo"
            style={{
              borderRadius: "500px",
              width: "150px",
              height: "150px",
              padding: "2rem",
            }}
          />

          <Box sx={{ margin: "10vh auto", width: "60vw" }}>
            <Typography
              sx={{
                fontWeight: "600",
                color: "#FFFFFF",
                fontFamily: "montserrat",
                fontSize: "36px",
                textAlign: "center",
              }}
            >
              Sejam bem vindos, a plataforma de doações Mãos Estendidas, aqui
              você pode escolher fazer o bem todos os dias.
            </Typography>
          </Box>

          <Box sx={{ margin: "5vh auto" }}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#04BFAF",
                color: "#FFFFFF",
                width: "200px",
                "&:hover": {
                  backgroundColor: "#E64097", // Altere a cor desejada para o efeito hover
                },
              }}
            >
              Cadastre-se
            </Button>
          </Box>
        </Box>

        {/*SESSAO METAS*/}
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            {/*TEXTOS */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                width: "40vw",
                margin: "auto",
              }}
            >
              <Typography
                sx={{
                  fontSize: "36px",
                  color: "#04BFAF",
                  fontWeight: "600",
                  padding: "3rem 5rem",

                  marginTop: "5vh",
                }}
              >
                Nossa meta é ajudar deficientes e idosos em todo o Brasil
              </Typography>
              <Typography
                sx={{
                  fontSize: "24px",
                  color: "#E64097",
                  fontWeight: "600",
                  paddingLeft: "5rem",
                }}
              >
                Levando as pessoas a praticarem mais a caridade, ajudando PcDs,
                idosos e ONGs pertinho delas
              </Typography>
              <Typography
                sx={{
                  fontSize: "20px",
                  color: "#231F20",
                  paddingLeft: "5rem",
                  marginTop: "10vh",
                }}
              >
                Para pessoas que precisam de equipamentos de deficientes ou
                fraldas geriátricas.
              </Typography>
            </Box>

            {/*PRIMEIRA IMAGEM */}
            <img
              width={400}
              height={400}
              src={IdosoCriancas}
              style={{ padding: "8rem", margin: "auto" }}
              alt="idosoCriancas"
            />
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default LadinPage;
