import { ReactNode } from 'react';

export type DynamicBorderRadiusProps = {
  topLeftRadius?: string;
  topRightRadius?: string;
  bottomLeftRadius?: string;
  bottomRightRadius?: string;
};

export type FeatureItem = {
  color: string;
  icon: ReactNode;
  title: string;
  content: string;
};
