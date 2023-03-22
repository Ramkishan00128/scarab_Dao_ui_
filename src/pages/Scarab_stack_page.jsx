import Image from "next/image";
import menu from "../../public/mobile/menu_th_icon 1.png";
import logo from "../../public/mobile/logo.png";
import style from "../styles/scarab_stack_page.module.css";
import twitter from "../../public/Assests_1st Frame/twitter 1.png";
import telegram from "../../public/Assests_1st Frame/telegram 1.png";
import discord from "../../public/Assests_1st Frame/Discord 1.png";
import book from "../../public/Assests_1st Frame/book 1.png";
import desktop_logo from "../../public/Assests_1st Frame/Logo 1.png";
import back_arrow from "../../public/mobile/back icon_desktop.png";
const Scarab_stack_page = () => {
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
              <p className={style.small_panel_heading}>SCARAB Price</p>
              <p className={style.small_panel_value}>$0.0000000611</p>
            </div>
            <div className={style.small_panel}>
              <p className={style.small_panel_heading}>Guardianship Token</p>
              <p className={style.small_panel_value}>24,750,746,073,238</p>
            </div>
          </div>
          <div className={style.stack_page_middle_panel}>
            <div className={style.stack_page_panel}>
              <div className={style.stack_page_panel_data}>
                <p className={style.stack_page_panel_heading}>Stack SCARAB</p>
                <div className={style.stack_page_balance_align}>
                  <p>Balance:</p>
                  <p>0</p>
                </div>
                <input className={style.input_tag} />
                <div className={style.stack_page_balance}>
                  <div className={style.btn}>
                    <p>Approve</p>
                  </div>
                </div>
              </div>
              {/* new */}
              <div className={style.stack_page_panel_data_mid}>
                <div className={style.stack_page_balance_align}>
                  <p>uSCARAB</p>
                  <p>0</p>
                </div>
                <div className={style.input_with_maxBtn}>
                  <input className={style.input_tag_1} />
                  <button className={style.max_btn}>MAX</button>
                </div>
                <div className={style.stack_page_balance}>
                  <div className={style.btn}>
                    <p>Withdraw</p>
                  </div>
                </div>
              </div>
              {/* /new2 */}
              <div className={style.stack_page_panel_data_footer}>
                <div className={style.stack_page_balance_align}>
                  <p>Claimable SCARAB</p>
                  <p>0</p>
                </div>

                <div className={style.stack_page_balance}>
                  <div className={style.btn}>
                    <p>Claim</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={style.small_panel_align}>
            <div className={style.small_panel}>
              <p className={style.small_panel_heading}>APR</p>
              <p className={style.small_panel_value}>6.96266055%</p>
            </div>
            <div className={style.small_panel}>
              <p className={style.small_panel_heading}>Guardianship Token</p>
              <p className={style.small_panel_value}>24,750,746,073,238</p>
            </div>
          </div>
        </div>
        {/* desktop_view_start */}
        <div className={style.panel_info_left}>
          <div className={style.align_left_panel_info}>
            <div>
              <p className={style.small_panel_heading}>SCARAB Price</p>
              <p className={style.small_panel_value}>$0.0000000611</p>
            </div>
            <div>
              <p className={style.small_panel_heading}>Total SCARAB Staked</p>
              <p className={style.small_panel_value}>2,679,987,280,465</p>
            </div>
          </div>
        </div>
        <div className={style.panel_info_right}>
          <div className={style.align_right_panel_info}>
            <div>
              <p className={style.small_panel_heading}>APR</p>
              <p className={style.small_panel_value}>6.96266055%</p>
            </div>
            <div>
              <p className={style.small_panel_heading}>Total SCARAB Staked</p>
              <p className={style.small_panel_value}>2,679,987,280,465</p>
            </div>
          </div>
        </div>
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
        {/* desktop_view_End */}

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

export default Scarab_stack_page;
