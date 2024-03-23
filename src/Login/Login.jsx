import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import '@fontsource/montserrat/300.css';
import '@fontsource/montserrat/400.css';
import '@fontsource/montserrat/500.css';
import '@fontsource/montserrat/700.css';
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Logo from '../../public/logo.png';

function Login(){
    //logica




    return(
        <>
        <Box sx={{display:'flex', flexDirection:'row', width:'100vw', height:'100vh' }}>
            {/*DIVS FILHAS */}
            <Box sx={{display:'flex', flexDirection:'column',  width:'50vw'}}>
                {/*IMAGEM DA SENHORINHA */}
            </Box>
            <Box component="form" sx={{height:'50vh', width:'50vw',display:'flex', flexDirection:'column', padding:'3em'}}>
            
                <Box sx={{display: 'flex', flexDirection:'column', marginLeft:'auto'}}>
                    <img width={250} src={Logo} alt="logo" />
                </Box>
                
                {/*FORMULARIO */}
                <Typography sx={{color:'#E64097', fontFamily:'montserrat', fontSize: '36px', fontWeight:'600', marginTop:'5vh', textAlign:'center'}}>Faça seu Login</Typography>

                <Box sx={{display:'flex', flexDirection:'column', margin:'10vh auto 5vh', width:'25vw', height:'60vh' ,borderStyle:'solid', borderColor:'black', padding: '5rem'}}>
                    <TextField sx={{width:'25vw'}} id="outlined-basic" label="Email" variant="outlined" />
                    <TextField sx={{marginTop:'5vh', width:'25vw'}} id="outlined-basic" label="Senha" variant="outlined" />

                    <Button variant="contained" sx={{marginTop:'5vh', backgroundColor:'#E64097'}}>Login</Button>

                </Box>
                

            </Box>
        </Box>
        </>
    )
}

export default Login;