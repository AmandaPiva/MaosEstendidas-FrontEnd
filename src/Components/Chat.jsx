import React from "react";
import { useChat } from "./../context/ChatContext"; // Certifique-se de usar o caminho correto para o ChatContext
import {
  Dialog,
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  List,
  ListItemButton,
  Divider,
  TextField,
  Fab,
  Slide,
} from "@mui/material";
import { Close as CloseIcon, Send as SendIcon } from "@mui/icons-material";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function Chat() {
  const { openChat, closeChatDialog } = useChat();

  return (
    <Dialog
      fullScreen
      open={openChat}
      onClose={closeChatDialog}
      TransitionComponent={Transition}
    >
      <AppBar sx={{ position: "relative", background: "#E64097" }}>
        <Toolbar>
          <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
            Chat
          </Typography>
          <Button autoFocus color="inherit" onClick={closeChatDialog}>
            <CloseIcon />
          </Button>
        </Toolbar>
      </AppBar>
      <Box sx={{ display: "flex", flexDirection: "row" }}>
        <List sx={{ width: "50vw" }}>
          <ListItemButton>{/**histórico */}</ListItemButton>
          <Divider />
          <ListItemButton>{/**histórico */}</ListItemButton>
        </List>
        <Box
          sx={{
            width: "50vw",
            height: "100vh",
            boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.6)",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              marginTop: "83vh",
            }}
          >
            <TextField
              sx={{
                width: "40vw",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                marginLeft: "40px",
              }}
              label="Digite uma mensagem..."
              id="fullWidth"
            />
            <Fab
              sx={{ marginLeft: "30px", background: "#E64097" }}
              color="primary"
              aria-label="add"
            >
              <SendIcon />
            </Fab>
          </Box>
        </Box>
      </Box>
    </Dialog>
  );
}

export default Chat;
