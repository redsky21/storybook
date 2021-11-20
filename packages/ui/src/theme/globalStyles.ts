import { css } from '@emotion/react';

const globalStyles = css`
  html {
    font-size: 10px;
    box-sizing: border-box;
    *,
    *::before,
    *::after {
      box-sizing: inherit;
    }
  }
  body,
  table,
  input,
  select,
  button {
    font-family: 'Roboto', 'Noto Sans KR', sans-serif;
  }
  a {
    &,
    &:hover,
    &:focus {
      color: currentColor;
      text-decoration: none;
    }
  }

  ul,
  ol {
    list-style: none;
    margin: 0;
  }

  button,
  select {
    appearance: none;
    background-color: inherit;
    border: 0;
    margin: 0;
    padding: 0;
  }

  input::-ms-clear,
  input::-ms-reveal {
    display: none;
    width: 0;
    height: 0;
  }
  input::-webkit-search-decoration,
  input::-webkit-search-cancel-button,
  input::-webkit-search-results-button,
  input::-webkit-search-results-decoration {
    display: none;
  }
`;

export default globalStyles;
