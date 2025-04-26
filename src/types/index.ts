export type ThemeConfig = {
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
  backgroundColor: string;
  backgroundGradient: string;
  darkModeDefault: boolean;
};

export type SocialLink = {
  platform: string;
  url: string;
  icon: string;
};

export type SEOConfig = {
  siteTitle: string;
  siteDescription: string;
  siteKeywords: string[];
};

export type MicroblogConfig = {
  maxWordLimit: number;
  enableTags: boolean;
  dateFormat: string;
};

export type Project = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  technologies: string[];
  liveUrl?: string;
  repoUrl?: string;
};

export type Skill = {
  name: string;
  level: number; // 0-100
  category: string;
};

export type BlogPost = {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  tags: string[];
  imageUrl?: string;
};

export type PersonalInfo = {
  name: string;
  jobTitle: string;
  shortBio: string;
  fullBio: string;
  avatarUrl: string;
  resumeLink: string;
  email: string;
  location: string;
  socialLinks: SocialLink[];
};

export type Config = {
  personalInfo: PersonalInfo;
  theme: ThemeConfig;
  microblog: MicroblogConfig;
  seo: SEOConfig;
  skills: Skill[];
  projects: Project[];
  blogPosts: BlogPost[];
};