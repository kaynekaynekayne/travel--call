import {createGlobalStyle} from 'styled-components';

export const GlobalStyles=createGlobalStyle`

    body{
        font-family: 'Noto Sans KR', sans-serif;
    }

    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
        text-decoration: none;
        color:inherit;
        list-style:none;
    }
`;
