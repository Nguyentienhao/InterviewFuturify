import React from 'react';
import Map from './Map';
import './styles.css';

const products = [
    {
        id: 1,
        name: 'Bán căn hộ The Marq 1PN, tầng 1, đầy đủ nội thất, chưa bàn giao',
        image: 'https://photo.rever.vn/v2/get/X+QAxjPLS+YlRxsPMcYBE73Gqqw08oev4wTjXYEfaNI=/750x500/image.jpg',
        address: 'A0155839 • Nguyễn Đình Chiểu, Đa Kao, Quận 1, Hồ Chí Minh',
        price: '9.09 tỷ',
        beds: 1,
        bathRoom: 1,
        area: 51.68,
        favorite: false,
    },
    {
        id: 2,
        name: 'Bán nhà 3 tầng mặt tiền đường 3/2, Quận 11, sổ hồng, cách đường Lê Đại Hành 100m',
        image: 'https://photo.rever.vn/v2/get/hbgVsEBWKvvydovItDHjJUmrQG7Q4ICHa8vE9phtJMM=/750x500/image.jpg',
        address: 'T1055841 • 3 Tháng 2, Phường 6, Quận 11, Hồ Chí Minh',
        price: '14 tỷ',
        beds: 6,
        bathRoom: 3,
        area: 33.2,
        favorite: false,
    },
    {
        id: 4,
        name: 'Bán căn hộ Gateway Thảo Điền tầng cao, diện tích 59m2 - 1 phòng ngủ, nội thất cơ bản',
        image: 'https://photo.rever.vn/photo/v2/get/L5BKJO0LOLMbtSsiHOmMsCOzhlIfsQjcu2tUDlE+hes=/750x500/image.jpg',
        address: 'A0256278 • Lê Thước, Thảo Điền, Quận 2, Hồ Chí Minh',
        price: '3.65 tỷ',
        beds: 1,
        bathRoom: 1,
        area: 59,
        favorite: false,
    },
    {
        id: 5,
        name: 'Officetel The Sun Avenue nội thất văn phòng, ban công Đông Bắc',
        image: 'https://photo.rever.vn/v2/get/MoMLodqrT5xMgLputERqa+Rj6DIe6zVFPrUMJvxDW2k=/750x500/image.jpg',
        address: 'A0256278 • Lê Thước, Thảo Điền, Quận 2, Hồ Chí Minh',
        price: '1.8 tỷ',
        beds: 1,
        bathRoom: 1,
        area: 39.81,
        favorite: false,
    },
    {
        id: 6,
        name: 'Căn hộ Masteri An Phú 2PN, tầng 2, đầy đủ nội thất, view Thảo Điền',
        image: 'https://photo.rever.vn/v2/get/+TgOyzp2YX31IWxb5fMX9NU7LGrLe8+1ySeHyhIaC+w=/750x500/image.jpg',
        address: 'A0256278 • Lê Thước, Thảo Điền, Quận 2, Hồ Chí Minh',
        price: '4.4 tỷ',
        beds: 2,
        bathRoom: 2,
        area: 70,
        favorite: false,
    }
]

function MainLeft() {
    return (
        <div className="panel" style={{ zIndex: 'auto' }}>
            <div className="secondaryBar">
                <h1 title="Mua bán nhà đất căn hộ Hồ Chí Minh" className="keyword">{"Mua bán nhà đất căn hộ Hồ Chí Minh"}</h1>
                <a href="#" className="btn-primary btn-red btn-save-search btn-medium" >
                    <i className="zmdi zmdi-bookmark-outline"></i>
                    {"Lưu tìm kiếm"}
                </a>
            </div>
        </div>
    );
}

