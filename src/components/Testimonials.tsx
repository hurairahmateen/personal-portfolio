"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { TESTIMONIALS } from "@/constants";

const Testimonials: React.FC = () => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    return (
        <section id="testimonials" className="px-6 py-24">
            <div className="mx-auto max-w-6xl">
                <div className="mb-16 text-center">
                    <h2 className="mb-4 text-4xl font-bold md:text-5xl">
                        <span className="text-sky-400">Recommendations</span>
                    </h2>
                    <p className="mx-auto max-w-xl text-slate-400">
                        What people I&apos;ve worked with have to say about my work. You can view these directly on my LinkedIn by scrolling to the Recommendations section.
                    </p>
                </div>

                <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                    {TESTIMONIALS.map((testimonial, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.95, y: 30 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: (idx % 3) * 0.15, ease: "easeOut" }}
                            className="break-inside-avoid relative"
                        >
                            <div
                                className="glass relative overflow-hidden rounded-3xl border border-white/5 transition-all duration-500 hover:border-sky-500/40 hover:-translate-y-2 hover:shadow-[0_15px_40px_rgba(14,165,233,0.2)] group cursor-pointer flex flex-col"
                                onClick={() => setSelectedImage(testimonial.image)}
                            >
                                <div className="relative">
                                    <Image
                                        src={testimonial.image}
                                        alt={`Recommendation ${idx + 1}`}
                                        width={600}
                                        height={400}
                                        className="w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                                    />
                                    {/* Gradient overlay to seamlessly blend the image edge */}
                                    <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#090e1a] via-[#090e1a]/60 to-transparent pointer-events-none z-10"></div>

                                    <div className="absolute inset-0 bg-sky-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center z-20 backdrop-blur-[2px]">
                                        <div className="bg-sky-500 text-white rounded-full p-4 shadow-lg scale-0 group-hover:scale-100 transition-transform duration-500 ease-out">
                                            <i className="fa-solid fa-expand text-xl"></i>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-6 pt-2 border-t border-white/5 bg-[#090e1a] relative z-20">
                                    <h4 className="text-xl font-bold text-white transition-colors group-hover:text-sky-400">
                                        {testimonial.name}
                                    </h4>
                                    <p className="text-sm text-sky-500 font-medium mt-1">{testimonial.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <a
                        href="https://www.linkedin.com/in/hurairahmateen/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full bg-sky-500/10 px-6 py-3 text-sm font-medium text-sky-400 transition-colors hover:bg-sky-500/20"
                    >
                        Read more on LinkedIn
                        <i className="fa-solid fa-arrow-right text-xs"></i>
                    </a>
                </div>

                <AnimatePresence>
                    {selectedImage && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedImage(null)}
                            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4 backdrop-blur-sm cursor-zoom-out"
                        >
                            <motion.div
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.9, opacity: 0 }}
                                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                                className="relative max-h-[95vh] max-w-5xl w-full"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <button
                                    onClick={() => setSelectedImage(null)}
                                    className="absolute -top-12 right-0 text-white/70 hover:text-white transition-colors cursor-pointer"
                                    aria-label="Close modal"
                                >
                                    <i className="fa-solid fa-xmark text-3xl"></i>
                                </button>
                                <Image
                                    src={selectedImage}
                                    alt="Enlarged Recommendation"
                                    width={1400}
                                    height={1000}
                                    className="w-full h-auto max-h-[90vh] object-contain rounded-xl border border-white/10 shadow-2xl bg-black/50"
                                />
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};

export default Testimonials;
