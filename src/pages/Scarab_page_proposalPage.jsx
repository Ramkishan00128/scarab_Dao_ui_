import Image from "next/image";
import style from "../styles/proposal_page.module.css";
import menu from "../../public/mobile/menu_th_icon 1.png";
import logo from "../../public/mobile/logo.png";
import twitter from "../../public/Assests_1st Frame/twitter 1.png";
import telegram from "../../public/Assests_1st Frame/telegram 1.png";
import discord from "../../public/Assests_1st Frame/Discord 1.png";
import book from "../../public/Assests_1st Frame/book 1.png";

const Scarab_page_proposalPage = () => {
  return (
    <>
      <div className={style.bg_Scarab_page}>
        <Image
          onClick={() => handleToggle(setHide(!hide))}
          className={style.menu_icon}
          src={menu}
          alt='menu'
        />
        <div className={style.header_icon_button}>
          <Image src={logo} className={style.header_logo} alt='logo'></Image>
          <button className={style.header_button}>Connect</button>
        </div>
        <div className={style.scarab_page_small_panel}>
          <div className={style.small_panel_align}>
            <div className={style.small_panel}>
              <p className={style.small_panel_heading}>Pending</p>
              <p className={style.small_panel_value}>Proposals</p>
            </div>
            <div className={style.small_panel}>
              <p className={style.small_panel_heading}>Submit</p>
              <p className={style.small_panel_value}>Proposals</p>
            </div>
          </div>
          <div className={style.small_panel_align}>
            <div className={style.small_panel}>
              <p className={style.small_panel_heading}>Closed</p>
              <p className={style.small_panel_value}>Proposals</p>
            </div>
            <div className={style.small_panel}>
              <p className={style.small_panel_heading}>Delegate Votes</p>
              <p
                className={`${style.small_panel_value} ${style.delegate_value}`}
              >
                0
              </p>
            </div>
          </div>
          <div className={style.small_panel_align_center}>
            <div className={style.small_panel}>
              <p className={style.small_panel_heading}>Treasury</p>
              <p className={style.small_panel_value}>Dashboard</p>
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

export default Scarab_page_proposalPage;
