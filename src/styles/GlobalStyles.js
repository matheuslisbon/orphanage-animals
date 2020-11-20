import {createGlobalStyle} from 'styled-components'


export default createGlobalStyle`
*,
:root{
  margin:0;
  padding:0;
  box-sizing:border-box;
  
}
li,
a{
  text-decoration:none;
  list-style:none;
}
body{
  background: white;
  color:#353535;
  font-family: 'Roboto', 'sans-serif';
}
`