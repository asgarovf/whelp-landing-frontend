import { ReactNode } from 'react';

export type DynamicBorderRadiusProps = {
  topLeftRadius?: string;
  topRightRadius?: string;
  bottomLeftRadius?: string;
  bottomRightRadius?: string;
};

export type FeatureItem = {
  color: 'green' | 'purple' | 'blue' | 'yellow' | 'pink' | 'orange';
  icon: ReactNode;
  title: string;
  content: string;
};
