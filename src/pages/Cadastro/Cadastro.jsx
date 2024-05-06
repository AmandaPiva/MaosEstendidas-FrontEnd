import { Box, Typography } from "@mui/material";
import React from "react";

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

function Cadastro(props) {
  // Acessando os dados do endereço
  const [form, setForm] = useState({
    nomePessoa: "",
    emailPessoa: "",
    documentoPessoa: "",
    dataNascimentoPessoa: "",
    rolePessoa: "",
    senhaPessoa: "",
    confirmeSuaSenha: "",
    endereco: "",
  });
  const [loading, setLoading] = useState(false);
  const [senhaError, setSenhaError] = useState("");
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
          endereco: props.endereco.idEndereco, //adicionando o endereço que veio do props do componente Endereco
          senhaPessoa: form.senhaPessoa,
        })
        .then((response) => {
          setLoading(false);
          console.log(response.data);
          alert("Usuário cadastrado com sucesso");
          window.location.href = "/Login";
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
    await axios
      .get(`http://localhost:8080/api/v1/pessoa/role`, {})
      .then((response) => {
        console.log(response.data);
        setRoles(response.data);
        setLoading(false);
      })
      .catch((erro) => {
        console.log(erro);
        alert("Ocorreu um erro ao buscar a role");
      });

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

    //validando os campos de senha
    if (name === "confirmeSuaSenha" && value !== form.senhaPessoa) {
      setSenhaError("As senhas não coincidem");
    } else {
      setSenhaError("");
    }
  };

  const handleChangeFormData = (event) => {
    const { name, value } = event.target;
    let formattedValue = value;

    // Verifica se o campo é de data de nascimento e formata para o formato esperado pelo backend
    if (name === "dataNascimentoPessoa") {
      // Converte a data do formato brasileiro (DD/MM/AAAA) para o formato americano (AAAA-MM-DD)
      const parts = value.split("/");
      if (parts.length === 3) {
        formattedValue = `${parts[2]}-${parts[1]}-${parts[0]}`;
      }
    }
    setForm((prev) => ({
      ...prev,
      [name]: formattedValue,
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

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          width: "100vw",
          minHeight: "100vh",
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
            <Link to={"/Endereco"}>
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
              fontSize: "30px",
              fontWeight: "600",
              fontFamily: "montserrat",
              margin: "10vh auto 5vh",
            }}
          >
            Coloque seus dados manualmente ao lado
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
            padding: "20px",
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              minHeight: "100vh",
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
                  margin: "1vh auto",
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
                  margin: "1vh auto",
                }}
                name="emailPessoa"
                onChange={handleChangeForm}
                value={form.emailPessoa}
                id="outlined-basic"
                label="Email"
                variant="outlined"
              />

              <Typography sx={{ fontFamily: "montserrat", margin: "2vh auto" }}>
                Data de Nascimento ou fundação
              </Typography>
              <TextField
                sx={{
                  width: "25vw",
                  backgroundColor: "#FFFFFF",
                  margin: "1vh auto",
                }}
                name="dataNascimentoPessoa"
                onChange={handleChangeFormData}
                value={form.dataNascimentoPessoa}
                id="outlined-basic"
                label=""
                placeholder="DD/MM/AAAA"
                type="date"
                variant="outlined"
              />

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  margin: "1vh 53px",
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
                  </Select>
                </FormControl>
              </Box>

              {/**VERIFICAÇÃO DO TIPO DE PESSOA */}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  margin: "1vh 53px",
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
                <>
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
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      margin: "3vh auto",
                      borderStyle: "solid",
                      borderColor: "#04BFAF",
                      borderWidth: "1px",
                      width: "25vw",
                    }}
                  >
                    <Typography sx={{ padding: "8px" }}>
                      Crie uma senha de acesso!
                    </Typography>
                    <TextField
                      sx={{
                        width: "15vw",
                        backgroundColor: "#FFFFFF",
                        margin: "1vh",
                      }}
                      name="senhaPessoa"
                      value={form.senhaPessoa}
                      onChange={handleChangeForm}
                      id="outlined-basic"
                      label="Crie uma senha"
                      type="password"
                      variant="outlined"
                    />
                    <TextField
                      sx={{
                        width: "15vw",
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
                </>
              ) : tipoSelecionado === "cpf" ? (
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <TextField
                    sx={{
                      width: "25vw",
                      backgroundColor: "#FFFFFF",
                      margin: "1vh auto",
                    }}
                    name="documentoPessoa"
                    onChange={handleChangeForm}
                    value={formatarCPF(form.documentoPessoa)}
                    id="outlined-basic"
                    label="CPF"
                    placeholder="999.999.999-99"
                    variant="outlined"
                  />

                  {/**ESPAÇO CRIAR SENHA */}
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      margin: "3vh auto",
                      borderStyle: "solid",
                      borderColor: "#E64097",
                      borderWidth: "1px",
                      width: "25vw",
                    }}
                  >
                    <Typography sx={{ padding: "8px" }}>
                      Crie uma senha de acesso!
                    </Typography>
                    <TextField
                      sx={{
                        width: "15vw",
                        backgroundColor: "#FFFFFF",
                        margin: "1vh",
                      }}
                      name="senhaPessoa"
                      value={form.senhaPessoa}
                      onChange={handleChangeForm}
                      id="outlined-basic"
                      label="Crie uma senha"
                      type="password"
                      variant="outlined"
                    />
                    <TextField
                      sx={{
                        width: "15vw",
                        backgroundColor: "#FFFFFF",
                        margin: "1vh",
                      }}
                      name="confirmeSuaSenha"
                      id="outlined-basic"
                      label="Confirme sua senha"
                      type="password"
                      variant="outlined"
                    />
                  </Box>
                </Box>
              ) : (
                <></>
              )}

              {/**BOTÃO */}
              <Button
                onClick={handleCadastroPessoa}
                variant="contained"
                sx={{
                  margin: "auto",
                  marginBottom: "2vh",
                  width: "15vw",
                  backgroundColor: "#04BFAF",
                  "&:hover": {
                    backgroundColor: "#E64097", // Altere a cor desejada para o efeito hover
                  },
                }}
              >
                Finalizar Cadastro
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Cadastro;
