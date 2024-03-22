import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Login/Login';

//COMPONENTE
function App() {
  

  
  return (
    <>
     <BrowserRouter>
        <Routes>
          <Route path={"/Login"} element={<Login/>}/>
        </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
