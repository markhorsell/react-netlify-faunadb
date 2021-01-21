import { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import styled from "styled-components";

const LoaderWrapperDiv= styled.div`

  background-color:orange;
`;

const Loader = (props) => {
  const [node] = useState(document.createElement('div'));
  const loader = document.querySelector('#loader');
  useEffect(() => {
    loader.appendChild(node).classList.add('message');
  }, [loader, node]);
  useEffect(() => {
    if (props.show) {
      loader.style.display="block";

    } else {
      loader.style.display="none";
  
    }
  }, [loader, props.show]);
  return ReactDOM.createPortal(<LoaderWrapperDiv>{props.children}</LoaderWrapperDiv> ,node);
};
export default Loader;