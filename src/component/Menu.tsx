import { motion } from "framer-motion";
import React from "react";

interface MenuProps {
    isOpen: boolean,
    onMenuItemClick: (menuItem: number) => void;
}

const Menu: React.FC<MenuProps> = ({ isOpen, onMenuItemClick }) => {
    const menuItems = [
        { text: "Home" },
        { text: "Projects" },
        { text: "Contact" },
    ];

    const handleMenuItemClick = (index: number) => {
        onMenuItemClick(index);
    };

    return (
        <motion.div
            className={`fixed top-0 left-0 z-40 h-full w-64 pt-14 bg-white shadow-md`}
            initial={{ x: "-100%" }}
            animate={{ x: isOpen ? "0%" : "-100%" }}
            transition={{ duration: 0.5 }}
        >
            {menuItems.map((item, index) => (
                <motion.div
                    key={index}
                    className="px-4 py-2 cursor-pointer"
                    whileHover={{ scale: 1.1, zIndex: 1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => handleMenuItemClick(index)}
                >
                    {item.text}
                </motion.div>

            ))}
        </motion.div>
    );
};

export default Menu;
