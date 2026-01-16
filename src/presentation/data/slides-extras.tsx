import type { SlideData } from '../components/Slide';

const SCREENSHOT_BASE = '/presentation/screenshots';

// Slide 4: Employee Directory & Organization
export const slideEmployees: SlideData = {
    number: 4,
    title: 'Employee Directory & Organization',
    subtitle: 'Complete organizational visibility — Directory, departments, teams, and branches',
    screenshot: {
        src: `${SCREENSHOT_BASE}/department-additon.png`,
        alt: 'Employee Directory',
        url: 'www.employeenest.com/tenant/amazon/employees',
    },
    screenshot2: {
        src: `${SCREENSHOT_BASE}/org-additon.png`,
        alt: 'Organization View',
        url: 'Organization Chart',
    },
    talkingPoints: {
        title: 'Directory Features',
        items: [
            <><strong>Centralized Directory:</strong> Searchable list with contact details</>,
            <><strong>Org Structure:</strong> Departments, teams, and branches view</>,
            <><strong>Role-Based Access:</strong> Admins see sensitive info, employees see public profiles</>,
        ],
    },
    features: [
        { icon: '👥', title: 'Startups', description: 'Flat structure' },
        { icon: '🏢', title: 'Enterprise', description: 'Multi-branch' },
        { icon: '🔍', title: 'Search', description: 'Instant lookup' },
    ],
    valuePoints: [
        'Better connectivity within organization',
        'Visualizes reporting hierarchy clearly',
    ],
};

// Slide 9: Consolidated Payroll & Statutory (Enhanced)
export const slidePayroll: SlideData = {
    number: 9,
    title: 'Payroll & Statutory Compliance',
    subtitle: 'Complete payroll processing — Salary calculation, statutory deductions, and payslips',
    screenshot: {
        src: `${SCREENSHOT_BASE}/Payroll-Management.png`,
        alt: 'Payroll Dashboard',
        url: 'www.employeenest.com/tenant/amazon/payroll',
    },
    screenshot2: {
        src: `${SCREENSHOT_BASE}/My-Payslips.png`,
        alt: 'Payslips',
        url: 'Employee Payslips',
    },
    talkingPoints: {
        title: 'Payroll Features',
        items: [
            <><strong>One-Click Processing:</strong> Auto-calculate salaries from attendance</>,
            <><strong>Statutory Compliance:</strong> PF, ESI, Professional Tax, TDS deductions</>,
            <><strong>Payslip Generation:</strong> Auto-generate and distribute PDF slips</>,
            <><strong>Reports & Forecasting:</strong> Monthly summaries, tax reports, salary forecasts</>,
        ],
    },
    extraSection: {
        title: 'Compliance Checklist',
        items: [
            <><strong>PF:</strong> Provident Fund calculations and filing</>,
            <><strong>ESI:</strong> Employee State Insurance deductions</>,
            <><strong>TDS:</strong> Tax Deducted at Source with Form 16</>,
        ],
    },
    flowSteps: [
        { text: 'Attendance' },
        { text: 'Calculate' },
        { text: 'Deductions' },
        { text: 'Publish', active: true },
    ],
    valuePoints: [
        'Eliminates manual calculation errors',
        'Statutory compliance built-in',
        'Self-service payslip access reduces HR queries',
    ],
    reverse: true,
};

export const slidesExtras = [slideEmployees, slidePayroll];
