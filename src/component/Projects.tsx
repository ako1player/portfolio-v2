import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

interface Props {
    id: string;
    name: string;
    description: string;
    lang: string,
    link: string,
    git: string,
    image: string,
}

const Projects: React.FC<Props> = ({ id, name, description, lang, link, git, image }) => {
    const [selectedId, setSelectedId] = useState('');

    return (
        <div className="">
            <motion.div
                className={`card bg-white hover:bg-blue-200 rounded-lg shadow-md cursor-pointer h-40 text-center content-center ${selectedId === id ? 'card-selected' : ''
                    }`}
                layoutId={`card-container-${id}`}
                onClick={() => setSelectedId(id)}
                initial={{ scale: 1 }}
                animate={{ scale: selectedId === id ? 1.1 : 1 }}
                transition={{ duration: 0.3 }}
            >
                <div className="card-content">
                    <motion.h2 className="text-xl font-bold mb-2 text-blue-500">{name}</motion.h2>
                </div>
            </motion.div>


            <AnimatePresence>
                {selectedId && (
                    <motion.div
                        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        {id === selectedId && (
                            <motion.div
                                className="bg-white rounded-lg p-4 shadow-md w-auto mx-auto"
                                layoutId={id}
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1, rotate: [0, 360] }}
                                transition={{
                                    duration: 1,
                                    ease: "anticipate",
                                }}
                                exit={{ scale: 0.8, opacity: 0 }}
                            >
                                <motion.div className="relative">
                                    <motion.button
                                        className="absolute top-2 right-2 py-1 px-2 text-center text-white bg-red-500 rounded-full"
                                        onClick={() => setSelectedId('')}
                                    >
                                        Close
                                    </motion.button>
                                    <motion.h2 className="text-xl font-bold mb-2 text-blue-500">{name}</motion.h2>
                                    <motion.h5 className="text-sm font-bold mb-1 text-gray-700">{lang}</motion.h5>
                                    <motion.p className="text-md text-gray-700 mb-4">{description}</motion.p>
                                    <motion.a className="text-md text-gray-700 mb-4 mr-2" href={git} target="_blank"><FontAwesomeIcon size="2xl" icon={faGithub} /></motion.a>
                                    <motion.a href={link} target="_blank" className=" hover:underline"><FontAwesomeIcon size="2xl" icon={faArrowUpRightFromSquare} /></motion.a>
                                    {/* <Image src={image} width={600} height={600} alt="Project Image" className="mt-2" quality={100} /> */}
                                    {image ? <video width={600} height={600} controls >
                                        <source src={image} type="video/mp4" />
                                        Your Browser does not support the video tag.
                                    </video>
                                        :
                                        ""
                                    }
                                </motion.div>
                            </motion.div>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>

    )
}

export default Projects;