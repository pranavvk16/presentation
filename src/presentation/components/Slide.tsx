"use client";

import React from 'react';
import { Screenshot, InfoSection, FeatureCard, FlowDiagram } from './PresentationComponents';

export interface SlideData {
    number: number;
    title: string;
    subtitle: string;
    screenshot: {
        src: string;
        alt: string;
        url: string;
        label?: string;
    };
    screenshot2?: {
        src: string;
        alt: string;
        url: string;
    };
    talkingPoints: {
        title: string;
        items: React.ReactNode[];
    };
    features?: { icon: string; title: string; description: string }[];
    flowSteps?: { text: string; active?: boolean }[];
    valuePoints: React.ReactNode[];
    reverse?: boolean;
    colorLegend?: { color: string; label: string }[];
    extraSection?: {
        title: string;
        items: React.ReactNode[];
    };
}

interface SlideProps {
    data: SlideData;
}

export function Slide({ data }: SlideProps) {
    const {
        number,
        title,
        subtitle,
        screenshot,
        screenshot2,
        talkingPoints,
        features,
        flowSteps,
        valuePoints,
        reverse,
        colorLegend,
        extraSection,
    } = data;

    return (
        <section className="pres-slide">
            <div className="pres-slide-content">
                {/* Header */}
                <div className="pres-slide-header">
                    <div className="pres-slide-number">{number}</div>
                    <h1 className="pres-slide-title">{title}</h1>
                    <p className="pres-slide-subtitle">{subtitle}</p>
                </div>

                {/* Content Grid */}
                <div className={`pres-content-grid ${reverse ? 'reverse' : ''}`}>
                    {/* Screenshot Section */}
                    {screenshot2 ? (
                        <div className="pres-multi-screenshot">
                            <Screenshot
                                src={screenshot.src}
                                alt={screenshot.alt}
                                url={screenshot.url}
                                label={screenshot.label}
                            />
                            <Screenshot
                                src={screenshot2.src}
                                alt={screenshot2.alt}
                                url={screenshot2.url}
                            />
                        </div>
                    ) : (
                        <Screenshot
                            src={screenshot.src}
                            alt={screenshot.alt}
                            url={screenshot.url}
                            label={screenshot.label}
                        />
                    )}

                    {/* Info Panel */}
                    <div className="pres-info-panel">
                        {/* Talking Points or Color Legend */}
                        {colorLegend ? (
                            <InfoSection
                                title={talkingPoints.title}
                                items={colorLegend.map((item) => (
                                    <span key={item.label}>
                                        <span style={{ color: item.color }}>●</span>{' '}
                                        <strong>{item.label}</strong>
                                    </span>
                                ))}
                            />
                        ) : (
                            <InfoSection title={talkingPoints.title} items={talkingPoints.items} />
                        )}

                        {/* Extra Section (if any) */}
                        {extraSection && (
                            <InfoSection title={extraSection.title} items={extraSection.items} />
                        )}

                        {/* Features Grid */}
                        {features && features.length > 0 && (
                            <div className="pres-feature-grid">
                                {features.map((feature, idx) => (
                                    <FeatureCard
                                        key={idx}
                                        icon={feature.icon}
                                        title={feature.title}
                                        description={feature.description}
                                    />
                                ))}
                            </div>
                        )}

                        {/* Flow Diagram */}
                        {flowSteps && <FlowDiagram steps={flowSteps} />}

                        {/* Value Box */}
                        <InfoSection title="Value to Client" items={valuePoints} isValueBox />
                    </div>
                </div>
            </div>
        </section>
    );
}
