import { Link } from "react-router-dom";
import { useAppSelector } from "../../store/slices/hooks";

const Header = ()=>{
    const busket = useAppSelector(state=>state.prod.busket)
    return(
        <header className="header__container">
            <div className="container">
                <div className="header">
                    <nav className="header__nav">
                        <ul className="header__ul">
                            <li className="header__li"><Link to={'/'}>Продукты</Link></li>
                            <li className="header__li"><Link to={'/busket'}><span className="icon-busket busket"><span className="count__busket">{busket.length}</span></span></Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header;