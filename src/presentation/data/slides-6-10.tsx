import type { SlideData } from '../components/Slide';

const SCREENSHOT_BASE = '/presentation/screenshots';

// Slide 6: Consolidated Leave Management
export const slideLeave: SlideData = {
    number: 6,
    title: 'Leave Management',
    subtitle: 'Complete leave lifecycle — Balance visibility, application, and approval tracking',
    screenshot: {
        src: `${SCREENSHOT_BASE}/leaves_balance_cards_1767986677168.png`,
        alt: 'Leave Balance Cards',
        url: 'www.employeenest.com/tenant/amazon/leaves',
    },
    screenshot2: {
        src: `${SCREENSHOT_BASE}/leaves_apply_dialog_1767986715758.png`,
        alt: 'Leave Application',
        url: 'Apply Leave Modal',
    },
    talkingPoints: {
        title: 'Leave Features',
        items: [
            <><strong>Leave Balance Cards:</strong> Visual cards showing available days per leave type</>,
            <><strong>Quick Application:</strong> Apply for leave with date picker and reason field</>,
            <><strong>Balance Validation:</strong> Prevents over-application automatically</>,
            <><strong>History & Status:</strong> Track all requests with Approved/Pending/Rejected status</>,
        ],
    },
    features: [
        { icon: '☀️', title: 'Casual', description: 'Personal time' },
        { icon: '🩺', title: 'Sick', description: 'Medical leave' },
        { icon: '⭐', title: 'Privilege', description: 'Earned leave' },
    ],
    flowSteps: [
        { text: 'Check Balance' },
        { text: 'Apply' },
        { text: 'Approval' },
        { text: 'Deducted', active: true },
    ],
    valuePoints: [
        'Self-service reduces HR queries by 70%',
        'Real-time balance updates after approvals',
        'Complete audit trail for compliance',
    ],
};

// Slide 12: Settings
export const slideSettings: SlideData = {
    number: 12,
    title: 'Settings & Profile',
    subtitle: 'Personalization options — Theme, regional settings, and preferences',
    screenshot: {
        src: `${SCREENSHOT_BASE}/settings_page_1767986821615.png`,
        alt: 'Settings Page',
        url: 'www.employeenest.com/tenant/amazon/settings',
    },
    talkingPoints: {
        title: 'Customization Options',
        items: [
            <><strong>Theme Toggle:</strong> Light and Dark mode support</>,
            <><strong>Regional Settings:</strong> Date format and currency preferences</>,
            <><strong>Organization Info:</strong> Company name and subdomain</>,
        ],
    },
    features: [
        { icon: '🌙', title: 'Dark Mode', description: 'Theme toggle' },
        { icon: '📅', title: 'Date Format', description: 'DD/MM/YYYY' },
        { icon: '💵', title: 'Currency', description: 'INR, USD, EUR' },
    ],
    valuePoints: [
        'Personalized experience improves adoption',
        'Regional flexibility for global teams',
    ],
    reverse: true,
};

export const slidesConsolidated = [slideLeave, slideSettings];
