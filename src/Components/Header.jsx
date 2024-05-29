import { Box, Button, Typography } from "@mui/material";
import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Modal from "@mui/material/Modal";
import { useState } from "react";

function Header() {
  const [openModal, setOpenModal] = useState(false);

  const handleOpen = () => setOpenModal(true);
  const handleClose = () => setOpenModal(false);

  const role = localStorage.getItem("role"); //pega a role do navegador

  //removendo dados do navegador para logout
  const handleRemoveItensLocalStorage = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    localStorage.removeItem("role");
    window.location.reload();
  };

  const style = {
    position: "absolute",
    top: "25%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 700,
    bgcolor: "background.paper",
    boxShadow: 24,
    margin: "auto",
    p: 4,
  };
  return (
    <>
      <Modal
        open={openModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            sx={{
              color: "#E64097",
              fontFamily: "montserrat",
              fontSize: "24px",
              fontWeight: "500",
              textAlign: "center",
            }}
          >
            Você tem certeza que deseja sair?
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              marginTop: "5vh",
            }}
          >
            <Button
              variant="contained"
              onClick={handleRemoveItensLocalStorage}
              sx={{
                width: "10vw",
                backgroundColor: "#04BFAF",
                "&:hover": {
                  backgroundColor: "#E64097", // Altere a cor desejada para o efeito hover
                },
              }}
            >
              Deslogar-se
            </Button>
            <Button
              variant="contained"
              onClick={() => handleClose()}
              sx={{
                width: "10vw",
                marginLeft: "5px",
                backgroundColor: "#F03737",
                "&:hover": {
                  backgroundColor: "#E64097", // Altere a cor desejada para o efeito hover
                },
              }}
            >
              Continuar
            </Button>
          </Box>
        </Box>
      </Modal>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          width: "100vw",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            width: "100vw",
            justifyContent: "center",
          }}
        >
          {/**MUDANDO HEADER DE ACORDO COM A ROLE */}
          {role === "DOADORA" ? (
            <Button
              onClick={() => (location.href = "/verDoadores")}
              sx={{ color: "#FFFFFF", marginLeft: "5vw" }}
            >
              Historico de doações
            </Button>
          ) : role === "DONATARIA" ? (
            <Button
              onClick={() => (location.href = "/verDoadores")}
              sx={{ color: "#FFFFFF", marginLeft: "5vw" }}
            >
              Ver doadores
            </Button>
          ) : (
            <></>
          )}

          <Button onClick={() => handleOpen()} sx={{ color: "#FFFFFF" }}>
            Logout
          </Button>
          <Button
            // onClick={() => {
            //   openChatDialog();
            // }}
            sx={{ color: "#FFFFFF" }}
          >
            Chat
          </Button>
        </Box>

        {/**AVATAR */}
        <Stack sx={{ padding: "10px" }} direction="column">
          <Button
            onClick={() => (location.href = "/Perfil")}
            sx={{
              marginRight: "10px",
            }}
          >
            <Avatar src="/broken-image.jpg" />
          </Button>

          <Typography
            sx={{
              fontSize: "16px",
              color: "#FFFFFF",
              fontFamily: "montserrat",
              fontWeight: "400",
              marginRight: "20px",
            }}
          >
            Perfil
          </Typography>
        </Stack>
      </Box>
    </>
  );
}

export default Header;
