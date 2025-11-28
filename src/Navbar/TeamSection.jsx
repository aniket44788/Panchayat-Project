
import moni from "../assets/moni.jpeg";
import aditya from "../assets/aditya.jpg"
// import aditya from "../assets/user.png"

function TeamSection() {
    return (
        <section className="w-full bg-gradient-to-b from-gray-50 to-white py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* HEADER */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4 flex items-center justify-center">
                        <span className="text-5xl mr-3">👥</span> हमारी टीम
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        नैनापुर के विकास के लिए समर्पित पेशेवरों की एक मजबूत टीम
                    </p>
                    <div className="h-1 w-24 bg-gradient-to-r from-orange-500 to-green-600 mx-auto mt-4 rounded-full"></div>
                </div>

                {/* TEAM CARDS GRID */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-16">
                    {/* MONI MAURYA CARD */}
                    <div className="group">
                        <div className="bg-white border-2 border-orange-500 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                            {/* IMAGE CONTAINER */}


                            <div className="relative group rounded-3xl overflow-hidden shadow-2xl 
                w-full h-[320px] sm:h-[400px] md:h-[500px] lg:h-[600px] flex items-center justify-center">

                                {moni ? (
                                    <img
                                        src={moni}
                                        alt="मोनी मौर्य"
                                        className="max-h-full max-w-full object-contain transition-transform duration-700"
                                    />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center 
                        text-white text-6xl sm:text-7xl md:text-8xl font-extrabold drop-shadow-lg">
                                        MM
                                    </div>
                                )}

                                {/* TOP RIGHT BADGE */}
                                <div className="absolute top-4 right-4 bg-gradient-to-r from-orange-600 to-red-600 text-white 
                    px-5 py-2 rounded-full font-bold text-sm shadow-xl backdrop-blur-md border border-white/30">
                                    प्रधान पद
                                </div>

                                {/* BOTTOM DARK GLASS OVERLAY */}
                                <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/80 via-black/30 to-transparent 
                    p-5 text-white text-center sm:text-left">
                                    <h3 className="text-xl sm:text-2xl font-bold drop-shadow-lg">मोनी मौर्य</h3>
                                    <p className="text-sm sm:text-base opacity-90">
                                        15+ वर्षों का अनुभव | वकील (LLB)
                                    </p>
                                </div>
                            </div>



                            {/* CONTENT */}
                            <div className="p-6 md:p-8">
                                <h3 className="text-2xl md:text-3xl font-bold text-blue-900 mb-2">
                                    मोनी मौर्य
                                </h3>
                                <p className="text-lg font-bold text-orange-500 mb-6 flex items-center">
                                    <span className="text-2xl mr-2">📍</span> प्रधान प्रत्याशी
                                </p>

                                {/* INFO GRID */}
                                <div className="space-y-4 mb-6 border-t pt-6">
                                    <div className="flex items-start">
                                        <span className="text-2xl mr-3">🎓</span>
                                        <div>
                                            <p className="font-semibold text-gray-700">शिक्षा</p>
                                            <p className="text-gray-600">LLB (कानून स्नातक)</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start">
                                        <span className="text-2xl mr-3">⏱️</span>
                                        <div>
                                            <p className="font-semibold text-gray-700">अनुभव</p>
                                            <p className="text-gray-600">15+ वर्ष सामाजिक सेवा</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start">
                                        <span className="text-2xl mr-3">🎯</span>
                                        <div>
                                            <p className="font-semibold text-gray-700">विशेषज्ञता</p>
                                            <p className="text-gray-600">स्थानीय विकास परियोजनाएं</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start">
                                        <span className="text-2xl mr-3">🏢</span>
                                        <div>
                                            <p className="font-semibold text-gray-700">संगठन</p>
                                            <p className="text-gray-600">FBG Foundation संस्थापक</p>
                                        </div>
                                    </div>
                                </div>

                                {/* VISION QUOTE */}
                                <div className="bg-orange-50 border-l-4 border-orange-500 p-4 rounded">
                                    <p className="text-sm italic text-gray-700">
                                        "नैनापुर को डिजिटल रूप से सशक्त गांव बनाना "
                                    </p>
                                    <br />
                                    <p className="text-sm italic text-gray-700">
                                        "जहां हर नागरिक को समान अवसर मिले"
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ADITYA MAURYA CARD */}
                    <div className="group">
                        <div className="bg-white border-2 border-green-600 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                            {/* IMAGE CONTAINER */}


                            <div className="relative group rounded-3xl overflow-hidden shadow-2xl 
                w-full h-[320px] sm:h-[400px] md:h-[500px] lg:h-[600px]
                flex items-center justify-center">

                                {/* IMAGE AREA */}
                                {aditya ? (
                                    <img
                                        src={aditya}
                                        alt="आदित्य मौर्य"
                                        className="max-h-full max-w-full object-contain transition-transform duration-700"
                                    />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center text-white
                        text-6xl sm:text-7xl md:text-8xl font-extrabold drop-shadow-lg">
                                        AD
                                    </div>
                                )}

                                {/* TOP RIGHT BADGE */}
                                <div className="absolute top-4 right-4 bg-gradient-to-r from-green-600 to-green-700 text-white
                    px-5 py-2 rounded-full font-bold text-sm shadow-xl backdrop-blur-md border border-white/30">
                                    निदेशक
                                </div>

                                {/* NAME TAG AT BOTTOM */}
                                <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/80 via-black/30 to-transparent
                    p-5 text-white text-center sm:text-left">
                                    <h3 className="text-xl sm:text-2xl font-bold drop-shadow-lg">आदित्य मौर्य</h3>
                                    <p className="text-sm sm:text-base opacity-90">सामुदायिक विकास | FBG Foundation</p>
                                </div>
                            </div>




                            {/* CONTENT */}
                            <div className="p-6 md:p-8">
                                <h3 className="text-2xl md:text-3xl font-bold text-blue-900 mb-2">
                                    आदित्य मौर्य
                                </h3>
                                <p className="text-lg font-bold text-green-600 mb-6 flex items-center">
                                    <span className="text-2xl mr-2">🎯</span> अभियान निदेशक
                                </p>

                                {/* INFO GRID */}
                                <div className="space-y-4 mb-6 border-t pt-6">
                                    <div className="flex items-start">
                                        <span className="text-2xl mr-3">💼</span>
                                        <div>
                                            <p className="font-semibold text-gray-700">भूमिका</p>
                                            <p className="text-gray-600">डिजिटल पहल & विकास</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start">
                                        <span className="text-2xl mr-3">🏢</span>
                                        <div>
                                            <p className="font-semibold text-gray-700">संगठन</p>
                                            <p className="text-gray-600">FBG Foundation</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start">
                                        <span className="text-2xl mr-3">💻</span>
                                        <div>
                                            <p className="font-semibold text-gray-700">विशेषज्ञता</p>
                                            <p className="text-gray-600">तकनीकी विकास & आईटी</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start">
                                        <span className="text-2xl mr-3">🎓</span>
                                        <div>
                                            <p className="font-semibold text-gray-700">ध्यान</p>
                                            <p className="text-gray-600">ग्रामीण डिजिटलीकरण</p>
                                        </div>
                                    </div>
                                </div>

                                {/* ACHIEVEMENTS */}
                                <div className="bg-green-50 border-l-4 border-green-600 p-4 rounded">
                                    <p className="text-sm font-semibold text-gray-700 mb-2">✅ उपलब्धियां:</p>
                                    <ul className="text-sm text-gray-600 space-y-1">
                                        <li>• 50+ गांवों का डिजिटलीकरण</li>
                                        <li>• 10 वर्षों का अनुभव</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* TEAM STATS */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-16 pt-12 border-t">
                    <div className="text-center p-4 bg-blue-50 rounded-lg hover:shadow-md transition-all">
                        <p className="text-3xl md:text-4xl font-bold text-blue-900">25+</p>
                        <p className="text-gray-700 font-semibold mt-2">वर्षों अनुभव</p>
                    </div>

                    <div className="text-center p-4 bg-orange-50 rounded-lg hover:shadow-md transition-all">
                        <p className="text-3xl md:text-4xl font-bold text-orange-500">50+</p>
                        <p className="text-gray-700 font-semibold mt-2">गांव सेवा</p>
                    </div>

                    <div className="text-center p-4 bg-green-50 rounded-lg hover:shadow-md transition-all">
                        <p className="text-3xl md:text-4xl font-bold text-green-600">100%</p>
                        <p className="text-gray-700 font-semibold mt-2">प्रतिबद्धता</p>
                    </div>

                    <div className="text-center p-4 bg-purple-50 rounded-lg hover:shadow-md transition-all">
                        <p className="text-3xl md:text-4xl font-bold text-purple-600">1000+</p>
                        <p className="text-gray-700 font-semibold mt-2">परिवार</p>
                    </div>
                </div>

                {/* MISSION STATEMENT */}
                <div className="mt-16 bg-gradient-to-r from-orange-500 via-yellow-400 to-green-600 rounded-xl p-8 md:p-12 text-white shadow-lg">
                    <div className="text-center">
                        <h3 className="text-2xl md:text-3xl font-bold mb-4 flex items-center justify-center">
                            <span className="text-4xl mr-3">🎯</span> हमारा मिशन
                        </h3>
                        <p className="text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
                            नैनापुर गांव को डिजिटल रूप से सशक्त बनाकर, पारदर्शी शासन स्थापित करके, और
                            हर नागरिक को स्वास्थ्य, शिक्षा, रोजगार एवं विकास की समान सुविधा प्रदान करना।
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default TeamSection;