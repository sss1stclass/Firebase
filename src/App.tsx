import SignUpPage from "./components/AuthPages/SignUpPage"
import Header from './components/Header'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage/Index";
function App() {

  return (
    <>
    <Header/>
      <BrowserRouter>
        <Routes>
          <Route path ='/' element={<HomePage/>}/>
          <Route path="/signUp" element={<SignUpPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
