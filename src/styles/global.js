import React from "react";
import { theme } from "./theme";

//Netlify doesnt hot reload this so will require a refresh to see changes
export default () => (
  <style>
    {`

  @import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');
  
  :root {
    --main-bg-color: white;
    --secondary-bg-color: #4e4e4e;
    --main-text-color: black;
    --secondary-text-color: white;
  
    /* Typography using Golden Ratio scale */
    --fs-1: 1rem;
    --fs-2: 1.618rem;
    --fs-3: 2.618rem;
    --fs-4: 4.236rem;
    --fs-5: 6.854rem;
    --fs-small: 0.618rem;
  }
  body {
    font-size: var(--fs-1);
  }
  h3 {
    font-size: var(--fs-2);
  }
  h2 {
    font-size: var(--fs-3);
  }
  h1 {
    font-size: var(--fs-4);
  }
  
  ::-webkit-scrollbar {
    background: #333;
  }
  ::-webkit-scrollbar-corner {
    background: #333;
  }
  ::-webkit-scrollbar-thumb {
    background: #666;
  }
  html {
    box-sizing: border-box;
    scroll-behavior: smooth;
    font-family: Lato, sans-serif;
  }
  *,
  *:before,
  *:after {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
  }
  body {
    color: var(--main-text-color);
    margin: 0;
  
    background-color: var(--main-bg-color);
    display: flex;
    align-content: center;
  
    justify-content: center;
  }
  * {
    box-sizing: border-box;
  }
  div {
    display: flex;
    flex-wrap: wrap;
  }
  

        
    `}
  </style>
);
