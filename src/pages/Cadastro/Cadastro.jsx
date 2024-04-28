import { Box, Typography } from "@mui/material";
import PessoasUnidas from "../../../public/pessoasUnidas.png";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Pesquisa from "../../../public/pesquisa.png";
import { Link } from "react-router-dom";
import ReplyAllIcon from "@mui/icons-material/ReplyAll";
import { useEffect, useState } from "react";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";

function Cadastro() {
  const [form, setForm] = useState({
    nomePessoa: "",
    emailPessoa: "",
    documentoPessoa: "",
    dataNascimentoPessoa: "",
    rolePessoa: "",
  });
  const [loading, setLoading] = useState(false);
  const [selectRole, setSelectRole] = useState("");
  const [tipoSelecionado, setSelecionado] = useState("");
  const [roles, setRoles] = useState([]);

  const handleChange = (event) => {
    setRoles(event.target.value);
  };

  const handleChangeRole = (event) => {
    setSelectRole(event.target.value);
  };

  const handleCadastroPessoa = () => {
    setLoading(true);

    if (
      form.nomePessoa == "" ||
      form.emailPessoa == "" ||
      form.documentoPessoa == "" ||
      form.dataNascimentoPessoa == "" ||
      selectRole == ""
    ) {
      alert("Os campos não foram preenchidos corretamente, revise-os");
    } else {
      axios
        .post(`http://localhost:8080/api/v1/pessoa`, {
          nomePessoa: form.nomePessoa,
          emailPessoa: form.emailPessoa,
          documentoPessoa: form.documentoPessoa,
          dataNascimentoPessoa: form.dataNascimentoPessoa,
          rolePessoa: selectRole,
        })
        .then((response) => {
          setLoading(false);
          console.log(response.data);
          alert("Usuário cadastrado com sucesso");
          window.location.href = "/Endereco";
        })
        .catch((erro) => {
          console.error(erro);
          alert("Ocorreu um erro ao cadastrar");
        });
    }
    setLoading(false);
  };

  //BUSCANDO AS ROLES PARA COLOCAR NO SELECT
  const handleBuscaRoleApi = async () => {
    setLoading(true);
    const token = localStorage.getItem("token"); //pega o token gerado do Browser e armazena na variável token
    if (!token) {
      alert("token não encontrado");
    } else {
      await axios
        .get(`http://localhost:8080/api/v1/pessoa/role`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          console.log(response.data);
          setRoles(response.data);
          setLoading(false);
        })
        .catch((erro) => {
          console.log(erro);
          alert("Ocorreu um erro ao buscar a role");
        });
    }
    setLoading(false);
  };

  useEffect(() => {
    handleBuscaRoleApi();
  }, []);

  const handleChangeForm = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

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

  const formatInputDate = (input) => {
    // Aplicando a máscara (DD/MM/AAAA) usando REGEX
    return input
      .replace(/\D/g, "") // Remove todos os caracteres que não são dígitos
      .replace(/(\d{2})(\d)/, "$1/$2") // Coloca uma barra após os dois primeiros dígitos
      .replace(/(\d{2})(\d)/, "$1/$2") // Coloca uma barra após os próximos dois dígitos
      .slice(0, 10); // Limita a string a 10 caracteres (DD/MM/AAAA)
  };

  //verificamos se o estado do hook loading está neste momento true
  if (loading && loading == true) {
    //pois se estiver, será renderizado na tela um circulo indicando que a página está carregando
    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100vw",
          alignItems: "center",
        }}
      >
        <CircularProgress
          sx={{
            display: "flex",
            flexDirection: "column",
            margin: "5vh auto",
            color: "#E64097",
          }}
        />
      </Box>
    );
  }
  console.log(form.nomePessoa);
  console.log(form.emailPessoa);
  console.log(form.documentoPessoa);
  console.log(form.dataNascimentoPessoa);
  console.log(selectRole);
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
          <Box sx={{ marginTop: "5.5vh", marginLeft: "5vw" }}>
            <Link to={"/"}>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#04BFAF",
                  "&:hover": {
                    backgroundColor: "#E64097", // Altere a cor desejada para o efeito hover
                  },
                  padding: "8px 18px 8px 5px",
                }}
                size="small"
              >
                <ReplyAllIcon sx={{ marginRight: "8px" }} />
                Voltar
              </Button>
            </Link>
          </Box>
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
                name="nomePessoa"
                onChange={handleChangeForm}
                value={form.nomePessoa}
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
                name="emailPessoa"
                onChange={handleChangeForm}
                value={form.emailPessoa}
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
                name="dataNascimentoPessoa"
                onChange={handleChangeForm}
                value={formatInputDate(form.dataNascimentoPessoa)}
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
                    id="demo-simple-select1"
                    name="rolePessoa"
                    onChange={handleChangeRole}
                    value={selectRole}
                    label="role"
                    sx={{ width: "15vw" }}
                  >
                    {roles.map((roleItem) => {
                      return (
                        <MenuItem
                          key={roleItem.idPessoaRole}
                          value={roleItem.idPessoaRole}
                        >
                          {roleItem.rolePessoa}
                        </MenuItem>
                      );
                    })}
                    {/* <MenuItem value={"doador"}>Doador</MenuItem>
                    <MenuItem value={"donatario"}>Donatario</MenuItem> */}
                  </Select>
                </FormControl>
              </Box>

              {/**VERIFICAÇÃO DO TIPO DE PESSOA */}
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
                    Tipo de Doador/Donatário
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    name="rolePessoa"
                    onChange={(event) => setSelecionado(event.target.value)}
                    value={tipoSelecionado}
                    label="Age"
                    sx={{ width: "15vw" }}
                  >
                    <MenuItem value={"cnpj"}>Empresa/ONG</MenuItem>
                    <MenuItem value={"cpf"}>Pessoa Física</MenuItem>
                  </Select>
                </FormControl>
              </Box>

              {tipoSelecionado === "cnpj" ? (
                <TextField
                  sx={{
                    width: "25vw",
                    backgroundColor: "#FFFFFF",
                    margin: "1vh auto",
                  }}
                  name="documentoPessoa"
                  onChange={handleChangeForm}
                  value={cnpjMask(form.documentoPessoa)}
                  id="outlined-basic"
                  placeholder="99.999.999/9999-99"
                  label="CNPJ"
                  variant="outlined"
                />
              ) : tipoSelecionado === "cpf" ? (
                <TextField
                  sx={{
                    width: "25vw",
                    backgroundColor: "#FFFFFF",
                    margin: "2vh auto",
                  }}
                  name="documentoPessoa"
                  onChange={handleChangeForm}
                  value={formatarCPF(form.documentoPessoa)}
                  id="outlined-basic"
                  label="CPF"
                  placeholder="999.999.999-99"
                  variant="outlined"
                />
              ) : (
                <></>
              )}

              {/**BOTÃO */}
              <Button
                onClick={handleCadastroPessoa}
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
