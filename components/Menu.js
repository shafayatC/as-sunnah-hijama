import React, { useEffect, useState } from 'react';
import style from '../styles/Menu.module.scss';
import Link from 'next/link';

const Menu = ({ menuItem }) => {
    const [isDom, setDom] = useState(false);


    const submenuOpen = (menuId, arr) => {

        const subMenuId = document.querySelector(`#${menuId}`);
        const arrow = document.querySelector(`#${arr}`);
        const curretStyle = getComputedStyle(subMenuId, null).display;

        if (curretStyle == 'block') {
            subMenuId.style.display = "none";
            arrow.style.transform = "rotate(0deg)"
        } else {
            subMenuId.style.display = "block";
            arrow.style.transform = "rotate(90deg)"
        }

    }

    const menuFire = () => {

        const mobileMenu = document.querySelector("#mobileMenuList");

        if (mobileMenu.classList.contains(style.active)) {
            mobileMenu.classList.remove(style.active);
        } else {
            mobileMenu.classList.add(style.active);
        }
    }

    useEffect(() => {
        setDom(true);
    }, [])

    return (
        <>
            {/* desctop menu */}
            <div className={style.menuWrap}>
                <ul className={style.menuList}>
                    {
                        isDom && menuItem.map((navItem, index) => {
                            return (

                                <li>

                                    {"subitem" in navItem ? (
                                        <>
                                            <a>{navItem.name}<span className='icon-angle-down'></span></a>
                                            <ul>
                                                {navItem.subitem.map((subNav) => {
                                                    return (
                                                        <>
                                                            <li><Link href={subNav.path}><a>{subNav.name}</a></Link></li>
                                                        </>
                                                    )
                                                })}
                                            </ul>
                                        </>
                                    ) : <Link href={navItem.path}><a>{navItem.name} </a></Link>}
                                </li>
                            )
                        }

                        )
                    }
                </ul>
            </div>

            {/* mobile menu */}
            <div className={style.mobileMenu}>
                <button onClick={menuFire} id="menuBtn" className={style.menuBtn}><span className={style.stick}></span><span className={style.stick}></span><span className={style.stick}></span></button>
                <ul id="mobileMenuList" className={style.mobileMenuList}>
                    {
                        isDom && menuItem.map((navItem, index) => {
                            return (

                                <li>

                                    {"subitem" in navItem ? (
                                        <>
                                            <a onClick={() => submenuOpen('sub_' + index, 'ar_' + index)}>{navItem.name} <span id={'ar_' + index} className={style.menuArrow}><i className='icon-angle-right' /></span></a>
                                            <ul id={'sub_' + index}>
                                                {navItem.subitem.map((subNav) => {
                                                    return (
                                                        <>
                                                            <li><Link href={subNav.path}><a>{subNav.name}</a></Link></li>
                                                        </>
                                                    )
                                                })}
                                            </ul>
                                        </>
                                    ) : <Link href={navItem.path}><a>{navItem.name} </a></Link>}
                                </li>
                            )
                        }

                        )
                    }
                </ul>
            </div>

        </>
    );
};

export default Menu;