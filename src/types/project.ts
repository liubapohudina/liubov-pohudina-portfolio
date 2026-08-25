export type Language = 'en' | 'uk';

export type LocalizedText = {
  en: string;
  uk: string;
};

export type ProjectProcessStep = {
  title: LocalizedText;
  description: LocalizedText;
};

export type ProjectResult = {
  value: string;
  label: LocalizedText;
  description?: LocalizedText;
};

export type Project = {
  id: number;
  slug: string;

  title: string;

  category: LocalizedText;
  description: LocalizedText;

  technologies: string[];

  image: {
    desktop: string;
    mobile: string;
    alt: LocalizedText;
  };

  details: {
    year: string;

    role: LocalizedText;

    type: LocalizedText;

    overview: LocalizedText;

    challenge?: LocalizedText;

    solution?: LocalizedText;

    process?: ProjectProcessStep[];

    results?: ProjectResult[];

    team?: LocalizedText;
  };

  links?: {
    live?: string;
    github?: string;
    swagger?: string;
    loom?: string;
    notion?: string;
  };

  featured?: boolean;
};
