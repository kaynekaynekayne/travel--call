import {createGlobalStyle} from 'styled-components';

export const GlobalStyles=createGlobalStyle`

    html,body{
        font-family: 'Noto Sans KR', sans-serif;
        height:100%;
    }

    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
        text-decoration: none;
        color:inherit;
        list-style:none;
        border:none;
    }
    img{
        margin:0.5rem 0 1.5rem;
    }
    .vh-90{
        height:90vh;
    }

`;
