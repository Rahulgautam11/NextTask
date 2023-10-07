import React from 'react'
import styles from './Style.module.scss'
import Logo from '../../Assets/Icon/logo.png'
import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.Footer_container}>
                <div className={styles.footer_wrap}>
                    <div className={styles.Logo_Footer_wrap}>
                        <div className={styles.logoWrapper}>
                            <Link href="/" aria-hidden="true">
                                <Image className={styles.logo} src={Logo} alt="Logo" />
                            </Link>
                        </div>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio minima nam quibusdam pariatur eveniet minus molestiae, neque consequatur! Cupiditate accusantium eaque magni sequi tempora perferendis illo vero quia exercitationem
                        </p>
                    </div>
                    <div className={styles.menu_wrap}>
                        <h6>Menu Links</h6>
                        <ul className={styles.FooterMenuItemList}>
                            <li className={styles.footerMenuItem}>
                                <Link href="/#" rel="noreferrer">About us</Link>
                            </li>

                            <li className={styles.footerMenuItem}>
                                <Link href="/#" rel="noreferrer">FAQs</Link>
                            </li>
                            <li className={styles.footerMenuItem} >
                                <Link href="/#" rel="noreferrer">Contact us</Link>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.location_warp}>
                        <h6>Location</h6>
                        <ul className={styles.FooterMenuItemList}>
                            <li className={styles.footerMenuItem}>
                                <b>India &nbsp; :&nbsp;  </b> 901 sector-53, Noida, Uttar Pradesh 201301
                            </li>
                            <li className={styles.footerMenuItem}>
                                <b>USA &nbsp; :&nbsp;  </b> 9009 South Plaza, Unit 199 Texas sector-53
                            </li>
                        </ul>
                    </div>
                    <div className={styles.contact_wrap}>
                        <h6>Call us</h6>
                        <ul className={styles.FooterMenuItemList}>
                            <li className={styles.footerMenuItem}>
                                <a href="tel:99" target="_blank" rel="noreferrer">+91-739823xxxx</a>
                            </li>
                            <li className={styles.footerMenuItem}>
                                <a href="tel:99" target="_blank" rel="noreferrer">+91-739823xxxx</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className=''>
                        <div className={styles.divider}></div>
                        <ul className={styles.footerHighlights}>
                            <li className={styles.footerTermsCondition}>
                                <p > <Link href={'/'}>Terms of Service</Link> </p>
                                <p > <Link href={'/'}>Privacy Policy</Link> </p>
                            </li>
                            <li>
                                <p className={styles.copyRightText}>Copyright@2023 Rahul. All rights reserved</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer