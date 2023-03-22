import Image from "next/image";
import style from "../styles/Baracks_Page.module.css";
import menu from "../../public/mobile/menu_th_icon 1.png";
import logo from "../../public/mobile/logo.png";
import twitter from "../../public/Assests_1st Frame/twitter 1.png";
import telegram from "../../public/Assests_1st Frame/telegram 1.png";
import discord from "../../public/Assests_1st Frame/Discord 1.png";
import book from "../../public/Assests_1st Frame/book 1.png";
import desktop_logo from "../../public/Assests_1st Frame/Logo 1.png";
import { useState } from "react";

const Barack_page = () => {
  const [hide, setHide] = useState(false);
  const handleToggle = () => {};
  return (
    <>
      <div className={style.bg_Scarab_page}>
        <Image
          onClick={() => handleToggle(setHide(!hide))}
          className={style.menu_icon}
          src={menu}
          alt='menu'
        />
        {/* Desktop_code_Start_here */}
        <div className={style.Navbar}>
          <div className={style.navbar_left}>
            {/* <a href='#'>Lorem Ispum</a> */}
            <a href='#'>Stack BARACS</a>
          </div>
          <div className={style.navbar_right}>
            <a href='#'>Acts of BARACS</a>

            <div className={style.button_align_right}>
              <button className={style._header_btn}>
                <p>Connect wallet</p>
              </button>
            </div>
          </div>
        </div>
        <Image
          className={style.Desktoplogo}
          src={desktop_logo}
          alt='logo'
        ></Image>
        <div className={style.desktop_statue_1}></div>
        <div className={style.desktop_statue_2}></div>
        {/* Desktop_code_End_here */}
        <div className={hide == true ? style.burger_menu : style.hide_menu}>
          <div className={style.menu_item}>
            <p>Stake</p>
            <p>Acts of BARACS</p>
          </div>
        </div>
        <div className={style.header_icon_button}>
          <Image src={logo} className={style.header_logo} alt='logo'></Image>
          <button className={style.header_button}>Connect</button>
        </div>
        <div className={style.scarab_page_small_panel}>
          <div className={style.small_panel_align}>
            <div className={style.small_panel}>
              <p className={style.small_panel_heading}>SCARAB Price</p>
              <p className={style.small_panel_value}>$0.0000000611</p>
            </div>
            <div className={style.small_panel}>
              <p className={style.small_panel_heading}>Treasury Balance</p>
              <p className={style.small_panel_value}>69.427 ETH</p>
            </div>
          </div>
          <div className={style.small_panel_align}>
            <div className={style.small_panel}>
              <p className={style.small_panel_heading}>Marketcap</p>
              <p className={style.small_panel_value}>$5,000,000</p>
            </div>
            <div className={style.small_panel}>
              <p className={style.small_panel_heading}>Revolutionary Rewards</p>
              <p className={style.small_panel_value}>67.48 ETH</p>
            </div>
          </div>
          <div className={style.small_panel_align}>
            <div className={style.small_panel}>
              <p className={style.small_panel_heading}>Total Value Locked</p>
              <p className={style.small_panel_value}>Coming Soon</p>
            </div>
            <div className={style.small_panel}>
              <p className={style.small_panel_heading}>SCARAB Burned</p>
              <p className={style.small_panel_value}>26,360,067,437,366</p>
            </div>
          </div>
          <div className={style.small_panel_align_center}>
            <div className={style.small_panel}>
              <p className={style.small_panel_heading}>
                ABCD Bought and Burned
              </p>
              <p className={style.small_panel_value}>Coming Soon</p>
            </div>
          </div>
        </div>

        <div className={style.footer}>
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
        <button className={style.footer_button}>Stack and Vote BARACS</button>
      </div>
    </>
  );
};

export default Barack_page;
