import { Navbar } from 'react-bootstrap';

const Header = () => {

    return (
            <>
            <Navbar bg="primary" className="justify-content-between">
            <Navbar.Brand style={{color: "white", fontSize:"35px", fontFamily:"monospace"  }}>XMEME</Navbar.Brand>
            <Navbar.Brand href="https://akshayrr-xmeme.herokuapp.com/swagger-ui/" target="_blank" 
                style=
                {{color: "white", fontSize:"15px", fontFamily:"monospace", marginBottom:"-2px", padding:"6px", border:"2px solid white" 
                }}>Swagger-UI
            </Navbar.Brand>
            </Navbar>
            </>
        );
}

export default Header;
