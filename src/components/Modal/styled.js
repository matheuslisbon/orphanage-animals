import styled from 'styled-components'

const ModalStyled = styled.div`
  display:flex;
  flex-direction:column;
  position: fixed;
  z-index: 99;
  align-items:center;
  justify-content:center;
  right: 0;
  margin:80px 20px;

  padding: 20px;
  background: rgba(dd, dd, dd, 0.5);
  backdrop-filter: saturate(180%) blur(20px);
  border: 1px solid #dddddd;
  box-shadow: 0px 0px 20px #dddddd;
  color: #505050;
  border-radius: 8px;

 h1{
  font-family:'Fredoka One';
 }
 p{
   font-family: Comfortaa;
   font-weight:bold;
 }
 p.closed{
  margin-left: 110px;
  margin-top:-10px;
  padding:0 5px;
  font-family:'Fredoka One';

  font-size: 24px;
  color:red;
  cursor: pointer;
 }
 ul {
   width: 100%;
 }
 ul li {
  display: flex;
  justify-content:space-between;
  border-bottom: 1px solid #dddddd;
  margin:13px 0;
  cursor: pointer;
  width:100%;
  align-items:center; 
 }
 button {
  width: 100%;
  padding:10px 0;
  border: none;
  color: #454545;
  font-size: 18px;
  font-family: 'Fredoka One';
  background:  #82D9D0cc;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.4s;
  margin: 7px 0;
 }
 button:hover{
  background:  #1764C2cc;
  color: #fff;
 }

`

export default ModalStyled