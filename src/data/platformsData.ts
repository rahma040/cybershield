import { Platform } from '../types';

export const platformsData: Platform[] = [
  {
    id: 1,
    name: "Instagram",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>`,
    reportingSteps: [
      "Open the profile or post you want to report",
      "Tap the three dots in the top right corner",
      "Select 'Report'",
      "Choose 'It's inappropriate' > 'Bullying or harassment'",
      "Follow the on-screen prompts to complete the report",
      "You can also block the account to prevent further contact"
    ]
  },
  {
    id: 2,
    name: "TikTok",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 12A4 4 0 1 0 9 4 4 4 0 0 0 9 12Z"/><path d="M15 12A4 4 0 1 0 15 20 4 4 0 0 0 15 12Z"/><line x1="15" y1="8" x2="9" y2="16"/></svg>`,
    reportingSteps: [
      "Long-press on the video",
      "Tap 'Report'",
      "Select 'Harassment or Bullying'",
      "Choose the specific type of bullying",
      "Add any additional details",
      "Submit your report",
      "You can also report comments by long-pressing on the comment"
    ]
  },
  {
    id: 3,
    name: "Facebook",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>`,
    reportingSteps: [
      "Click the three dots at the top right of the post or profile",
      "Select 'Find Support or Report'",
      "Choose 'Bullying or Harassment'",
      "Select who is being bullied (you, someone else, etc.)",
      "Follow the prompts to complete your report",
      "You can also use the Support Inbox to track your reports"
    ]
  },
  {
    id: 4,
    name: "Twitter/X",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>`,
    reportingSteps: [
      "Click the three dots at the top right of the tweet or profile",
      "Select 'Report'",
      "Choose 'It's abusive or harmful'",
      "Select 'Disrespectful or offensive'",
      "Choose who it's directed at",
      "Add tweets to your report",
      "Submit the report"
    ]
  },
  {
    id: 5,
    name: "YouTube",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>`,
    reportingSteps: [
      "Click the three dots below the video",
      "Select 'Report'",
      "Choose 'Harassment or bullying'",
      "Select who is being harassed",
      "Provide additional details",
      "Submit the report",
      "For comments, click the three dots next to the comment and select 'Report'"
    ]
  }
];