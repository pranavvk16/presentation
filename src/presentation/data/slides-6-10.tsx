import type { SlideData } from '../components/Slide';

const SCREENSHOT_BASE = '/presentation/screenshots';

// Slide 6: Attendance Calendar
export const slide5: SlideData = {
    number: 6,
    title: 'Attendance Calendar & History',
    subtitle: 'Historical attendance visibility and monthly patterns at a glance',
    screenshot: {
        src: `${SCREENSHOT_BASE}/attendance_calendar_1767985998130.png`,
        alt: 'Attendance Calendar',
        url: 'www.employeenest.com/tenant/amazon/attendance',
    },
    talkingPoints: {
        title: 'Color-Coded Calendar',
        items: [],
    },
    colorLegend: [
        { color: '#10b981', label: 'Green = Present' },
        { color: '#f43f5e', label: 'Rose/Red = Absent' },
        { color: '#f59e0b', label: 'Amber = On Leave' },
        { color: '#0ea5e9', label: 'Sky Blue = Half Day' },
        { color: '#6366f1', label: 'Indigo = Holiday' },
        { color: '#6b7280', label: 'Gray = Week Off' },
    ],
    extraSection: {
        title: 'Quick Stats Summary',
        items: [
            <><strong>Present Days:</strong> Total days attended this month</>,
            <><strong>Leaves Taken:</strong> Approved leave count</>,
            <><strong>Absent Days:</strong> Unplanned absences</>,
        ],
    },
    valuePoints: [
        'Transparency in attendance records',
        'Self-service access reduces HR queries',
        'Export capability for personal records',
    ],
};

// Slide 7: Regularization
export const slide6: SlideData = {
    number: 7,
    title: 'Attendance Regularization Request',
    subtitle: 'Employee self-service for attendance corrections',
    screenshot: {
        src: `${SCREENSHOT_BASE}/regularization_dialog_1767986923999.png`,
        alt: 'Regularization Dialog',
        url: 'Apply Regularization Modal',
    },
    talkingPoints: {
        title: 'Key Talking Points',
        items: [
            <><strong>Self-Service Corrections:</strong> Employees can request regularization for missed punches</>,
            <><strong>Date Selection:</strong> Pick the specific date requiring correction</>,
            <><strong>Time Entry:</strong> Specify actual check-in and check-out times</>,
            <><strong>Reason Documentation:</strong> Provide explanation for the regularization request</>,
            <><strong>Approval Workflow:</strong> Requests route to appropriate approvers (HR/Manager)</>,
        ],
    },
    flowSteps: [
        { text: 'Submit Request' },
        { text: 'Manager Review' },
        { text: 'Approved/Rejected', active: true },
    ],
    valuePoints: [
        'Reduces administrative burden on HR',
        'Maintains accurate attendance records',
        'All requests are logged for compliance',
    ],
    reverse: true,
};

// Slide 8: Leave Management
export const slide7: SlideData = {
    number: 8,
    title: 'Leave Management Dashboard',
    subtitle: '/tenant/[slug]/dashboard/leaves — Leave balance visibility and management',
    screenshot: {
        src: `${SCREENSHOT_BASE}/leaves_balance_cards_1767986677168.png`,
        alt: 'Leave Balance Cards',
        url: 'www.employeenest.com/tenant/amazon/leaves',
    },
    talkingPoints: {
        title: 'Key Talking Points',
        items: [
            <><strong>Leave Type Cards:</strong> Visual cards for each leave type with distinct colors</>,
            <><strong>Balance at a Glance:</strong> Available days shown prominently</>,
            <><strong>Usage Progress:</strong> Used vs Allocated days with progress bar</>,
            <><strong>Apply for Leave Button:</strong> Prominent CTA to initiate leave request</>,
        ],
    },
    features: [
        { icon: '☀️', title: 'Casual Leave', description: 'Personal time off' },
        { icon: '🩺', title: 'Sick Leave', description: 'Medical absences' },
        { icon: '⭐', title: 'Privilege Leave', description: 'Earned leaves' },
    ],
    valuePoints: [
        'Employee empowerment through self-service',
        'Clear visibility prevents overuse/confusion',
        'Real-time balance updates after approvals',
    ],
};

// Slide 9: Leave Application
export const slide8: SlideData = {
    number: 9,
    title: 'Leave Application & History',
    subtitle: 'Complete leave request lifecycle — Request submission to approval tracking',
    screenshot: {
        src: `${SCREENSHOT_BASE}/leaves_apply_dialog_1767986715758.png`,
        alt: 'Leave Application Dialog',
        url: 'Apply For Leave Modal',
    },
    screenshot2: {
        src: `${SCREENSHOT_BASE}/leaves_history_1767986748200.png`,
        alt: 'Leave History',
        url: 'Leave History',
    },
    talkingPoints: {
        title: 'Leave Application Form',
        items: [
            <><strong>Leave Type Selection:</strong> Choose from configured leave types</>,
            <><strong>Date Range Picker:</strong> Select from and to dates</>,
            <><strong>Reason/Notes:</strong> Provide context for the request</>,
            <><strong>Balance Validation:</strong> Prevents over-application</>,
        ],
    },
    extraSection: {
        title: 'Leave History Table',
        items: [
            <><strong>Status Indicators:</strong> Approved ✓, Pending ⏳, Rejected ✗</>,
            <><strong>Duration & Dates:</strong> Complete leave details</>,
            <><strong>Filter Options:</strong> Sort by status, type, or date</>,
        ],
    },
    valuePoints: [
        'Paperless leave management',
        'Complete transparency in leave tracking',
        'Audit trail of all requests',
    ],
};

// Slide 12: Settings (Moved from 9)
export const slide9: SlideData = {
    number: 12,
    title: 'Settings & Profile Customization',
    subtitle: '/tenant/[slug]/dashboard/settings — User personalization options',
    screenshot: {
        src: `${SCREENSHOT_BASE}/settings_page_1767986821615.png`,
        alt: 'Settings Page',
        url: 'www.employeenest.com/tenant/amazon/settings',
    },
    talkingPoints: {
        title: 'Key Talking Points',
        items: [
            <><strong>Theme Customization:</strong> Toggle between Light and Dark modes</>,
            <><strong>Organization Information:</strong> View company name and subdomain</>,
            <><strong>Regional Settings:</strong> Date format and currency preferences</>,
            <><strong>Instant Save:</strong> Changes persist immediately</>,
        ],
    },
    features: [
        { icon: '🌙', title: 'Dark Mode', description: 'Theme toggle' },
        { icon: '📅', title: 'Date Format', description: 'DD/MM/YYYY' },
        { icon: '💵', title: 'Currency', description: 'INR, USD, EUR' },
    ],
    valuePoints: [
        'Personalized experience improves adoption',
        'Regional flexibility for global organizations',
        'User-specific preferences saved per account',
    ],
    reverse: true,
};

export const slidesData5to9 = [slide5, slide6, slide7, slide8, slide9];
