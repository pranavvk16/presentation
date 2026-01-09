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
        label: 'Token Validation State',
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

// Slide 5: Attendance Punch (Renumbered from 4)
export const slide4: SlideData = {
    number: 5,
    title: 'Daily Attendance - Punch In/Out',
    subtitle: '/tenant/[slug]/dashboard/attendance — Core daily activity for every employee',
    screenshot: {
        src: `${SCREENSHOT_BASE}/attendance_punch_card_1767985953071.png`,
        alt: 'Attendance Punch Card',
        url: 'www.employeenest.com/tenant/amazon/attendance',
    },
    talkingPoints: {
        title: 'Key Talking Points',
        items: [
            <><strong>Real-Time Clock Display:</strong> Live clock showing current time and date</>,
            <><strong>Attendance Mode Selection:</strong> Choose between Office, Remote, or Field work modes</>,
            <><strong>One-Click Punch:</strong> Large, prominent button for quick punch in/out</>,
            <><strong>Visual Time Cards:</strong> Clear display of punch-in and punch-out times</>,
        ],
    },
    features: [
        { icon: '🏢', title: 'Office', description: 'In-office attendance' },
        { icon: '🏠', title: 'Remote', description: 'Work from home' },
        { icon: '🚗', title: 'Field', description: 'On-site visits' },
    ],
    valuePoints: [
        'Simplified attendance tracking increases compliance',
        'Flexibility for hybrid/remote work arrangements',
    ],
    reverse: true,
};

export const slidesData1to4 = [slide1, slide2, slide3, slide4];

