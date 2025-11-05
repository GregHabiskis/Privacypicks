import { jsx } from "react/jsx-runtime";
import * as Icons from 'react-feather';

export const Icon = ({ name, ...props }) => {
  const IconComponent = Icons[name] || Icons['HelpCircle'];
  return jsx(IconComponent, { ...props });
};
