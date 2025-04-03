import SignUpPage from "./components/AuthPages/SignUpPage"
import Header from './components/Header'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import LoginInPage from "./components/AuthPages/LoginInPage";
function App() {

  return (
    <>
    <Header/>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<SignUpPage />} />
          <Route path ='/LogIn' element={<LoginInPage/>}/>
          <Route path ='/home' element={<HomePage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
