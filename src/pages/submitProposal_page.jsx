import Image from "next/image";
import style from "../styles/submitProposal.module.css";
import menu from "../../public/mobile/menu_th_icon 1.png";
import logo from "../../public/mobile/logo.png";
import twitter from "../../public/Assests_1st Frame/twitter 1.png";
import telegram from "../../public/Assests_1st Frame/telegram 1.png";
import discord from "../../public/Assests_1st Frame/Discord 1.png";
import book from "../../public/Assests_1st Frame/book 1.png";

const submitProposal_page = () => {
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
              <p className={style.stack_page_panel_heading}>Submit</p>
              <div>
                <div className={style.proposal_panel_data_input_align}>
                  <div className={style.stack_page_balance_align}>
                    <p>Name of the Guardian submitting the Proposal.</p>
                  </div>
                  <input className={style.input_tag} />
                </div>
                <div>
                  <div className={style.stack_page_balance_align}>
                    <p>Guardian Discord or Twitter Handle.</p>
                  </div>
                  <input className={style.input_tag} />
                </div>
                <div>
                  <div className={style.stack_page_balance_align}>
                    <p>What is the name of the Project?</p>
                  </div>
                  <input className={style.input_tag} />
                </div>
                <div>
                  <div className={style.stack_page_balance_align}>
                    <p>
                      Provide a short description of the Project, and why it is
                      suitable for investment from the SCARAB?
                    </p>
                  </div>
                  <textarea className={style.input_tag} />
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

export default submitProposal_page;
