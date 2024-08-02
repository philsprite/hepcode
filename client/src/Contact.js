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

    const [submitSuccess, setSubmitSuccess] = useState(false); // State für Erfolgsmeldung

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
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
            try {
                const response = await fetch('http://localhost:9000/api/contact', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formData),
                });

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const result = await response.json();
                console.log('Form submitted successfully:', result);

                // Reset form after successful submission
                setFormData({
                    firstName: '',
                    lastName: '',
                    email: '',
                    website: '',
                    message: ''
                });

                // Set success message
                setSubmitSuccess(true);
            } catch (error) {
                console.error('Error submitting form:', error);
            }
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
                {submitSuccess && <p className="success-message">Nachricht erfolgreich gesendet!</p>} {/* Erfolgsmeldung */}
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
