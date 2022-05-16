import { styled } from '@ratsel/core';

export const Wrapper = styled('div')`
  .ratsel-select .react-select__control.react-select__control--is-focused {
    border: solid ${(props) => props.theme.ratsel.select.borderWidth}
      ${(props) => props.theme.ratsel.select.colors.primary} !important;
    box-shadow: none !important;
  }

  .ratsel-select .react-select__control {
    border-radius: ${(props) => props.theme.ratsel.select.borderRadius};
    background-color: ${(props) => props.theme.ratsel.select.colors.background};
    border: solid ${(props) => props.theme.ratsel.select.borderWidth}
      ${(props) => props.theme.ratsel.select.colors.border};
    color: ${(props) => props.theme.ratsel.select.colors.base};
    font-size: 13px;
    line-height: 1.43;
    text-align: left;
    /* padding: 3px 6px 3px 3px; */
    font-family: ${(props) => props.theme.ratsel.fonts.main};
    outline: none;
    cursor: pointer;
  }

  .ratsel-select .react-select__input {
    z-index: 1;
  }

  .ratsel-select .react-select__placeholder,
  .ratsel-select .react-select__single-value,
  .ratsel-select .react-select__value {
    line-height: 43px !important;
  }

  .ratsel-select .react-select__value .react-select__value-label {
    font-size: 13px;
    line-height: 1.43;
    text-align: left;
    color: ${(props) => props.theme.ratsel.select.colors.base};
    overflow: hidden;
    text-overflow: ellipsis;
    font-family: ${(props) => props.theme.ratsel.fonts.main};
  }

  .ratsel-select .react-select__indicator-separator {
    display: none !important;
  }

  .ratsel-select .Select-arrow-zone {
    padding: 0 !important;
  }

  .ratsel-select .react-select__dropdown-indicator {
    color: ${(props) => props.theme.ratsel.select.colors.base};
  }

  .ratsel-select
    .react-select__control--menu-is-open
    .react-select__dropdown-indicator {
    color: ${(props) => props.theme.ratsel.select.colors.primary};
  }

  .ratsel-select
    .react-select__control--menu-is-open
    .react-select__dropdown-indicator
    > svg {
    transform: rotate(180deg);
  }

  .ratsel-select .react-select__menu {
    margin-top: 0;
    overflow: hidden;
    box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.08);
    z-index: 10;
  }

  .ratsel-select .react-select__option {
    padding: 13px 12px !important;
    font-size: 14px !important;
    line-height: 1.43 !important;
    font-family: ${(props) => props.theme.ratsel.fonts.main};
  }

  .ratsel-select .react-select__option.react-select__option--is-focused {
    background-color: ${(props) =>
      props.theme.ratsel.select.colors.hover} !important;
    color: ${(props) => props.theme.ratsel.select.colors.base} !important;
  }

  .ratsel-select .react-select__option.react-select__option--is-selected {
    background-color: #f0f0ff !important;
    color: ${(props) => props.theme.ratsel.select.colors.primary} !important;
  }

  .ratsel-select.react-select__control--is-focused > .react-select__control {
    border-color: ${(props) => props.theme.ratsel.select.colors.border};
    box-shadow: none !important;
  }

  .ratsel-select.has-error .react-select__control {
    border-color: ${(props) =>
      props.theme.ratsel.select.colors.error} !important;
    color: ${(props) => props.theme.ratsel.select.colors.error} !important;
  }

  .ratsel-select.has-error .react-select__control {
    border-color: ${(props) =>
      props.theme.ratsel.select.colors.error} !important;
  }

  .ratsel-select .react-select__clear {
    font-size: 22px !important;
  }

  .ratsel-select .react-select__control--is-disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  .react-select__control {
    line-height: 34px !important;
  }
  .react-select__value-container {
    padding: 2px 11px 1px;
  }
`;
