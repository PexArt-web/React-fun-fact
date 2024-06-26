import logo192  from '../images/logo192.png'
const Navbar = () => {
    return ( 
        <nav className="navbar">
           <img  className ='nav--icon'src={logo192} alt=""/>
            <h3 className = 'nav--logo_text'>ReactFacts</h3>
            <h4 className = 'nav--title'>React Course - Project 1</h4>
        </nav>
    );
}
 
export default Navbar;