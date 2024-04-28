import { Box, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";


function Perfil() {


  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          width: "100vw",
          height: "100vh",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >


        <Box sx={{
          display: "flex",
          flexDirection: "row",
          width: "100vw",
          height: "100vh",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}>
          <Box
            sx={{
              height: "85vh",
              width: "35vw",
              backgroundColor: "#FFFFFF",
              borderRadius: "50px",
              boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.3)", // Adicionando sombra no lado direito e abaixo
              margin: "auto",
            }}
          >
          </Box>

          {/*LADO ESQUERDO */}
          <Box
            sx={{
              width: "60vw",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Box
              sx={{
                height: "75vh",
                width: "50vw",
                backgroundColor: "#FFFFFF",
                borderRadius: "50px",
                boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.3)", // Adicionando sombra no lado direito e abaixo
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
                <TextField defaultValue="Small" size="small"
                  sx={{
                    width: "30vw",
                    backgroundColor: "#FFFFFF",
                    margin: "1vh auto",
                  }}
                  id="outlined-size-small"
                  label="Nome"
                  variant="outlined"
                />
                
                <TextField defaultValue="Small" size="small"
                  sx={{
                    width: "30vw",
                    backgroundColor: "#FFFFFF",
                    margin: "1vh auto",
                  }}
                  id="outlined-size-small"
                  label="Email"
                  variant="outlined"
                />

                <TextField defaultValue="Small" size="small"
                  sx={{
                    width: "30vw",
                    backgroundColor: "#FFFFFF",
                    margin: "1vh auto",
                  }}
                  id="outlined-size-small"
                  label="CPF"
                  placeholder="999.999.999-99"
                  variant="outlined"
                />

                <TextField defaultValue="Small" size="small"
                  sx={{
                    width: "30vw",
                    backgroundColor: "#FFFFFF",
                    margin: "1vh auto",
                  }}
                  id="outlined-size-small"
                  placeholder="99.999.999/9999-99"
                  label="CNPJ"
                  variant="outlined"
                />
                <Typography
                  sx={{
                    fontSize: "12px",
                    fontWeight: "200",
                    fontFamily: "montserrat",
                    marginLeft: "320px",
                    color: "#04BFAF",
                  }}
                >
                  Se você for uma ONG ou empresa *
                </Typography>

                <TextField defaultValue="Small" size="small"
                  sx={{
                    width: "30vw",
                    backgroundColor: "#FFFFFF",
                    margin: "2vh auto",
                  }}
                  id="outlined-size-small"
                  label="Data de Nascimento"
                  placeholder="DD/MM/AAAA"
                  variant="outlined"
                />

                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    margin: "1vh 136px",
                  }}
                >
                  <FormControl defaultValue="Small" size="small" fullWidth>
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
                      <MenuItem value={"donatario"}>Donatário</MenuItem>
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
                  Salvar
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Perfil;
