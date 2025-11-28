import React, { useState, useEffect } from 'react';

function Complain() {
  // State for form inputs
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    ward: '',
    complaintType: '',
    description: '',
  });

  // State for messages
  const [msg, setMsg] = useState('');
  const [msgType, setMsgType] = useState('');

  // State for complaints list
  const [complaints, setComplaints] = useState([]);

  // Load complaints from localStorage on mount
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('complaints')) || [];
    setComplaints(stored);
  }, []);

  // Handle input change
  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Submit complaint
  const handleSubmit = e => {
    e.preventDefault();
    // Basic validation
    if (!formData.name || !formData.mobile || !formData.ward || !formData.complaintType || !formData.description) {
      setMsg('कृपया सभी आवश्यक फील्ड भरें');
      setMsgType('error');
      return;
    }

    // Save to local storage
    const newComplaint = {
      id: Date.now(),
      ...formData,
      status: 'Pending',
      date: new Date().toLocaleString('hi-IN'),
    };

    const updatedComplaints = [...complaints, newComplaint];
    localStorage.setItem('complaints', JSON.stringify(updatedComplaints));
    setComplaints(updatedComplaints);

    setMsg('✅ शिकायत दर्ज हो गई है। धन्यवाद!');
    setMsgType('success');

    // Reset form
    setFormData({ name: '', mobile: '', ward: '', complaintType: '', description: '' });
  };

  // Handle status update
  const updateStatus = (id, newStatus) => {
    const updatedComplaints = complaints.map(c => {
      if (c.id === id) return { ...c, status: newStatus };
      return c;
    });
    localStorage.setItem('complaints', JSON.stringify(updatedComplaints));
    setComplaints(updatedComplaints);
  };

  // Complaint types
  const complaintTypes = ['सड़क की खराब स्थिति', 'पानी की समस्या', 'बिजली बाधित', 'स्वास्थ्य सेवा', 'सफाई समस्या', 'अन्य'];

  // Stats calculation
  const totalComplaints = complaints.length;
  const pending = complaints.filter(c => c.status === 'Pending').length;
  const inProgress = complaints.filter(c => c.status === 'In-Progress').length;
  const resolved = complaints.filter(c => c.status === 'Resolved').length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-green-100 to-gray-50 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <h1 className="text-4xl font-bold text-blue-900 mb-4 text-center">📢 शिकायत दर्ज करें</h1>
        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white p-4 rounded-lg shadow hover:shadow-xl transition">
            <h2 className="text-xl font-semibold text-center text-blue-800 mb-2">कुल शिकायतें</h2>
            <p className="text-3xl font-bold text-center">{totalComplaints}</p>
          </div>
          <div className="bg-yellow-100 p-4 rounded-lg shadow hover:shadow-xl transition">
            <h2 className="text-xl font-semibold text-center text-yellow-800 mb-2">इंतजार में</h2>
            <p className="text-3xl font-bold text-center">{pending}</p>
          </div>
          <div className="bg-blue-100 p-4 rounded-lg shadow hover:shadow-xl transition">
            <h2 className="text-xl font-semibold text-center text-blue-800 mb-2">प्रगति में</h2>
            <p className="text-3xl font-bold text-center">{inProgress}</p>
          </div>
          <div className="bg-green-100 p-4 rounded-lg shadow hover:shadow-xl transition">
            <h2 className="text-xl font-semibold text-center text-green-800 mb-2">समाधान हो गई</h2>
            <p className="text-3xl font-bold text-center">{resolved}</p>
          </div>
        </div>
        {/* Complaint Form */}
        <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-orange-400 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-center text-blue-900">शिकायत फॉर्म</h2>
          {msg && (
            <div
              className={`mb-4 p-3 rounded-lg border-l-4 ${
                msgType === 'success' ? 'bg-green-50 border-green-400 text-green-800' : 'bg-red-50 border-red-400 text-red-800'
              }`}
            >
              {msg}
            </div>
          )}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block mb-1 font-semibold text-gray-700">नाम <span className="text-red-500">*</span></label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="आपका नाम दर्ज करें"
                required
              />
            </div>
            <div>
              <label className="block mb-1 font-semibold text-gray-700">मोबाइल नंबर <span className="text-red-500">*</span></label>
              <input
                type="tel"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                pattern="[0-9]{10}"
                maxLength={10}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="10 अंकों का नंबर"
                required
              />
            </div>
            <div>
              <label className="block mb-1 font-semibold text-gray-700">वार्ड / पता <span className="text-red-500">*</span></label>
              <input
                type="text"
                name="ward"
                value={formData.ward}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="वार्ड या पता"
                required
              />
            </div>
            <div>
              <label className="block mb-1 font-semibold text-gray-700">शिकायत का प्रकार <span className="text-red-500">*</span></label>
              <select
                name="complaintType"
                value={formData.complaintType}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              >
                <option value="">-- चुनें --</option>
                {complaintTypes.map((type, idx) => (
                  <option key={idx} value={type}>{type}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block mb-1 font-semibold text-gray-700">विस्तृत विवरण <span className="text-red-500">*</span></label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
                placeholder="अपनी शिकायत का विस्तृत विवरण लिखें..."
                required
              ></textarea>
            </div>
            <div className="flex justify-center space-x-4 mt-4">
              <button
                type="submit"
                className="bg-gradient-to-r from-orange-400 to-orange-500 hover:from-orange-500 hover:to-orange-600 text-white font-semibold px-6 py-2 rounded-lg shadow-md transition-transform hover:scale-105"
              >
                दर्ज करें
              </button>
              <button
                type="button"
                onClick={() => {
                  setFormData({ name: '', mobile: '', ward: '', complaintType: '', description: '' });
                  setMsg('');
                }}
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold px-6 py-2 rounded-lg shadow-md transition-transform hover:scale-105"
              >
                साफ़ करें
              </button>
            </div>
          </form>
        </div>
        {/* Complaints History Table */}
        <div className="overflow-x-auto bg-white p-6 rounded-lg shadow-lg border-t-4 border-green-400">
          <h2 className="text-2xl mb-4 font-semibold text-center text-blue-900">शिकायतें देखें</h2>
          {complaints.length === 0 ? (
            <p className="text-center text-gray-600">कोई शिकायतें नहीं मिलीं।</p>
          ) : (
            <table className="w-full table-fixed border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100 text-gray-700">
                  <th className="border border-gray-300 px-2 py-2">नाम</th>
                  <th className="border border-gray-300 px-2 py-2">मोबाइल</th>
                  <th className="border border-gray-300 px-2 py-2">वार्ड</th>
                  <th className="border border-gray-300 px-2 py-2">प्रकार</th>
                  <th className="border border-gray-300 px-2 py-2">विवरण</th>
                  <th className="border border-gray-300 px-2 py-2">स्थिति</th>
                  <th className="border border-gray-300 px-2 py-2">दिनांक</th>
                </tr>
              </thead>
              <tbody>
                {complaints.map(c => (
                  <tr key={c.id} className="hover:bg-gray-50">
                    <td className="border border-gray-300 px-2 py-2">{c.name}</td>
                    <td className="border border-gray-300 px-2 py-2">{c.mobile}</td>
                    <td className="border border-gray-300 px-2 py-2">{c.ward}</td>
                    <td className="border border-gray-300 px-2 py-2">{c.complaintType}</td>
                    <td className="border border-gray-300 px-2 py-2">{c.description}</td>
                    <td className="border border-gray-300 px-2 py-2">
                      <span
                        className={`px-2 py-1 rounded-full font-semibold text-sm ${
                          c.status === 'Pending'
                            ? 'bg-yellow-300 text-yellow-800'
                            : c.status === 'In-Progress'
                            ? 'bg-blue-300 text-blue-800'
                            : 'bg-green-300 text-green-800'
                        }`}
                      >
                        {c.status}
                      </span>
                    </td>
                    <td className="border border-gray-300 px-2 py-2">{c.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}

export default Complain;
