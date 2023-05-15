import { HeaderBotoomNavbar } from "./HeaderBotomNavbar";
import { HeaderMidleNavbar } from "./HeaderMidleNavbar";
import { HeaderTop } from "./HeaderTop";
import "./Header.css"
import btn from "./burger.svg.svg"

export function Header() {
    return (
        <header className="header container">
            <HeaderTop />
            <nav>
                <HeaderMidleNavbar />
                <HeaderBotoomNavbar />
                <button className="gam-btn">
                    <img src={btn} alt="" />
                </button>
            </nav>
        </header>
    )
}