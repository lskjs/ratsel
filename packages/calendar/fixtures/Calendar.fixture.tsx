import React from 'react';

import { Calendar } from '../src';

export default {
  default: <Calendar />,
  small: <Calendar size="small" />,
  'small-with-year-arrows': <Calendar size="small" yearArrows />,
  'small-select-range': <Calendar size="small" selectRange />,
  'select-range': <Calendar selectRange />,
  'year-arrows': <Calendar yearArrows />,
  'no-navigation': <Calendar showNavigation={false} />,
  english: <Calendar locale="en" />,
};
