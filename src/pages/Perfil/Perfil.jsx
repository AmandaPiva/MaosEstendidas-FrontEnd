import { Box, Typography, Button, TextField } from "@mui/material";
import ReplyAllIcon from "@mui/icons-material/ReplyAll";
import CloseIcon from "@mui/icons-material/Close";
import { useEffect, useState } from "react";
import axios from "axios";
import Logo from "../../../public/logo.png";

function Perfil() {
  const role = localStorage.getItem("role");
  const email = localStorage.getItem("email");

  const [loading, setLoading] = useState(false);
  const [pessoa, setPessoa] = useState({});
  const [editar, setEditar] = useState(false);
  const [alterarSenha, setAlterarSenha] = useState(false);
  const [imagem, setImagem] = useState(null); // Estado para armazenar a imagem selecionada
  const [imagemPreview, setImagemPreview] = useState(null);
  const [senhaError, setSenhaError] = useState("");

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
        setImagemPreview(response.data.urlImagem); // Atualiza a URL da imagem quando a pessoa é buscada
        console.log(response.data);
        buscaImagemPeloIdPessoa();
      } catch (erro) {
        console.error("Erro ao buscar usuário pelo e-mail:", erro);
      } finally {
        setLoading(false);
      }
    }
  };

  const handleAlterarSenhaManual = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      location.href = "/Login";
    } else {
      try {
        await axios.patch(
          `http://localhost:8080/api/v1/pessoa/updateSenhaManual/${pessoa.idPessoa}`,
          {
            senhaPessoa: form.senhaPessoa,
          }
        );
        console.log("Senha alterada com sucesso");
        setAlterarSenha(false);
      } catch (erro) {
        console.log(erro);
        alert("Ocorreu um erro ao editar a senha");
      }
    }
  };

  const handleSalvarAlteracoesPerfil = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      location.href = "/Login";
    } else {
      try {
        const response = await axios.patch(
          `http://localhost:8080/api/v1/pessoa/${pessoa.idPessoa}`,
          {
            nomePessoa: form.nomePessoa,
            emailPessoa: form.emailPessoa,
            documentoPessoa: form.documentoPessoa,
            dataNascimentoPessoa: form.dataNascimentoPessoa,
            celular: form.celular,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log("Resposta da pessoa PATCH:", response);
        handleBuscarPessoa();
        setLoading(false);
        alert("Pessoa editada com sucesso");
      } catch (erro) {
        console.log(erro);
        alert("Ocorreu um erro ao editar essa pessoa");
      }
    }
  };

  const handleUploadImagem = async () => {
    const formData = new FormData();
    formData.append("imagem", imagem);

    const token = localStorage.getItem("token");
    if (!token) {
      location.href = "/Login";
    } else {
      try {
        const response = await axios.post(
          `http://localhost:8080/api/v1/pessoa/${pessoa.idPessoa}/upload-imagem`,
          formData,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "multipart/form-data",
            },
          }
        );
        console.log("Resposta da API de upload:", response);
        setImagemPreview(response.data.urlImagem); // Atualiza a URL da imagem com a URL retornada pelo servidor
        handleBuscarPessoa();
        setLoading(false);
        alert("Imagem de perfil atualizada com sucesso");
      } catch (erro) {
        console.log(erro);
        alert("Ocorreu um erro ao fazer o upload da imagem");
      }
    }
  };

  const [form, setForm] = useState({
    nomePessoa: "",
    emailPessoa: "",
    documentoPessoa: "",
    dataNascimentoPessoa: "",
    celular: "",
    senhaPessoa: "",
    confirmeSuaSenha: "",
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

    //validando os campos de senha
    if (name === "confirmeSuaSenha" && value !== form.senhaPessoa) {
      setSenhaError("As senhas não coincidem");
    } else {
      setSenhaError("");
    }
  };

  const handleChangeImagem = (event) => {
    const file = event.target.files[0];
    setImagem(file);
    setImagemPreview(URL.createObjectURL(file)); // Atualiza a URL da imagem quando um arquivo é selecionado
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
            height: "15vh",
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
                padding: "1rem",
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
              marginLeft: "85px",
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
              margin: "10px 80px",
              justifyContent: "center",
              alignItems: "center", // Centraliza o conteúdo horizontalmente
            }}
          >
            {/* <img
              src="" // Imagem padrão, caso não haja imagem
              alt="Imagem de Perfil Padrão"
              style={{
                width: "150px",
                height: "150px",
                borderRadius: "50%",
                objectFit: "cover",
                margin: "20px",
              }}
            /> */}

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
                color: "#231F20",
                fontFamily: "montserrat",
                fontSize: "30px",
                fontWeight: "500",
                textAlign: "center",
                margin: "10px 60px",
              }}
            >
              {roleDescricao}
            </Typography>

            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
              }}
            >
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
                Editar Perfil
              </Button>
              <Button
                variant="contained"
                onClick={() => {
                  setAlterarSenha(true);
                }}
                sx={{
                  margin: "5vh 10px 2vh",
                  width: "10vw",
                  backgroundColor: "#04BFAF",
                  "&:hover": {
                    backgroundColor: "#E64097",
                  },
                }}
              >
                Alterar Senha
              </Button>
            </Box>
          </Box>

          {/*BOX CARD ALTERAR SENHA DIREITA */}
          {alterarSenha && (
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                width: "40vw",
                height: "auto",
                borderRadius: "50px",
                boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.3)",
                margin: "10px 80px",
                padding: "2rem",
                justifyContent: "center",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <Typography
                  sx={{
                    color: "#E64097",
                    fontFamily: "montserrat",
                    fontSize: "30px",
                    fontWeight: "600",
                  }}
                >
                  Alterar Senha
                </Typography>
                <Button
                  onClick={() => setAlterarSenha(false)}
                  sx={{
                    marginLeft: "auto",
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

              <Box
                sx={{
                  marginTop: "5vh",
                  display: "flex",
                  flexDirection: "column",
                  margin: " 5vh auto",
                }}
              >
                <TextField
                  sx={{
                    width: "30vw",
                    backgroundColor: "#FFFFFF",
                    margin: "1vh",
                  }}
                  name="senhaPessoa"
                  value={form.senhaPessoa}
                  onChange={handleChangeForm}
                  id="outlined-basic"
                  label="Insira nova senha"
                  type="password"
                  variant="outlined"
                />
                <TextField
                  sx={{
                    width: "30vw",
                    backgroundColor: "#FFFFFF",
                    margin: "1vh",
                  }}
                  name="confirmeSuaSenha"
                  value={form.confirmeSuaSenha}
                  onChange={handleChangeForm}
                  error={senhaError !== ""}
                  helperText={senhaError}
                  id="outlined-basic"
                  label="Confirme sua senha"
                  type="password"
                  variant="outlined"
                />
              </Box>

              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Button
                  variant="contained"
                  onClick={handleAlterarSenhaManual}
                  sx={{
                    marginRight: "20px",
                    backgroundColor: "#E64097",
                    width: "10vw",
                    margin: "auto",
                    "&:hover": {
                      backgroundColor: "#04BFAF",
                    },
                  }}
                >
                  Salvar senha
                </Button>
              </Box>
            </Box>
          )}

          {/*BOX CARD PERFIL DIREITA */}
          {editar && (
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                width: "40vw",
                height: "auto",
                borderRadius: "50px",
                boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.3)",
                margin: "10px 80px",
                padding: "2rem",
                justifyContent: "center",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <Typography
                  sx={{
                    color: "#E64097",
                    fontFamily: "montserrat",
                    fontSize: "30px",
                    fontWeight: "600",
                  }}
                >
                  Editar Perfil
                </Typography>
                <Button
                  onClick={() => setEditar(false)}
                  sx={{
                    marginLeft: "auto",
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

              <Box sx={{ marginTop: "5vh" }}>
                <TextField
                  label="Nome"
                  name="nomePessoa"
                  value={form.nomePessoa}
                  onChange={handleChangeForm}
                  fullWidth
                  sx={{ marginBottom: "20px" }}
                />

                <TextField
                  label="Email"
                  name="emailPessoa"
                  value={form.emailPessoa}
                  onChange={handleChangeForm}
                  fullWidth
                  sx={{ marginBottom: "20px" }}
                />

                <TextField
                  label="Documento"
                  name="documentoPessoa"
                  value={form.documentoPessoa}
                  onChange={handleChangeForm}
                  fullWidth
                  sx={{ marginBottom: "20px" }}
                />

                <TextField
                  label="Data de Nascimento"
                  name="dataNascimentoPessoa"
                  value={form.dataNascimentoPessoa}
                  onChange={handleChangeForm}
                  fullWidth
                  sx={{ marginBottom: "20px" }}
                />

                <TextField
                  label="Celular"
                  name="celular"
                  value={phoneMask(form.celular)}
                  onChange={handleChangeForm}
                  fullWidth
                  sx={{ marginBottom: "20px" }}
                />
              </Box>

              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Button
                  variant="contained"
                  onClick={handleSalvarAlteracoesPerfil}
                  sx={{
                    marginRight: "20px",
                    backgroundColor: "#E64097",
                    width: "10vw",
                    margin: "auto",
                    "&:hover": {
                      backgroundColor: "#04BFAF",
                    },
                  }}
                >
                  Salvar
                </Button>
              </Box>
            </Box>
          )}
        </Box>
      </Box>
    </>
  );
}

export default Perfil;
