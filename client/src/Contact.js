// src/Contact.js
import React, { useState } from 'react';
import { FaEnvelope, FaPhone } from 'react-icons/fa';
import './Contact.css';

function Contact() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        website: '',
        message: ''
    });

    const [formErrors, setFormErrors] = useState({
        firstName: false,
        lastName: false,
        email: false,
        message: false
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const errors = {
            firstName: !formData.firstName,
            lastName: !formData.lastName,
            email: !formData.email,
            message: !formData.message
        };

        setFormErrors(errors);

        const hasErrors = Object.values(errors).some(error => error);

        if (!hasErrors) {
            // Handle form submission
            console.log('Form submitted', formData);
        }
    };

    return (
        <div className="contact-page">
            <div className="contact-text">
                <h1>Kontaktieren Sie uns jetzt</h1>
                <p>Wir freuen uns auf eine Kooperation.</p>
                <p>Kontaktieren Sie uns für maßgeschneiderte IT- und Marketing-Dienstleistungen, um Ihr Geschäft zu revolutionieren.</p>
                <div className="contact-details">
                    <div className="contact-detail">
                        <FaEnvelope className="contact-icon" />
                        <span>info@hepcode.com</span>
                    </div>
                    <div className="contact-detail">
                        <FaPhone className="contact-icon" />
                        <span>+49 123 4567890</span>
                    </div>
                </div>
            </div>
            <div className="contact-form-container">
                <h1>Kontakt</h1>
                <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="form-row">
                        <div className="form-group">
                            <input
                                type="text"
                                id="firstName"
                                name="firstName"
                                placeholder="Vorname"
                                value={formData.firstName}
                                onChange={handleChange}
                                className={formErrors.firstName ? 'error' : ''}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                id="lastName"
                                name="lastName"
                                placeholder="Nachname"
                                value={formData.lastName}
                                onChange={handleChange}
                                className={formErrors.lastName ? 'error' : ''}
                                required
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleChange}
                            className={formErrors.email ? 'error' : ''}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="url"
                            id="website"
                            name="website"
                            placeholder="Website URL (optional)"
                            value={formData.website}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <textarea
                            id="message"
                            name="message"
                            placeholder="Nachricht"
                            value={formData.message}
                            onChange={handleChange}
                            className={formErrors.message ? 'error' : ''}
                            required
                        ></textarea>
                    </div>
                    <button type="submit" className="submit-button">Senden</button>
                </form>
            </div>
        </div>
    );
}

export default Contact;
