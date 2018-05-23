import React, { Component, Fragment } from "react";
import Hamburger from "../components/hamburger";
import SlideDown from "../components/SlideDown";
import "../css/App.css";




class NavBar extends Component {
  
  state = {
    slideDown: false,
    showInput: false
  };
  showExtendedMenu = () => {
    this.setState({ slideDown: !this.state.slideDown });
  };
  showInputHandler = () => {
    this.setState({ showInput: !this.state.showInput });
  };

  render() {
    console.log(this.state.slideDown)
    return (
      <Fragment >
        <div style={{ height: "30px", background: "rgb(242, 242, 242)" }}>
          
        </div>
        <div 
        className="nav-container">
          <div className="logo">
            <img src={require("../assets/telia.png")} alt="" />{" "}
          </div>
          <div className="navMenu">
            <div className="navItem">
              <Hamburger
                showNav={this.showExtendedMenu}
                isActive={this.state.slideDown}
              />
              <h3>MENU</h3>
            </div>

            <div className="navItem">
              <i className="fas fa-user" /> <h3>LOGIN</h3>
            </div>
            <div className="navItem">
              <i className="fas fa-shopping-cart" />
            </div>
          </div>
        </div>
        <SlideDown
          showInput={this.state.showInput}
          handleInput={this.showInputHandler}
          slideDown={this.state.slideDown}
        />
      </Fragment>
    );
  }
}
export default NavBar;
