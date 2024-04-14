import { Box, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function EsqueceuSenha() {
  //HOOKS
  const [pessoa, setPessoa] = useState({
    senha: "",
  });

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

    //atualiza o state pessoa com a nova senha gerada
    setPessoa((prevState) => ({
      ...prevState,
      senha: result, //adicionamos o conteudo gerado na variável result para a propriedade senha que vem do HOOK pessoa
    }));
  };

  //VAI FAZER RENDERIZAR NA TELA O CÓDIGO GERADO PELA FUNÇÃO
  useEffect(() => {
    handleGeraSenha(10);
  }, []);

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
              <Button variant="outlined">Voltar</Button>
            </Link>
          </Box>
          <Typography
            sx={{
              color: "#E64097",
              fontFamily: "montserrat",
              fontSize: "36px",
              fontWeight: "600",
              textAlign: "center",
              margin: "10vh 2vw",
            }}
          >
            Esqueceu sua senha?
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.3)",
            paddingTop: "2em",
            paddingBottom: "2em",
            width: "90vw",
            height: "15vh",
            margin: "2vh auto",
            borderRadius: "20px",
            backgroundColor: "#FAFAFA",
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <Typography
              sx={{
                fontFamily: "montserrat",
                color: "#231F20",
                fontSize: "20px",
                fontWeight: "500",
                marginLeft: "40px",
              }}
            >
              Clique na sua nova senha gerada ao lado:{" "}
            </Typography>
            <Typography
              variant="overline"
              sx={{ marginLeft: "10px", cursor: "pointer" }}
              onClick={() => {
                navigator.clipboard.writeText(pessoa.senha); //COMANDO PARA COPIAR O QUE ESTÁ ESCRITO NA ÁREA DE TRASNFERENCIA DO COMPUTADOR
                alert("Senha copiada para a área de transferência");
              }}
            >
              {pessoa.senha}
            </Typography>
          </Box>

          <Button
            variant="contained"
            sx={{
              height: "5vh",
              width: "10vw",
              margin: "2vh 40px",
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
