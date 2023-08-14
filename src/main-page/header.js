import logo from './GloboLogo.png'
import {Component} from "react";

// const Header = ({title, subtitle}) => (
//     <header className="row">
//         <div className="col-md-5">
//             <img src={logo} className="logo" alt="logo" />
//         </div>
//         <div className="col-md-7 mt-5 subtitle">
//             {subtitle}
//             {title}
//         </div>
//     </header>
// );

class Header extends Component {
    render(){
        return(
            <header className="row">
                <div className="col-md-5">
                    <img src={logo} className="logo" alt="logo" />
                </div>
                <div className="col-md-7 mt-5 subtitle">
                    {this.props.subtitle}
                </div>
            </header>
        )
    }
}


export default Header;
