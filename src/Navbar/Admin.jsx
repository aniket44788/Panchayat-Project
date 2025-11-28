import React, { useState } from 'react';

function Admin({ onLogin }) {
    const [user, setUser] = useState('');
    const [pass, setPass] = useState('');
    const [error, setError] = useState('');

    const ADMIN_USER = 'admin';
    const ADMIN_PASS = 'nainapur2026';

    function handleSubmit(e) {
        e.preventDefault();
        if (user === ADMIN_USER && pass === ADMIN_PASS) {
            setError('');
            onLogin && onLogin();
        } else {
            setError('❌ गलत यूजरनेम या पासवर्ड');
        }
    }

    return (
        <div className="max-w-sm mx-auto p-8 bg-white rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-blue-900 mb-6 text-center">
                🔐 Admin लॉगिन
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label className="block font-semibold mb-1">यूजरनेम</label>
                    <input
                        type="text"
                        value={user}
                        onChange={e => setUser(e.target.value)}
                        required
                        className="w-full border p-3 rounded"
                        placeholder="admin"
                    />
                </div>
                <div>
                    <label className="block font-semibold mb-1">पासवर्ड</label>
                    <input
                        type="password"
                        value={pass}
                        onChange={e => setPass(e.target.value)}
                        required
                        className="w-full border p-3 rounded"
                        placeholder="••••••"
                    />
                </div>
                {error && (
                    <div className="bg-red-50 text-red-700 border-l-4 border-red-500 p-3 rounded font-bold text-center">
                        {error}
                    </div>
                )}
                <button
                    type="submit"
                    className="w-full py-3 rounded bg-blue-900 text-white font-bold"
                >
                    लॉगिन करें
                </button>
            </form>
            <div className="mt-8 p-3 bg-blue-50 rounded text-blue-900 text-sm text-center">
                <strong>Demo:</strong> Username: admin<br />Password: nainapur2026
            </div>
        </div>
    );
}

export default Admin;
