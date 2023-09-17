import React, { useEffect, useState } from 'react';
import emailjs from 'emailjs-com';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { toast } from 'react-toastify';

function Contact() {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const ChangePageTitle = (pageTitle) => {
        document.title = pageTitle;
    };
    ChangePageTitle('Portfolio - Contact');

    const handleSubmit = (e) => {
        e.preventDefault();

        // Your EmailJS service ID
        const serviceId = process.env.REACT_APP_SERVICE_ID;
        // Your EmailJS template ID
        const templateId = process.env.REACT_APP_TEMPLATE_ID;
        // Your EmailJS user ID
        const userId = process.env.REACT_APP_USER_ID;

        // Validate input fields before sending the email
        if (!name || !email || !subject || !message) {
            handleNotify('Please fill in all fields ❌ ');
            return;
        }

        // Validate email format
        const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
        if (!isValidEmail) {
            handleNotify('Invalid email format ❌ ');
            return;
        }

        // Prepare the email parameters
        const templateParams = {
            from_name: name,
            from_email: email,
            from_subject: subject,
            message: message,
        };

        // Send the email using EmailJS
        emailjs
            .send(serviceId, templateId, templateParams, userId)
            .then((response) => {
                handleNotify('Email Sent Successfully ✅');
                // console.log(
                //     'Email sent successfully!',
                //     response.status,
                //     response.text,
                // );
                // Reset the form fields
                setName('');
                setEmail('');
                setSubject('');
                setMessage('');
            })
            .catch((error) => {
                handleNotify('Email Sent Failed, Try Again ❌ ');
                console.error('Error sending email:', error);
            });
    };

    const handleNotify = (message) => {
        toast(message);
    };

    return (
        <div
            data-elementor-type="wp-page"
            data-elementor-id="1560"
            className="elementor elementor-1560 mb-5"
        >
            <section
                className="elementor-section elementor-top-section elementor-element elementor-element-89e5b50 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                data-id="89e5b50"
                data-element_type="section"
            >
                <div className="elementor-container elementor-column-gap-no">
                    <div
                        className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-80b8439"
                        data-id="80b8439"
                        data-element_type="column"
                    >
                        <div className="elementor-widget-wrap elementor-element-populated">
                            <div
                                className="elementor-element elementor-element-aa1b3d3 elementor-widget__width-initial elementor-widget elementor-widget-gridxdacontactinfobox"
                                data-id="aa1b3d3"
                                data-element_type="widget"
                                data-widget_type="gridxdacontactinfobox.default"
                            >
                                <div className="elementor-widget-container">
                                    <section className="contact-area">
                                        <div className="container">
                                            <div className="gx-row d-flex justify-content-between gap-24">
                                                <div className="contact-infos">
                                                    <h3 data-aos="fade-up">
                                                        Contact Info
                                                    </h3>
                                                    <ul className="contact-details">
                                                        <li
                                                            className="d-flex align-items-center"
                                                            data-aos="zoom-in"
                                                        >
                                                            <div className="icon-box shadow-box">
                                                                <i className="iconoir-mail"></i>
                                                            </div>
                                                            <div className="right">
                                                                <span>
                                                                    MAIL US
                                                                </span>
                                                                <h4>
                                                                    Pankajbaliyan90@gmail.com
                                                                </h4>
                                                            </div>
                                                        </li>
                                                        <li
                                                            className="d-flex align-items-center"
                                                            data-aos="zoom-in"
                                                        >
                                                            <div className="icon-box shadow-box">
                                                                <i className="iconoir-phone"></i>
                                                            </div>
                                                            <div className="right">
                                                                <span>
                                                                    Contact Us
                                                                </span>
                                                                <h4>
                                                                    +91xxxxxxxxx
                                                                </h4>
                                                            </div>
                                                        </li>
                                                        <li
                                                            className="d-flex align-items-center"
                                                            data-aos="zoom-in"
                                                        >
                                                            <div className="icon-box shadow-box">
                                                                <i className="iconoir-pin-alt"></i>
                                                            </div>
                                                            <div className="right">
                                                                <span>
                                                                    Location
                                                                </span>
                                                                <h4>India</h4>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                    <h3 data-aos="fade-up">
                                                        Social Info
                                                    </h3>
                                                    <ul
                                                        className="social-links d-flex align-center"
                                                        data-aos="zoom-in"
                                                    >
                                                        <li>
                                                            <Link
                                                                className="shadow-box"
                                                                to="https://github.com/pankajbaliyan"
                                                                target="_blank"
                                                            >
                                                                <i className="iconoir-github"></i>
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link
                                                                className="shadow-box"
                                                                to="https://www.linkedin.com/in/pankaj-kumar-90"
                                                                target="_blank"
                                                            >
                                                                <i className="iconoir-linkedin"></i>
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link
                                                                className="shadow-box"
                                                                to="https://www.youtube.com/c/CodeWithPankaj1?sub_confirmation=1"
                                                                target="_blank"
                                                            >
                                                                <i className="iconoir-youtube"></i>
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div
                                                    data-aos="zoom-in"
                                                    className="contact-form"
                                                >
                                                    <div className="shadow-box">
                                                        <h1>
                                                            Let’s work{' '}
                                                            <span>
                                                                Together.
                                                            </span>
                                                        </h1>
                                                        <div
                                                            className="wpcf7 no-js"
                                                            id="wpcf7-f1777-p1560-o1"
                                                            lang="en-US"
                                                            dir="ltr"
                                                        >
                                                            <div className="screen-reader-response">
                                                                <p
                                                                    role="status"
                                                                    aria-live="polite"
                                                                    aria-atomic="true"
                                                                ></p>
                                                                <ul></ul>
                                                            </div>
                                                            <form
                                                                action="https://wpriverthemes.com/gridxlight/contact-info/#wpcf7-f1777-p1560-o1"
                                                                method="post"
                                                                className="wpcf7-form init"
                                                                aria-label="Contact form"
                                                                noValidate="noValidate"
                                                                data-status="init"
                                                                onSubmit={
                                                                    handleSubmit
                                                                }
                                                            >
                                                                <div
                                                                    style={{
                                                                        display:
                                                                            'none',
                                                                    }}
                                                                >
                                                                    <input
                                                                        type="hidden"
                                                                        name="_wpcf7"
                                                                        value="1777"
                                                                    />
                                                                    <input
                                                                        type="hidden"
                                                                        name="_wpcf7_version"
                                                                        value="5.7.7"
                                                                    />
                                                                    <input
                                                                        type="hidden"
                                                                        name="_wpcf7_locale"
                                                                        value="en_US"
                                                                    />
                                                                    <input
                                                                        type="hidden"
                                                                        name="_wpcf7_unit_tag"
                                                                        value="wpcf7-f1777-p1560-o1"
                                                                    />
                                                                    <input
                                                                        type="hidden"
                                                                        name="_wpcf7_container_post"
                                                                        value="1560"
                                                                    />
                                                                    <input
                                                                        type="hidden"
                                                                        name="_wpcf7_posted_data_hash"
                                                                        value=""
                                                                    />
                                                                </div>
                                                                <div
                                                                    className="alert alert-success messenger-box-contact__msg"
                                                                    style={{
                                                                        display:
                                                                            'none',
                                                                    }}
                                                                    role="alert"
                                                                >
                                                                    <p>
                                                                        Your
                                                                        message
                                                                        was sent
                                                                        successfully.
                                                                    </p>
                                                                </div>
                                                                <div className="input-group">
                                                                    <p>
                                                                        <span
                                                                            className="wpcf7-form-control-wrap"
                                                                            data-name="full-name"
                                                                        >
                                                                            <input
                                                                                size="40"
                                                                                className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required input-group"
                                                                                id="full-name"
                                                                                aria-required="true"
                                                                                aria-invalid="false"
                                                                                placeholder="Name *"
                                                                                value={
                                                                                    name
                                                                                }
                                                                                type="text"
                                                                                name="full-name"
                                                                                onChange={(
                                                                                    e,
                                                                                ) =>
                                                                                    setName(
                                                                                        e
                                                                                            .target
                                                                                            .value,
                                                                                    )
                                                                                }
                                                                            />
                                                                        </span>
                                                                    </p>
                                                                </div>
                                                                <div className="input-group">
                                                                    <p>
                                                                        <span
                                                                            className="wpcf7-form-control-wrap"
                                                                            data-name="email"
                                                                        >
                                                                            <input
                                                                                size="40"
                                                                                className="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email input-group"
                                                                                id="email"
                                                                                aria-required="true"
                                                                                aria-invalid="false"
                                                                                placeholder="Email *"
                                                                                value={
                                                                                    email
                                                                                }
                                                                                type="email"
                                                                                name="email"
                                                                                onChange={(
                                                                                    e,
                                                                                ) =>
                                                                                    setEmail(
                                                                                        e
                                                                                            .target
                                                                                            .value,
                                                                                    )
                                                                                }
                                                                            />
                                                                        </span>
                                                                    </p>
                                                                </div>
                                                                <div className="input-group">
                                                                    <p>
                                                                        <span
                                                                            className="wpcf7-form-control-wrap"
                                                                            data-name="subject"
                                                                        >
                                                                            <input
                                                                                size="40"
                                                                                className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required input-group"
                                                                                id="subject"
                                                                                aria-required="true"
                                                                                aria-invalid="false"
                                                                                placeholder="Your Subject *"
                                                                                type="text"
                                                                                name="subject"
                                                                                value={
                                                                                    subject
                                                                                }
                                                                                onChange={(
                                                                                    e,
                                                                                ) =>
                                                                                    setSubject(
                                                                                        e
                                                                                            .target
                                                                                            .value,
                                                                                    )
                                                                                }
                                                                            />
                                                                        </span>
                                                                    </p>
                                                                </div>
                                                                <div className="input-group">
                                                                    <p>
                                                                        <span
                                                                            className="wpcf7-form-control-wrap"
                                                                            data-name="message"
                                                                        >
                                                                            <textarea
                                                                                cols="40"
                                                                                rows="10"
                                                                                className="wpcf7-form-control wpcf7-textarea wpcf7-validates-as-required input-group"
                                                                                id="message"
                                                                                aria-required="true"
                                                                                aria-invalid="false"
                                                                                placeholder="Your Message *"
                                                                                name="message"
                                                                                value={
                                                                                    message
                                                                                }
                                                                                onChange={(
                                                                                    e,
                                                                                ) =>
                                                                                    setMessage(
                                                                                        e
                                                                                            .target
                                                                                            .value,
                                                                                    )
                                                                                }
                                                                            ></textarea>
                                                                        </span>
                                                                    </p>
                                                                </div>
                                                                <div className="input-group">
                                                                    <p>
                                                                        <button
                                                                            className="theme-btn submit-btn"
                                                                            type="submit"
                                                                            name="submit"
                                                                            id="submit"
                                                                        >
                                                                            Send
                                                                            Message
                                                                        </button>
                                                                    </p>
                                                                </div>
                                                                <div
                                                                    className="wpcf7-response-output"
                                                                    aria-hidden="true"
                                                                ></div>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Contact;
