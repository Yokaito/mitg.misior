import { createGlobalStyle } from 'styled-components';
import Background from '@/assets/images/background/background.webp';

export default createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    ::-webkit-scrollbar {
      width: 2px;
      height: 2px;
    }
    ::-webkit-scrollbar-button {
      width: 0px;
      height: 0px;
    }
    ::-webkit-scrollbar-thumb {
      background: #e1e1e1;
      border: 0px none #ffffff;
      border-radius: 50px;
    }
    ::-webkit-scrollbar-thumb:hover {
      background: #ffffff;
    }
    ::-webkit-scrollbar-thumb:active {
      background: #000000;
    }
    ::-webkit-scrollbar-track {
      background: #666666;
      border: 0px none #ffffff;
      border-radius: 50px;
    }
    ::-webkit-scrollbar-track:hover {
      background: #666666;
    }
    ::-webkit-scrollbar-track:active {
      background: #333333;
    }
    ::-webkit-scrollbar-corner {
      background: transparent;
    }
  }

  html, body, #root {
    height: 100vh;
    background-color: ${({ theme }) => theme.backgrounds.root.default};
    background-image: ${`url(${Background.src})`};
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center top;
    font-size: ${({ theme }) => theme.typography.baseFontSize};
  }

  *, button, input {
    border: 0;
    outline: 0;
  }

  .link {
    text-decoration: none;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
  }

  p {
    font-size: 0.9rem;
    text-align: justify;
  }
`;
