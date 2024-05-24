import Image from "next/image";
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
                </div>
                <div className="">
                    <Image src={snapchatpic} alt="Adrian SnapChat Pic" width={400} height={400} className=" rounded-full" priority />
                </div>
            </div>
        </section>
    )
}