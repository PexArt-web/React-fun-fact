import logo192  from '../images/logo192.png'
const Navbar = (props) => {
    return ( 
        <nav className={props.darkMode ? "dark": ""}>
           <img  className ='nav--icon'src={logo192} alt=""/>
            <h3 className = 'nav--logo_text'>ReactFacts</h3>
            
            <div 
                className="toggler" 
            >
                <p className="toggler--light">Light</p>
                <div 
                    className="toggler--slider"
                    onClick={props.toggleMode}
                >
                    <div className="toggler--slider--circle"></div>
                </div>
                <p className="toggler--dark">Dark</p>
            </div>
        </nav>
    );
}
 
export default Navbar;