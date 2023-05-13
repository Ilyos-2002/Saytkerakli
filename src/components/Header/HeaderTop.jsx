import "./Header.css"





export function HeaderTop() {
    return (
        <div className="headerTop container">
            <a href="#">
                <img src="https://static.tuit.uz/assets/2d4211c5/img/src/newlogotype.png" width={43} height={43} alt="tuitlogo" />
            </a>
            <span className="headerTopContent">
                Muhammad al-Xorazmiy nomidagi Toshkent Axborot Texnologiyalari Universiteti
                <p>Oliy Matematika Kafedrasi</p>
            </span>
            <a href=""><img src="https://picsum.photos/40" style={{ borderRadius: "50%", padding: "4px" }} width={43} height={43} alt="" />
            </a>


        </div>
    )
}