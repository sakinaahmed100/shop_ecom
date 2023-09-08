import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Home"
import Contact from "./Contact"
import About from "./About"
import Error from "./Error"
import Products from "./Products"
import Cart from "./Cart"
import SingleProduct from "./SingleProduct"
import Header from "./components/Header"
import { ThemeProvider } from 'styled-components';
import Footer from "./components/Footer"
import GlobalStyle from "./GlobalStyle"
import ConfirmOrder from "./ConfirmOrder"



//blue..#1b324a
//brown..#7c441c
//yellow#fb9c1c
function App() {

  const theme = {
    colors: {
      primary: '#1b324a',
      primaryLight: '#e6eef7',
      secondary: "#fb9c1c",
      brown: "#7c441c",
    },
    media: {
      mobile: "768px",
      tab: "1000px"
    }
  }
  
  return (
    <>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <GlobalStyle></GlobalStyle>
          <Header></Header>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/singleproduct/:id" element={<SingleProduct />} />
            <Route path="/confirmOrder" element={<ConfirmOrder/>} />
            <Route path="*" element={<Error />} />
          </Routes>
          <Footer></Footer>
        </ThemeProvider>
      </BrowserRouter>
    </>
  )
}

export default App
