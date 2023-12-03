import Image from "next/image";
import Link from "next/link";
import React from "react";

const Nav = () => {
  return (
    <nav>
        <div className="nav__top">
          <div className="container">
          <div className="left">
            <img src="/LOGO.svg" fill />
            <h1>
              Аренда спецтехники <br /> LIEBHERR c 2000 года
            </h1>
          </div>
          <div className="orta">
            <h1>10:00-17:00</h1>
            <h3>
              г. Москва,
              <br />
              ул. Куликовская, 12
            </h3>
          </div>
          <div className="btn">
          <button>Свяжитесь со мной</button>
          </div>
          <div className="right">
            <div className="right__num">
              <h4>+7 (495) 645-19-20</h4>
              <h4>+7 (495) 226-20-30</h4>
              <h4>+7 (499) 929-96-66</h4>
            </div>
          </div>
          </div>
          
        </div>
        <div className="nav__bottom">
        <div className="container">
          
          <div className="nav__bottom__left">
            <Link href={"/"}>Home</Link>
            <Link href={"/amigo"}>Блог</Link>
          </div>
          <div className="nav__bottom__right">
            <input type="text" />
          </div>
        </div>
        </div>
       
    </nav>
  );
};

export default Nav;
