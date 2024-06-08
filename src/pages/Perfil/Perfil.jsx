import { Box, Typography } from "@mui/material";
import Logo from "../../../public/logo.png";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import ReplyAllIcon from "@mui/icons-material/ReplyAll";
import CloseIcon from "@mui/icons-material/Close";
import { useEffect, useState } from "react";
import axios from "axios";

function Perfil() {
  const role = localStorage.getItem("role");
  const email = localStorage.getItem("email");

  const [loading, setLoading] = useState(false);
  const [pessoa, setPessoa] = useState({});
  const [editar, setEditar] = useState(false);

  const handleValidaRole = () => {
    if (role === "DOADORA") {
      window.location.href = "/HomeDoador";
    } else if (role === "DONATARIA") {
      window.location.href = "/HomeDonatario";
    }
  };

  const handleBuscarPessoa = async () => {
    setLoading(true);
    const token = localStorage.getItem("token");
    if (!token) {
      location.href = "/Login";
    } else {
      try {
        const response = await axios.get(
          `http://localhost:8080/api/v1/pessoa/buscaPeloEmail/${email}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setPessoa(response.data);
        console.log(response.data);
      } catch (erro) {
        console.error("Erro ao buscar usuário pelo e-mail:", erro);
      } finally {
        setLoading(false);
      }
    }
  };

  //atualizar cadastro Pessoa
  const handleSalvarAlteracoesPerfil = async () => {
    await axios
      .patch(`http://localhost:8080/api/v1/pessoa/${pessoa.idPessoa}`, {
        nomePessoa: form.nomePessoa,
        emailPessoa: form.emailPessoa,
        documentoPessoa: form.documentoPessoa,
        dataNascimentoPessoa: form.dataNascimentoPessoa,
        celular: form.celular,
      })
      .then((response) => {
        console.log("Resposta da pessoa PATCH:", response);
        handleBuscarPessoa();
        setLoading(false);
        alert("Pessoa editada com sucesso");
      })
      .catch((erro) => {
        console.log(erro);
        alert("Ocorreu um erro ao editar essa pessoa");
      });
  };

  const [form, setForm] = useState({
    nomePessoa: "",
    emailPessoa: "",
    documentoPessoa: "",
    dataNascimentoPessoa: "",
    celular: "",
  });

  const phoneMask = (value) => {
    if (!value) return "";
    value = value.replace(/\D/g, "");
    value = value.replace(/(\d{2})(\d)/, "($1) $2");
    value = value.replace(/(\d)(\d{4})$/, "$1-$2");
    return value;
  };

  const handleChangeForm = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  useEffect(() => {
    handleBuscarPessoa();
  }, []);

  const { nomePessoa, rolePessoa } = pessoa;
  const roleDescricao = rolePessoa?.rolePessoa || "";

  return (
    <>
      {/*BOX PAGINA COMPLETA */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100vw",
          height: "100vh",
        }}
      >
        {/*BOX HEADER */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            width: "100vw",
            height: "20vh",
          }}
        >
          {/*BOX METADE ESQUERDA HEADER */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              padding: "2rem",
            }}
          >
            <Button
              variant="outlined"
              onClick={() => handleValidaRole()}
              sx={{
                padding: "8px 18px 8px 5px",
              }}
              size="small"
            >
              <ReplyAllIcon sx={{ marginRight: "8px" }} />
              Voltar
            </Button>
          </Box>

          {/*BOX METADE DIREITA HEADER */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              padding: "1rem",
              marginLeft: "auto",
              width: "15vw",
            }}
          >
            <img
              width={300}
              src={Logo}
              alt="logo"
              style={{
                borderRadius: "500px",
                width: "200px",
                height: "200px",
                padding: "2rem",
              }}
            />
          </Box>
        </Box>

        {/*BOX TITULO DA PAGINA */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            width: "100vw",
            height: "10vh",
          }}
        >
          <Typography
            sx={{
              color: "#E64097",
              fontFamily: "montserrat",
              fontSize: "36px",
              fontWeight: "600",
              textAlign: "right",
              margin: "10px 80px",
            }}
          >
            Meu Perfil
          </Typography>
        </Box>

        {/*BOX CARDS PERFIL */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            width: "100vw",
            height: "auto",
          }}
        >
          {/*BOX CARD PERFIL ESQUERDA */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "40vw",
              height: "auto",
              borderRadius: "50px",
              boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.3)",
              margin: "10px 30px",
            }}
          >
            <Typography
              sx={{
                color: "#E64097",
                fontFamily: "montserrat",
                fontSize: "30px",
                fontWeight: "600",
                textAlign: "center",
                margin: "10px 60px",
              }}
            >
              {nomePessoa}
            </Typography>

            <Typography
              sx={{
                color: "black",
                fontFamily: "montserrat",
                fontSize: "30px",
                fontWeight: "600",
                textAlign: "center",
                margin: "10px 60px",
              }}
            >
              {roleDescricao}
            </Typography>

            <Button
              variant="contained"
              onClick={() => {
                setEditar(true);
                setForm({
                  nomePessoa: pessoa.nomePessoa,
                  emailPessoa: pessoa.emailPessoa,
                  documentoPessoa: pessoa.documentoPessoa,
                  dataNascimentoPessoa: pessoa.dataNascimentoPessoa,
                  celular: pessoa.celular,
                });
              }}
              sx={{
                margin: "5vh auto 2vh",
                width: "10vw",
                backgroundColor: "#E64097",
                "&:hover": {
                  backgroundColor: "#04BFAF",
                },
              }}
            >
              Editar
            </Button>
          </Box>

          {editar === true ? (
            <>
              {/*BOX CARD EDITAR PERFIL DIREITA */}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  width: "50vw",
                  height: "auto",
                  borderRadius: "50px",
                  boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.3)",
                  margin: "10px 30px",
                }}
              >
                {/*BOX TITULO DA PAGINA DE EDITAR*/}
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    width: "45vw",
                    height: "10vh",
                  }}
                >
                  <Typography
                    sx={{
                      color: "#E64097",
                      fontFamily: "montserrat",
                      fontSize: "30px",
                      fontWeight: "600",
                      textAlign: "left",
                      margin: "20px 60px",
                    }}
                  >
                    Editar Perfil
                  </Typography>
                  <Button
                    onClick={() => setEditar(false)}
                    sx={{
                      marginLeft: "auto",
                      marginTop: "10px",
                    }}
                  >
                    <CloseIcon
                      sx={{
                        color: "#E64097",
                        fontSize: "40px",
                      }}
                    ></CloseIcon>
                  </Button>
                </Box>

                <TextField
                  sx={{
                    width: "40vw",
                    margin: "10px auto",
                  }}
                  label="Nome"
                  id="outlined-size-small"
                  size="small"
                  value={form.nomePessoa}
                  onChange={handleChangeForm}
                  name="nomePessoa"
                />

                <TextField
                  sx={{
                    width: "40vw",
                    margin: "10px auto",
                  }}
                  label="E-mail"
                  id="outlined-size-small"
                  size="small"
                  value={form.emailPessoa}
                  onChange={handleChangeForm}
                  name="emailPessoa"
                />

                <TextField
                  sx={{
                    width: "40vw",
                    margin: "10px auto",
                  }}
                  name="celular"
                  value={phoneMask(form.celular)}
                  onChange={handleChangeForm}
                  id="outlined-size-small"
                  label="Celular"
                  variant="outlined"
                />

                <TextField
                  sx={{
                    width: "40vw",
                    backgroundColor: "#FFFFFF",
                    margin: "1vh auto",
                  }}
                  name="dataNascimentoPessoa"
                  id="outlined-basic"
                  label="Data de Nascimento ou Fundação"
                  placeholder="DD/MM/AAAA"
                  type="date"
                  variant="outlined"
                  value={form.dataNascimentoPessoa}
                  onChange={handleChangeForm}
                />

                <TextField
                  sx={{
                    width: "40vw",
                    backgroundColor: "#FFFFFF",
                    margin: "1vh auto",
                  }}
                  name="documentoPessoa"
                  id="outlined-basic"
                  label="Documento"
                  placeholder="999.999.999-99"
                  variant="outlined"
                  value={form.documentoPessoa}
                  onChange={handleChangeForm}
                />

                <Button
                  variant="contained"
                  onClick={() => handleSalvarAlteracoesPerfil()}
                  sx={{
                    margin: "5vh auto 2vh",
                    width: "10vw",
                    backgroundColor: "#E64097",
                    "&:hover": {
                      backgroundColor: "#04BFAF",
                    },
                  }}
                >
                  Salvar
                </Button>
              </Box>
            </>
          ) : (
            <></>
          )}
        </Box>
      </Box>
    </>
  );
}

export default Perfil;
