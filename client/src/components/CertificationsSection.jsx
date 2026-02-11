import { Award, Calendar, Shield } from "lucide-react";
import { motion } from "framer-motion";

const certifications = [
    {
        id: 1,
        title: "AWS Certified Solutions Architect",
        issuer: "Amazon Web Services",
        icon: <Shield className="h-6 w-6" />,
        color: "from-orange-500 to-amber-600"
    },
    {
        id: 2,
        title: "Oracle Cloud Infrastructure 2024 Generative AI Certified Professional",
        issuer: "Oracle",
        icon: <Award className="h-6 w-6" />,
        color: "from-red-500 to-orange-600"
    },
    {
        id: 3,
        title: "TCS iON Career Edge - Young Professional",
        issuer: "TCS iON",
        icon: <Calendar className="h-6 w-6" />,
        color: "from-blue-500 to-cyan-600"
    },
    {
        id: 4,
        title: "Python Programming Certification",
        issuer: "Programming Hub",
        icon: <Award className="h-6 w-6" />,
        color: "from-green-500 to-emerald-600"
    },
    {
        id: 5,
        title: "Full Stack Web Development",
        issuer: "Udemy",
        icon: <Shield className="h-6 w-6" />,
        color: "from-purple-500 to-indigo-600"
    },
    {
        id: 6,
        title: "Cybersecurity Fundamentals",
        issuer: "IBM",
        icon: <Shield className="h-6 w-6" />,
        color: "from-pink-500 to-rose-600"
    }
];

export const CertificationsSection = () => {
    return (
        <section id="certifications" className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background via-secondary/5 to-background">
            <div className="container mx-auto max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                        <Award className="h-4 w-4" />
                        Certifications
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
                        Professional Certifications
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                        Recognized credentials demonstrating expertise in cloud services and professional development
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {certifications.map((cert, index) => (
                        <motion.div
                            key={cert.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -5 }}
                            className="group relative bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-all duration-300 shadow-sm hover:shadow-lg"
                        >
                            <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${cert.color} text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                                {cert.icon}
                            </div>
                            <h3 className="text-lg font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                                {cert.title}
                            </h3>
                            <p className="text-sm text-muted-foreground">
                                {cert.issuer}
                            </p>
                            <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${cert.color} rounded-b-2xl`} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
