import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ThemeProvider } from '@emotion/react'
import styled from '@emotion/styled'
import theme from './constants/theme'
import Header from './components/Header'
import Footer from './components/Footer'
import Test from './components/Test'
import { getAuthToken, getTheme } from './localStorageAPI.js'


const Container = styled.header`
  height: 100vh-20px;
`


function App() {
  const [currentTheme, setCurrentTheme] = useState(getTheme())
  return (
    <ThemeProvider theme={theme[currentTheme]}>
      <BrowserRouter>
        <Header />
        <h1>Hello React</h1>
        <Routes>
          <Route path='/a' element={<Test />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
