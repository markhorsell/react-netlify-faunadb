import React from 'react'
import { theme } from "./theme"

//Requires a restart of netlify to see changes
export default () => (

  <style>{`
  :root {
    --main-bg-color: red;
  }
  
    ::-webkit-scrollbar {
        background:#333;
      
      }
      ::-webkit-scrollbar-corner {
        background:#333;
      }
      ::-webkit-scrollbar-thumb {
        background:#666;
      }
      html {
        box-sizing: border-box;
        scroll-behavior: smooth;
        font-family: Lato, sans-serif;
      
        
      }
      *, *:before, *:after {
        box-sizing: inherit;
        margin:0;
        padding:0;
       
      }
        body {
            color: #fff;
            margin: 0;
            font-size: 16px;
            background-color: var(--main-bg-color);
            display: flex;
            align-content : center;
         
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
)




