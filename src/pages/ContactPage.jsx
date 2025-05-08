import React, { useState } from 'react';

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Add form submission logic here
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <div style={{ padding: '2rem', maxWidth: '600px', margin: '0 auto' }}>
            <h1>Contact Us</h1>
            <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '1rem' }}>
                    <label htmlFor="name" style={{ display: 'block', marginBottom: '.5rem' }}>
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        style={{ width: '100%', padding: '.5rem' }}
                        required
                    />
                </div>
                <div style={{ marginBottom: '1rem' }}>
                    <label htmlFor="email" style={{ display: 'block', marginBottom: '.5rem' }}>
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        style={{ width: '100%', padding: '.5rem' }}
                        required
                    />
                </div>
                <div style={{ marginBottom: '1rem' }}>
                    <label htmlFor="message" style={{ display: 'block', marginBottom: '.5rem' }}>
                        Message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        style={{ width: '100%', padding: '.5rem', height: '100px' }}
                        required
                    />
                </div>
                <button type="submit" style={{ padding: '.5rem 1rem', backgroundColor: '#007BFF', color: '#fff', border: 'none', cursor: 'pointer' }}>
                    Submit
                </button>
            </form>
        </div>
    );
};

export default ContactPage;