import { useEffect, useState } from "react";
import flowersTop from "./assets/flowers_top.png";
import flowersBottom from "./assets/flowers_bottom.png";
import viteLogo from "./assets/wedding.svg";
import "./App.css";
import Portata from "./components/Portata";
import { menu,logoSvg } from "./config/menu";
import PlaceholderImage from "./components/PlaceholderImage";
function App() {
  const [count, setCount] = useState(0);

  useEffect(()=>{
      document.getElementById('logo').innerHTML=logoSvg()
  },[logoSvg])
  return (
    <>
    <div className="container_page">
    <PlaceholderImage src={flowersTop} positionClass='top_right' />
    <div className="container">
    <div className="title">
        <h2>S</h2>
        <h3>&</h3>
        <h2>D</h2>
      </div>
      <div className="menu_title">
      <p>02 / 06 / 2024</p>
       
        
      </div>
      <div id='logo'>
        <img src={viteLogo} className="logo" alt="Vite logo" />
      </div>
      <div className="menu_title">
     
        <h2>Menu</h2>
        
      </div>
      
        {
          menu && Array.isArray(menu) ?

          menu?.length > 0 ?
            menu.map((el,i)=> <Portata key={`${el.portata}${i}`}portata={el.portata} elenco={el.elenco}/>)
          : (<Portata portata={'Nessun elemento'} elenco={[]}/>)
          :
          (
            <div>Errore al caricamento dei dati</div>
          )
        }
       
      </div>
      <PlaceholderImage src={flowersBottom} positionClass='bottom_left' />
      </div>
    </>
  );
}

export default App;
