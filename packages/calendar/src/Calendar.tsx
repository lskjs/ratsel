import React, { FC } from 'react';
import BaseCalendar, {
  CalendarProps as BaseCalendarProps,
} from 'react-calendar';

import { ChevronIcon } from './components/ChevronIcon';
import { DoubleChevronIcon } from './components/DoubleChevronIcon';
import { Wrapper, WrapperProps } from './components/Wrapper';
import { capitalizeFirstLetter } from './utils/capitalizeFirstLetter';

export interface CalendarProps extends WrapperProps, BaseCalendarProps {
  yearArrows?: boolean;
}

export const Calendar: FC<CalendarProps> = ({
  size,
  yearArrows,
  locale,
  ...props
}) => (
  <Wrapper size={size}>
    <BaseCalendar
      minDetail="year"
      locale={locale}
      nextLabel={<ChevronIcon />}
      next2Label={yearArrows ? <DoubleChevronIcon /> : null}
      prevLabel={<ChevronIcon reverse />}
      prev2Label={yearArrows ? <DoubleChevronIcon reverse /> : null}
      navigationLabel={({ label }) =>
        capitalizeFirstLetter(label).replace(/ г\./g, '')
      }
      {...props}
    />
  </Wrapper>
);
