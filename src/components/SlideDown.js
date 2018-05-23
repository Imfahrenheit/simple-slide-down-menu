import React from "react";
import "../css/App.css";
import Product from "../components/Product";


const up = {
    
    maxHeight: "1000px",
    transition: "0.5s ease-in",
    overflow: 'scroll',
    borderBottom:"1px solid black"
}
const down = {
    maxHeight: "0",

    transition: "0.5s ease",
    overflow: 'scoll',
    borderBottom: "1px solid black"

}
const slide1 = {
  transform: "translateX(0)",
  transition: "0.5s ease-in-out"
};
const slide2 = {
    height:"50vh",
  transform: "translateX(-70%)",
  color: "rgb(152, 36, 224) ",
  transition: "0.5s ease-in-out"
};



const SlideDown = props => {


  return (
      <div style={props.slideDown?up:down}>
          <div 
      className="section1">
        <div style={!props.showInput? slide1 : slide2} className="slideDown">
        {!props.showInput ? (<div style={{width:"70%"}} > 
            <div className="flexIcons">
            <div>
              <i className="fas fa-map-marker" />
              <span className="icontText">Etsi kauppa</span>{" "}
            </div>
            <div>
              <i className="fas fa-question-circle" />
              <span className="icontText">Ettsi ohjeita</span>{" "}
            </div>
            <div>
              <i className="fas fa-users" />{" "}
              <span className="icontText">Kysy Yhteisöltä</span>
            </div>
            <div>
              <i className="fas fa-phone" />
              <span className="icontText">Ota yhteyttä</span>
                          </div>
            </div>
                  </div>) : null}

          <div className="input-container">
            <i className="fas fa-search" />
            <input
              onFocus={props.handleInput}
              type="text"
              placeholder="Etsi..."
            />
          </div>
        </div>
        {props.showInput ? (
          <div onClick={props.handleInput} className="crossButton">
            x
          </div>
        ) : null}
      </div>
      <Product />
    </div>
  );
};
export default SlideDown;
