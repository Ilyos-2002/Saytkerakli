import { Link, NavLink } from "react-router-dom";
import "./Header.css";


export function HeaderBotoomNavbar() {
    return (

        <ul className="">
            <li>
                <NavLink to="/kafedratarixi" > Kafedra tarixi</NavLink>

            </li>
            <li><NavLink to="/faxriylarimiz">Faxriylarimiz</NavLink></li>
            <li><NavLink to="/kafedratarkibi">Kafedra tarkibi</NavLink></li>
            <li><NavLink to="/kafedrafanlar">Kafedra fanlar</NavLink></li>
            <li><NavLink to="/darsjadval">Dars jadval</NavLink></li>
            <li><NavLink to="/me'yoriyhujjatlar">Me'yoriy hujjatlar</NavLink></li>
            <li><NavLink to="/faoliyat">Faoliyat</NavLink></li>
            <li><NavLink to="/statistika">Statistika</NavLink></li>
        </ul>

    )
}