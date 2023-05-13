import { HeaderBotoomNavbar } from "./HeaderBotomNavbar";
import { HeaderMidleNavbar } from "./HeaderMidleNavbar";
import { HeaderTop } from "./HeaderTop";

export function Header() {
    return (
        <header>
            <HeaderTop />
            <nav>
                <HeaderMidleNavbar />
                <HeaderBotoomNavbar />
            </nav>
        </header>
    )
}