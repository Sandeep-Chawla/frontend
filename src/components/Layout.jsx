import React, { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import Sidebar from './Sidebar';

function Layout({ children }) {
    const [sidebarActive, setSidebarActive] = useState(false);

    useEffect(() => {
        const iconBar = document.getElementById('iconBar');
        if (iconBar) {
            if (sidebarActive) {
                iconBar.classList.add('text-white');
                document.body.classList.add('sidebar-active');
            } else {
                iconBar.classList.remove('text-white');
                document.body.classList.remove('sidebar-active');
            }
        }
    }, [sidebarActive]);

    const toggleSidebar = () => {
        setSidebarActive(prevState => !prevState);
    };

    return (
        <div className="layout">
            <Header toggleSidebar={toggleSidebar} />
            <Sidebar isActive={sidebarActive} />
            <div className="content">{children}</div>
            <Footer />
        </div>
    );
}

export default Layout;
