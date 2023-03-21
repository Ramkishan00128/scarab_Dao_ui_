import Image from "next/image";
import menu from "../../public/mobile/menu_th_icon 1.png";
import logo from "../../public/mobile/logo.png";
import twitter from "../../public/Assests_1st Frame/twitter 1.png";
import telegram from "../../public/Assests_1st Frame/telegram 1.png";
import discord from "../../public/Assests_1st Frame/Discord 1.png";
import book from "../../public/Assests_1st Frame/book 1.png";
import style from "../styles/delegate_page.module.css";

const delegate_Vote_Page = () => {
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
        <div className={style.stack_page_middle_panel}>
          <div className={style.stack_page_panel}>
            <div className={style.stack_page_panel_data}>
              <p className={style.stack_page_panel_heading}>Delegate Vote</p>
              <div>
                <div className={style.proposal_panel_data_input_align}>
                  <div className={style.stack_page_balance_align}>
                    <p>
                      Before you can vote, you must assign your voting rights to
                      either yourself, or you can assign it to a third party.
                      Enter the Ethereum address of wallet to receive the voting
                      rights
                    </p>
                  </div>
                  <input className={style.input_tag} />
                  <div className={style.stack_page_balance}>
                    <div className={style.btn}>
                      <p>Delegate</p>
                    </div>
                  </div>
                  <div className={style.stack_page_balance_align}>
                    <p>
                      If you would like to delegate without paying the gas fee,
                      you can delegate by Signature instead. Once signed, please
                      note that your delegation will not be
                    </p>
                  </div>
                </div>
              </div>
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

export default delegate_Vote_Page;
