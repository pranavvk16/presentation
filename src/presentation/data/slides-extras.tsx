import type { SlideData } from '../components/Slide';

const SCREENSHOT_BASE = '/presentation/screenshots';

// Slide 4: Employee Directory & Organization (Moved from 10)
export const slide10: SlideData = {
    number: 4,
    title: 'Employee Directory & Organization',
    subtitle: '/tenant/[slug]/dashboard/employees — Complete organizational visibility',
    screenshot: {
        src: `${SCREENSHOT_BASE}/department-additon.png`,
        alt: 'Employee Directory',
        url: 'www.employeenest.com/tenant/infosys/employees',
    },
    screenshot2: {
        src: `${SCREENSHOT_BASE}/org-additon.png`,
        alt: 'Organization View',
        url: 'Organization Chart',
    },
    talkingPoints: {
        title: 'Key Talking Points',
        items: [
            <><strong>Centralized Directory:</strong> Searchable list of all employees with contact details</>,
            <><strong>Organizational Structure:</strong> Clear view of Departments, Teams, and Branches</>,
            <><strong>Role-Based Access:</strong> Admins view sensitive info, employees view public profiles</>,
            <><strong>Quick Actions:</strong> Easy access to profile updates and management</>,
        ],
    },
    features: [
        { icon: '👥', title: 'Startups', description: 'Flat structure support' },
        { icon: '🏢', title: 'Enterprise', description: 'Multi-branch hierarchy' },
        { icon: '🔍', title: 'Search', description: 'Instant lookup' },
    ],
    valuePoints: [
        'Fosters better connectivity within the organization',
        'Streamlines internal communication',
        'Visualizes reporting hierarchy clearly',
    ],
};

// Slide 10: Payroll Management (Moved from 11)
export const slide11: SlideData = {
    number: 10,
    title: 'Payroll Management',
    subtitle: '/tenant/[slug]/dashboard/payroll — Automated salary processing',
    screenshot: {
        src: `${SCREENSHOT_BASE}/Payroll-Management.png`,
        alt: 'Payroll Dashboard',
        url: 'www.employeenest.com/tenant/infosys/payroll',
    },
    talkingPoints: {
        title: 'Key Talking Points',
        items: [
            <><strong>One-Click Processing:</strong> Automated calculation of salaries based on attendance and leaves</>,
            <><strong>Tax & Compliance:</strong> Built-in tax deductions and compliance tracking</>,
            <><strong>Salary Slip Generation:</strong> Auto-generate PDF payslips for all employees</>,
            <><strong>History & Reports:</strong> specific month processing reports</>,
        ],
    },
    extraSection: {
        title: 'Processing Flow',
        items: [
            <><strong>Verify Attendance:</strong> Auto-sync with attendance records</>,
            <><strong>Calculate Deductions:</strong> Tax and PF calculations</>,
            <><strong>Finalize & Publish:</strong> Release slips to employees</>,
        ],
    },
    valuePoints: [
        'Eliminates manual calculation errors',
        'Saves days of administrative work each month',
        'Ensures timely salary disbursement',
    ],
    reverse: true,
};

// Slide 11: My Payslips (Moved from 12)
export const slide12: SlideData = {
    number: 11,
    title: 'My Payslips',
    subtitle: '/tenant/[slug]/dashboard/my-payslips — Self-service financial records',
    screenshot: {
        src: `${SCREENSHOT_BASE}/My-Payslips.png`,
        alt: 'My Payslips',
        url: 'www.employeenest.com/tenant/infosys/my-payslips',
    },
    talkingPoints: {
        title: 'Key Talking Points',
        items: [
            <><strong>Secure Access:</strong> Private access to personal salary history</>,
            <><strong>PDF Download:</strong> Download and print official salary slips anytime</>,
            <><strong>Detailed Breakdown:</strong> Clear view of earnings, deductions, and taxes</>,
            <><strong>Archive:</strong> Access to all historical slips in one place</>,
        ],
    },
    features: [
        { icon: '📄', title: 'PDF', description: 'Instant download' },
        { icon: '🔒', title: 'Secure', description: 'Private access' },
        { icon: '📱', title: 'Mobile', description: 'View on mobile' },
    ],
    valuePoints: [
        'Reduces HR requests for payslips',
        'Empowers employees with financial data access',
        'Professional, standardized slip format',
    ],
};

export const slidesExtras = [slide10, slide11, slide12];
