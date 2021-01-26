import styled from 'styled-components'

const CreateOrphanageDiv = styled.div`
padding-top: 64px;

header{
  display: flex;
  justify-content:space-between;
  width: 96%;
  margin: 20px auto;
  font-family: 'Comfortaa';
  font-size: 22px;
  font-weight: bold;
  color: #353535;
}
header div{
  display: flex;
  align-items:center;
  flex-direction:column;
  background: #82B8D9;
  border-radius: 18px;
  padding: 20px;
}
header div h1{
  font-family: 'Fredoka One';
  color: #3068D9;
  font-size: 42px; 
  border-bottom: 4px solid #f5f5f6;
  margin-bottom: 15px;
}
header div p {
  color:#575FF2;
}
header div form {
  width: 100%;
}
header div form input{
  width: 100%;
  border: none;
  border-bottom: 3px solid #575FF2;
  margin-bottom: 15px;
  padding:10px 0;
  background: white;
  outline: 0;
  font-size: 16px;
  color: #303030;
  font-family: 'Comfortaa';
  font-weight: bold;
}
.input-value{
  margin:0;
  font-size: 16px;
  text-align: right;
}
header div form article {
  display: flex;
  justify-content:center;
  align-items:center;
  background: white;
  border-radius: 10px ;
  margin-bottom: 15px;
}
form article p{
  padding:10px 0;
  font-size: 16px;

  border-bottom: 3px solid #575FF2;
}
 form button {
  width: 100%;
  border:none;
  padding: 10px 0;
  font-weight: bold;
  font-family: 'Fredoka One';
  color: #575FF2;
  border-bottom:5px solid #575FF2;
  margin: 20px 0;
  background: white;
  cursor: pointer;
  font-size: 22px; 
}
@media(max-width:1000px){
  header{
    flex-direction:column;
  }
  section{
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    margin-top: 25px;
  }
  section img{
    width: 350px;
  }
}
`

export default CreateOrphanageDiv