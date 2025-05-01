// Define shared types for the application
export interface Statistic {
  id: number;
  value: string | number;
  label: string;
  description: string;
}

export interface Myth {
  id: number;
  myth: string;
  fact: string;
}

export interface Resource {
  id: number;
  title: string;
  description: string;
  link: string;
  icon: string;
}

export interface Scenario {
  id: number;
  situation: string;
  options: {
    id: string;
    text: string;
    consequence: string;
    isRecommended: boolean;
  }[];
}

export interface Story {
  id: number;
  title: string;
  perspective: 'victim' | 'bystander' | 'perpetrator';
  content: string;
  outcome: string;
  trigger?: string;
}

export interface Platform {
  id: number;
  name: string;
  icon: string;
  reportingSteps: string[];
}

export interface SupportMessage {
  id: number;
  message: string;
  author: string;
}