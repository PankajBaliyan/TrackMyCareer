import React from 'react';
import { Link } from 'react-router-dom';

export default function App() {
    return (
        <div className="mkdf-blog-slider-holder mkdf-bs-carousel">
            <ul
                className=" mkdf-owl-slider owl-loaded "
                style={{ visibility: 'visible' }}
            >
                <div className="owl-stage-outer">
                    <div className="owl-stage d-flex justify-content-center flex-wrap">
                        <div
                            className="owl-item cloned"
                            style={{ width: '300px' }}
                        >
                            <li className="mkdf-blog-slider-item">
                                <div className="mkdf-blog-slider-item-inner">
                                    <div className="mkdf-item-image p-0">
                                        <a itemProp="url" href="#">
                                            <video
                                                loading="lazy"
                                                muted="muted"
                                                src="/Assets/images/AITools/job-search-5811697-4848999.mp4"
                                                type="video/mp4"
                                                autoplay="autoplay"
                                                loop="loop"
                                                width={190}
                                            ></video>{' '}
                                        </a>
                                    </div>
                                    <div className="mkdf-bli-content">
                                        <h2
                                            itemProp="name"
                                            className="entry-title mkdf-post-title"
                                        >
                                            <a
                                                itemProp="url"
                                                href="#"
                                                title="Progression"
                                            >
                                                Job Application Tracker{' '}
                                            </a>
                                        </h2>
                                        <div className="mkdf-bli-excerpt">
                                            <div className="mkdf-post-excerpt-holder">
                                                <p
                                                    itemProp="description"
                                                    className="mkdf-post-excerpt"
                                                >
                                                    Job Application Tracker
                                                    software efficiently manages
                                                    and organizes your job
                                                    applications, streamlining
                                                    your job search.{' '}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mkdf-post-info-bottom clearfix">
                                        <div className="mkdf-post-read-more-button">
                                            <a
                                                itemProp="url"
                                                href="#"
                                                target="_self"
                                                className="mkdf-btn mkdf-btn-medium mkdf-btn-simple mkdf-btn-icon mkdf-blog-list-button"
                                            >
                                                {' '}
                                                <span className="mkdf-btn-text">
                                                    Open tool
                                                </span>{' '}
                                                <span
                                                    aria-hidden="true"
                                                    className="fa fa-arrow-right "
                                                ></span>
                                            </a>{' '}
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </div>

                        <div
                            className="owl-item cloned"
                            style={{ width: '300px' }}
                        >
                            <li className="mkdf-blog-slider-item">
                                <div className="mkdf-blog-slider-item-inner">
                                    <div className="mkdf-item-image p-0">
                                        <a itemProp="url" href="#">
                                            <video
                                                loading="lazy"
                                                muted="muted"
                                                src="/Assets/images/AITools/mailbox-4838063-4025835.mp4"
                                                type="video/mp4"
                                                autoplay="autoplay"
                                                loop="loop"
                                                width={190}
                                            ></video>{' '}
                                        </a>
                                    </div>
                                    <div className="mkdf-bli-content">
                                        <h2
                                            itemProp="name"
                                            className="entry-title mkdf-post-title"
                                        >
                                            <Link
                                                itemProp="url"
                                                to="/email"
                                                title="Sleeping"
                                            >
                                                Professional Mail Generator{' '}
                                            </Link>
                                        </h2>
                                        <div className="mkdf-bli-excerpt">
                                            <div className="mkdf-post-excerpt-holder">
                                                <p
                                                    itemProp="description"
                                                    className="mkdf-post-excerpt"
                                                >
                                                    The Professional Mail
                                                    Generator simplifies email
                                                    creation for a polished and
                                                    personalized communication
                                                    experience.{' '}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mkdf-post-info-bottom clearfix">
                                        <div className="mkdf-post-read-more-button">
                                            <Link
                                                itemProp="url"
                                                to="/email"
                                                target="_self"
                                                className="mkdf-btn mkdf-btn-medium mkdf-btn-simple mkdf-btn-icon mkdf-blog-list-button"
                                            >
                                                {' '}
                                                <span className="mkdf-btn-text">
                                                    Open Tool
                                                </span>{' '}
                                                <span
                                                    aria-hidden="true"
                                                    className="fa fa-arrow-right "
                                                ></span>
                                            </Link>{' '}
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </div>

                        <div
                            className="owl-item cloned"
                            style={{ width: '300px' }}
                        >
                            <li className="mkdf-blog-slider-item">
                                <div className="mkdf-blog-slider-item-inner">
                                    <div className="mkdf-item-image">
                                        <a itemProp="url" href="#">
                                            <video
                                                loading="lazy"
                                                muted="muted"
                                                src="/Assets/images/AITools/letter-6838516-5619595.mp4"
                                                type="video/mp4"
                                                autoplay="autoplay"
                                                loop="loop"
                                                width={100}
                                            ></video>{' '}
                                        </a>
                                    </div>
                                    <div className="mkdf-bli-content">
                                        <h2
                                            itemProp="name"
                                            className="entry-title mkdf-post-title"
                                        >
                                            <a
                                                itemProp="url"
                                                href="#"
                                                title="Decoration"
                                            >
                                                Cover Letter Generator{' '}
                                            </a>
                                        </h2>
                                        <div className="mkdf-bli-excerpt">
                                            <div className="mkdf-post-excerpt-holder">
                                                <p
                                                    itemProp="description"
                                                    className="mkdf-post-excerpt"
                                                >
                                                    The Cover Letter Generator
                                                    automates the process,
                                                    crafting compelling cover
                                                    letters tailored to your job
                                                    applications.{' '}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mkdf-post-info-bottom clearfix">
                                        <div className="mkdf-post-read-more-button">
                                            <a
                                                itemProp="url"
                                                href="#"
                                                target="_self"
                                                className="mkdf-btn mkdf-btn-medium mkdf-btn-simple mkdf-btn-icon mkdf-blog-list-button"
                                            >
                                                {' '}
                                                <span className="mkdf-btn-text">
                                                    Open Tool
                                                </span>{' '}
                                                <span
                                                    aria-hidden="true"
                                                    className="fa fa-arrow-right "
                                                ></span>
                                            </a>{' '}
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </div>

                        <div className="owl-item" style={{ width: '300px' }}>
                            <li className="mkdf-blog-slider-item">
                                <div className="mkdf-blog-slider-item-inner">
                                    <div className="mkdf-item-image p-0">
                                        <a itemProp="url" href="#">
                                            <video
                                                loading="lazy"
                                                muted="muted"
                                                src="/Assets/images/AITools/electric-genertator-7367352-5962867.mp4"
                                                type="video/mp4"
                                                autoplay="autoplay"
                                                loop="loop"
                                                width={164}
                                            ></video>{' '}
                                        </a>
                                    </div>
                                    <div className="mkdf-bli-content">
                                        <h2
                                            itemProp="name"
                                            className="entry-title mkdf-post-title"
                                        >
                                            <a
                                                itemProp="url"
                                                href="#"
                                                title="Relationship"
                                            >
                                                Professional Post Generator{' '}
                                            </a>
                                        </h2>
                                        <div className="mkdf-bli-excerpt">
                                            <div className="mkdf-post-excerpt-holder">
                                                <p
                                                    itemProp="description"
                                                    className="mkdf-post-excerpt"
                                                >
                                                    The Professional Post
                                                    Generator simplifies content
                                                    creation, enabling you to
                                                    craft engaging and impactful
                                                    social media posts
                                                    effortlessly.{' '}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mkdf-post-info-bottom clearfix">
                                        <div className="mkdf-post-read-more-button">
                                            <a
                                                itemProp="url"
                                                href="#"
                                                target="_self"
                                                className="mkdf-btn mkdf-btn-medium mkdf-btn-simple mkdf-btn-icon mkdf-blog-list-button"
                                            >
                                                {' '}
                                                <span className="mkdf-btn-text">
                                                    Open Tool
                                                </span>{' '}
                                                <span
                                                    aria-hidden="true"
                                                    className="fa fa-arrow-right "
                                                ></span>
                                            </a>{' '}
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </div>

                        <div className="owl-item" style={{ width: '300px' }}>
                            <li className="mkdf-blog-slider-item">
                                <div className="mkdf-blog-slider-item-inner">
                                    <div
                                        className="mkdf-item-image"
                                        style={{ padding: '39px 0px 0px 0px' }}
                                    >
                                        <a itemProp="url" href="#">
                                            <video
                                                loading="lazy"
                                                muted="muted"
                                                src="/Assets/images/AITools/linkedin-5704169-4740779.mp4"
                                                type="video/mp4"
                                                autoplay="autoplay"
                                                loop="loop"
                                                width={150}
                                            ></video>{' '}
                                        </a>
                                    </div>
                                    <div className="mkdf-bli-content">
                                        <h2
                                            itemProp="name"
                                            className="entry-title mkdf-post-title"
                                        >
                                            <a
                                                itemProp="url"
                                                href="#"
                                                title="Perfection"
                                            >
                                                LinkedIn Headline Generator{' '}
                                            </a>
                                        </h2>
                                        <div className="mkdf-bli-excerpt">
                                            <div className="mkdf-post-excerpt-holder">
                                                <p
                                                    itemProp="description"
                                                    className="mkdf-post-excerpt"
                                                >
                                                    The LinkedIn Headline
                                                    Generator helps you create
                                                    attention-grabbing LinkedIn
                                                    headlines that enhance your
                                                    professional profile.{' '}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mkdf-post-info-bottom clearfix">
                                        <div className="mkdf-post-read-more-button">
                                            <a
                                                itemProp="url"
                                                href="#"
                                                target="_self"
                                                className="mkdf-btn mkdf-btn-medium mkdf-btn-simple mkdf-btn-icon mkdf-blog-list-button"
                                            >
                                                {' '}
                                                <span className="mkdf-btn-text">
                                                    Open Tool
                                                </span>{' '}
                                                <span
                                                    aria-hidden="true"
                                                    className="fa fa-arrow-right "
                                                ></span>
                                            </a>{' '}
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </div>

                        <div className="owl-item" style={{ width: '300px' }}>
                            <li className="mkdf-blog-slider-item">
                                <div className="mkdf-blog-slider-item-inner">
                                    <div className="mkdf-item-image p-0">
                                        <a itemProp="url" href="#">
                                            <video
                                                loading="lazy"
                                                muted="muted"
                                                src="/Assets/images/AITools/about-7041861-5728681.mp4"
                                                type="video/mp4"
                                                autoplay="autoplay"
                                                loop="loop"
                                                width={189}
                                            ></video>{' '}
                                        </a>
                                    </div>
                                    <div className="mkdf-bli-content">
                                        <h2
                                            itemProp="name"
                                            className="entry-title mkdf-post-title"
                                        >
                                            <a
                                                itemProp="url"
                                                href="#"
                                                title="Connection"
                                            >
                                                LinkedIn About Generator{' '}
                                            </a>
                                        </h2>
                                        <div className="mkdf-bli-excerpt">
                                            <div className="mkdf-post-excerpt-holder">
                                                <p
                                                    itemProp="description"
                                                    className="mkdf-post-excerpt"
                                                >
                                                    The LinkedIn About Generator
                                                    crafts compelling 'About'
                                                    sections, making your
                                                    LinkedIn profile stand out
                                                    and resonate professionally.{' '}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mkdf-post-info-bottom clearfix">
                                        <div className="mkdf-post-read-more-button">
                                            <a
                                                itemProp="url"
                                                href="#"
                                                target="_self"
                                                className="mkdf-btn mkdf-btn-medium mkdf-btn-simple mkdf-btn-icon mkdf-blog-list-button"
                                            >
                                                {' '}
                                                <span className="mkdf-btn-text">
                                                    Open Tool
                                                </span>{' '}
                                                <span
                                                    aria-hidden="true"
                                                    className="fa fa-arrow-right "
                                                ></span>
                                            </a>{' '}
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </div>

                        <div className="owl-item" style={{ width: '300px' }}>
                            <li className="mkdf-blog-slider-item">
                                <div className="mkdf-blog-slider-item-inner">
                                    <div className="mkdf-item-image">
                                        <a itemProp="url" href="#">
                                            <video
                                                loading="lazy"
                                                muted="muted"
                                                src="/Assets/images/AITools/man-working-on-maintenance-service-5093451-4257985.mp4"
                                                type="video/mp4"
                                                autoplay="autoplay"
                                                loop="loop"
                                                width={145}
                                            ></video>{' '}
                                        </a>
                                    </div>
                                    <div className="mkdf-bli-content">
                                        <h2
                                            itemProp="name"
                                            className="entry-title mkdf-post-title"
                                        >
                                            <a
                                                itemProp="url"
                                                href="#"
                                                title="Disconect"
                                            >
                                                More Tools{' '}
                                            </a>
                                        </h2>
                                        <div className="mkdf-bli-excerpt">
                                            <div className="mkdf-post-excerpt-holder">
                                                <p
                                                    itemProp="description"
                                                    className="mkdf-post-excerpt"
                                                >
                                                    Explore our suite of More
                                                    Tools designed to empower
                                                    your career and enhance your
                                                    professional journey.{' '}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mkdf-post-info-bottom clearfix">
                                        <div className="mkdf-post-read-more-button">
                                            <a
                                                itemProp="url"
                                                href="#"
                                                target="_self"
                                                className="mkdf-btn mkdf-btn-medium mkdf-btn-simple mkdf-btn-icon mkdf-blog-list-button"
                                            >
                                                {' '}
                                                <span className="mkdf-btn-text">
                                                    Comming Soon
                                                </span>{' '}
                                                <span
                                                    aria-hidden="true"
                                                    className="fa fa-arrow-right "
                                                ></span>
                                            </a>{' '}
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </div>

                        {/* <div className="owl-item" style={{ width: '300px' }}>
                            <li className="mkdf-blog-slider-item">
                                <div className="mkdf-blog-slider-item-inner">
                                    <div className="mkdf-item-image">
                                        <a
                                            itemProp="url"
                                            href="#"
                                        >
                                            <video
                                                loading="lazy"
                                                muted="muted"
                                                src="/Assets/images/AITools/linkedin-5704169-4740779.mp4"
                                                type="video/mp4"
                                                autoplay="autoplay"
                                                loop="loop"
                                                width={150}
                                            ></video>{' '}
                                        </a>
                                    </div>
                                    <div className="mkdf-bli-content">
                                        <h2
                                            itemProp="name"
                                            className="entry-title mkdf-post-title"
                                        >
                                            <a
                                                itemProp="url"
                                                href="#"
                                                title="Integration"
                                            >
                                                Integration{' '}
                                            </a>
                                        </h2>
                                        <div className="mkdf-bli-excerpt">
                                            <div className="mkdf-post-excerpt-holder">
                                                <p
                                                    itemProp="description"
                                                    className="mkdf-post-excerpt"
                                                >
                                                    Lorem ipsum dolor sit amet,
                                                    conse ctetuer adi pisci
                                                    elit, sed dia nonu.{' '}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mkdf-post-info-bottom clearfix">
                                        <div className="mkdf-post-read-more-button">
                                            <a
                                                itemProp="url"
                                                href="#"
                                                target="_self"
                                                className="mkdf-btn mkdf-btn-medium mkdf-btn-simple mkdf-btn-icon mkdf-blog-list-button"
                                            >
                                                {' '}
                                                <span className="mkdf-btn-text">
                                                    Open Tool
                                                </span>{' '}
                                                <span
                                                    aria-hidden="true"
                                                    className="fa fa-arrow-right "
                                                ></span>
                                            </a>{' '}
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </div> */}

                        {/* <div className="owl-item" style={{ width: '300px' }}>
                            <li className="mkdf-blog-slider-item">
                                <div className="mkdf-blog-slider-item-inner">
                                    <div className="mkdf-item-image">
                                        <a
                                            itemProp="url"
                                            href="#"
                                        >
                                            <video
                                                loading="lazy"
                                                muted="muted"
                                                src="/Assets/images/AITools/linkedin-5704169-4740779.mp4"
                                                type="video/mp4"
                                                autoplay="autoplay"
                                                loop="loop"
                                                width={150}
                                            ></video>{' '}
                                        </a>
                                    </div>
                                    <div className="mkdf-bli-content">
                                        <h2
                                            itemProp="name"
                                            className="entry-title mkdf-post-title"
                                        >
                                            <a
                                                itemProp="url"
                                                href="#"
                                                title="Positivity"
                                            >
                                                Positivity{' '}
                                            </a>
                                        </h2>
                                        <div className="mkdf-bli-excerpt">
                                            <div className="mkdf-post-excerpt-holder">
                                                <p
                                                    itemProp="description"
                                                    className="mkdf-post-excerpt"
                                                >
                                                    Lorem ipsum dolor sit amet,
                                                    conse ctetuer adi pisci
                                                    elit, sed dia nonu.{' '}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mkdf-post-info-bottom clearfix">
                                        <div className="mkdf-post-read-more-button">
                                            <a
                                                itemProp="url"
                                                href="#"
                                                target="_self"
                                                className="mkdf-btn mkdf-btn-medium mkdf-btn-simple mkdf-btn-icon mkdf-blog-list-button"
                                            >
                                                {' '}
                                                <span className="mkdf-btn-text">
                                                    Open Tool
                                                </span>{' '}
                                                <span
                                                    aria-hidden="true"
                                                    className="fa fa-arrow-right "
                                                ></span>
                                            </a>{' '}
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </div> */}
                    </div>
                </div>
            </ul>
        </div>
    );
}
