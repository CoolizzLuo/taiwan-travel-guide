import { css } from '@emotion/react'


export const GlobalStyle = css`
  @import url('https://fonts.googleapis.com/css?family=Noto+Sans+TC:100,300,500,700,900&display=swap');
  * {
    margin: 0;
    padding: 0;
    list-style: none;
    font-family: 'Noto Sans TC', sans-serif;
    transition: color 2s;
    transition: background-color .8s;
  }

  html, body, #root {
    width: 100%;
  }
`