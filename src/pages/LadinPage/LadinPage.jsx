import Box from "@mui/material/Box";
import pcdCadeiraRodas from "../../../public/pcdCadeiraRodas.png";
import Logo from "../../../public/logo.png";
import IdosoCriancas from "../../../public/idosoECriancas.png";
import Menina from "../../../public/menina.png";
import IdososLendo from "../../../public/idososLendo.png";
import IdososFelizes from "../../../public/idososFelizes.png";
import { Typography } from "@mui/material";
import "@fontsource/montserrat/300.css";
import "@fontsource/montserrat/400.css";
import "@fontsource/montserrat/500.css";
import "@fontsource/montserrat/700.css";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import LinkMedias from "@mui/material/Link";

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
            {/**VAMOS USAR O Link PARA ACESSAR AS ROTAS AO CLICAR NOS BOTÕES E MUDAR DE PÁGINA */}
            {/*ESTE LINK É UM COMPONENTE DO react-router-dom */}
            <Link to={"/Endereco"}>
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
            </Link>
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
                  fontFamily: "montserrat",
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
                  fontFamily: "montserrat",
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
                  fontFamily: "montserrat",
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

          {/*SEGUNDA COLUNA */}
          <Box
            sx={{ display: "flex", flexDirection: "row", marginBottom: "5vh" }}
          >
            <img
              width={300}
              height={300}
              src={Menina}
              style={{ marginLeft: "55vw" }}
              alt="menina"
            />

            <img
              width={200}
              height={200}
              src={IdososLendo}
              style={{ marginLeft: "8vw" }}
              alt="idososLendo"
            />
          </Box>
        </Box>

        {/*SESSÃO SOBRE A PLATAFORMA */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            backgroundColor: "#04BFAF",
          }}
        >
          <Typography
            sx={{
              fontSize: "36px",
              fontWeight: "600",
              color: "#FFFFFF",
              margin: "18vh auto",
              fontFamily: "montserrat",
            }}
          >
            Conheça mais sobre nós
          </Typography>

          <Box
            sx={{ display: "flex", flexDirection: "row", marginBottom: "5vh" }}
          >
            {/*LADO DIREITO */}
            <Box sx={{ width: "50vw" }}>
              <Box sx={{ width: "30vw", marginLeft: "auto", padding: "3em" }}>
                <Typography
                  sx={{
                    fontSize: "24px",
                    color: "#FFFFFF",
                    fontWeight: "300",
                    fontFamily: "montserrat",
                  }}
                >
                  Somos uma nova plataforma que nasceu da visão de muita
                  necessidade de PcDs e idosos que dependiam de doações de
                  comunidades e igrejas que se disponibilizavam a ajudar, e com
                  isso, a ideia de fornecer as fraldas em conjunto com os
                  equipamentos de maneira rápida e tecnológica veio a tona
                </Typography>
              </Box>
            </Box>

            {/*LADO ESQUERDO */}
            <Box sx={{ width: "50vw" }}>
              <Box sx={{ width: "30vw", marginRight: "auto", padding: "3em" }}>
                <Typography
                  sx={{
                    fontSize: "24px",
                    color: "#FFFFFF",
                    fontWeight: "300",
                    fontFamily: "montserrat",
                  }}
                >
                  Depois de muita pesquisa e coleta de dados sobre as
                  necessidades dessas pessoas, a missão de ajudar está mais
                  fácil de ser executada.
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>

        {/*SESSÃO CADASTRO E LOGIN */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "100vw",
            height: "100vh",
            backgroundImage: `linear-gradient(to bottom,  #04BFAF, rgba(230, 64, 151, 0)), url(${IdososFelizes})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <Typography
            sx={{
              fontSize: "36px",
              fontWeight: "600",
              color: "#FFFFFF",
              fontFamily: "montserrat",
              margin: "5vh auto",
            }}
          >
            Gostou da iniciativa?
          </Typography>

          <Box sx={{ width: "40vw", margin: "5vh auto" }}>
            <Typography
              sx={{
                fontSize: "24px",
                fontWeight: "600",
                color: "#FFFFFF",
                fontFamily: "montserrat",
              }}
            >
              Venha fazer parte também e ajude alguém próximo a você ou faça sua
              requisição se cadastrando na plataforma
            </Typography>
          </Box>

          <Box sx={{ margin: "5vh auto" }}>
            <Link to={"/Endereco"}>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#E64097",
                  color: "#FFFFFF",
                  width: "200px",
                  "&:hover": {
                    backgroundColor: "#04BFAF", // Altere a cor desejada para o efeito hover
                  },
                }}
              >
                Cadastre-se
              </Button>
            </Link>
          </Box>
          <Box sx={{ margin: "5vh auto" }}>
            <Typography
              sx={{
                fontSize: "36px",
                fontWeight: "600",
                color: "#FFFFFF",
                fontFamily: "montserrat",
              }}
            >
              Se você já faz parte desta jornada, faça seu login
            </Typography>
          </Box>

          <Box sx={{ margin: "5vh auto" }}>
            <Link to={"/Login"}>
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
                Login
              </Button>
            </Link>
          </Box>
        </Box>

        {/*FOOTER */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            backgroundColor: "#E64097",
            width: "100vw",
            height: "50vh",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            {/*LADO DIREITO */}
            <Box sx={{ width: "30vw", margin: "5vh auto" }}>
              <Typography
                sx={{
                  fontSize: "36px",
                  fontWeight: "600",
                  color: "#FFFFFF",
                  fontFamily: "montserrat",
                }}
              >
                Contato
              </Typography>

              {/*LINK EMAIL */}
              <LinkMedias
                href="#"
                sx={{
                  color: "#FFFFFF",
                  fontFamily: "montserrat",
                  marginTop: "3vh",
                  textDecoration: "none",
                }}
              >
                maos.estendidas@gmail.com
              </LinkMedias>
            </Box>

            {/*LADO ESQUERDO */}
            <Box sx={{ width: "30vw", margin: "5vh auto" }}>
              <Typography
                sx={{
                  fontSize: "36px",
                  fontWeight: "600",
                  color: "#FFFFFF",
                  fontFamily: "montserrat",
                }}
              >
                Mídias sociais
              </Typography>

              {/*LINKS SOCIAL MEDIA */}
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <LinkMedias
                  href="#"
                  sx={{
                    color: "#FFFFFF",
                    fontFamily: "montserrat",
                    marginTop: "3vh",
                    textDecoration: "none",
                  }}
                >
                  @maos.estendidas
                </LinkMedias>
                <LinkMedias
                  href="#"
                  sx={{
                    color: "#FFFFFF",
                    fontFamily: "montserrat",
                    marginTop: "3vh",
                    textDecoration: "none",
                  }}
                >
                  Maos Estendidas
                </LinkMedias>
              </Box>
            </Box>
          </Box>
          <Typography
            sx={{
              fontFamily: "montserrat",
              fontSize: "12px",
              justifyContent: "flex-end",
              margin: "20vh auto",
              color: "#FFFFFF",
            }}
          >
            Desenvolvido por maosestendidas team
          </Typography>
        </Box>
      </Box>
    </>
  );
}

export default LadinPage;
