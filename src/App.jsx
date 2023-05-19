import "./App.css";
import NavBar from "./components/NavBar";
import Accueil from "./components/accueil/Accueil";
import Info from "./components/accueil/info";
import Description from "./components/accueil/Description";
import Vecteur from "./components/Vecteur";
import TopVilles from "./components/accueil/TopVilles"
function App() {
  return (
    <>
      <div className="accueil-div">
        <br />
        <NavBar></NavBar>
        <Accueil></Accueil>
        <Vecteur></Vecteur>
      </div>
      <Description></Description>
      <Info></Info>
      <TopVilles></TopVilles>
    </>
  );
}

export default App;
