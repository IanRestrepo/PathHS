import './css/NavBar.css'

const NavBar = ()=> {
    return (
        <>
            <nav>
                <ul>
                    <li><a href="#" onClick={alert("You are already in home page")}>Home</a></li>
                    <li><a href="#" onClick={alert("im learning about routes please waite while i learn... While you wait to me you can eat an hamburguer :3 🍔")}>About Us</a></li>
                    <li><a href="#" onClick={alert("im learning about routes please waite while i learn... While you wait to me you can eat an hamburguer :3 🍔")}>Pircings</a></li>
                    <li><a href="#" onClick={alert("im learning about routes please waite while i learn... While you wait to me you can eat an hamburguer :3 🍔")}>Contact Us</a></li>
                </ul>
            </nav>

            {
                
            }
        </>
    )
}

export default NavBar;