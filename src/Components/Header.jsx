import { Box, Button, Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";

function Header() {
  return (
    <>
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
          <Button sx={{ color: "#FFFFFF", marginLeft: "5vw" }}>
            Ver doadores
          </Button>
          <Button sx={{ color: "#FFFFFF" }}>Logout</Button>
          <Button sx={{ color: "#FFFFFF" }}>Chat</Button>
        </Box>

        {/**AVATAR */}
        <Stack sx={{ padding: "10px" }} direction="column">
          <Avatar src="/broken-image.jpg" />
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
