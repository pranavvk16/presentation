import type { SlideData } from '../components/Slide';

const SCREENSHOT_BASE = '/presentation/screenshots';

// Slide 1: Login Experience
export const slide1: SlideData = {
    number: 1,
    title: 'Welcome & Login Experience',
    subtitle: '/tenant/[slug]/login — Entry point for all returning users',
    screenshot: {
        src: `${SCREENSHOT_BASE}/amazon_login_page_1767985666311.png`,
        alt: 'Login Page',
        url: 'www.employeenest.com/tenant/amazon/login',
    },
    talkingPoints: {
        title: 'Key Talking Points',
        items: [
            <><strong>Organization-Branded Experience:</strong> Each client gets a personalized login page with their company branding (logo, primary color scheme)</>,
            <><strong>Secure Authentication:</strong> Standard email/password authentication with show/hide password toggle</>,
            <><strong>Clear Error Messaging:</strong> User-friendly error states for invalid credentials or locked accounts</>,
            <><strong>Dark/Light Mode Support:</strong> Theme toggle available for user preference</>,
        ],
    },
    valuePoints: [
        'Professional, branded portal creates sense of ownership',
        'Familiar, intuitive login experience',
        'Split-screen design with company branding reinforces brand identity',
    ],
};

// Slide 2: Setup Account
export const slide2: SlideData = {
    number: 2,
    title: 'New Employee Account Setup',
    subtitle: '/tenant/[slug]/setup-account — First-time employee onboarding via email invitation',
    screenshot: {
        src: `${SCREENSHOT_BASE}/New-Employee-Account-Setup.png`,
        alt: 'Setup Account Page',
        url: 'www.employeenest.com/tenant/amazon/setup-account',
    },
    talkingPoints: {
        title: 'Key Talking Points',
        items: [
            <><strong>Invitation-Based Access:</strong> Employees receive secure email invitations with unique tokens</>,
            <><strong>Token Validation:</strong> System automatically validates invite links and shows appropriate errors for expired/invalid tokens</>,
            <><strong>Password Strength Indicator:</strong> Real-time visual feedback on password strength (Weak → Fair → Good → Strong)</>,
            <><strong>Terms & Privacy Agreement:</strong> Required acceptance before account activation</>,
        ],
    },
    valuePoints: [
        'Secure, controlled access to the portal',
        'Guided onboarding reduces HR support burden',
        'Pre-filled email ensures correct account setup',
    ],
    reverse: true,
};

// Slide 3: Dashboard (renumbered from 4)
export const slide3: SlideData = {
    number: 3,
    title: 'Dashboard Overview & Quick Stats',
    subtitle: '/tenant/[slug]/dashboard — Central hub for daily activities',
    screenshot: {
        src: `${SCREENSHOT_BASE}/amazon_dashboard_top_1767985846032.png`,
        alt: 'Dashboard',
        url: 'www.employeenest.com/tenant/amazon/dashboard',
    },
    talkingPoints: {
        title: 'Key Talking Points',
        items: [
            <><strong>Personalized Welcome:</strong> Dynamic greeting with user&apos;s name and organization context</>,
            <><strong>Key Metrics at a Glance:</strong> Total Employees, Departments, Teams, and Branches counts</>,
            <><strong>Daily Attendance Widget:</strong> Prominent punch in/out card for quick daily tracking</>,
            <><strong>Recent Team Members:</strong> Quick view of newest or recently active employees</>,
        ],
    },
    features: [
        { icon: '📈', title: 'Employees', description: 'Total count' },
        { icon: '🏛️', title: 'Departments', description: 'Org structure' },
        { icon: '👥', title: 'Teams', description: 'Team groups' },
        { icon: '🏢', title: 'Branches', description: 'Locations' },
    ],
    valuePoints: [
        'Single source of truth for daily operations',
        'Executive-level visibility into organization health',
    ],
};

// Slide 5: Comprehensive Attendance Management (Consolidated)
export const slide4: SlideData = {
    number: 5,
    title: 'Attendance Management',
    subtitle: 'Complete attendance tracking — Multiple modes, calendar view, and self-service corrections',
    screenshot: {
        src: `${SCREENSHOT_BASE}/attendance_calendar_1767985998130.png`,
        alt: 'Attendance Calendar',
        url: 'Calendar View',
    },
    screenshot2: {
        src: `${SCREENSHOT_BASE}/mobile-app-essl.png`,
        alt: 'Mobile App & ESSL Integration',
        url: '',
        noBrowserFrame: true,
    },
    talkingPoints: {
        title: 'Attendance Modes',
        items: [
            <><strong>Web Clock In:</strong> Browser-based punch from any desktop</>,
            <><strong>Mobile App:</strong> GPS-enabled attendance with geo-location tracking</>,
            <><strong>ESSL Biometric:</strong> Integration with biometric machines for physical offices</>,
            <><strong>Field Force:</strong> Route tracking, customer visit logging for sales teams</>,
        ],
    },
    extraSection: {
        title: 'Calendar & Regularization',
        items: [
            <><strong>Color-Coded Calendar:</strong> Visual monthly attendance history</>,
            <><strong>Self-Service Corrections:</strong> Request regularization for missed punches</>,
            <><strong>Manager Approval:</strong> Automated workflow for attendance corrections</>,
        ],
    },
    features: [
        { icon: '🌐', title: 'Web Clock', description: 'Browser-based' },
        { icon: '📱', title: 'Mobile App', description: 'GPS tracking' },
        { icon: '🔐', title: 'ESSL', description: 'Biometric' },
        { icon: '🚗', title: 'Field Force', description: 'Route & visits' },
    ],
    valuePoints: [
        'Multiple modes ensure 100% attendance capture',
        'Sales team tracking with customer visit logs',
        'Self-service reduces HR workload',
    ],
    reverse: true,
};

export const slidesData1to4 = [slide1, slide2, slide3, slide4];

