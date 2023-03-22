import style from "../styles/pending_proposal.module.css";
import Image from "next/image";
import menu from "../../public/mobile/menu_th_icon 1.png";
import logo from "../../public/mobile/logo.png";
import twitter from "../../public/Assests_1st Frame/twitter 1.png";
import telegram from "../../public/Assests_1st Frame/telegram 1.png";
import discord from "../../public/Assests_1st Frame/Discord 1.png";
import book from "../../public/Assests_1st Frame/book 1.png";
import back_arrow from "../../public/mobile/back icon_desktop.png";
import desktop_logo from "../../public/Assests_1st Frame/Logo 1.png";

const pending_proposal = () => {
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
            <div className={style.button_align_left}>
              <button className={style._header_btn_back}>
                <Image
                  className={style.arrow_png}
                  src={back_arrow}
                  alt='back_arrow'
                ></Image>
                <p>Back</p>
              </button>
            </div>

            <a href='#'>Stack S SCARAB</a>
          </div>
          <div className={style.navbar_right}>
            <a href='#'>Proposal</a>

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
        <div className={style.header_icon_button}>
          <Image src={logo} className={style.header_logo} alt='logo'></Image>
          <button className={style.header_button}>Connect</button>
        </div>
        <div className={style.pending_panel}>
          <div className={style.pending_panel_text}>
            <p>Pending Proposals</p>
            <p>no pending proposals at moment</p>
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

export default pending_proposal;
