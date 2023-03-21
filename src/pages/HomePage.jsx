import Image from "next/image";
import style from ".././styles/HomePage.module.css";
import menu from "../../public/mobile/menu_th_icon 1.png";
import beetal from "../../public/Assests_1st Frame/scarab 1.png";
import twitter from "../../public/Assests_1st Frame/twitter 1.png";
import telegram from "../../public/Assests_1st Frame/telegram 1.png";
import discord from "../../public/Assests_1st Frame/Discord 1.png";
import book from "../../public/Assests_1st Frame/book 1.png";
import leftArrow from "../../public/mobile/arrow 2.png";
import rightArrow from "../../public/mobile/arrow 3.png";
import { useState } from "react";
import { motion } from "framer-motion";

const Home_header = () => {
  const [hide, setHide] = useState(true);
  const handleToggle = () => {};

  return (
    <>
      <div className={style.bg_theme1}>
        <motion.div
          initial={{ y: "-100%" }}
          whileInView={{ y: 0 }}
          className={`${style.drawer} ${hide && style.hide}`}
        >
          <ul>
            <li>lorem Ispum</li>
            <li>lorem Ispum</li>
            <li>lorem Ispum</li>
            <li>lorem Ispum</li>
          </ul>
          <button className={style.drawer_btn}>Stack and Vote SCARAB</button>
          <button className={style.drawer_btn}>Stack and Vote BARACS</button>
        </motion.div>

        <Image
          onClick={() => handleToggle(setHide(!hide))}
          className={style.menu_icon}
          src={menu}
          alt='menu'
        />

        <Image className={style.beetal_theme} src={beetal} alt='beetal' />

        <div className={style.panel_container}>
          <div className={style.panel_text}>
            <h2>INVESTING IN REVOLUTION</h2>
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
            <span className={`${style.circle} ${style.circle_fill}`}></span>
            <span className={style.circle}></span>
            <span className={style.circle}></span>
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
          <Image src={rightArrow} alt='rightArrow' />
          <Image src={leftArrow} alt='rightArrow' />
        </div>
      </div>
    </>
  );
};

export default Home_header;
