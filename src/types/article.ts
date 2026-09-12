export type ArticleType =
  | 'report'
  | 'investigation'
  | 'analysis'
  | 'guide'
  | 'field-note'
  | 'document';

export type ArticleCategory =
  | 'rights-power'
  | 'off-grid'
  | 'self-reliance'
  | 'legal-exile'
  | 'surveillance'
  | 'the-docket'
  | 'field-notes'
  | 'from-the-records'
  | 'the-toolbox'
  | 'under-the-radar'
  | 'the-paper-trail'
  | 'know-your-rights'
  | 'outlaw-guides';

export type PublicationStatus =
  | 'draft'
  | 'demo'
  | 'fact-check'
  | 'legal-review'
  | 'scheduled'
  | 'published'
  | 'updated'
  | 'retracted';

export interface Author {
  id: string;
  name: string;
  slug: string;
  title?: string;
  bio?: string;
  avatarUrl?: string;
}

export interface ArticleSource {
  label: string;
  url: string;
  sourceType:
    | 'primary-record'
    | 'government'
    | 'court-record'
    | 'research'
    | 'reporting'
    | 'other';
}

export interface Article {
  id: string;
  slug: string;
  type: ArticleType;
  category: ArticleCategory;
  status: PublicationStatus;
  title: string;
  deck: string;
  author: Author;
  publishedAt: string;
  updatedAt?: string;
  readingTimeMinutes: number;
  heroImage?: string;
  heroImageAlt?: string;
  imageCaption?: string;
  body?: string;
  tags: string[];
  keyPoints?: string[];
  sources?: ArticleSource[];
  relatedArticleIds?: string[];
  featured?: boolean;
  breaking?: boolean;
  mostRead?: boolean;
  documentsIncluded?: boolean;
  documentUrl?: string;
  correction?: {
    correctedAt: string;
    explanation: string;
  };
}
