import axios from "../../helper/axiosHelper";
import { Navbar } from 'react-bootstrap';

const Header = () => {

    return (

            <Navbar bg="info" sticky="top">
            <Navbar.Brand style={{color: "white", fontSize:"30px"}}>XMEME</Navbar.Brand>
            </Navbar>
        );
}

export default Header;