import data from "@/ProjectData/Data";
import Projects from "@/component/Projects";

export default function ProjectList() {
    return (
        <section className="bg-blue-500 items-center justify-center h-screen flex">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 ">
                {data.map((item, key) => (
                    <Projects {...item} key={key} />
                ))}
            </div>
        </section>
    )
}