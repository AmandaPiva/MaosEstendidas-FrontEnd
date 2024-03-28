import { Box, Typography } from "@mui/material";
import PessoasUnidas from "../../public/pessoasUnidas.png";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import IconGoogle from "../../public/googleIcon.png";

function Cadastro() {
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
                width: "400px",
                "&:hover": {
                  backgroundColor: "#FFFFFF", // Altere a cor desejada para o efeito hover
                },
              }}
            >
              Cadastre com o Google
            </Button>
          </Box>
        </Box>

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
                variant="outlined"
              />

              <TextField
                sx={{
                  width: "25vw",
                  backgroundColor: "#FFFFFF",
                  margin: "2vh auto",
                }}
                id="outlined-basic"
                label="CNPJ"
                variant="outlined"
              />
              <Typography
                sx={{
                  fontSize: "16px",
                  fontWeight: "200",
                  fontFamily: "montserrat",
                  color: "#04BFAF",
                }}
              >
                Se você for uma ONG ou empresa
              </Typography>

              <TextField
                sx={{
                  width: "25vw",
                  backgroundColor: "#FFFFFF",
                  margin: "2vh auto",
                }}
                id="outlined-basic"
                label="Data de Nascimento"
                variant="outlined"
              />

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  margin: "2vh 40px",
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
