import NavBar from "./components/NavBar/NavBar";
import GlobalStyles from "./styles/GlobalStyles";
import Footer from "./components/Footer/Footer";
import Routes from './routes'

function App() {
  return (
<>
      <GlobalStyles/>
              <NavBar/>
        <Routes/>
      <Footer/>
</>
  );
}

export default App;
