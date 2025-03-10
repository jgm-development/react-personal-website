import { RevealOnScroll } from "../RevealOnScroll"

export const Projects = () => {
    return <section id="project" className="min-h-screen flex items-center justify-center py-20">
        <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                Featured Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                    <h3 className="text-xl font-bold mb-2">
                        Chat App
                    </h3>
                    <p className="text-gray-400 mb-4">
                        This chat application allows users to communicate with each other in real time. 
                        It features a simple and intuitive interface where users can send and receive messages instantly. 
                        The app includes a join page where the user will enter a name and select a room, ensuring a personalized experience.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {["NodeJS", "Express", "WebSockets", "JavaScript"].map((tech, key) => (
                            <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm 
                                hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                                    {tech}
                            </span>
                        ))}
                    </div>
                    <div className="flext justify-between items-center my-4">
                        <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors underline cursor-pointer">View Project</a>
                    </div>
                </div>
            </div>
        </div>
        </RevealOnScroll>
    </section>
}