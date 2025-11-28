import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import QRCode from 'qrcode'; // npm install qrcode
import moni from "../assets/moni.jpeg"
import aditya from "../assets/aditya.jpg"
import TeamSection from './TeamSection';
function Home() {
    const [qrValue, setQrValue] = useState('');
    const qrCanvasRef = useRef(null);

    useEffect(() => {
        const url = window.location.origin + '/survey';
        setQrValue(url);

        if (qrCanvasRef.current) {
            QRCode.toCanvas(qrCanvasRef.current, url, {
                width: 256,
                margin: 2,
                color: {
                    dark: '#FF9933',
                    light: '#FFFFFF',
                },
            });
        }
    }, []);

    return (
        <div className="min-h-screen bg-white">
            {/* HERO SECTION */}
            <section className="bg-gradient-to-r from-orange-500 to-green-600 text-white py-16 px-4 sm:px-6 lg:px-8 rounded-2xl mx-4 my-8">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-4xl sm:text-5xl font-bold mb-4 drop-shadow-lg">
                        🏛️ Nainapur Digital Gram Panchayat
                    </h1>
                    <p className="text-xl sm:text-2xl mb-4 font-semibold">Smart Model 2026</p>
                    <p className="text-lg sm:text-xl italic drop-shadow-md">
                        हर शिकायत ऑनलाइन • हर योजना पारदर्शी • हर घर तक सेवा
                    </p>
                </div>
            </section>
            <div>
                <TeamSection />
            </div>

            {/* QR CODE SECTION */}
            <section className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8 rounded-2xl mx-4 my-8">
                <div className="max-w-2xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-blue-900 mb-4">📱 सर्वे शुरू करें</h2>
                    <p className="text-lg text-gray-700 mb-8">QR Code स्कैन करें या नीचे बटन दबाएं</p>

                    <div className="flex justify-center mb-8">
                        <div className="bg-white p-6 rounded-lg border-4 border-orange-500 shadow-lg">
                            <canvas ref={qrCanvasRef}></canvas>
                        </div>
                    </div>

                    <p className="text-sm text-gray-600">आपका डेटा पूरी तरह सुरक्षित है ✅</p>
                </div>
            </section>

            {/* CTA BUTTONS SECTION */}
            <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">🎯 अभी शुरू करें</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <Link
                        to="/survey"
                        className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-4 px-8 rounded-lg text-center transition-all transform hover:scale-105 shadow-lg"
                    >
                        <div className="text-3xl mb-2">🗳️</div>
                        <div className="text-xl">Survey शुरू करें</div>
                        <div className="text-sm mt-2 opacity-90">अपनी जरूरतें बताएं</div>
                    </Link>

                    <Link
                        to="/candidate"
                        className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-bold py-4 px-8 rounded-lg text-center transition-all transform hover:scale-105 shadow-lg"
                    >
                        <div className="text-3xl mb-2">👤</div>
                        <div className="text-xl">प्रधान जी की जानकारी</div>
                        <div className="text-sm mt-2 opacity-90">दृष्टिकोण देखें</div>
                    </Link>

                    <Link
                        to="/contact"
                        className="bg-gradient-to-r from-blue-900 to-blue-900 hover:from-blue-950 hover:to-blue-950 text-white font-bold py-4 px-8 rounded-lg text-center transition-all transform hover:scale-105 shadow-lg"
                    >
                        <div className="text-3xl mb-2">📞</div>
                        <div className="text-xl">हमसे संपर्क करें</div>
                        <div className="text-sm mt-2 opacity-90">कोई सवाल पूछें</div>
                    </Link>
                </div>
            </section>
        </div>
    );
}

export default Home;
