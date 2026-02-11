import { BookOpen, ExternalLink, Calendar, Award } from "lucide-react";
import { motion } from "framer-motion";

const publications = [
    {
        id: 1,
        title: "Automated COVID-19 Detection Using Inception V3 and ResNet Algorithms",
        venue: "IEEE Conference",
        year: "2024",
        authors: "K. Saipranay et al.",
        description: "Research paper on automated COVID-19 detection using deep learning algorithms including Inception V3 and ResNet for medical image analysis and diagnosis.",
        tags: ["Deep Learning", "Medical Imaging", "CNN", "Inception V3", "ResNet"],
        pdfUrl: "#",
        color: "from-blue-500 to-indigo-600"
    }
];

export const PublicationsSection = () => {
    return (
        <section id="publications" className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background via-primary/5 to-background">
            <div className="container mx-auto max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                        <BookOpen className="h-4 w-4" />
                        Research Publications
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
                        Published Research
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                        Academic contributions to the field of computer science and artificial intelligence
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 gap-8">
                    {publications.map((publication, index) => (
                        <motion.div
                            key={publication.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group relative bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 shadow-sm hover:shadow-lg"
                        >
                            <div className="flex flex-col md:flex-row gap-6">
                                {/* Year Badge */}
                                <div className="flex-shrink-0">
                                    <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r ${publication.color} text-white font-bold text-lg`}>
                                        <Calendar className="h-5 w-5" />
                                        {publication.year}
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="flex-1">
                                    <div className="flex items-start justify-between gap-4 mb-3">
                                        <h3 className="text-xl md:text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                                            {publication.title}
                                        </h3>
                                        {publication.pdfUrl !== "#" && (
                                            <a
                                                href={publication.pdfUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex-shrink-0 p-2 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                                                aria-label="View PDF"
                                            >
                                                <ExternalLink className="h-5 w-5" />
                                            </a>
                                        )}
                                    </div>

                                    <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                                        <div className="flex items-center gap-2">
                                            <Award className="h-4 w-4" />
                                            <span className="font-semibold">{publication.venue}</span>
                                        </div>
                                        <span>•</span>
                                        <span>{publication.authors}</span>
                                    </div>

                                    <p className="text-muted-foreground mb-4 leading-relaxed">
                                        {publication.description}
                                    </p>

                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-2">
                                        {publication.tags.map((tag, tagIndex) => (
                                            <span
                                                key={tagIndex}
                                                className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Accent Bar */}
                            <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${publication.color} rounded-b-2xl`} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
