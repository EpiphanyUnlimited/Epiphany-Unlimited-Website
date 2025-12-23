import React from 'react';

export interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
  icon: React.ReactNode;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  avatar: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  tagline: string;
  price: string;
  period: string;
  features: string[];
  isFeatured?: boolean;
}

export interface InsightResult {
  strategy: string;
  keyPillars: string[];
  immediateActions: string[];
}