function ActionBar() {
    const dataItem = [
        {
            id: 1,
            name: 'Loại Hình',
        },
        {
            id: 2,
            name: 'Khoảng Giá',
        },
        {
            id: 3,
            name: 'Diện tích'
        },
        {
            id: 4,
            name: 'Thêm'
        }
    ]
    return (
        <div className='actionBar'>
            <div className="filter">
                <ul>
                    {
                        dataItem?.map((item) => {
                            return (
                                <li style={{ listStyle: 'none' }} className='filter-item'>
                                    <a href="#">
                                        <span>{item.name}</span>
                                    </a>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
            <div className="view">
                <button className="zmdi zmdi-view-module">
                </button>
                <button className="zmdi zmdi-view-stream active"></button>
            </div>
        </div>
    )
}

function PanigatorSearch() {
    return (
        <div className="paginator-search">
            <ul className="paginator">
                <li>
                    <a href="?" className="btnPre">
                        <i className="zmdi zmdi-chevron-left" />
                    </a>
                </li>
                <li>
                    <a href="?" className="active">
                        1
                    </a>
                </li>
                <li>
                    <a href="?">
                        2
                    </a>
                </li>
                <li>
                    <a href="?">
                        3
                    </a>
                </li>
                <li>
                    <a href="?">
                        4
                    </a>
                </li>
                <li>
                    <a href="?">
                        5
                    </a>
                </li>
                <li>
                    <a className="btnNext">
                        <i className="zmdi zmdi-chevron-right" />
                    </a>
                </li>
            </ul>
        </div>
    )
}

function InfoGroup({ product }) {
    return (
        <div className="info-container">
            <h3>
                {product.name}
            </h3>
            <div className="listing-address">
                {product.address}
            </div>
            <ul className="listing-info">
                <li>
                    <i className="zmdi zmdi-airline-seat-individual-suite" />
                    {product.beds}
                </li>
                <li>
                    <i className="zmdi icon-bath-room" />
                    {product.badRoom}
                </li>
                <li>
                    <i className="zmdi zmdi-photo-size-select-small" />
                    {product.area + " m²"}
                </li>
            </ul>
            <div className="action-group">
                <div className="action-group--left">
                    <div className="listing-price">
                        {product.price}
                    </div>
                    <label className="label-primary unique">{"Rever độc quyền"}</label>
                </div>
                <div className="action-group--right action-group--cta">
                    <button style={{ opacity: 1 }} className="btn-favorite btn-favorite__v2">
                    </button>
                </div>
            </div>
        </div>
    )
}

function Product({product}) {
    console.log('product',product)
    return (
        <div className="col property-itemz">
            <article className="box listView">
                <div className="cover-image">
                    <a href="#" target="blank">
                        <img style={{ width: 250, height: 200 }} src={product.image} />
                    </a>
                </div>
                <InfoGroup product={product} />
            </article>
        </div>
    )
}

function BreadcrumbLocation() {
    return (
        <div className="search-breadcrumb">
            <ul className="breadcrumb">
                <li className="breadcrumb-item">
                    <a href='/'>{"Trang chủ"}</a>
                </li>
                <li className="breadcrumb-item">
                    {"Hồ chí minh"}
                </li>
            </ul>
        </div>
    )
}

function SearchRelative() {
    const data = [
        {
            id: 1,
            name: 'Căn Hộ tại Hồ Chí Minh',
            href: ''
        },
        {
            id: 2,
            name: 'Nhà Phố tại Thành Phố Hồ Chí Minh',
            href: ''
        },
        {
            id: 3,
            name: 'Biệt Thự Tại Thành Phố Hồ Chí Minh',
            href: ''
        },
        {
            id: 4,
            name: 'Đất nền tại Hồ Chí Minh',
            href: ''
        },
        {
            id: 5,
            name: 'Căn hộ dịch vụ tại Hồ Chí Minh',
            href: ''
        },
        {
            id: 6,
            name: 'Văn phòng tại Hồ Chí Minh',
            href: ''
        }
    ];

    return (
        <div className="search-relative">
            <div className="inner">
                <h2 style={{ marginBottom: 20 }} className="heading">
                    <a>{"Hồ Chí Minh"}</a>
                </h2>
                <div className="row">
                    <div className="description">
                        <h2>
                            {"MUA BÁN NHÀ ĐẤT, CĂN HỘ THÀNH PHỐ HỒ CHÍ MINH"}
                        </h2>
                        <label>
                            {"Thành phố Hồ Chí Minh được xem là khu vực có nền kinh tế phát triển nhanh và mạnh nhất nước. Bất động sản Tp.HCM được xem là một trong \n những thị trường tiềm năng và thu hút đầu tư cao nhất tại khu vực Đông Nam Á..........."}
                        </label>
                    </div>
                </div>
                <div className="row">
                    <div className="residential-area">
                        <ul className="relative-group">
                            {
                                data.map((item) => {
                                    return (
                                        <li className="item style1">
                                            <a>{item.name}</a>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <h2 className="heading">
                        {"Lân cận Hồ Chí Minh"}
                    </h2>
                    <div className="residential-area">
                        <ul className="relative-group">
                            <li className="item style2">
                                <a href="#">{"Nam Rạch Chiếc"}</a>
                            </li>
                            <li className="item style2">
                                <a href="#">{"Khu biệt thự Midpoint Villas Thảo Điền"}</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

function Main() {
    return (
        <div className="search-container">
            <div className="search-result">
                <div className="leads">
                    <MainLeft />
                    <ActionBar />
                    <div className="results-sc">
                        <span className="results">
                            {"Hiển Thị "}
                            <strong>{"20 trong số 11289"}</strong>
                        </span>
                        <div className="sort-listing">
                            <a href="#">
                                <span>{"Mặc định"}</span>
                                <i className="zmdi zmdi-chevron-down" style={{ cursor: 'pointer' }}></i>
                            </a>

                        </div>
                    </div>
                    <div className="result-body">
                        <div className="row">
                            {
                                products.map((product) => {
                                    return (
                                        <Product
                                           product={product}
                                        />
                                    )
                                })
                            }
                            <PanigatorSearch />
                        </div>
                    </div>
                    <BreadcrumbLocation />
                    <SearchRelative />
                </div>
            </div>
            <Map />
        </div>
    )
}

export default Main;