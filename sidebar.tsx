'use client';
import "../sidebar/sidebar.css";
import { useState } from "react";

export default function Sidebar() {
    const [isSidebarClosed, setSidebarClosed] = useState<boolean>(true);
    const [activeItem, setActiveItem] = useState<string>("");

    const handleToggleSidebar = () => {
        setSidebarClosed((prev) => !prev);
    };

    const handleItemClick = (href: string) => {
        setActiveItem(href);
    };

    const menuItems = [
        { href: "#cadastros", icon: "bi-person-lines-fill", text: "Equipes" },
        { href: "#serviços", icon: "bi-tools", text: "Equipamentos" },
        { href: "#veiculos", icon: "bi-car-front-fill", text: "Veículos" },
        { href: "#financeiro", icon: "bi-currency-dollar", text: "Financeiro" },
    ];

    const bottomMenuItems = [
        { href: "#ajustes", icon: "bi-gear", text: "Ajustes" },
        { href: "#sair", icon: "bi-box-arrow-left", text: "Sair" },
    ];

    return (
        <div className="app">
            <nav className={`sidebar ${isSidebarClosed ? "close" : ""}`}>
                <header>
                    <div className="image-text">
                        <span className="image">
                            <i className="bi bi-github"></i>
                        </span>
                        <div className="text header-text">
                            <span className="name">Frontend</span>
                            <span className="professional">Developer</span>
                        </div>
                    </div>
                    <i className="bi bi-caret-left-fill toggle" onClick={handleToggleSidebar}></i>
                </header>
                <div className={`menu-bar ${!isSidebarClosed ? "openSidebar" : ""}`}>
                    <div className="menu">
                        <li>
                            <a 
                                href="#home" 
                                className={activeItem === "#home" ? "active" : ""} 
                                onClick={() => handleItemClick("#home")}
                            >
                                <i className="bi bi-house-fill icon"></i>
                                <span className="text nav-text">Empresa</span>
                            </a>
                        </li>
                        <ul className={`menu-links ${!isSidebarClosed ? "openSidebar" : ""}`}>
                            {menuItems.map((item, index) => (
                                <li className="nav-link" key={index}>
                                    <a 
                                        href={item.href} 
                                        className={activeItem === item.href ? "active" : ""} 
                                        onClick={() => handleItemClick(item.href)}
                                    >
                                        <i className={`bi ${item.icon} icon`}></i>
                                        <span className="text nav-text">{item.text}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="bottom-content">
                        {bottomMenuItems.map((item, index) => (
                            <li key={index}>
                                <a 
                                    href={item.href} 
                                    className={activeItem === item.href ? "active" : ""} 
                                    onClick={() => handleItemClick(item.href)}
                                >
                                    <i className={`bi ${item.icon} icon`}></i>
                                    <span className="text nav-text">{item.text}</span>
                                </a>
                            </li>
                        ))}
                    </div>
                </div>
            </nav>
            <section className="home">
                <div className="text"></div>
            </section>
        </div>
    );
}
