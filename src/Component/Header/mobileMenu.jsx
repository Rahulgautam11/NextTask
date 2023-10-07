import React from 'react'
import style from './Style.module.scss'
import Link from 'next/link'

const MobileMenu = ({ setMobileMenu }) => {

    return (
        <div className={style.Mobile_menu_main}>
            <i className={style.cross_icon} onClick={() => setMobileMenu(false)} />
            <div className={style.menu_link_wrap}>
                <Link className={style.menu_link_mobile} href='/#' onClick={() => setMobileMenu(false)}>About</Link>
            </div>
            <div className={style.menu_link_wrap}>
                <Link className={style.menu_link_mobile} href='/#' onClick={() => setMobileMenu(false)}>Blogs</Link>
            </div>
            <div className={style.menu_link_wrap}>
                <Link className={style.menu_link_mobile} href='/#' onClick={() => setMobileMenu(false)}>Careers</Link>
            </div>
            <div className={style.menu_link_wrap}>
                <Link className={style.menu_link_mobile} href='/#' onClick={() => setMobileMenu(false)}>Team</Link>
            </div>
        </div>
    )
}

export default MobileMenu