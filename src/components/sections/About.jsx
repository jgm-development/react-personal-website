export const About = () => {
    const frontendSkills = ["React", "Angular", "JavaScript", "CSS", "TailwindCSS", "Bootstrap", "HTML", "ExtJs"];
    const backendSkills = ["ASP .NET MVC", "ASP .NET Core", "NodeJS", "Enitity Framework", "My SQL Server"];
    return <section id="about" className="min-h-screen flex items-center justify-center py-20">
        <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                About Me
            </h2>
            <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
                <p className="text-gray-300 mb-6">
                    I’m passionate about creating dynamic, user-friendly interfaces and am excited about opportunities that challenge me to grow 
                    further in modern front-end and back end frameworks.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">Frontend</h3>
                        <div className="flex flex-wrap gap-2">
                            {frontendSkills.map((tech, key) => (
                                <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full 
                                text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                    <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">Backend</h3>
                        <div className="flex flex-wrap gap-2">
                            {backendSkills.map((tech, key) => (
                                <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full 
                                text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
                {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8"> */}
                <div className="mt-8">
                    <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all mb-6">
                        <h3 className="text-xl font-bold mb-4">Education</h3>
                        <ul className="list-disc list-inside text-gray-300 space-y-2">
                            <li>
                                <strong>Master in Information Technology</strong> - NOTRE DAME OF MARBEL UNIVERSITY (March 2015)
                            </li>
                            <li>
                                <strong>B.S. Information Technology</strong> - NOTRE DAME OF DADIANGAS UNIVERSITY (March 2012)
                            </li>
                        </ul>
                    </div>
                    <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">Work Experience</h3>
                        <div className="space-y-4 text-gray-300">
                            <div>
                                <h4 className="font-semibold">Software Developer at NutNull IT Solutions Inc.(August 2021 – January 2025)</h4>
                                <ul className="list-disc list-inside text-gray-300 space-y-2">
                                    <li>
                                        Local Projects: Designed and developed a payroll system customized to meet specific business requirements.
                                    </li>
                                    <li>
                                        International Projects: Collaborated with Sedulen as an outsourced developer to deliver impactful web solutions:
                                    </li>
                                    <li>
                                        Created dynamic web templates for survey questions and promotional offers, enhancing user engagement and product visibility.
                                    </li>
                                    <li>
                                        Maintained and improved the Affiliate Network (AN) UI, streamlining the management and monitoring of advertiser links and offers.
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-semibold">Programmer at Geodata Solutions Inc. (November 2015 – January 2021)</h4>
                                <ul className="list-disc list-inside text-gray-300 space-y-2">
                                    <li>
                                        Maintained and enhanced existing web platforms, introducing new functionalities and optimizing performance.
                                    </li>
                                    <li>
                                        Designed and implemented database structures and stored procedures in MS SQL Server to support new modules and sub modules.
                                    </li>
                                    <li>
                                        Improved and optimized existing system modules, resulting in more efficient query execution.
                                    </li>
                                    <li>
                                        Created responsive user interfaces using the latest version of Bootstrap.
                                    </li>
                                    <li>
                                        Trained junior programmers in object-oriented programming principles and best practices.
                                    </li>
                                    <li>
                                        Collaborated with managers and the CEO during project meetings to ensure alignment with organizational objectives.
                                    </li>
                                    <li>
                                        Coordinated with QA teams to review system performance, identify bugs, and refine workflows.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
};