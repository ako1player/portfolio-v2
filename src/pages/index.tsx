import AboutMe from "@/component/AboutMe";
import Contact from "@/component/Contact";
import Menu from "@/component/Menu";
import MenuButton from "@/component/MenuButton";
import ProjectList from "@/component/ProjectList";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedMenuItem, setSelectedMenuItem] = useState(0);

  // Simulate loading for demonstration purposes
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    // Clean up timeout on unmount or when isLoading changes
    return () => clearTimeout(timeout);
  }, []);

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleMenuItemClick = (index: number) => {
    setSelectedMenuItem(index);
    setIsOpen(false);
  };

  return (
    isLoading ? (
      <main className="flex h-screen items-center justify-center animate-pulse bg-blue-200">
        <motion.div
          className="w-16 h-16 bg-blue-500 rounded-full"
          animate={{
            scale: [4, 2, 1, 2, 4],
            rotate: [0, 360, 180, 360, 0],
            borderRadius: ["50%", "25%", "100%", "25%", "50%"]
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            times: [0, 0.2, 0.5, 0.8, 1],
            repeat: Infinity,
            repeatDelay: 1
          }}
        />
      </main >
    ) :
      <main className="">
        <MenuButton isOpen={isOpen} toggle={toggleMenu} />
        <Menu isOpen={isOpen} onMenuItemClick={handleMenuItemClick} />
        <div className="">
          {selectedMenuItem === 0 && <AboutMe />}
          {selectedMenuItem === 1 && <ProjectList />}
          {selectedMenuItem === 2 && <Contact />}
        </div>
      </main>
  );

}
