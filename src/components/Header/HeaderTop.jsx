import { Link } from "react-router-dom"
import "./Header.css"
import logomath from "./tuitmatlogo.jpg"





export function HeaderTop() {
    return (
        <div className="headerTop ">
            <Link to="/">
                <img src="https://static.tuit.uz/assets/2d4211c5/img/src/newlogotype.png" width={43} height={43} alt="tuitlogo" />
            </Link>
            <span className="headerTopContent">
                <p>
                    Muhammad al-Xorazmiy nomidagi Toshkent Axborot Texnologiyalari Universiteti
                </p>
                <p>Oliy Matematika Kafedrasi</p>
            </span>
            <Link to="/"><img src={logomath} style={{ borderRadius: "50%" }} width={43} height={43} alt="" />
            </Link>


        </div>
    )
}