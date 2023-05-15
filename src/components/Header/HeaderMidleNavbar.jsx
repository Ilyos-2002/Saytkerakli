import { Link, NavLink } from "react-router-dom"
import "./Header.css"
import { Students } from "../../Pages"
export function HeaderMidleNavbar() {
    return (

        <ul className="">

            <li><NavLink to="/talabalar">Talabalarga</NavLink></li>
            <li><NavLink to="/abituriyentlar">Abutiryentlar</NavLink></li>
            <li><NavLink to="/hamkorlar">Hamkorlar</NavLink></li>
            <li><NavLink to="/yangiliklar">Yangiliklar</NavLink></li>
            <li><NavLink to="/mukofotlar">Mukofotlar</NavLink></li>
            <li><NavLink to="/e'lonlar">E'lonlar</NavLink></li>
            <li><NavLink to="/aloqalar">Aloqalar</NavLink></li>
            <li><NavLink to="/kalkulyatorlar">Kalkulyatorlar</NavLink></li>
            {/* <li>Abutiryentlar</li>
                <li>Hamkorlar</li>
                <li>Yangiliklar</li>
                <li>Mukofotlar</li>
                <li>E'lonlar</li>
                <li>Aloqalar</li>
                <li>Kalkulyatorlar</li> */}
        </ul>

    )
}