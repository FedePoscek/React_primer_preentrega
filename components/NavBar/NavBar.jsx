import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
    return (
        <header>
            <nav>
                <div className="LogoTienda">ElectroStore</div>

                <ul>
                    <li>
                        <button>Celulares</button>
                    </li>
                    <li>
                        <button>Tablets</button>
                    </li>
                    <li>
                        <button>Notebooks</button>
                    </li>           
                </ul>

                <CartWidget />
            </nav>
            
        </header>
    )
}

export default NavBar