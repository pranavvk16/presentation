"use client";

import React, { useState, useRef, useEffect, useCallback } from 'react';

interface PresentationLayoutProps {
    children: React.ReactNode;
    totalSlides: number;
}

export function PresentationLayout({ children, totalSlides }: PresentationLayoutProps) {
    const [currentSlide, setCurrentSlide] = useState(1);
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);
    const [isFullscreen, setIsFullscreen] = useState(false);
    const [showGuide, setShowGuide] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);
    const presentationContainerRef = useRef<HTMLDivElement>(null);

    // Check if first time visitor
    useEffect(() => {
        const hasSeenGuide = localStorage.getItem('employeenest-pres-guide-seen');
        if (!hasSeenGuide) {
            setShowGuide(true);
        }
    }, []);

    const closeGuide = useCallback(() => {
        setShowGuide(false);
        localStorage.setItem('employeenest-pres-guide-seen', 'true');
    }, []);

    const openGuide = useCallback(() => {
        setShowGuide(true);
    }, []);

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

    // Auto-play functionality
    const togglePlay = useCallback(() => {
        setIsPlaying(prev => !prev);
        setProgress(0); // Reset progress when toggling
    }, []);

    // Fullscreen functionality
    const toggleFullscreen = useCallback(() => {
        if (!document.fullscreenElement) {
            presentationContainerRef.current?.requestFullscreen();
            setIsFullscreen(true);
        } else {
            document.exitFullscreen();
            setIsFullscreen(false);
        }
    }, []);

    // Listen for fullscreen changes
    useEffect(() => {
        const handleFullscreenChange = () => {
            setIsFullscreen(!!document.fullscreenElement);
        };

        document.addEventListener('fullscreenchange', handleFullscreenChange);
        return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
    }, []);

    // Auto-advance when playing
    useEffect(() => {
        if (isPlaying) {
            const slideDuration = 10000; // 10 seconds per slide
            let startTime = Date.now();
            let animationFrameId: number;

            const updateProgress = () => {
                const elapsed = Date.now() - startTime;
                const progressPercent = (elapsed / slideDuration) * 100;

                if (progressPercent >= 100) {
                    // Time to advance to next slide
                    setProgress(0);
                    startTime = Date.now(); // Reset timer

                    setCurrentSlide(prev => {
                        // If we're at the last slide, stop playing and reset to first slide
                        if (prev >= totalSlides) {
                            setIsPlaying(false);
                            goToSlide(0);
                            return 1;
                        }
                        // Otherwise go to next slide
                        goToSlide(prev);
                        return prev + 1;
                    });
                } else {
                    setProgress(progressPercent);
                }

                // Continue animation loop
                animationFrameId = requestAnimationFrame(updateProgress);
            };

            // Start the animation loop
            animationFrameId = requestAnimationFrame(updateProgress);

            return () => {
                cancelAnimationFrame(animationFrameId);
            };
        } else {
            setProgress(0);
        }
    }, [isPlaying, totalSlides, goToSlide]);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            // Pause auto-play when user manually navigates
            if (isPlaying && (
                e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key === 'PageDown' ||
                e.key === 'ArrowLeft' || e.key === 'ArrowUp' || e.key === 'PageUp' ||
                e.key === 'Home' || e.key === 'End' || e.key === ' '
            )) {
                setIsPlaying(false);
            }

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
    }, [nextSlide, prevSlide, goToSlide, totalSlides, isPlaying]);

    const handlePrevSlide = useCallback(() => {
        setIsPlaying(false); // Pause when manually navigating
        prevSlide();
    }, [prevSlide]);

    const handleNextSlide = useCallback(() => {
        setIsPlaying(false); // Pause when manually navigating
        nextSlide();
    }, [nextSlide]);

    return (
        <div className="presentation-container" ref={presentationContainerRef}>
            {/* User Guide Modal */}
            {showGuide && (
                <div className="pres-guide-overlay">
                    <div className="pres-guide-modal">
                        <div className="pres-guide-header">
                            <div className="pres-guide-logo">
                                <span className="pres-guide-logo-icon">🏢</span>
                                <span className="pres-guide-logo-text">EmployeeNest</span>
                            </div>
                            <h2>Welcome to the Product Walkthrough</h2>
                            <p>Your complete guide to our all-in-one HR solution</p>
                        </div>

                        <div className="pres-guide-content">
                            <h3>How to Navigate</h3>
                            <div className="pres-guide-controls">
                                <div className="pres-guide-item">
                                    <span className="pres-guide-key">← →</span>
                                    <span>Arrow keys to navigate</span>
                                </div>
                                <div className="pres-guide-item">
                                    <span className="pres-guide-key">▶ Play</span>
                                    <span>Auto-advance slides</span>
                                </div>
                                <div className="pres-guide-item">
                                    <span className="pres-guide-key">⛶</span>
                                    <span>Fullscreen mode</span>
                                </div>
                                <div className="pres-guide-item">
                                    <span className="pres-guide-key">Click</span>
                                    <span>Use Prev/Next buttons</span>
                                </div>
                            </div>

                            <div className="pres-guide-features">
                                <h4>What You&apos;ll See</h4>
                                <ul>
                                    <li>Complete attendance management workflow</li>
                                    <li>Leave application &amp; approval process</li>
                                    <li>Payroll &amp; payslip generation</li>
                                    <li>Employee self-service portal</li>
                                </ul>
                            </div>

                            <div className="pres-guide-zoom">
                                <h4>💡 Display Tip</h4>
                                <p>
                                    Adjust your browser zoom (Ctrl/Cmd + or -) for the best viewing experience.
                                    We recommend 80-100% zoom depending on your screen size.
                                </p>
                            </div>
                        </div>

                        <div className="pres-guide-footer">
                            <button className="pres-guide-start" onClick={closeGuide}>
                                Start Presentation
                            </button>
                            <span className="pres-guide-hint">Press ? anytime to see this guide</span>
                        </div>
                    </div>
                </div>
            )}

            {/* Navigation */}
            <nav className="pres-nav">
                <div className="pres-nav-brand">
                    <div className="pres-nav-logo">EN</div>
                    <span className="pres-nav-title">EmployeeNest</span>
                </div>
                <div className="pres-nav-center">
                    <div className="pres-play-container">
                        <button
                            className={`pres-play-btn ${isPlaying ? 'playing' : ''}`}
                            onClick={togglePlay}
                            title={isPlaying ? 'Pause' : 'Auto-play'}
                        >
                            {isPlaying ? (
                                <>
                                    <span className="play-icon">⏸</span>
                                    <span className="play-text">Pause</span>
                                </>
                            ) : (
                                <>
                                    <span className="play-icon">▶</span>
                                    <span className="play-text">Play</span>
                                </>
                            )}
                        </button>
                        {isPlaying && (
                            <div className="pres-progress-bar">
                                <div
                                    className="pres-progress-fill"
                                    style={{ width: `${progress}%` }}
                                ></div>
                            </div>
                        )}
                    </div>
                </div>
                <div className="pres-nav-controls">
                    <button className="pres-nav-btn" onClick={handlePrevSlide}>← Prev</button>
                    <span className="pres-slide-counter">{currentSlide} / {totalSlides}</span>
                    <button className="pres-nav-btn" onClick={handleNextSlide}>Next →</button>
                    <button
                        className="pres-nav-btn pres-fullscreen-btn"
                        onClick={toggleFullscreen}
                        title={isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}
                    >
                        ⛶
                    </button>
                    <button
                        className="pres-nav-btn pres-help-btn"
                        onClick={openGuide}
                        title="View Guide"
                    >
                        ?
                    </button>
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
