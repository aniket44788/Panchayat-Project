import React from "react";
import { motion } from "framer-motion";
import moni from "../assets/moni.jpeg";

function Candidate() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-green-50 via-white to-orange-50 py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="w-full max-w-full lg:max-w-6xl mx-auto"
            >
                {/* Main Card Container */}
                <div className="bg-white rounded-3xl sm:rounded-4xl shadow-2xl overflow-hidden border-b-8 border-r-8 border-orange-500">
                    {/* Top Decorative Bar */}
                    <div className="h-2 bg-gradient-to-r from-green-600 via-white to-orange-600"></div>

                    <div className="px-4 sm:px-8 lg:px-12 py-8 sm:py-12 lg:py-16">
                        {/* Profile Image Section */}
                        <motion.div
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                            className="flex justify-center mb-8 sm:mb-10 lg:mb-12"
                        >
                            <div className="relative">
                                {/* Image Border Circle */}
                                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-orange-400 to-green-500 blur-xl opacity-50 animate-pulse"></div>

                                {/* Main Image Container */}
                                <motion.div
                                    whileHover={{ scale: 1.08 }}
                                    transition={{ duration: 0.3 }}
                                    className="relative w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-8 border-white shadow-2xl hover:shadow-3xl transition-all duration-300 ring-4 ring-orange-300"
                                >
                                    <img
                                        src={moni}
                                        alt="मोनी मौर्य"
                                        className="w-full h-full object-cover"
                                    />
                                </motion.div>
                            </div>
                        </motion.div>

                        {/* Name Section */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.6 }}
                            className="text-center mb-2 sm:mb-4"
                        >
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-green-700 via-orange-600 to-green-700 bg-clip-text text-transparent mb-2 sm:mb-3">
                                मोनी मौर्य
                            </h1>
                            <p className="text-lg sm:text-xl lg:text-2xl font-semibold text-orange-600">
                                प्रधान पद के प्रत्याशी
                            </p>
                            <p className="text-base sm:text-lg text-green-700 font-medium">
                                वकील (LLB)
                            </p>
                        </motion.div>

                        {/* Tagline */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                            className="text-center mb-8 sm:mb-12"
                        >
                            <p className="text-lg sm:text-xl italic text-gray-700 font-medium px-4">
                                "स्थानीय विकास ही मुख्य उद्देश्य है।"
                            </p>
                        </motion.div>

                        {/* Vision Section */}
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="mb-6 sm:mb-8 lg:mb-10"
                        >
                            <div className="bg-gradient-to-br from-green-50 to-green-100 border-l-4 border-green-600 rounded-2xl p-6 sm:p-8 lg:p-10 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-green-800 mb-4 flex items-center gap-3">
                                    <span className="text-3xl sm:text-4xl">🎯</span>
                                    दृष्टिकोण (Vision Statement)
                                </h2>
                                <div className="space-y-3 sm:space-y-4 text-gray-800">
                                    <p className="text-base sm:text-lg leading-relaxed">
                                        ✨ हर घर में सुविधाएँ पहुंचाना, साक्षरता बढ़ाना, और स्थानीय संसाधनों का सदुपयोग।
                                    </p>
                                    <p className="text-base sm:text-lg leading-relaxed">
                                        🗣️ वोटरों की आवाज़ को मजबूत बनाना और समस्याओं का त्वरित समाधान सुनिश्चित करना।
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        {/* 500-Day Plan Section */}
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="mb-6 sm:mb-8 lg:mb-10"
                        >
                            <div className="bg-gradient-to-br from-orange-50 to-orange-100 border-l-4 border-orange-600 rounded-2xl p-6 sm:p-8 lg:p-10 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-orange-800 mb-6 flex items-center gap-3">
                                    <span className="text-3xl sm:text-4xl">📋</span>
                                    500-दिन का विकास योजना
                                </h2>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                                    {[
                                        { icon: "🛣️", text: "गांव में सड़क और बिजली सुधार" },
                                        { icon: "🏥", text: "स्वास्थ्य और शिक्षण सुविधाएँ बढ़ाना" },
                                        { icon: "🌿", text: "स्वच्छता अभियान शुरू करना" },
                                        { icon: "💼", text: "स्थानीय रोजगार के अवसर लाना" },
                                        { icon: "🤝", text: "सभी सरकारी योजनाओं का लाभ" },
                                        { icon: "🎓", text: "युवा विकास कार्यक्रम शुरू करना" },
                                    ].map((item, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.1 }}
                                            className="flex items-start gap-3 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                                        >
                                            <span className="text-2xl sm:text-3xl flex-shrink-0">{item.icon}</span>
                                            <p className="text-gray-800 text-sm sm:text-base font-medium leading-relaxed">
                                                {item.text}
                                            </p>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>

                        {/* Introduction Section */}
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="mb-6 sm:mb-8 lg:mb-10"
                        >
                            <div className="bg-gradient-to-br from-white via-green-50 to-orange-50 border-l-4 border-green-600 rounded-2xl p-6 sm:p-8 lg:p-10 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-green-800 mb-6 flex items-center gap-3">
                                    <span className="text-3xl sm:text-4xl">👤</span>
                                    संक्षिप्त परिचय
                                </h2>

                                <div className="space-y-6">
                                    {/* Main Introduction */}
                                    <div className="p-4 sm:p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
                                        <p className="text-gray-800 text-base sm:text-lg leading-relaxed">
                                            मोनी मौर्य का उद्देश्य गांव में <span className="font-bold text-orange-600">स्थायी विकास</span> और <span className="font-bold text-green-600">पारदर्शिता</span> लाना है। उन्होंने कानून की पढ़ाई करके समाज सेवा का व्रत लिया है।
                                        </p>
                                    </div>

                                    {/* Organizations Grid */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                                        {/* FBG Foundation */}
                                        <motion.div
                                            whileHover={{ scale: 1.05 }}
                                            className="p-4 sm:p-6 bg-gradient-to-br from-green-100 to-green-50 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border-2 border-green-300"
                                        >
                                            <div className="flex items-center gap-3 mb-3">
                                                <span className="text-3xl sm:text-4xl">🏛️</span>
                                                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-green-700">
                                                    FBG Foundation
                                                </h3>
                                            </div>
                                            <p className="text-gray-800 text-sm sm:text-base leading-relaxed">
                                                समाज सेवा और शिक्षा के क्षेत्र में कार्यरत संस्थान। शिक्षा और विकास के माध्यम से समाज को आगे बढ़ाने का प्रयास।
                                            </p>
                                        </motion.div>

                                        {/* FBG Property */}
                                        <motion.div
                                            whileHover={{ scale: 1.05 }}
                                            className="p-4 sm:p-6 bg-gradient-to-br from-orange-100 to-orange-50 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border-2 border-orange-300"
                                        >
                                            <div className="flex items-center gap-3 mb-3">
                                                <span className="text-3xl sm:text-4xl">🏗️</span>
                                                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-orange-700">
                                                    FBG Property
                                                </h3>
                                            </div>
                                            <p className="text-gray-800 text-sm sm:text-base leading-relaxed">
                                                सामुदायिक भवन और विकास परियोजनाएँ। स्थानीय लोगों के लिए आवास और बुनियादी ढांचा विकास।
                                            </p>
                                        </motion.div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Call to Action */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.6 }}
                            className="text-center pt-6 sm:pt-8 lg:pt-10 border-t-4 border-gradient-to-r from-green-300 via-orange-300 to-green-300"
                        >
                            <p className="text-lg sm:text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-orange-600 mb-4">
                                आपका विश्वास ही हमारी शक्ति है
                            </p>
                            <button className="bg-gradient-to-r from-green-600 to-orange-600 hover:from-green-700 hover:to-orange-700 text-white font-bold py-3 sm:py-4 px-8 sm:px-12 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 text-base sm:text-lg">
                                📞 संपर्क करें
                            </button>
                        </motion.div>
                    </div>

                    {/* Bottom Decorative Bar */}
                    <div className="h-2 bg-gradient-to-r from-orange-600 via-white to-green-600"></div>
                </div>
            </motion.div>
        </div>
    );
}

export default Candidate;