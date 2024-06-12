import { Box, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TextField from "@mui/material/TextField";
import ReplyAllIcon from "@mui/icons-material/ReplyAll";
import axios from "axios";

function EsqueceuSenha() {
  //HOOKS
  const [pessoa, setPessoa] = useState({
    email: "",
    senha: "",
  });
  const [senha, setSenha] = useState("");

  {
    /**FUNÇÃO QUE LEVA A SENHA AO EMAIL */
  }
  const handleEnviaSenhaParaOEmail = async () => {
    await axios
      .post(`http://localhost:8080/api/v1/email/send-password`, {
        email: pessoa.email,
        newPassword: senha,
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((erro) => {
        console.log(erro);
        alert("Ocorreu um erro ao enviar a senha para este e-mail");
      });
  };

  //FUNÇÃO GERA SENHA RANDOMICA
  const handleGeraSenha = (tamanho = 8) => {
    let result = "";
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZÇabcdefghijklmnopqrstuvwxyzç?!@#$%&*-+0123456789";
    const charactersLength = characters.length; //quantidade de caracteres

    let counter = 0;
    //enquando o contador for menor do que o parâmetro tamanho
    while (counter < tamanho) {
      //gera uma comninação de caracteres
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    setSenha(result); // Salva a senha gerada no estado
    setPessoa((prevState) => ({
      ...prevState,
      senha: result,
    }));
  };

  const handleAtualizaSenha = async () => {
    await axios
      .patch(
        `http://localhost:8080/api/v1/pessoa/updateSenha/${pessoa.email}`,
        {
          senhaPessoa: senha,
        }
      )
      .then((response) => {
        console.log(response);
      })
      .catch((erro) => {
        console.error(erro);
        alert("Ocorreu um erro ao enviar a nova senha");
      });
  };

  const handleChangeForm = (event) => {
    const { name, value } = event.target;
    //atualiza o state pessoa com a nova senha gerada
    setPessoa((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  //VAI FAZER RENDERIZAR NA TELA O CÓDIGO GERADO PELA FUNÇÃO
  useEffect(() => {
    handleGeraSenha(10);
  }, []);

  console.log(senha);
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100vw",
          heigth: "100vh",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Box sx={{ marginTop: "10vh", marginLeft: "5vw" }}>
            <Link to="/Login">
              <Button variant="outlined">
                <ReplyAllIcon sx={{ marginRight: "8px" }} />
                Voltar
              </Button>
            </Link>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography
              sx={{
                color: "#E64097",
                fontFamily: "montserrat",
                fontSize: "36px",
                fontWeight: "600",
                textAlign: "center",
                margin: "8vh 5vw 0",
              }}
            >
              Esqueceu sua senha?
            </Typography>
            <Typography
              sx={{
                color: "#04BFAF",
                fontFamily: "montserrat",
                fontSize: "24px",
                fontWeight: "500",
                textAlign: "center",
                margin: "2vh 2vw",
              }}
            >
              Vamos ajudá-lo a recuperá-la!
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.3)",
            paddingTop: "2em",
            paddingBottom: "2em",
            width: "50vw",
            height: "auto",
            margin: "6vh auto",
            borderRadius: "20px",
            backgroundColor: "#FAFAFA",
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography
              sx={{
                fontFamily: "montserrat",
                color: "#E64097",
                fontSize: "24px",
                fontWeight: "600",
                margin: "auto",
              }}
            >
              Informe o e-mail cadastrado para que a nova senha seja enviada!
            </Typography>

            <TextField
              sx={{
                width: "50%",
                backgroundColor: "#FFFFFF",
                margin: "5vh auto",
              }}
              id="outlined-basic"
              onChange={handleChangeForm}
              value={pessoa.email}
              name="email"
              label="E-mail de recuperação de senha"
              variant="outlined"
            />
          </Box>

          <Button
            variant="contained"
            onClick={() => {
              handleEnviaSenhaParaOEmail();
            }}
            sx={{
              height: "5vh",
              width: "20vw",
              margin: "2vh auto",
              backgroundColor: "#04BFAF",
              "&:hover": {
                backgroundColor: "#E64097", // Altere a cor desejada para o efeito hover
              },
            }}
          >
            Alterar senha{" "}
          </Button>
        </Box>
      </Box>
    </>
  );
}

export default EsqueceuSenha;
