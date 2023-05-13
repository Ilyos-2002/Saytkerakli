import "./HomeMain.css";


export function HomeMiddle() {
    return (
        <div className="container homeMidlleSection">

            <div>
                <img className="homeMidlleImg" src="https://static.tuit.uz/uploads/1/dSGJ96bCrSAzL0QzvCdTrlDUFZt0usbl.png" width={167} height={167} alt="" />
            </div>
            <div className="homeMidlleCard">
                <span>Kafedra mudiri:
                    <p>Qalandarov O‘tkir</p>
                </span>
                <span>
                    Qabul vaqti:
                    <p>Chorshanba , Juma (14:00 – 16:00)</p>
                </span>
                <span>
                    Telefon:
                    <a href="tel:+ (0 371) 238-64-78"> (0 371) 238-64-78</a>
                </span>
                <span>
                    E-mail: <a href="mailto:qalandarov@tuit.uz">qalandarov@tuit.uz</a>
                </span>


            </div>
        </div>
    )
}