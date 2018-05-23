import React from 'react'
import '../css/App.css'

 const Product = () => {
  return (
    <div className="product-container" >
                    <div>
              <img  src={require("../assets/tablet.svg")} alt="" /> <span>Laitteet</span> </div>
                    <div>
              <img src={require("../assets/sim-card.svg")} alt="" /> <span>Liittymät</span></div>
                    <div>
              <img src={require("../assets/wifi.svg")} alt="" /> <span>Netti kotin</span></div>
                    <div>
              <img src={require("../assets/liiga.png")} alt="" /> <span> Liiga</span> </div>
                    <div>
              <img src={require("../assets/video-player.svg")} alt="" />  <span>Tv ja vihde</span></div>
                    <div>
              <img src={require("../assets/dots-menu.svg")} alt="" /> <span>Palvelut</span>    </div>
                    <div>
              <img src={require("../assets/shopping-bag.svg")} alt="" /> <span>Tarjokset</span> </div>
                    <div>
              <img src={require("../assets/airplane.svg")} alt="" /> <span>Puhelin <br/>Ulkomailla</span> </div>
    </div>
  )
}
export default Product 