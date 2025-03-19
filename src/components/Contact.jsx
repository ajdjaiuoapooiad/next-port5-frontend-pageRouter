// components/Contact.js
import { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // フォーム送信処理
        console.log(formData);
        // 送信後にフォームをリセット
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <section id="contact" className="container mx-auto py-16 bg-gray-50">
            <h2 className="text-3xl font-semibold text-center mb-8">お問い合わせ</h2>
            <div className="max-w-md mx-auto bg-gray-300 rounded-lg shadow-md p-8">
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">お名前</label>
                        <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">メールアドレス</label>
                        <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700">お問い合わせ内容</label>
                        <textarea name="message" id="message" rows="4" value={formData.message} onChange={handleChange} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"></textarea>
                    </div>
                    <div>
                        <button type="submit" className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">送信</button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Contact;