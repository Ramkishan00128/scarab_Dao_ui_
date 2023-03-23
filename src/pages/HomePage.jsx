import Image from "next/image";
import style from ".././styles/HomePage.module.css";
import menu from "../../public/mobile/menu_th_icon 1.png";
import beetal from "../../public/Assests_1st Frame/scarab 1.png";
import horus_eye_1 from "../../public/mobile/horus eye 1.png";
import pharaoh from "../../public/mobile/pharaoh 1.png";
import twitter from "../../public/Assests_1st Frame/twitter 1.png";
import telegram from "../../public/Assests_1st Frame/telegram 1.png";
import discord from "../../public/Assests_1st Frame/Discord 1.png";
import book from "../../public/Assests_1st Frame/book 1.png";
import leftArrow from "../../public/mobile/arrow 2.png";
import rightArrow from "../../public/mobile/arrow 3.png";

import desktop_logo from "../../public/Assests_1st Frame/Logo 1.png";
import upArrow from "../../public/Assests_1st Frame/arrow 1.png";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Home_header = () => {
  const [hide, setHide] = useState(true);
  const [theme, setTheme] = useState(0);

  // setInterval(() => {
  //   if (theme == 0 || theme == 1) {
  //     setTheme(theme + 1);
  //   } else {
  //     setTheme(0);
  //   }
  // }, 5000);

  const handleToggle = () => {};
  const themedata = [beetal, horus_eye_1, pharaoh];
  const datatext = [
    "INVESTING IN REVOLUTION",
    "FIGHT AGAINST CENTRALIZATION",
    "FIGHT AGAINST CENTRALIZATION",
  ];

  const nextImage = () => {
    console.log("next", theme);
    if (theme === 0 || theme === 1) {
      setTheme(theme + 1);
    } else {
      setTheme(2);
    }
  };
  const previousImage = () => {
    if (theme === 2 || theme === 1) {
      setTheme(theme - 1);
    } else {
      setTheme(0);
    }
  };

  return (
    <>
      {/* <div className={style.bg_theme1} */}
      <div
        className={`${theme == 0 && style.bg_theme1} ${
          theme == 1 && style.bg_theme2
        } ${theme == 2 && style.bg_theme3}`}
      >
        <motion.div
          initial={{ y: "-100%" }}
          whileInView={{ y: 0 }}
          exit={{ y: "-100%" }}
          className={`${style.drawer} ${hide && style.hide}`}
        >
          <ul className={style.nav_list}>
            <li>lorem Ispum</li>
            <li>lorem Ispum</li>
            <li>lorem Ispum</li>
            <li>lorem Ispum</li>
          </ul>
          <button className={style.drawer_btn}>Stack and Vote SCARAB</button>
          <button className={style.drawer_btn}>Stack and Vote BARACS</button>
        </motion.div>
        <Image className={style.logo} src={desktop_logo} alt='logo' />
        <Image
          onClick={() => handleToggle(setHide(!hide))}
          className={style.menu_icon}
          src={menu}
          alt='menu'
        />
        <Image
          className={`${theme == 0 ? style.beetal_theme0 : ""} ${
            theme == 1 ? style.beetal_theme1 : ""
          } ${theme == 2 ? style.beetal_theme2 : ""}`}
          src={themedata[theme]}
          alt='beetal'
        />
        {/* Desktop_header_code_Start */}
        <div className={style.Navbar}>
          <div className={style.navbar_left}>
            <div className={style.button_align_left}>
              <button className={style._header_btn}>
                <p>stack and Vote</p>
                <p>SCARAB</p>
              </button>
            </div>

            <a href='#'>Lorem Ispum</a>
            <a href='#'>Lorem Ispum</a>
          </div>
          <div className={style.navbar_right}>
            <a href='#'>Lorem Ispum</a>
            <a href='#'>Lorem Ispum</a>
            <div className={style.button_align_right}>
              <button className={style._header_btn}>
                <p>stack and Vote {""}</p>
                <p>BARACS</p>
              </button>
            </div>
          </div>
        </div>
        <Image
          className={style.Desktoplogo}
          src={desktop_logo}
          alt='logo'
        ></Image>
        <div className={style.desktop_HomePage_panel}>
          <div className={style.desktop_home_panel_and_button}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Reprehenderit asperiores ullam laborum dicta facilis doloremque
              reiciendis tempo voluptates temporibus nam vitae corporis rem
              rerum obcaecati et.
            </p>
            <div className={style.desktop_btn}>Lorem Ispum</div>
          </div>
        </div>
        <div className={style.desktop_statue_1}></div>
        <div className={style.desktop_statue_2}></div>
        <div className={style.desktop_footer}>
          <Image className={style.footer_png} src={twitter} alt='twitter_png' />
          <Image className={style.footer_png} src={discord} alt='discord' />
          <Image className={style.footer_png} src={telegram} alt='telegram' />
          <Image className={style.footer_png} src={book} alt='book' />
        </div>
        <div className={style.desktop_footer_mid}>
          <Image className={style.upArrow} src={upArrow} alt='Uparrow' />
          <p>BECOME PART OF SCARAB DAO</p>
          <div className={style.footer_circle}>
            <span
              className={`${style.circle} ${
                theme === 0 ? style.circle_fill : ""
              }`}
            ></span>
            <span
              className={`${style.circle} ${
                theme === 1 ? style.circle_fill : ""
              }`}
            ></span>
            <span
              className={`${style.circle} ${
                theme === 2 ? style.circle_fill : ""
              }`}
            ></span>
          </div>
        </div>
        <p className={style.desktop_left_heading}>INVESTING IN REVOLUTION</p>
        {/* Desktop_header_code_End */}
        <div className={style.panel_container}>
          <div className={style.panel_text}>
            <h2>{datatext[theme]}</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisi elit. Laborum ex
              enim corrupti tempo tempore officiis aliquam rerum distinctio
              praesentium modi qui , odit sint provident aliquid sapiente!
            </p>
            <div className={style.button_container}>
              <div className={style.btn_png}>
                <p className={style.btn_text}>Lorem Ipsum</p>
              </div>
            </div>
          </div>
        </div>
        <div className={style.footer}>
          <p>BECOME PART OF SCARAB DAO</p>
          <div className={style.footer_circle}>
            <span
              className={`${style.circle} ${
                theme === 0 ? style.circle_fill : ""
              }`}
            ></span>
            <span
              className={`${style.circle} ${
                theme === 1 ? style.circle_fill : ""
              }`}
            ></span>
            <span
              className={`${style.circle} ${
                theme === 2 ? style.circle_fill : ""
              }`}
            ></span>
          </div>
          <div className={style.footer_png_container}>
            <Image
              className={style.footer_png}
              src={twitter}
              alt='twitter_png'
            />
            <Image className={style.footer_png} src={discord} alt='discord' />
            <Image className={style.footer_png} src={telegram} alt='telegram' />
            <Image className={style.footer_png} src={book} alt='book' />
          </div>
        </div>
        <div className={style.arrow}>
          <Image
            onClick={() => previousImage()}
            src={rightArrow}
            alt='leftArrow'
          />
          <Image onClick={() => nextImage()} src={leftArrow} alt='rightArrow' />
        </div>
      </div>
    </>
  );
};

export default Home_header;
