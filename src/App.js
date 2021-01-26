import NavBar from "./components/NavBar/NavBar";
import GlobalStyles from "./styles/GlobalStyles";
import Footer from "./components/Footer/Footer";
import Routes from './routes'
import { AuthProvider } from './context/authContext'

import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()

function App() {
  return (
<>    
<AuthProvider>
        <GlobalStyles/>
              <NavBar/>
        <Routes/>
      <Footer/>
</AuthProvider>

</>
  );
}

export default App;
