"use client";

import './presentation.css';
import {
    PresentationLayout,
    TitleSlide,
} from './components/PresentationComponents';
import { Slide } from './components/Slide';
import { slide1, slide2, slide3, slide4 } from './data/slides-1-5';
import { slide5, slide6, slide7, slide8, slide9 } from './data/slides-6-10';
import { slide10, slide11, slide12 } from './data/slides-extras';

// Combine all slides in correct order
// Flow: Login -> Setup -> Dashboard -> Employees -> Punch -> Calendar -> Regularization 
// -> Leave Bal -> Leave Apply -> Payroll -> Payslips -> Settings
const allSlides = [
    slide1,     // 1. Login
    slide2,     // 2. Setup
    slide3,     // 3. Dashboard
    slide10,    // 4. Employees (Moved from 10)
    slide4,     // 5. Punch (Renumbered from 4)
    slide5,     // 6. Calendar
    slide6,     // 7. Regularization
    slide7,     // 8. Leave Bal
    slide8,     // 9. Leave Apply
    slide11,    // 10. Payroll
    slide12,    // 11. Payslips
    slide9,     // 12. Settings
];

// Title slide data
const titleSlideData = {
    title: 'EmployeeNest',
    subtitle: 'Complete HR management platform — Streamline attendance, leaves, payroll, and employee operations in one unified solution',
    metaItems: [
        { icon: '📊', text: '12 Features' },
        { icon: '🏢', text: 'Enterprise Ready' },
        { icon: '✨', text: 'All-in-One HR' },
    ],
    flowSteps: ['Login', 'Dashboard', 'Employees', 'Attendance', 'Leaves', 'Payroll', 'Settings'],
};

export default function PresentationPage() {
    // Total slides = 1 title + 13 content slides + 1 summary slide = 15
    const totalSlides = allSlides.length + 2;

    return (
        <PresentationLayout totalSlides={totalSlides}>
            {/* Title Slide */}
            <TitleSlide {...titleSlideData} />

            {/* Content Slides */}
            {allSlides.map((slideData) => (
                <Slide key={slideData.number} data={slideData} />
            ))}

            {/* Summary & Thank You */}
            <section className="pres-slide pres-summary-slide">
                <div className="pres-slide-content">
                    {/* Hero Section */}
                    <div className="pres-summary-hero">
                        <div className="pres-summary-icon">🏢</div>
                        <h1 className="pres-summary-title">Ready to Streamline Your HR?</h1>
                        <p className="pres-summary-subtitle">
                            EmployeeNest unifies attendance, leaves, payroll, and employee management into one seamless platform
                        </p>
                    </div>

                    {/* Core Features Row */}
                    <div className="pres-stats-row pres-stats-3col">
                        <div className="pres-stat-card">
                            <div className="pres-stat-icon">⏱️</div>
                            <div className="pres-stat-value">Attendance</div>
                            <div className="pres-stat-label">Punch • Calendar • Regularization</div>
                        </div>
                        <div className="pres-stat-card">
                            <div className="pres-stat-icon">📅</div>
                            <div className="pres-stat-value">Leave Management</div>
                            <div className="pres-stat-label">Apply • Track • Approve</div>
                        </div>
                        <div className="pres-stat-card">
                            <div className="pres-stat-icon">💰</div>
                            <div className="pres-stat-value">Payroll</div>
                            <div className="pres-stat-label">Process • Generate • Distribute</div>
                        </div>
                    </div>

                    {/* Key Highlights */}
                    <div className="pres-highlights-grid">
                        <div className="pres-highlight-card">
                            <div className="pres-highlight-icon">🔐</div>
                            <h3>Secure Access</h3>
                            <p>Multi-tenant authentication with role-based permissions</p>
                        </div>
                        <div className="pres-highlight-card">
                            <div className="pres-highlight-icon">📊</div>
                            <h3>Real-time Dashboard</h3>
                            <p>Organization stats and quick actions at a glance</p>
                        </div>
                        <div className="pres-highlight-card">
                            <div className="pres-highlight-icon">👤</div>
                            <h3>Self-Service Portal</h3>
                            <p>Employees manage their own attendance and leaves</p>
                        </div>
                        <div className="pres-highlight-card">
                            <div className="pres-highlight-icon">⚙️</div>
                            <h3>Customizable</h3>
                            <p>Themes, regional settings, and preferences</p>
                        </div>
                    </div>

                    {/* CTA Section */}
                    <div className="pres-cta-section">
                        <div className="pres-cta-content">
                            <h2>Thank You</h2>
                            <p>Questions? Let&apos;s discuss how EmployeeNest can help your organization.</p>
                            <div className="pres-cta-url">
                                <span className="pres-url-icon">🌐</span>
                                <span className="pres-url-text">www.employeenest.com</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </PresentationLayout>
    );
}
