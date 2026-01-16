"use client";

import './presentation.css';
import {
    PresentationLayout,
    TitleSlide,
} from './components/PresentationComponents';
import { Slide } from './components/Slide';
import { slide1, slide2, slide3, slide4 } from './data/slides-1-5';
import { slideLeave, slideSettings } from './data/slides-6-10';
import { slideEmployees, slidePayroll } from './data/slides-extras';
import { slideRecruitment, slideTraining, slidePerformance, slideExit } from './data/slides-new-modules';

// Combine all slides in correct order (12 content slides)
// Flow: Login -> Setup -> Dashboard -> Employees -> Attendance -> Leave
//       -> Recruitment -> Training -> Payroll -> Performance -> Exit -> Settings
const allSlides = [
    slide1,           // 1. Login
    slide2,           // 2. Setup Account
    slide3,           // 3. Dashboard
    slideEmployees,   // 4. Employees
    slide4,           // 5. Attendance (Enhanced: Web/Mobile/ESSL/Field + Calendar + Regularization)
    slideLeave,       // 6. Leave Management (Consolidated: Balance + Apply + History)
    slideRecruitment, // 7. Recruitment (NEW)
    slideTraining,    // 8. Training (NEW)
    slidePayroll,     // 9. Payroll & Statutory (Enhanced: + Payslips + Compliance)
    slidePerformance, // 10. Performance Appraisal (NEW)
    slideExit,        // 11. Exit Management (NEW)
    slideSettings,    // 12. Settings
];

// Title slide data
const titleSlideData = {
    title: 'EmployeeNest',
    subtitle: 'Complete HR management platform — Streamline the entire employee lifecycle from hiring to exit',
    metaItems: [
        { icon: '📊', text: '12 Modules' },
        { icon: '🏢', text: 'Enterprise Ready' },
        { icon: '✨', text: 'All-in-One HR' },
    ],
    flowSteps: ['Login', 'Dashboard', 'Employees', 'Attendance', 'Leaves', 'Recruitment', 'Training', 'Payroll', 'Performance', 'Exit'],
};

export default function PresentationPage() {
    // Total slides = 1 title + 12 content slides + 1 summary slide = 14
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
                        <h1 className="pres-summary-title">Complete HR Lifecycle Management</h1>
                        <p className="pres-summary-subtitle">
                            EmployeeNest covers the entire employee journey — from recruitment to exit
                        </p>
                    </div>

                    {/* Core Features Row */}
                    <div className="pres-stats-row pres-stats-4col">
                        <div className="pres-stat-card">
                            <div className="pres-stat-icon">👥</div>
                            <div className="pres-stat-value">Recruitment</div>
                            <div className="pres-stat-label">Job Portal • ATS • Hiring</div>
                        </div>
                        <div className="pres-stat-card">
                            <div className="pres-stat-icon">📚</div>
                            <div className="pres-stat-value">Training</div>
                            <div className="pres-stat-label">Induction • Orientation</div>
                        </div>
                        <div className="pres-stat-card">
                            <div className="pres-stat-icon">⏱️</div>
                            <div className="pres-stat-value">Attendance</div>
                            <div className="pres-stat-label">Web • Mobile • ESSL • Field</div>
                        </div>
                        <div className="pres-stat-card">
                            <div className="pres-stat-icon">📅</div>
                            <div className="pres-stat-value">Leave</div>
                            <div className="pres-stat-label">Apply • Track • Approve</div>
                        </div>
                    </div>

                    {/* Second Row */}
                    <div className="pres-stats-row pres-stats-4col">
                        <div className="pres-stat-card">
                            <div className="pres-stat-icon">💰</div>
                            <div className="pres-stat-value">Payroll</div>
                            <div className="pres-stat-label">Salary • Statutory • Reports</div>
                        </div>
                        <div className="pres-stat-card">
                            <div className="pres-stat-icon">🎯</div>
                            <div className="pres-stat-value">Performance</div>
                            <div className="pres-stat-label">360° KPI Reviews</div>
                        </div>
                        <div className="pres-stat-card">
                            <div className="pres-stat-icon">🚪</div>
                            <div className="pres-stat-value">Exit</div>
                            <div className="pres-stat-label">F&F Settlement</div>
                        </div>
                        <div className="pres-stat-card">
                            <div className="pres-stat-icon">⚙️</div>
                            <div className="pres-stat-value">Settings</div>
                            <div className="pres-stat-label">Theme • Preferences</div>
                        </div>
                    </div>

                    {/* CTA Section */}
                    <div className="pres-cta-section">
                        <div className="pres-cta-content">
                            <h2>Thank You</h2>
                            <p>Questions? Let&apos;s discuss how EmployeeNest can transform your HR operations.</p>
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
