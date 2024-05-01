import { Typography, Box } from "@mui/material";
import Logo from "../../../public/logo.png";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import { useState } from "react";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";
import Modal from "@mui/material/Modal";
import ModalCadastroEndereco from "../../Components/modalCadastroEndereco";
import Cadastro from "../Cadastro/Cadastro";

function Endereco() {
  // Função para validar um CEP utilizando REGEX

  const formatarCEP = (cep) => {
    // Remove todos os caracteres que não são dígitos
    cep = cep.replace(/\D/g, "");

    // Adiciona um hífen depois dos primeiros cinco dígitos, se necessário
    cep = cep.replace(/^(\d{5})(\d)/, "$1-$2");

    // Limita o tamanho máximo do CEP para 9 caracteres
    cep = cep.slice(0, 9);

    return cep;
  };
  // Lista de estados brasileiros
  const estados = [
    { sigla: "AC", nome: "Acre" },
    { sigla: "AL", nome: "Alagoas" },
    { sigla: "AP", nome: "Amapá" },
    { sigla: "AM", nome: "Amazonas" },
    { sigla: "BA", nome: "Bahia" },
    { sigla: "CE", nome: "Ceará" },
    { sigla: "DF", nome: "Distrito Federal" },
    { sigla: "ES", nome: "Espírito Santo" },
    { sigla: "GO", nome: "Goiás" },
    { sigla: "MA", nome: "Maranhão" },
    { sigla: "MT", nome: "Mato Grosso" },
    { sigla: "MS", nome: "Mato Grosso do Sul" },
    { sigla: "MG", nome: "Minas Gerais" },
    { sigla: "PA", nome: "Pará" },
    { sigla: "PB", nome: "Paraíba" },
    { sigla: "PR", nome: "Paraná" },
    { sigla: "PE", nome: "Pernambuco" },
    { sigla: "PI", nome: "Piauí" },
    { sigla: "RJ", nome: "Rio de Janeiro" },
    { sigla: "RN", nome: "Rio Grande do Norte" },
    { sigla: "RS", nome: "Rio Grande do Sul" },
    { sigla: "RO", nome: "Rondônia" },
    { sigla: "RR", nome: "Roraima" },
    { sigla: "SC", nome: "Santa Catarina" },
    { sigla: "SP", nome: "São Paulo" },
    { sigla: "SE", nome: "Sergipe" },
    { sigla: "TO", nome: "Tocantins" },
  ];

  const [form, setForm] = useState({
    logradouro: "",
    bairro: "",
    cidade: "",
    estado: "",
    cep: "",
    numero: "",
  });
  const [loading, setLoading] = useState(false);
  const [exibeBotaoProximosPassos, setExibeBotaoProximosPassos] =
    useState(false);
  const [viaCep, setViaCep] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [enderecoSalvo, setEnderecoSalvo] = useState(null);
  const [exibeCadastro, setExibeCadastro] = useState(false);

  const handleOpen = () => {
    setOpenModal(true);
  };
  const handleClose = () => {
    setOpenModal(false);
  };

  const handleSetForm = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleChangeEstado = (event) => {
    setForm({ ...form, estado: event.target.value });
  };

  const handleCadastroEndereco = () => {
    setLoading(true);
    if (
      form.logradouro == "" ||
      form.bairro == "" ||
      form.cidade == "" ||
      form.estado == "" ||
      form.cep == "" ||
      form.numero == ""
    ) {
      alert("Os campos não foram preenchidos corretamente, revise-os");
    } else {
      axios
        .post(`http://localhost:8080/api/v1/endereco`, {
          logradouro: form.logradouro,
          bairro: form.bairro,
          cidade: form.cidade,
          estado: form.estado,
          cep: form.cep,
          numero: form.numero,
        })
        .then((response) => {
          setLoading(false);
          setEnderecoSalvo(response.data);

          setExibeBotaoProximosPassos(true);
        })
        .catch((erro) => {
          console.log(erro);
          alert("Ocorreu um erro ao cadastrar endereço");
        });
    }
    setLoading(false);
  };
  // console.log("Passou aqui", enderecoSalvo);

  {
    /**CRIA ENDEREÇO VIA CEP */
  }
  const handleCriaEnderecoViaCep = async () => {
    setLoading(true);
    await axios
      .get(`http://localhost:8080/api/v1/endereco/viacep/${viaCep}`)
      .then((response) => {
        setEnderecoSalvo(response.data);

        setLoading(false);
        alert("Endereço cadastrado com sucesso!");
        setExibeCadastro(true); // Exibe o componente Cadastro
      })
      .catch((erro) => {
        console.log(erro);
        alert("Ocorreu um erro ao cadastrar um endereço pelo CEP informado");
      });
    setLoading(false);
  };

  const handleProximosPassos = () => {
    return <Cadastro data={enderecoSalvo} />;
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
      {exibeCadastro && enderecoSalvo && <Cadastro endereco={enderecoSalvo} />}

      {/**MODAL QUE EXIBE MENSAGEM DE ENDEREÇO CADASTRADO COM SUCESSO */}
      <Modal
        open={openModal}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <ModalCadastroEndereco />
      </Modal>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100vw",
          heigth: "100vh",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "row" }}>
          <Box sx={{ marginTop: "5.5vh", marginLeft: "5vw" }}>
            <Button onClick={() => (location.href = "/")} variant="outlined">
              Voltar
            </Button>
          </Box>

          <Typography
            sx={{
              fontSize: "36px",
              fontWeight: "600",
              color: "#E64097",
              fontFamily: "montserrat",
              margin: "5vh ",
              textAlign: "center",
            }}
          >
            Vamos começar cadastrando seu endereço!
          </Typography>
        </Box>

        <Box
          sx={{
            boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.3)",
            backgroundColor: "#FAFAFA",
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
                fontSize: "24px",
                fontWeight: "600",
                color: "#04BFAF",
                paddingLeft: "5vw",
                width: "50vw",
                marginTop: "5vh",
              }}
            >
              Cadastre automaticamente apenas digitando seu CEP:
            </Typography>

            <Box sx={{ paddingLeft: "5vw" }}>
              <TextField
                sx={{
                  width: "35vw",
                  backgroundColor: "#FFFFFF",
                  marginTop: "5vh",
                }}
                name="cep"
                value={viaCep}
                onChange={(event) => setViaCep(event.target.value)}
                id="outlined-basic"
                label="CEP"
                variant="outlined"
              />
            </Box>

            <Box
              sx={{
                width: "35vw",
                marginLeft: "5vw",
              }}
            >
              <Button
                variant="contained"
                onClick={handleCriaEnderecoViaCep}
                sx={{
                  width: "25vw",
                  margin: "5vh 100px",
                  backgroundColor: "#E64097",
                  "&:hover": {
                    backgroundColor: "#04BFAF", // Altere a cor desejada para o efeito hover
                  },
                }}
              >
                Cadastrar Automático
              </Button>
              <Typography
                sx={{
                  fontFamily: "montserrat",
                  color: "black",
                  fontSize: "24px",
                  fontWeight: "500",
                  textAlign: "center",
                }}
              >
                Ou
              </Typography>
            </Box>
          </Box>

          {/**FORM CADASTRO MANUAL */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.3)",
              paddingTop: "2em",
              paddingBottom: "2em",
              width: "90vw",
              margin: "10vh auto",
              borderRadius: "20px",
              backgroundColor: "#FFFFFF",
            }}
          >
            {/**LADO ESQUERDO */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                paddingLeft: "5vw",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "montserrat",
                  fontSize: "18",
                  fontWeight: "500",
                  marginBottom: "10px",
                }}
              >
                Cadastre manualmente
              </Typography>
              <TextField
                sx={{
                  width: "25vw",
                  backgroundColor: "#FFFFFF",
                }}
                id="outlined-basic"
                name="logradouro"
                value={form.logradouro}
                onChange={handleSetForm}
                label="Logradouro"
                variant="outlined"
              />

              <TextField
                sx={{
                  width: "25vw",
                  backgroundColor: "#FFFFFF",
                  marginTop: "2vh",
                }}
                id="outlined-basic"
                value={form.bairro}
                onChange={handleSetForm}
                name="bairro"
                label="Bairro"
                variant="outlined"
              />
              <TextField
                sx={{
                  width: "25vw",
                  backgroundColor: "#FFFFFF",
                  marginTop: "2vh",
                }}
                id="outlined-basic"
                value={form.cidade}
                onChange={handleSetForm}
                name="cidade"
                label="Cidade"
                variant="outlined"
              />
            </Box>

            {/**LADO DIREITO */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                paddingLeft: "5vw",
              }}
            >
              <FormControl fullWidth>
                <InputLabel
                  id="demo-simple-select-label"
                  sx={{ margin: "2vh auto" }}
                >
                  Estado
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  name="estado"
                  onChange={handleChangeEstado}
                  value={form.estado}
                  label="estado"
                  sx={{ width: "15vw", marginTop: "2vh" }}
                >
                  {estados.map((estadosBR) => {
                    return (
                      <MenuItem key={estadosBR.sigla} value={estadosBR.sigla}>
                        {estadosBR.nome} - {estadosBR.sigla}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
              <TextField
                sx={{
                  width: "25vw",
                  backgroundColor: "#FFFFFF",
                  marginTop: "2vh",
                }}
                placeholder="99999-999"
                value={formatarCEP(form.cep)}
                onChange={handleSetForm}
                name="cep"
                id="outlined-basic"
                label="CEP"
                type="text"
                variant="outlined"
              />

              <TextField
                sx={{
                  width: "10vw",
                  backgroundColor: "#FFFFFF",
                  marginTop: "2vh",
                }}
                id="outlined-basic"
                name="numero"
                value={form.numero}
                onChange={handleSetForm}
                type="number"
                label="Número"
                variant="outlined"
              />

              {/*BOTOES*/}
              <Box
                sx={{ display: "flex", flexDirection: "row", marginTop: "3vh" }}
              >
                <Button
                  variant="contained"
                  onClick={handleCadastroEndereco}
                  sx={{
                    height: "5vh",
                    width: "8vw",
                    backgroundColor: "#04BFAF",
                    "&:hover": {
                      backgroundColor: "#E64097", // Altere a cor desejada para o efeito hover
                    },
                  }}
                >
                  Cadastrar
                </Button>
                {/**FAZER VERIFICAÇÃO DE HABILITAR O BOTÃO DE PROXIMOS PASSOS SÓ APÓS CADASTRAR */}
                {exibeBotaoProximosPassos === true ? (
                  <Button
                    variant="contained"
                    onClick={handleProximosPassos}
                    sx={{
                      height: "5vh",
                      marginLeft: "2vh",
                      backgroundColor: "#E64097",
                      "&:hover": {
                        backgroundColor: "#04BFAF", // Altere a cor desejada para o efeito hover
                      },
                    }}
                  >
                    Próximos Passos
                  </Button>
                ) : (
                  <></>
                )}
                {/* */}
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Endereco;
