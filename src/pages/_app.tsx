import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

import GlobalStyle from '../styles/global'
import { ContainerPage } from '../styles/global'
import theme from '../styles/theme'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      
      <ContainerPage>
        <Component {...pageProps} />
      </ContainerPage>

      <GlobalStyle />
    </ThemeProvider>
  )
}

