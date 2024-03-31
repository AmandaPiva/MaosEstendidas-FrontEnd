import { Box, Typography } from "@mui/material";
import PessoasUnidas from "../../public/pessoasUnidas.png";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Pesquisa from "../../public/pesquisa.png";
import { MarginSharp } from "@mui/icons-material";

function Cadastro() {
  //MASCARA CNPJ
  const cnpjMask = (value) => {
    return value
      .replace(/\D+/g, "") // não deixa ser digitado nenhuma letra
      .replace(/(\d{2})(\d)/, "$1.$2") // captura 2 grupos de número o primeiro com 2 digitos e o segundo de com 3 digitos, apos capturar o primeiro grupo ele adiciona um ponto antes do segundo grupo de número
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d)/, "$1/$2") // captura 2 grupos de número o primeiro e o segundo com 3 digitos, separados por /
      .replace(/(\d{4})(\d)/, "$1-$2")
      .replace(/(-\d{2})\d+?$/, "$1"); // captura os dois últimos 2 números, com um - antes dos dois números
  };

  //MASCARA CPF
  const formatarCPF = (cpf) => {
    cpf = cpf.replace(/\D/g, ""); // Remove caracteres não numéricos

    // Aplica a máscara
    cpf = cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");

    return cpf;
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          width: "100vw",
          height: "100vh",
          backgroundImage: `linear-gradient(to bottom, rgba(230, 64, 151, 0.8) 30%, rgba(230, 64, 151, 0)), url(${PessoasUnidas})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "50vw",
          }}
        >
          <Typography
            sx={{
              color: "#FFFFFF",
              fontSize: "36px",
              fontWeight: "600",
              fontFamily: "montserrat",
              margin: "10vh auto 5vh",
            }}
          >
            Cadastre -se manualmente ao lado
          </Typography>
          <Typography
            sx={{
              fontSize: "24px",
              fontWeight: "300",
              color: "#FFFFFF",
              fontFamily: "montserrat",
              textAlign: "center",
            }}
          >
            Ou
          </Typography>

          <Box sx={{ margin: "5vh auto" }}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#FFFFFF",
                color: "#231F20",
                width: "350px",
                "&:hover": {
                  backgroundColor: "#FFFFFF", // Altere a cor desejada para o efeito hover
                },
              }}
            >
              <img
                width={30}
                style={{ marginRight: "auto" }}
                src={Pesquisa}
                alt="icon"
              />
              <Typography sx={{ margin: "auto" }}>
                Cadastre com o Google
              </Typography>
            </Button>
          </Box>
        </Box>

        {/*LADO ESQUERDO */}
        <Box
          sx={{
            width: "50vw",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              height: "95vh",
              width: "30vw",
              backgroundColor: "#FFFFFF",
              borderRadius: "50px",
              margin: "auto",
            }}
          >
            <Box
              sx={{
                marginTop: "8vh",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <TextField
                sx={{
                  width: "25vw",
                  backgroundColor: "#FFFFFF",
                  margin: "2vh auto",
                }}
                id="outlined-basic"
                label="Nome"
                variant="outlined"
              />
              <TextField
                sx={{
                  width: "25vw",
                  backgroundColor: "#FFFFFF",
                  margin: "2vh auto",
                }}
                id="outlined-basic"
                label="Email"
                variant="outlined"
              />

              <TextField
                sx={{
                  width: "25vw",
                  backgroundColor: "#FFFFFF",
                  margin: "2vh auto",
                }}
                id="outlined-basic"
                label="CPF"
                placeholder="999.999.999-99"
                variant="outlined"
              />

              <Typography
                sx={{
                  fontSize: "16px",
                  fontWeight: "200",
                  fontFamily: "montserrat",
                  marginLeft: "60px",
                  color: "#04BFAF",
                }}
              >
                Se você for uma ONG ou empresa *
              </Typography>
              <TextField
                sx={{
                  width: "25vw",
                  backgroundColor: "#FFFFFF",
                  margin: "1vh auto",
                }}
                id="outlined-basic"
                placeholder="99.999.999/9999-99"
                label="CNPJ"
                variant="outlined"
              />

              <TextField
                sx={{
                  width: "25vw",
                  backgroundColor: "#FFFFFF",
                  margin: "3vh auto",
                }}
                id="outlined-basic"
                label="Data de Nascimento"
                placeholder="DD/MM/AAAA"
                variant="outlined"
              />

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  margin: "2vh 46px",
                }}
              >
                <FormControl fullWidth>
                  <InputLabel
                    id="demo-simple-select-label"
                    sx={{ margin: "auto" }}
                  >
                    Quero ser
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    // value={age}
                    label="Age"
                    //   onChange={handleChange}
                    sx={{ width: "15vw" }}
                  >
                    <MenuItem value={"doador"}>Doador</MenuItem>
                    <MenuItem value={"donatario"}>Donatario</MenuItem>
                  </Select>
                </FormControl>
              </Box>
              <Button
                variant="contained"
                sx={{
                  margin: "5vh auto",
                  width: "15vw",
                  backgroundColor: "#04BFAF",
                  "&:hover": {
                    backgroundColor: "#E64097", // Altere a cor desejada para o efeito hover
                  },
                }}
              >
                Próximos Passos
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Cadastro;
