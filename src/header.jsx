// Import Libraries
import React from "react";
//create componenet
class Header extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      judul: 'ini judul dari state',
      dataMakanan : this.props.list
  };
  this.handlePesan = this.handlePesan.bind(this);
  };
  handlePesan(pesan, e){
    e.preventDefault()
    alert ("gwa ❤ mie ayam");
    alert ("punya anak 500000000000000000000000000000000000000000000000000000000000000000000000000000000000000juta");
  };
    render() {
      return (
          <div>
            <h2>ini Makanan Khas Indonesia</h2>
            <h3>{this.state.judul} </h3>
            <p>mengakses props dari App secara langsung : {this.props.list}</p>
            <p>mengakses props dari state : {this.state.dataMakanan}</p>
            <a href='/' onClick={ (e) => this.handlePesan("ini dari parameter", e)}>Halaman Header</a>
          </div>
      );
    }
}  
// export component 
export default Header;
