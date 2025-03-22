// import libraries 
import React from "react";
// create component
class Header extends React.Component{
    render(){
      return (
        <h2>ini adalah makanan khas indonesia </h2>
      );
    }
  }
  function App(){
    return (
      <div>
      <h1>Hello React</h1>
      <Header />
      <Footer />
      </div>
    );
  }
  // Export default
  export default Header;

