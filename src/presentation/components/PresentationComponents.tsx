"use client";

import React, { useState, useRef, useEffect, useCallback } from 'react';

interface PresentationLayoutProps {
    children: React.ReactNode;
    totalSlides: number;
}

export function PresentationLayout({ children, totalSlides }: PresentationLayoutProps) {
    const [currentSlide, setCurrentSlide] = useState(1);
    const containerRef = useRef<HTMLDivElement>(null);

    const updateCounter = useCallback(() => {
        if (containerRef.current) {
            const scrollLeft = containerRef.current.scrollLeft;
            const slideWidth = window.innerWidth;
            const newSlide = Math.round(scrollLeft / slideWidth) + 1;
            setCurrentSlide(Math.min(newSlide, totalSlides));
        }
    }, [totalSlides]);

    const goToSlide = useCallback((index: number) => {
        if (containerRef.current && index >= 0 && index < totalSlides) {
            const slideWidth = window.innerWidth;
            containerRef.current.scrollTo({
                left: index * slideWidth,
                behavior: 'smooth'
            });
        }
    }, [totalSlides]);

    const nextSlide = useCallback(() => {
        goToSlide(currentSlide);
    }, [currentSlide, goToSlide]);

    const prevSlide = useCallback(() => {
        goToSlide(currentSlide - 2);
    }, [currentSlide, goToSlide]);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key === 'PageDown' || e.key === ' ') {
                e.preventDefault();
                nextSlide();
            } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp' || e.key === 'PageUp') {
                e.preventDefault();
                prevSlide();
            } else if (e.key === 'Home') {
                e.preventDefault();
                goToSlide(0);
            } else if (e.key === 'End') {
                e.preventDefault();
                goToSlide(totalSlides - 1);
            }
        };

        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [nextSlide, prevSlide, goToSlide, totalSlides]);

    return (
        <div className="presentation-container">
            {/* Navigation */}
            <nav className="pres-nav">
                <div className="pres-nav-brand">
                    <div className="pres-nav-logo">CP</div>
                    <span className="pres-nav-title">Client Portal</span>
                </div>
                <div className="pres-nav-controls">
                    <button className="pres-nav-btn" onClick={prevSlide}>← Prev</button>
                    <span className="pres-slide-counter">{currentSlide} / {totalSlides}</span>
                    <button className="pres-nav-btn" onClick={nextSlide}>Next →</button>
                </div>
            </nav>

            {/* Slides Container */}
            <div
                className="pres-slides-container"
                ref={containerRef}
                onScroll={updateCounter}
            >
                {children}
            </div>
        </div>
    );
}

// Title Slide Component
interface TitleSlideProps {
    title: string;
    subtitle: string;
    metaItems: { icon: string; text: string }[];
    flowSteps: string[];
}

export function TitleSlide({ title, subtitle, metaItems, flowSteps }: TitleSlideProps) {
    return (
        <section className="pres-slide pres-title-slide">
            <div className="pres-slide-content">
                <h1 className="pres-main-title">{title}</h1>
                <p className="pres-subtitle">{subtitle}</p>
                <div className="pres-title-meta">
                    {metaItems.map((item, idx) => (
                        <div key={idx} className="pres-meta-item">
                            <div className="pres-meta-icon">{item.icon}</div>
                            <span>{item.text}</span>
                        </div>
                    ))}
                </div>
                <div className="pres-flow-diagram">
                    {flowSteps.map((step, idx) => (
                        <React.Fragment key={idx}>
                            <div className="pres-flow-step">{step}</div>
                            {idx < flowSteps.length - 1 && <span className="pres-flow-arrow">→</span>}
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </section>
    );
}

// Screenshot with Browser Frame
interface ScreenshotProps {
    src: string;
    alt: string;
    url: string;
    label?: string;
}

export function Screenshot({ src, alt, url, label }: ScreenshotProps) {
    return (
        <div className="pres-screenshot-container">
            <div className="pres-browser-bar">
                <div className="pres-browser-dot red"></div>
                <div className="pres-browser-dot yellow"></div>
                <div className="pres-browser-dot green"></div>
                <div className="pres-browser-url">{url}</div>
            </div>
            <img src={src} alt={alt} className="pres-screenshot" />
            {label && <div className="pres-screenshot-label">{label}</div>}
        </div>
    );
}

// Info Section
interface InfoSectionProps {
    title: string;
    items: React.ReactNode[];
    isValueBox?: boolean;
}

export function InfoSection({ title, items, isValueBox }: InfoSectionProps) {
    return (
        <div className={`pres-info-section ${isValueBox ? 'pres-value-box' : ''}`}>
            <h3>{title}</h3>
            <ul>
                {items.map((item, idx) => (
                    <li key={idx}>{item}</li>
                ))}
            </ul>
        </div>
    );
}

// Feature Card
interface FeatureCardProps {
    icon: string;
    title: string;
    description: string;
}

export function FeatureCard({ icon, title, description }: FeatureCardProps) {
    return (
        <div className="pres-feature-card">
            <div className="pres-feature-icon">{icon}</div>
            <h4>{title}</h4>
            <p>{description}</p>
        </div>
    );
}

// Flow Diagram
interface FlowDiagramProps {
    steps: { text: string; active?: boolean }[];
}

export function FlowDiagram({ steps }: FlowDiagramProps) {
    return (
        <div className="pres-flow-diagram" style={{ marginTop: '1rem' }}>
            {steps.map((step, idx) => (
                <React.Fragment key={idx}>
                    <div className={`pres-flow-step ${step.active ? 'active' : ''}`}>{step.text}</div>
                    {idx < steps.length - 1 && <span className="pres-flow-arrow">→</span>}
                </React.Fragment>
            ))}
        </div>
    );
}

// Journey Phase
interface JourneyPhaseProps {
    number: string;
    title: string;
    steps: string[];
}

export function JourneyPhase({ number, title, steps }: JourneyPhaseProps) {
    return (
        <div className="pres-journey-phase">
            <div className="pres-phase-header">
                <div className="pres-phase-number">{number}</div>
                <div className="pres-phase-title">{title}</div>
            </div>
            <div className="pres-phase-steps">
                {steps.map((step, idx) => (
                    <React.Fragment key={idx}>
                        <div className="pres-step-box">{step}</div>
                        {idx < steps.length - 1 && <span className="pres-step-connector">→</span>}
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
}
