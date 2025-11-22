import React from 'react';

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export interface FeatureProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface TeamMember {
  role: string;
  description: string;
}

export enum WasteType {
  Acidic = "Acidic",
  Basic = "Basic",
  Organic = "Organic Solvent",
  Toxic = "Toxic",
}