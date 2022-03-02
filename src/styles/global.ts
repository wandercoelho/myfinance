import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root{
   
    --red:#f7414e;
    --blue:#00b4d8;
    //--blue:#5429CC;
    --green:#33CC95;

    --blue-light:#6933FF;
    --color-header:#131313;

    --text-title:#363F5F;
    --text-body:#969CB3;

     --background: #f0f2f5;
     --shape:#FFFFFF; 

}

*{
    margin:0;
    padding: 0;
    box-sizing: border-box;
}

//estilizando tamanho da fonte. Por padrão Desktop é 16px
// nós iremos utilizar a medida REM.
// A ideia de utilizar percentual da fonte é dar liberdade ao usuário configurar o tamanho que ele quiser, mesmo no celular.
html{
    @media(max-width:1080px){
    font-size: 93.75%; //equivalente a 15px
    }

    @media (max-width:720px){
    font-size: 87.5%; // equivalente a 14px
    }
}
// REM = 1rem é = 16px


body{
    background: var(--background);
    -webkit-font-smoothing: antialiased;
}

body,input, textarea, button{
    font-family: 'Nunito', sans-serif;
    font-weight: 700;
}

h1, h2, h3, h4, h5, h6, strong{
    font-weight: 600;
}

button{
    cursor:pointer;
}

[disabled]{
    opacity: 0.6;
    cursor:not-allowed;
}

.react-modal-overlay{
background: rgba(0, 0, 0, 0.5);
position: fixed;
top:0;
bottom: 0;
left:0;
right:0;
display: flex;
align-items: center;
justify-content: center;

}

.react-modal-content{
width: 100%;
max-width: 576px;
background: var(--background);
padding: 3rem; //48px
position: relative;
border-radius: 0.24rem;
}

.react-modal-close{
    position: absolute;
    right: 1.5rem;
    top:1.5rem;
    border:0;
    background: transparent;

    transition: filter 0.2s;
    &:hover{
        filter:brightness(0.8)
    }
}

`;
