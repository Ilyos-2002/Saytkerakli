import { Link } from "react-router-dom"
import "./Header.css"





export function HeaderTop() {
    return (
        <div className="headerTop container">
            <Link to="/">
                <img src="https://static.tuit.uz/assets/2d4211c5/img/src/newlogotype.png" width={43} height={43} alt="tuitlogo" />
            </Link>
            <span className="headerTopContent">
                Muhammad al-Xorazmiy nomidagi Toshkent Axborot Texnologiyalari Universiteti
                <p>Oliy Matematika Kafedrasi</p>
            </span>
            <Link to="/"><img src="https://picsum.photos/40" style={{ borderRadius: "50%", padding: "4px" }} width={43} height={43} alt="" />
            </Link>


        </div>
    )
}