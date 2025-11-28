import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function Survey() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        familyHead: "",
        fatherName: "",
        mobileNumber: "",
        age: "",
        gender: "",
        category: "",
        ward: "",
        mainIssues: [],
        employment: "",
        scheme: "",
        remarks: "",
    });

    const [message, setMessage] = useState("");
    const [messageType, setMessageType] = useState("");

    const issues = [
        { id: "issue1", label: "🛣️ सड़क की मरम्मत", value: "सड़क" },
        { id: "issue2", label: "💧 पानी की कमी", value: "पानी" },
        { id: "issue3", label: "💡 बिजली की समस्या", value: "बिजली" },
        { id: "issue4", label: "🍚 राशन की सुविधा", value: "राशन" },
        { id: "issue5", label: "🏥 स्वास्थ्य सेवा", value: "स्वास्थ्य" },
        { id: "issue6", label: "🚰 नाली / सफाई", value: "नाली" },
        { id: "issue7", label: "📋 अन्य", value: "अन्य" },
    ];

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleCheckboxChange = (issueValue) => {
        setFormData((prev) => ({
            ...prev,
            mainIssues: prev.mainIssues.includes(issueValue)
                ? prev.mainIssues.filter((i) => i !== issueValue)
                : [...prev.mainIssues, issueValue],
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (
            !formData.familyHead ||
            !formData.fatherName ||
            !formData.mobileNumber ||
            !formData.age ||
            !formData.category ||
            !formData.ward ||
            formData.mainIssues.length === 0 ||
            !formData.employment ||
            !formData.scheme
        ) {
            setMessage("❌ कृपया सभी आवश्यक fields (*) भरें");
            setMessageType("error");
            return;
        }

        const surveys = JSON.parse(localStorage.getItem("surveys")) || [];
        if (surveys.some((s) => s.mobileNumber === formData.mobileNumber)) {
            setMessage("❌ यह मोबाइल नंबर पहले से रजिस्टर है।");
            setMessageType("error");
            return;
        }

        surveys.push({ id: Date.now(), ...formData, createdAt: new Date() });
        localStorage.setItem("surveys", JSON.stringify(surveys));

        setMessage("✅ आपका सर्वे सफलतापूर्वक सबमिट हो गया!");
        setMessageType("success");

        setFormData({
            familyHead: "",
            fatherName: "",
            mobileNumber: "",
            age: "",
            gender: "",
            category: "",
            ward: "",
            mainIssues: [],
            employment: "",
            scheme: "",
            remarks: "",
        });

        setTimeout(() => navigate("/"), 2000);
    };

    const handleReset = () => {
        setFormData({
            familyHead: "",
            fatherName: "",
            mobileNumber: "",
            age: "",
            gender: "",
            category: "",
            ward: "",
            mainIssues: [],
            employment: "",
            scheme: "",
            remarks: "",
        });
        setMessage("");
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.6 }}
            className="min-h-screen bg-gradient-to-br from-green-50 via-white to-orange-50 py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 flex justify-center"
        >
            <div className="w-full  bg-white rounded-3xl shadow-2xl p-6 sm:p-8 lg:p-12 border-b-8 border-r-8 border-orange-500">
                {/* HEADER */}
                <div className="text-center mb-8 sm:mb-10 lg:mb-12">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-green-700 via-orange-600 to-green-700 bg-clip-text text-transparent mb-2 sm:mb-3"
                    >
                        🗳️ परिवार सर्वे फॉर्म
                    </motion.h1>
                    <p className="text-base sm:text-lg text-gray-700 font-medium">
                        कृपया सभी जानकारी सही और पूरी तरह भरें
                    </p>
                    <p className="text-xs sm:text-sm text-gray-500 mt-2">
                        <span className="text-red-600 font-bold">*</span> आवश्यक क्षेत्र | आपका डेटा पूरी तरह सुरक्षित है ✅
                    </p>
                </div>

                {/* FORM */}
                <motion.form
                    onSubmit={handleSubmit}
                    className="space-y-6 sm:space-y-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    {/* Personal Information Section */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-br from-blue-50 to-blue-100 border-l-4 border-blue-600 rounded-xl p-4 sm:p-6 lg:p-8"
                    >
                        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-blue-800 mb-6 flex items-center gap-3">
                            <span className="text-2xl sm:text-3xl">👤</span>
                            व्यक्तिगत जानकारी
                        </h2>

                        <div className="space-y-4 sm:space-y-6">
                            {/* Row 1: Family Head and Father Name */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                                <div>
                                    <label className="block text-sm font-bold text-gray-800 mb-2">
                                        👨‍👩‍👧 परिवार के मुखिया का नाम <span className="text-red-600">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="familyHead"
                                        value={formData.familyHead}
                                        onChange={handleInputChange}
                                        placeholder="नाम दर्ज करें"
                                        className="w-full px-3 sm:px-4 py-2 sm:py-3 border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-all text-gray-700 text-sm sm:text-base"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-gray-800 mb-2">
                                        👤 पिता का नाम <span className="text-red-600">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="fatherName"
                                        value={formData.fatherName}
                                        onChange={handleInputChange}
                                        placeholder="पिता का नाम दर्ज करें"
                                        className="w-full px-3 sm:px-4 py-2 sm:py-3 border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-all text-gray-700 text-sm sm:text-base"
                                        required
                                    />
                                </div>
                            </div>

                            {/* Row 2: Mobile and Age */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                                <div>
                                    <label className="block text-sm font-bold text-gray-800 mb-2">
                                        📱 मोबाइल नंबर <span className="text-red-600">*</span>
                                    </label>
                                    <input
                                        type="tel"
                                        name="mobileNumber"
                                        value={formData.mobileNumber}
                                        onChange={handleInputChange}
                                        placeholder="10 अंकों का नंबर"
                                        maxLength="10"
                                        className="w-full px-3 sm:px-4 py-2 sm:py-3 border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-all text-gray-700 text-sm sm:text-base"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-gray-800 mb-2">
                                        🎂 उम्र <span className="text-red-600">*</span>
                                    </label>
                                    <input
                                        type="number"
                                        name="age"
                                        value={formData.age}
                                        onChange={handleInputChange}
                                        placeholder="उम्र दर्ज करें"
                                        min="18"
                                        max="120"
                                        className="w-full px-3 sm:px-4 py-2 sm:py-3 border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-all text-gray-700 text-sm sm:text-base"
                                        required
                                    />
                                </div>
                            </div>

                            {/* Row 3: Gender */}
                            <div>
                                <label className="block text-sm font-bold text-gray-800 mb-2">
                                    👫 लिंग (वैकल्पिक)
                                </label>
                                <select
                                    name="gender"
                                    value={formData.gender}
                                    onChange={handleInputChange}
                                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-all bg-white text-gray-700 text-sm sm:text-base"
                                >
                                    <option value="">-- चुनें --</option>
                                    <option value="पुरुष">पुरुष</option>
                                    <option value="महिला">महिला</option>
                                    <option value="अन्य">अन्य</option>
                                </select>
                            </div>
                        </div>
                    </motion.div>

                    {/* Location and Category Section */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="bg-gradient-to-br from-orange-50 to-orange-100 border-l-4 border-orange-600 rounded-xl p-4 sm:p-6 lg:p-8"
                    >
                        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-orange-800 mb-6 flex items-center gap-3">
                            <span className="text-2xl sm:text-3xl">📍</span>
                            स्थान और श्रेणी
                        </h2>

                        <div className="space-y-4 sm:space-y-6">
                            {/* Row 1: Category and Ward */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                                <div>
                                    <label className="block text-sm font-bold text-gray-800 mb-2">
                                        📊 श्रेणी <span className="text-red-600">*</span>
                                    </label>
                                    <select
                                        name="category"
                                        value={formData.category}
                                        onChange={handleInputChange}
                                        className="w-full px-3 sm:px-4 py-2 sm:py-3 border-2 border-gray-300 rounded-lg focus:border-orange-600 focus:ring-2 focus:ring-orange-200 focus:outline-none transition-all bg-white text-gray-700 text-sm sm:text-base"
                                        required
                                    >
                                        <option value="">-- श्रेणी चुनें --</option>
                                        <option value="General">जनरल (General)</option>
                                        <option value="OBC">अन्य पिछड़ी जाति (OBC)</option>
                                        <option value="SC">अनुसूचित जाति (SC)</option>
                                        <option value="ST">अनुसूचित जनजाति (ST)</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-gray-800 mb-2">
                                        🏘️ वार्ड / पता <span className="text-red-600">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="ward"
                                        value={formData.ward}
                                        onChange={handleInputChange}
                                        placeholder="वार्ड नंबर और पता"
                                        className="w-full px-3 sm:px-4 py-2 sm:py-3 border-2 border-gray-300 rounded-lg focus:border-orange-600 focus:ring-2 focus:ring-orange-200 focus:outline-none transition-all text-gray-700 text-sm sm:text-base"
                                        required
                                    />
                                </div>
                            </div>

                            {/* Main Issues */}
                            <div>
                                <label className="block text-sm font-bold text-gray-800 mb-4">
                                    🆘 मुख्य समस्याएँ <span className="text-red-600">*</span>
                                </label>
                                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3">
                                    {issues.map((issue) => (
                                        <motion.label
                                            key={issue.id}
                                            whileHover={{ scale: 1.05 }}
                                            className={`flex items-center gap-2 p-2 sm:p-3 border-2 rounded-lg cursor-pointer transition-all ${formData.mainIssues.includes(issue.value)
                                                ? "bg-orange-100 border-orange-500 shadow-md"
                                                : "border-gray-300 bg-white hover:border-orange-400"
                                                }`}
                                        >
                                            <input
                                                type="checkbox"
                                                checked={formData.mainIssues.includes(issue.value)}
                                                onChange={() => handleCheckboxChange(issue.value)}
                                                className="w-4 h-4 sm:w-5 sm:h-5 text-orange-600 cursor-pointer"
                                            />
                                            <span className="text-xs sm:text-sm font-medium text-gray-800">
                                                {issue.label}
                                            </span>
                                        </motion.label>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Employment and Scheme Section */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="bg-gradient-to-br from-green-50 to-green-100 border-l-4 border-green-600 rounded-xl p-4 sm:p-6 lg:p-8"
                    >
                        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-green-800 mb-6 flex items-center gap-3">
                            <span className="text-2xl sm:text-3xl">💼</span>
                            रोजगार और सरकारी योजना
                        </h2>

                        <div className="space-y-4 sm:space-y-6">
                            {/* Employment Question */}
                            <div>
                                <label className="block text-sm font-bold text-gray-800 mb-3">
                                    💼 रोजगार की आवश्यकता <span className="text-red-600">*</span>
                                </label>
                                <div className="flex gap-3 sm:gap-4">
                                    <motion.label
                                        whileHover={{ scale: 1.05 }}
                                        className={`flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-3 border-2 rounded-lg cursor-pointer transition-all ${formData.employment === "हां"
                                            ? "bg-green-100 border-green-500"
                                            : "border-gray-300 hover:border-green-400"
                                            }`}
                                    >
                                        <input
                                            type="radio"
                                            name="employment"
                                            value="हां"
                                            checked={formData.employment === "हां"}
                                            onChange={handleInputChange}
                                            className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 cursor-pointer"
                                            required
                                        />
                                        <span className="text-sm sm:text-base font-medium text-gray-800">हाँ</span>
                                    </motion.label>
                                    <motion.label
                                        whileHover={{ scale: 1.05 }}
                                        className={`flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-3 border-2 rounded-lg cursor-pointer transition-all ${formData.employment === "नहीं"
                                            ? "bg-red-100 border-red-500"
                                            : "border-gray-300 hover:border-red-400"
                                            }`}
                                    >
                                        <input
                                            type="radio"
                                            name="employment"
                                            value="नहीं"
                                            checked={formData.employment === "नहीं"}
                                            onChange={handleInputChange}
                                            className="w-4 h-4 sm:w-5 sm:h-5 text-red-600 cursor-pointer"
                                            required
                                        />
                                        <span className="text-sm sm:text-base font-medium text-gray-800">नहीं</span>
                                    </motion.label>
                                </div>
                            </div>

                            {/* Government Scheme Status */}
                            <div>
                                <label className="block text-sm font-bold text-gray-800 mb-3">
                                    🤝 सरकारी योजना स्थिति <span className="text-red-600">*</span>
                                </label>
                                <select
                                    name="scheme"
                                    value={formData.scheme}
                                    onChange={handleInputChange}
                                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border-2 border-gray-300 rounded-lg focus:border-green-600 focus:ring-2 focus:ring-green-200 focus:outline-none transition-all bg-white text-gray-700 text-sm sm:text-base"
                                    required
                                >
                                    <option value="">-- क्या आपको योजना का लाभ मिल रहा है? --</option>
                                    <option value="मिली है">✅ हाँ, योजना मिली है</option>
                                    <option value="नहीं मिली">❌ नहीं, योजना नहीं मिली</option>
                                    <option value="जानकारी नहीं">❓ मुझे नहीं पता</option>
                                </select>
                            </div>
                        </div>
                    </motion.div>

                    {/* Remarks Section */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="bg-gradient-to-br from-purple-50 to-purple-100 border-l-4 border-purple-600 rounded-xl p-4 sm:p-6 lg:p-8"
                    >
                        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-purple-800 mb-4 flex items-center gap-3">
                            <span className="text-2xl sm:text-3xl">💬</span>
                            अतिरिक्त जानकारी
                        </h2>
                        <label className="block text-sm font-bold text-gray-800 mb-2">
                            📝 टिप्पणियाँ / सुझाव (वैकल्पिक)
                        </label>
                        <textarea
                            name="remarks"
                            value={formData.remarks}
                            onChange={handleInputChange}
                            rows="4"
                            placeholder="अन्य जानकारी या कोई सुझाव लिखें..."
                            className="w-full px-3 sm:px-4 py-2 sm:py-3 border-2 border-gray-300 rounded-lg focus:border-purple-600 focus:ring-2 focus:ring-purple-200 focus:outline-none transition-all resize-none text-gray-700 text-sm sm:text-base"
                        />
                    </motion.div>

                    {/* Messages */}
                    {message && (
                        <motion.div
                            initial={{ x: 50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            className={`p-4 rounded-lg font-semibold text-sm sm:text-base ${messageType === "success"
                                ? "bg-green-50 text-green-700 border-2 border-green-300"
                                : "bg-red-50 text-red-700 border-2 border-red-300"
                                }`}
                        >
                            {message}
                        </motion.div>
                    )}

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            type="submit"
                            className="flex-1 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-bold py-3 px-4 sm:px-6 rounded-lg shadow-lg hover:shadow-2xl transition-all text-sm sm:text-base"
                        >
                            ✅ सर्वे सबमिट करें
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            type="button"
                            onClick={handleReset}
                            className="flex-1 bg-gradient-to-r from-gray-400 to-gray-500 hover:from-gray-500 hover:to-gray-600 text-white font-bold py-3 px-4 sm:px-6 rounded-lg shadow-lg hover:shadow-2xl transition-all text-sm sm:text-base"
                        >
                            🔄 रीसेट करें
                        </motion.button>
                    </div>
                </motion.form>
            </div>
        </motion.div>
    );
}

export default Survey;