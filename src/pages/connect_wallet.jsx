import Image from "next/image";
import style from "../styles/connect_wallet.module.css";
import menu from "../../public/mobile/menu_th_icon 1.png";
import icon from "../../public/mobile/X-icon_wallet.png";
import vector_wallet from "../../public/mobile/Vector_wallet.png";
import metaMask_wallet from "../../public/mobile/metamask__wallet.png";
import trust_wallet from "../../public/mobile/TWT 1_wallet.png";
import logo from "../../public/mobile/logo.png";
import twitter from "../../public/Assests_1st Frame/twitter 1.png";
import telegram from "../../public/Assests_1st Frame/telegram 1.png";
import discord from "../../public/Assests_1st Frame/Discord 1.png";
import book from "../../public/Assests_1st Frame/book 1.png";
import desktop_logo from "../../public/Assests_1st Frame/Logo 1.png";
import { useState } from "react";
const Connect_wallet = () => {
  const [state, setState] = useState(0);
  const handleToggle = () => {
    if (state === 0) {
      setState(1);
    } else {
      setState(0);
    }
  };
  const close = () => {
    setState(0);
  };

  return (
    <>
      <div className={`${state === 0 ? style.bg_theme_wallet : style.modal}`}>
        <Image className={style.menu_icon} src={menu} alt='menu' />
        <div className={style.header_icon_button}>
          <Image src={logo} className={style.header_logo1} alt='logo'></Image>
          <button
            onClick={() => {
              handleToggle();
            }}
            className={style.header_button}
          >
            Connect
          </button>
        </div>

        <div
          className={
            state === 0 ? style.wallet_none : style.panel_wallet_container
          }
        >
          <div className={style.wallet_heading}>
            <p>CONNECT A WALLET</p>
          </div>
          <Image
            onClick={() => {
              close();
            }}
            className={style.x_icon}
            src={icon}
            alt='X-icon'
          />
          <div className={style.wallet_group}>
            <div className={style.wallet_text}>
              <Image src={vector_wallet} alt='vector_wallet' />
              <p>Wallet Connect</p>
            </div>

            <div className={style.wallet_text}>
              <Image src={metaMask_wallet} alt='metamask' />
              <p>Metamask</p>
            </div>
          </div>
          <div className={style.wallet_bottom_group}>
            <div className={style.wallet_text}>
              <Image
                className={style.wallet_vector}
                src={trust_wallet}
                alt='trust_wallet'
              />
              <p>Trust Wallet</p>
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

export default Connect_wallet;
