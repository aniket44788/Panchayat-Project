import React, { useState } from 'react';

function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [success, setSuccess] = useState('');

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!form.name || !form.email || !form.subject || !form.message) {
      setSuccess('कृपया सभी फील्ड भरें');
      return;
    }
    // Actual send logic here; for now just clear and confirm
    setForm({ name: '', email: '', subject: '', message: '' });
    setSuccess('✅ आपका संदेश भेज दिया गया। धन्यवाद!');
    setTimeout(() => setSuccess(''), 2500);
  }

  return (
    <div className="max-w-lg mx-auto p-8 bg-white rounded-lg shadow-md">
      <h3 className="text-lg font-bold text-blue-900 mb-4 flex items-center">
        <span className="text-2xl mr-2">📬</span> सीधा संदेश भेजें
      </h3>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="font-semibold">
            नाम <span className="text-red-500">*</span>
          </label>
          <input
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full border p-3 rounded mt-1"
            placeholder="अपना नाम"
          />
        </div>
        <div>
          <label className="font-semibold">
            ईमेल <span className="text-red-500">*</span>
          </label>
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full border p-3 rounded mt-1"
            placeholder="आपका ईमेल"
          />
        </div>
        <div>
          <label className="font-semibold">
            विषय <span className="text-red-500">*</span>
          </label>
          <input
            name="subject"
            type="text"
            value={form.subject}
            onChange={handleChange}
            required
            className="w-full border p-3 rounded mt-1"
            placeholder="संदेश का विषय"
          />
        </div>
        <div>
          <label className="font-semibold">
            संदेश <span className="text-red-500">*</span>
          </label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            required
            className="w-full border p-3 rounded mt-1 min-h-[120px]"
            placeholder="आपका संदेश"
          />
        </div>
        {success && (
          <div className="bg-green-50 border-l-4 border-green-500 p-3 rounded font-bold text-green-700">
            {success}
          </div>
        )}
        <button
          type="submit"
          className="w-full py-3 rounded bg-orange-500 text-white font-bold"
        >
          ✅ संदेश भेजें
        </button>
      </form>
    </div>
  );
}

export default Contact;
