// components/MenuButton.tsx

import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import React from "react";

interface MenuProps {
    isOpen: boolean,
    toggle: () => void,
}

const MenuButton: React.FC<MenuProps> = ({ isOpen, toggle }) => {
    return (
        <motion.button
            onClick={toggle}
            className=" fixed top-0 left-0 z-50 p-4 flex items-center bg-white rounded-full ml-1"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
        >
            {!isOpen && (
                <>
                    <FontAwesomeIcon icon={faBars} className="text-black" />

                </>
            )}
            {isOpen && (
                <>

                    <FontAwesomeIcon icon={faTimes} className="text-black" />
                </>
            )}
        </motion.button>
    );
};

export default MenuButton;
