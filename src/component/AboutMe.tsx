import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import snapchatpic from "../../public/images/snapchatpic.jpg";

export default function AboutMe() {
    return (
        <section className="bg-blue-500 items-center justify-center h-screen flex">
            <div className="items-center grid lg:grid-cols-2 sm:grid-cols-1 justify-center content lg:ml-0 ml-4">
                <div className="text-white lg:mr-2 lg:mb-0 mb-2">
                    <h1 className=" text-4xl">Welcome To My Page!</h1>
                    <p>My Name is Adrian and I am a Full Stack Developer.</p>
                    <p>I also have experience working in the Telecommunicatons field.</p>
                    <p>Curently working on a Blog page.</p>
                    <div className="text-white flex gap-2">
                        <Link href={"https://github.com/ako1player"} target="_blank"><FontAwesomeIcon icon={faGithub} size="2xl" /></Link>
                        <Link href={"https://www.linkedin.com/in/adriangarciarios/"} target="_blank"><FontAwesomeIcon icon={faLinkedin} size="2xl" /></Link>
                    </div>
                </div>
                <div>
                    <Image src={snapchatpic} alt="Adrian SnapChat Pic" width={400} height={400} className=" rounded-full" priority />
                </div>
            </div>
        </section>
    )
}