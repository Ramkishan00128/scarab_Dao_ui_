import Image from "next/image";
import style from "../styles/connect_wallet.module.css";
import menu from "../../public/mobile/menu_th_icon 1.png";
import icon from "../../public/mobile/X-icon_wallet.png";
import vector_wallet from "../../public/mobile/Vector_wallet.png";
import metaMask_wallet from "../../public/mobile/metamask__wallet.png";
import trust_wallet from "../../public/mobile/TWT 1_wallet.png";
const connect_wallet = () => {
  return (
    <>
      <div className={style.bg_theme_wallet}>
        <Image
          onClick={() => handleToggle(setHide(!hide))}
          className={style.menu_icon}
          src={menu}
          alt='menu'
        />
        <div className={style.panel_wallet_container}>
          <div className={style.wallet_heading}>
            <p>CONNECT A WALLET</p>
          </div>
          <Image className={style.x_icon} src={icon} alt='X-icon' />
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
      </div>
    </>
  );
};

export default connect_wallet;
