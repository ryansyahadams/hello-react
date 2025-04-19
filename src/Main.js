import { Component }from "react";

class Main extends Component{
    constructor(props){
        super(props)
        this.state = {
            title: 'Menu Makanan'
        }
    
        this.rubahData = this.rubahData.bind(this);
    }rubahData(){
        this.setState({ title: 'Pilih makanan'});
    }render(){
        return(
            <div>
             <h3>{this.state.title}</h3>
                <button onClick={this.rubahData }>Ubah Makanan </button>
         </div>
        );
    };
};
export default Main;
