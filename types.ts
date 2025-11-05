import { type Icon as FeatherIcon } from 'react-feather';

// Dynamically create a union type of all feather icon names
export type IconName = keyof typeof import('react-feather');

export type SourceType = 'website' | 'github' | 'playstore' | 'fdroid' | 'chrome' | 'firefox' | 'appstore';

export interface SourceLink {
  type: SourceType;
  url: string;
}

export interface ResourceLink {
  name: string;
  sources: SourceLink[];
  imgId: number;
  description: string;
  tags: string[];
  customIcon?: string;
}

export interface ResourceSubCategory {
  id: string;
  title: string;
  icon: IconName;
  links: ResourceLink[];
}

export interface ResourceCategory {
  id: string;
  title: string;
  icon: IconName;
  subCategories: ResourceSubCategory[];
}

export type Theme = 'light' | 'dark';