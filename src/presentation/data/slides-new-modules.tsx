import type { SlideData } from '../components/Slide';

const SCREENSHOT_BASE = '/presentation/screenshots';

// Slide: Recruitment - Job Portal Features
export const slideRecruitment: SlideData = {
    number: 7,
    title: 'Recruitment & Job Portal',
    subtitle: 'End-to-end hiring workflow — From job posting to offer management',
    screenshot: {
        src: `${SCREENSHOT_BASE}/recruitment-portal.png`,
        alt: 'Recruitment Portal',
        url: 'www.employeenest.com/tenant/amazon/recruitment',
    },
    talkingPoints: {
        title: 'Key Features',
        items: [
            <><strong>Job Posting:</strong> Create and publish job listings similar to Indeed/Naukri</>,
            <><strong>Applicant Tracking:</strong> Track candidates through hiring pipeline</>,
            <><strong>Resume Parsing:</strong> Auto-extract candidate details from uploaded resumes</>,
            <><strong>Interview Scheduling:</strong> Coordinate interviews with calendar integration</>,
            <><strong>Offer Management:</strong> Generate and track offer letters</>,
        ],
    },

    valuePoints: [
        'Eliminates manual recruitment tracking spreadsheets',
        'Faster time-to-hire with streamlined workflow',
        'Better candidate experience with organized process',
    ],
};

// Slide: Training - Induction, Orientation, Department Training
export const slideTraining: SlideData = {
    number: 8,
    title: 'Training & Development',
    subtitle: 'Structured learning pathways — Induction, orientation, and skill development',
    screenshot: {
        src: `${SCREENSHOT_BASE}/training-module.png`,
        alt: 'Training Module',
        url: 'www.employeenest.com/tenant/amazon/training',
    },
    talkingPoints: {
        title: 'Training Types',
        items: [
            <><strong>Induction Training:</strong> Day-one essentials for new joiners</>,
            <><strong>Orientation Program:</strong> Company culture, policies, and team introductions</>,
            <><strong>Department Training:</strong> Role-specific skill development</>,
            <><strong>Compliance Training:</strong> Mandatory certifications and safety modules</>,
        ],
    },
    features: [
        { icon: '📚', title: 'Induction', description: 'New joiner essentials' },
        { icon: '🎯', title: 'Orientation', description: 'Culture & policies' },
        { icon: '🛠️', title: 'Dept Training', description: 'Role-specific skills' },
    ],
    valuePoints: [
        'Structured onboarding improves retention',
        'Track training completion and certifications',
        'Consistent knowledge transfer across organization',
    ],
    reverse: true,
};

// Slide: Performance Appraisal - 360° KPI Based
export const slidePerformance: SlideData = {
    number: 10,
    title: 'Performance Appraisal',
    subtitle: '360° KPI-based reviews — Comprehensive performance evaluation system',
    screenshot: {
        src: `${SCREENSHOT_BASE}/performance-appraisal.png`,
        alt: 'Performance Appraisal',
        url: 'www.employeenest.com/tenant/amazon/performance',
    },
    talkingPoints: {
        title: 'Review Components',
        items: [
            <><strong>Goal Setting:</strong> Define measurable KPIs and objectives</>,
            <><strong>Self Assessment:</strong> Employee self-evaluation and reflection</>,
            <><strong>Peer Review:</strong> 360° feedback from colleagues</>,
            <><strong>Manager Evaluation:</strong> Supervisor assessment and ratings</>,
            <><strong>Final Rating:</strong> Consolidated performance score</>,
        ],
    },

    valuePoints: [
        'Data-driven performance decisions',
        'Fair 360° feedback from multiple sources',
        'Clear growth path visibility for employees',
    ],
};

// Slide: Exit Management - F&F Settlement
export const slideExit: SlideData = {
    number: 11,
    title: 'Exit Management',
    subtitle: 'Full & Final Settlement — Streamlined offboarding and clearance',
    screenshot: {
        src: `${SCREENSHOT_BASE}/exit-management.png`,
        alt: 'Exit Management',
        url: 'www.employeenest.com/tenant/amazon/exit',
    },
    talkingPoints: {
        title: 'Exit Workflow',
        items: [
            <><strong>Resignation Submission:</strong> Employee initiates exit request</>,
            <><strong>Exit Interview:</strong> Capture feedback and reasons for leaving</>,
            <><strong>Clearance Workflow:</strong> Department-wise asset and access clearance</>,
            <><strong>F&F Calculation:</strong> Auto-calculate final dues, pending leaves, gratuity</>,
            <><strong>Document Handover:</strong> Experience letter and relieving documents</>,
        ],
    },

    valuePoints: [
        'Ensures no pending dues or clearances missed',
        'Professional exit experience maintains employer brand',
        'Complete audit trail for compliance',
    ],
    reverse: true,
};

export const slidesNewModules = [slideRecruitment, slideTraining, slidePerformance, slideExit];
