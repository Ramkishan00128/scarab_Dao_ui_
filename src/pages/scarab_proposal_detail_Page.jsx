import Image from "next/image";
import menu from "../../public/mobile/menu_th_icon 1.png";
import logo from "../../public/mobile/logo.png";
import twitter from "../../public/Assests_1st Frame/twitter 1.png";
import telegram from "../../public/Assests_1st Frame/telegram 1.png";
import discord from "../../public/Assests_1st Frame/Discord 1.png";
import book from "../../public/Assests_1st Frame/book 1.png";
import style from "../styles/scarab_Proposal_detail.module.css";

const scarab_proposal_detail_Page = () => {
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
              <p className={style.stack_page_panel_heading}>Proposal</p>
              <div className={style.Align_detailPage_detail}>
                <div className={style.detailpage_gap}>
                  <div>
                    <p className={style.details_page_underLine}>Proposal: 0</p>
                  </div>
                  <div>
                    <p className={style.details_page_underLine}>
                      Guardian Information
                    </p>
                    <p>Guardian Name - </p>
                    <p>Guardian Social Handle - </p>
                    <p>Guardian Wallet - </p>
                  </div>
                  <p className={style.details_page_underLine}>
                    Project Summary
                  </p>
                  <div>
                    <p className={style.details_page_underLine}>Project Docs</p>
                    <p>Lite/Whitepaper -</p>
                    <p>Social Docs - </p>
                    <p>Audits - </p>
                  </div>
                  <p className={style.details_page_underLine}>
                    CULT Reward Allocation
                  </p>
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

export default scarab_proposal_detail_Page;
