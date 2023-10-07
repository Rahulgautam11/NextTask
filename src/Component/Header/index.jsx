import React, { useEffect, useState } from 'react'
import style from './Style.module.scss'
import Image from 'next/image'
import Logo from '../../Assets/Icon/logo.png'
import Link from 'next/link'
import Svg from '../../Assets/Icon/search.svg'
import MobileMenu from './mobileMenu'

const Header = () => {

    const [mobileMenu, setMobileMenu] = useState()
    const [windowSize, setWindowSize] = useState({
        width: undefined,
    });

    useEffect(() => {
        function handleResize() {
            setWindowSize({
                width: window.innerWidth,
            });
        }
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
    }, []);


    const HandleMenuBar = () => {
        setMobileMenu(true)
    }
    return (
        <div className={style.header_main}>
            <figure className={style.header_logo_main}>
                <Image className={style.header_logo} src={Logo} alt='logo' />
                {windowSize.width <= 768 ? "" : <figcaption className={style.Caption_Logo}>WING</figcaption>}
            </figure>
            <div className={style.Input_Search_main}>
                <input className={style.Search_input_field} type='search' />
                <i className={style.Serch_icon} />
            </div>
            {windowSize.width <= 768 ?
                <>
                    <div className={style.menu_mobile} onClick={HandleMenuBar}>
                        <div className={style.menu_line}></div>
                        <div className={style.menu_line}></div>
                        <div className={style.menu_line}></div>
                    </div>
                    {
                        mobileMenu &&
                        <MobileMenu setMobileMenu={setMobileMenu} />
                    }
                </>
                :
                <div className={style.header_menu}>
                    <Link className={style.menu_link} href='/#'>HOME</Link>
                    <Link className={style.menu_link} href='/#'>ABOUT</Link>
                    <Link className={style.menu_link} href='/#'>BLOGS</Link>
                    <Link className={style.menu_link} href='/#'>CAREERS</Link>
                </div>}
        </div>
    )
}

export default Header