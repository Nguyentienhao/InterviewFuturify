import React, { Component } from 'react';
import './styles.css';

const dataMenu = [
    {
        id: 1,
        name: 'Mua',
        items: [
            {
                id: 1,
                href: '/s/ho-chi-minh/mua',
                label: 'Tất cả nhà đất bán',
            },
            {
                id: 2,
                href: '/s/ho-chi-minh/mua/can-ho',
                label: 'Căn hộ'
            },
            {
                id: 3,
                href: '/s/ho-chi-minh/mua/shop-house',
                label: 'Shophouse'
            },
            {
                id: 4,
                href: '/s/ho-chi-minh/mua/nha-pho"',
                label: 'Nhà phố'
            }
        ],
    },
    {
        id: 2,
        name: 'Thuê',
        items: [
            {
                id: 1,
                href: '/s/ho-chi-minh/thue',
                label: 'Tất cả nhà cho thuê',
            },
            {
                id: 2,
                href: '/s/ho-chi-minh/thue/shop-house',
                label: 'Shophouse cho thuê'
            },
            {
                id: 3,
                href: '/s/ho-chi-minh/thue/nha-pho',
                label: 'Nhà phố cho thuê'

            }
        ]
    },
    {
        id: 3,
        name: 'Dự án',
        items: [
            {
                id: 1,
                label: 'Tất cả dự án',
                href: '/du-an',
            }
        ]
    },
    {
        id: 4,
        name: 'Bán & cho thuê',
        items: [
            {
                id: 1,
                href: '/ban-nha-voi-rever',
                label: 'Đăng bán',
            },
            {
                id: 2,
                href: '/chuyen-vien',
                label: 'Gặp chuyên viên tư vấn'
            },
            {
                id: 3,
                href: '/rever-photo',
                label: 'Rever Photo'
            }
        ]
    },
    {
        id: 5,
        name: 'Thông tin',
        items: [
            {
                id: 1,
                label: 'Blog',
                href: 'https://blog.rever.vn'
            },
            {
                id: 2,
                label: 'Báo cáo & Phân tích',
                href: 'https://blog.rever.vn/topic/phân-tích'
            },
            {
                id: 3,
                label: 'Hướng dẫn mua nhà',
                href: '/huong-dan-mua-nha'
            }
        ]
    }
];

class Header extends Component {
    constructor(props) {
        super(props);
    }

    renderSubMenu = ({ name, items }) => {
        return (
            <li className="sub-menu">
                <a>
                    {name}
                    <i class="zmdi zmdi-chevron-down"></i>
                </a>
                {
                    items?.map((item) => {
                        return (
                            <ul>
                                <li href={item.href}>
                                    {item.label}
                                </li>
                            </ul>
                        )
                    })
                }
            </li>
        );
    }

    renderColRight = () => {
        return (
            <div className="col-right">
                <div className="top-menu">
                    <ul>
                        <li>
                            <a href="tel:1800234546">
                                <i className="zmdi zmdi-phone" />
                                <span>1800 234 546</span>
                            </a>
                            <a className="menu-humber" style={{ opacity: 1 }}>
                                <i className="zmdi zmdi-menu" />
                            </a>
                        </li>
                        {
                            dataMenu.map((menu) => {
                                return (
                                    this.renderSubMenu({ name: menu.name, items: menu?.items })
                                );
                            })
                        }
                    </ul>
                </div>
                <div className="login">
                    <a className="btn-login" style={{ opacity: 1 }}>{"Đăng nhập"}</a>
                    <div className="agency-rever">
                        <a href="/ban-nha-voi-rever" title="Đăng tin nhà đất">
                            {"Đăng tin nhà đất"}
                        </a>
                    </div>
                </div>
            </div>
        );
    }

    renderTopSearch = () => {
        return (
            <div className="top-search">
                <a href="#"></a>
                <form>
                    <div tabIndex="0" className="search-type">
                        <span>Mua nhà</span>
                        <ul className="hide">
                            <li>Thuê nhà</li>
                            <li>Dự án</li>
                        </ul>
                    </div>
                    <i data-v-7247f3c5 className="zmdi zmdi-search"></i>
                    <input
                        placeholder="Nhập địa điểm, khu dân cư, tòa nhà"
                        type="search"
                        autoComplete="disabled"
                        spellCheck={false}
                        dir='auto'
                    />
                </form>
            </div>
        );
    }

    render() {
        return (
            <header style={{ position: 'sticky', top: 0 }} className="main-header">
                <div className="col-left">
                    <div className="logo-large">
                        <a href="/" title="Rever logo">
                            <img src="https://s3-cdn.rever.vn/p/v2.35.4/images/logo-r-red.svg" alt="Rever" />
                        </a>
                    </div>
                    {this.renderTopSearch()}
                </div>
                {this.renderColRight()}
            </header>
        )
    }
}

export default Header;