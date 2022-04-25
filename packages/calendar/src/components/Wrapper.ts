// @ts-nocheck
import { css, make, PropsWithTheme, styled } from '@ratsel/core';

export interface WrapperProps {
  size?: 'small' | 'default';
}

const sizes = {
  small: (props: PropsWithTheme) => css`
    width: 196px;
    min-height: 240px;
    padding: ${props.theme.ratsel.calendar.wrapper.smallPadding};

    .react-calendar {
      button {
        -webkit-appearance: none;
        apperance: none;
        border: none;
        outline: none;
        padding: 0;
        cursor: pointer;
      }

      &__navigation {
        height: ${props.theme.ratsel.calendar.navigation.height};
        margin: ${props.theme.ratsel.calendar.navigation.smallMargin};
        display: flex;
        align-items: center;

        &__label {
          margin: 0;
          height: ${props.theme.ratsel.calendar.navigation.height};
          background: ${props.theme.ratsel.calendar.colors.background};
          flex: 1;

          transition: background 0.1s ease-out;
          will-change: background;
          border-radius: ${props.theme.ratsel.calendar.tile.borderRadius};
          &:disabled {
            cursor: default;
          }
          &:hover:not(:disabled) {
            background: ${props.theme.ratsel.calendar.colors.hoverBackground};
          }

          &__labelText {
            font-style: normal;
            font-weight: ${props.theme.ratsel.calendar.navigation.fontWeight};
            font-size: ${props.theme.ratsel.calendar.navigation.smallFontSize};
            line-height: 14px;
            text-align: center;
            letter-spacing: -0.01em;
            color: ${props.theme.ratsel.calendar.colors.main};
          }
        }

        &__arrow {
          width: ${props.theme.ratsel.calendar.navigation.height};
          height: ${props.theme.ratsel.calendar.navigation.height};
          background: ${props.theme.ratsel.calendar.colors.background};
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;

          transition: background 0.1s ease-out;
          will-change: background;
          border-radius: ${props.theme.ratsel.calendar.tile.borderRadius};
          &:disabled {
            cursor: default;
          }
          &:hover:not(:disabled) {
            background: ${props.theme.ratsel.calendar.colors.hoverBackground};
          }
        }

        &__prev-button,
        &__next-button {
          color: ${props.theme.ratsel.calendar.colors.navArrows};
        }

        &__prev2-button,
        &__next2-button {
          color: ${props.theme.ratsel.calendar.colors.navYearArrows};
          width: calc(${props.theme.ratsel.calendar.navigation.height} / 1.5);
          height: calc(${props.theme.ratsel.calendar.navigation.height} / 1.5);
        }
      }

      &__viewContainer {
        overflow: hidden;
      }

      &__year-view {
        width: calc(100% + 2px);
        &__months__month {
          transition: background 0.1s ease-out;
          will-change: background;
          background: transparent;
          height: 42px;
          margin-top: 6px;
          margin-left: 0;
          margin-right: 0;

          &:nth-of-type(1),
          &:nth-of-type(2),
          &:nth-of-type(3) {
            margin-top: 0;
          }

          &.react-calendar__tile--now abbr {
            color: ${props.theme.ratsel.calendar.colors.primary};
          }

          abbr {
            transition: background 0.1s ease-out, color 0.1s ease-out;
            will-change: background, color;
            width: calc(100% - 8px);
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: ${props.theme.ratsel.calendar.tile.borderRadius};
            text-transform: capitalize;

            font-style: normal;
            font-weight: ${props.theme.ratsel.calendar.tile.fontWeight};
            font-size: ${props.theme.ratsel.calendar.tile.smallFontSize};
            line-height: 14px;
            text-align: center;
            letter-spacing: -0.01em;
            color: ${props.theme.ratsel.calendar.colors.main};
          }

          &:hover abbr {
            background: ${props.theme.ratsel.calendar.colors.hoverBackground};
          }
        }
      }

      &__month-view {
        width: calc(100% + 2px);
        &__weekdays {
          height: ${props.theme.ratsel.calendar.weekdays.smallHeight};
          background: ${props.theme.ratsel.calendar.colors.background};
          &__weekday {
            abbr {
              display: flex;
              align-items: center;
              justify-content: center;
              width: ${props.theme.ratsel.calendar.weekdays.smallHeight};
              height: ${props.theme.ratsel.calendar.weekdays.smallHeight};
              padding: ${props.theme.ratsel.calendar.weekdays.weekdayPadding};
              font-style: normal;
              font-weight: ${props.theme.ratsel.calendar.weekdays.fontWeight};
              font-size: ${props.theme.ratsel.calendar.weekdays.smallFontSize};
              line-height: 14px;
              text-align: center;
              letter-spacing: -0.01em;
              color: ${props.theme.ratsel.calendar.colors.gray};
              text-decoration: none;
              text-transform: capitalize;
            }
          }
        }

        &__days__day {
          transition: background 0.1s ease-out;
          will-change: background;
          height: 24px;
          margin-top: 6px;
          background: transparent;
          margin-left: 0;
          margin-right: 0;

          &.react-calendar__tile--now abbr {
            color: ${props.theme.ratsel.calendar.colors.primary};
          }

          &.react-calendar__tile--range,
          &.react-calendar__tile--range abbr {
            color: ${props.theme.ratsel.calendar.colors.primary};
            background: ${props.theme.ratsel.calendar.colors.tileHighlight};
            border-radius: 0;
          }

          &.react-calendar__tile--range:hover abbr {
            background: ${props.theme.ratsel.calendar.colors.hoverHighlight};
          }

          &:nth-of-type(7n) {
            background: transparent;
          }

          &:nth-of-type(7n),
          &:nth-of-type(7n) abbr {
            border-top-right-radius: ${props.theme.ratsel.calendar.tile
              .borderRadius};
            border-bottom-right-radius: ${props.theme.ratsel.calendar.tile
              .borderRadius};
          }

          &:nth-of-type(7n + 1),
          &:nth-of-type(7n + 1) abbr {
            border-top-left-radius: ${props.theme.ratsel.calendar.tile
              .borderRadius};
            border-bottom-left-radius: ${props.theme.ratsel.calendar.tile
              .borderRadius};
          }

          &.react-calendar__tile--rangeStart,
          &.react-calendar__tile--rangeStart abbr {
            border-top-left-radius: ${props.theme.ratsel.calendar.tile
              .borderRadius};
            border-bottom-left-radius: ${props.theme.ratsel.calendar.tile
              .borderRadius};
          }

          &.react-calendar__tile--rangeEnd {
            background: transparent;
          }

          &.react-calendar__tile--rangeEnd abbr {
            border-top-right-radius: ${props.theme.ratsel.calendar.tile
              .borderRadius};
            border-bottom-right-radius: ${props.theme.ratsel.calendar.tile
              .borderRadius};
          }

          &.react-calendar__tile--rangeBothEnds {
            background: transparent;
            border-radius: ${props.theme.ratsel.calendar.tile.borderRadius};
          }

          &.react-calendar__tile--rangeBothEnds abbr {
            border-radius: ${props.theme.ratsel.calendar.tile.borderRadius};
          }

          abbr {
            transition: background 0.1s ease-out, color 0.1s ease-out;
            will-change: background, color;
            width: 24px;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            background: ${props.theme.ratsel.calendar.colors.background};
            border-radius: ${props.theme.ratsel.calendar.tile.borderRadius};

            font-style: normal;
            font-weight: ${props.theme.ratsel.calendar.tile.fontWeight};
            font-size: ${props.theme.ratsel.calendar.tile.smallFontSize};
            line-height: 14px;
            text-align: center;
            letter-spacing: -0.01em;
            color: ${props.theme.ratsel.calendar.colors.main};
          }

          &--neighboringMonth abbr {
            color: ${props.theme.ratsel.calendar.colors.leftover};
          }

          &:hover abbr {
            background: ${props.theme.ratsel.calendar.colors.hoverBackground};
          }
        }
      }
    }
  `,
  default: (props: PropsWithTheme) => css`
    width: 295px;
    min-height: 324px;
    padding: ${props.theme.ratsel.calendar.wrapper.padding};

    .react-calendar {
      button {
        -webkit-appearance: none;
        apperance: none;
        border: none;
        outline: none;
        padding: 0;
        cursor: pointer;
      }

      &__navigation {
        height: ${props.theme.ratsel.calendar.navigation.height};
        margin: ${props.theme.ratsel.calendar.navigation.margin};
        display: flex;
        align-items: center;

        &__label {
          margin: 0 8px;
          height: ${props.theme.ratsel.calendar.navigation.height};
          background: ${props.theme.ratsel.calendar.colors.background};
          flex: 1;

          transition: background 0.1s ease-out;
          will-change: background;
          border-radius: ${props.theme.ratsel.calendar.tile.borderRadius};
          &:disabled {
            cursor: default;
          }
          &:hover:not(:disabled) {
            background: ${props.theme.ratsel.calendar.colors.hoverBackground};
          }

          &__labelText {
            font-style: normal;
            font-weight: ${props.theme.ratsel.calendar.navigation.fontWeight};
            font-size: ${props.theme.ratsel.calendar.navigation.fontSize};
            line-height: 20px;
            text-align: center;
            letter-spacing: -0.01em;
            color: ${props.theme.ratsel.calendar.colors.main};
          }
        }

        &__arrow {
          width: ${props.theme.ratsel.calendar.navigation.height};
          height: ${props.theme.ratsel.calendar.navigation.height};
          background: ${props.theme.ratsel.calendar.colors.background};
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;

          transition: background 0.1s ease-out;
          will-change: background;
          border-radius: ${props.theme.ratsel.calendar.tile.borderRadius};
          &:disabled {
            cursor: default;
          }
          &:hover:not(:disabled) {
            background: ${props.theme.ratsel.calendar.colors.hoverBackground};
          }
        }

        &__prev-button,
        &__next-button {
          color: ${props.theme.ratsel.calendar.colors.navArrows};
        }

        &__prev2-button,
        &__next2-button {
          color: ${props.theme.ratsel.calendar.colors.navYearArrows};
          width: calc(${props.theme.ratsel.calendar.navigation.height} / 1.5);
          height: calc(${props.theme.ratsel.calendar.navigation.height} / 1.5);
        }
      }

      &__viewContainer {
        overflow: hidden;
      }

      &__year-view {
        width: calc(100% + 8px);
        &__months__month {
          transition: background 0.1s ease-out;
          will-change: background;
          background: transparent;
          height: 54px;
          margin-top: 12px;
          margin-left: 0;
          margin-right: 0;

          &:nth-of-type(1),
          &:nth-of-type(2),
          &:nth-of-type(3) {
            margin-top: 0;
          }

          &.react-calendar__tile--now abbr {
            color: ${props.theme.ratsel.calendar.colors.primary};
          }

          abbr {
            transition: background 0.1s ease-out, color 0.1s ease-out;
            will-change: background, color;
            width: calc(100% - 8px);
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: ${props.theme.ratsel.calendar.tile.borderRadius};
            text-transform: capitalize;

            font-style: normal;
            font-weight: ${props.theme.ratsel.calendar.tile.fontWeight};
            font-size: ${props.theme.ratsel.calendar.tile.fontSize};
            line-height: 20px;
            text-align: center;
            letter-spacing: -0.01em;
            color: ${props.theme.ratsel.calendar.colors.main};
          }

          &:hover abbr {
            background: ${props.theme.ratsel.calendar.colors.hoverBackground};
          }
        }
      }

      &__month-view {
        width: calc(100% + 8px);
        &__weekdays {
          height: ${props.theme.ratsel.calendar.weekdays.height};
          background: ${props.theme.ratsel.calendar.colors.background};
          &__weekday {
            abbr {
              display: flex;
              align-items: center;
              justify-content: center;
              width: ${props.theme.ratsel.calendar.weekdays.height};
              height: ${props.theme.ratsel.calendar.weekdays.height};
              padding: ${props.theme.ratsel.calendar.weekdays.weekdayPadding};
              font-style: normal;
              font-weight: ${props.theme.ratsel.calendar.weekdays.fontWeight};
              font-size: ${props.theme.ratsel.calendar.weekdays.fontSize};
              line-height: 20px;
              text-align: center;
              letter-spacing: -0.01em;
              color: ${props.theme.ratsel.calendar.colors.gray};
              text-decoration: none;
              text-transform: capitalize;
            }
          }
        }

        &__days__day {
          transition: background 0.1s ease-out;
          will-change: background;
          height: 32px;
          margin-top: 12px;
          background: transparent;
          margin-left: 0;
          margin-right: 0;

          &.react-calendar__tile--now abbr {
            color: ${props.theme.ratsel.calendar.colors.primary};
          }

          &.react-calendar__tile--range,
          &.react-calendar__tile--range abbr {
            color: ${props.theme.ratsel.calendar.colors.primary};
            background: ${props.theme.ratsel.calendar.colors.tileHighlight};
            border-radius: 0;
          }

          &.react-calendar__tile--range:hover abbr {
            background: ${props.theme.ratsel.calendar.colors.hoverHighlight};
          }

          &:nth-of-type(7n) {
            background: transparent;
          }

          &:nth-of-type(7n),
          &:nth-of-type(7n) abbr {
            border-top-right-radius: ${props.theme.ratsel.calendar.tile
              .borderRadius};
            border-bottom-right-radius: ${props.theme.ratsel.calendar.tile
              .borderRadius};
          }

          &:nth-of-type(7n + 1),
          &:nth-of-type(7n + 1) abbr {
            border-top-left-radius: ${props.theme.ratsel.calendar.tile
              .borderRadius};
            border-bottom-left-radius: ${props.theme.ratsel.calendar.tile
              .borderRadius};
          }

          &.react-calendar__tile--rangeStart,
          &.react-calendar__tile--rangeStart abbr {
            border-top-left-radius: ${props.theme.ratsel.calendar.tile
              .borderRadius};
            border-bottom-left-radius: ${props.theme.ratsel.calendar.tile
              .borderRadius};
          }

          &.react-calendar__tile--rangeEnd {
            background: transparent;
          }

          &.react-calendar__tile--rangeEnd abbr {
            border-top-right-radius: ${props.theme.ratsel.calendar.tile
              .borderRadius};
            border-bottom-right-radius: ${props.theme.ratsel.calendar.tile
              .borderRadius};
          }

          &.react-calendar__tile--rangeBothEnds {
            background: transparent;
            border-radius: ${props.theme.ratsel.calendar.tile.borderRadius};
          }

          &.react-calendar__tile--rangeBothEnds abbr {
            border-radius: ${props.theme.ratsel.calendar.tile.borderRadius};
          }

          abbr {
            transition: background 0.1s ease-out, color 0.1s ease-out;
            will-change: background, color;
            width: 32px;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            background: ${props.theme.ratsel.calendar.colors.background};
            border-radius: ${props.theme.ratsel.calendar.tile.borderRadius};

            font-style: normal;
            font-weight: ${props.theme.ratsel.calendar.tile.fontWeight};
            font-size: ${props.theme.ratsel.calendar.tile.fontSize};
            line-height: 20px;
            text-align: center;
            letter-spacing: -0.01em;
            color: ${props.theme.ratsel.calendar.colors.main};
          }

          &--neighboringMonth abbr {
            color: ${props.theme.ratsel.calendar.colors.leftover};
          }

          &:hover abbr {
            background: ${props.theme.ratsel.calendar.colors.hoverBackground};
          }
        }
      }
    }
  `,
};

export const Wrapper = styled('div', {
  shouldForwardProp: (prop) => !['size'].includes(prop as string),
})<WrapperProps>`
  font-family: ${(props) => props.theme.ratsel.fonts.main};
  ${(props) => make(sizes, props.size, 'default')}
`;
