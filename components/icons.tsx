import React from 'react';
import * as Icons from 'react-feather';
import type { IconProps as FeatherIconProps } from 'react-feather';
import { type IconName } from '../types';

type IconProps = {
  name: IconName;
} & FeatherIconProps;

/**
 * Renders an icon from react-feather.
 */
export const Icon = ({ name, ...props }: IconProps) => {
  // The 'HelpCircle' icon is used as a fallback for any icon name that might not be found.
  const IconComponent = Icons[name] || Icons['HelpCircle'];
  return <IconComponent {...props} />;
};
