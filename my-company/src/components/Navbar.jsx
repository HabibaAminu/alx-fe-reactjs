import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{
      backgroundColor:'#282A54',
      display:'flex',
      padding: '10px 0',
      textAlign:'center',
      color:'white',
      justifyContent:'space-between',
      gap:'10'}}>
        <Link to="/" style={{textDecoration:'none', color:'white'}}>Home</Link>
        <Link to="/About" style={{textDecoration: 'none', color:'white' }}>About</Link>
        <Link to="/Services" style={{textDecoration: 'none', color:'white' }}>Services</Link>
        <Link to="/Contact"style={{textDecoration: 'none', color:'white' }}>Contact</Link>   
    </nav>
    
  );
}


export default Navbar;