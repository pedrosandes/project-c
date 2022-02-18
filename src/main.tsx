import React from 'react'
import ReactDOM from 'react-dom'
import { AppRoutes } from './router'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/defaultTheme'
import { GlobalStyle } from './styles/globalStyles'
import './styles/index.css'

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <AppRoutes />
      <GlobalStyle />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
