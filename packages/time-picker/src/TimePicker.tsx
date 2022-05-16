import { ClassNames, Theme } from '@ratsel/core';
import { Moment } from 'moment';
import RcTimePicker, {
  TimePickerProps as RcTimePickerProps,
} from 'rc-time-picker';
import React, { FC, useEffect, useState } from 'react';

import { base, popup } from './components/baseStyles';
import { IconButton } from './components/IconButton';
import { ClockIcon } from './icons/ClockIcon';
import { CloseIcon } from './icons/CloseIcon';
import { convertDateToMoment } from './utils/convertDateToMoment';
import { updatePanelPosition } from './utils/updatePanelPosition';

export interface TimePickerProps
  extends Omit<RcTimePickerProps, 'onChange' | 'value' | 'defaultValue'> {
  submitOnClose?: boolean;
  clearable?: boolean;
  onChange?: (newValue: Date | undefined) => void;
  value?: Date | Moment;
  defaultValue?: Date | Moment;
  withPositionUpdater?: boolean;
}

interface CloseParams {
  open: false;
}

export const TimePicker: FC<TimePickerProps> = ({
  defaultValue,
  value: propValue,
  onChange,
  onClose,
  submitOnClose,
  clearable,
  focusOnOpen,
  withPositionUpdater,
  ...props
}) => {
  const [value, setValue] = useState<Moment | undefined>(() => {
    const _val = convertDateToMoment(value || defaultValue);
    return _val;
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      document
        .querySelector('.ratsel-tp-input')
        ?.setAttribute('readonly', 'true');
    }
  }, []);

  useEffect(() => {
    if (!defaultValue) {
      setValue(convertDateToMoment(propValue));
    }
  }, [propValue]);

  const handleChange = (newValue: Moment) => {
    if (withPositionUpdater) {
      updatePanelPosition(true);
    }
    setValue(newValue);
    if (!submitOnClose && onChange) onChange(newValue?.toDate());
  };

  const handleClose = (newState: CloseParams) => {
    if (onClose) onClose(newState);
    if (submitOnClose && onChange && value) onChange(value.toDate());
  };

  const handleOpen = () => {
    if (withPositionUpdater) {
      updatePanelPosition();
    }
    if (focusOnOpen) {
      setTimeout(() => {
        document
          .querySelector<HTMLInputElement>('.ratsel-tp-panel-input')
          ?.focus();
      }, 0);
    }
  };

  const handleClear = () => {
    setValue(undefined);
  };

  return (
    <ClassNames>
      {({ css, theme }) => (
        <RcTimePicker
          showSecond={false}
          {...props}
          value={value}
          onChange={handleChange}
          onOpen={handleOpen}
          onClose={handleClose}
          prefixCls="ratsel-tp"
          focusOnOpen={focusOnOpen}
          className={css(base(theme as Theme))}
          popupClassName={css(popup(theme as Theme))}
          inputIcon={
            <IconButton as="span" order={2}>
              <ClockIcon />
            </IconButton>
          }
          clearIcon={
            clearable ? (
              <IconButton onClick={handleClear} order={1}>
                <CloseIcon />
              </IconButton>
            ) : null
          }
        />
      )}
    </ClassNames>
  );
};

export default TimePicker;
