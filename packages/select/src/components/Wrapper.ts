/* eslint-disable max-len */
import { styled } from '@ratsel/core';

export const Wrapper = styled('div')`
  .ratsel-select .react-select__control.react-select__control--is-focused {
    border: solid 1px #7070ff !important;
    box-shadow: none !important;
  }

  .ratsel-select .react-select__control {
    border-radius: 8px;
    background-color: #fff;
    border: solid 1px #e3e3e3;
    color: #4a4a4a;
    font-family: 'Gotham Pro', Helvetica, Arial;
    font-size: 13px;
    line-height: 1.43;
    text-align: left;
    /* padding: 3px 6px 3px 3px; */
    outline: none;
    cursor: pointer;
  }

  .ratsel-select .react-select__placeholder,
  .ratsel-select .react-select__value {
    line-height: 43px !important;
  }

  .ratsel-select .react-select__value .react-select__value-label {
    font-size: 13px;
    line-height: 1.43;
    text-align: left;
    color: #4a4a4a;
    font-family: 'Gotham Pro', Helvetica, Arial;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .ratsel-select .react-select__indicator-separator {
    display: none !important;
  }

  .ratsel-select .Select-arrow {
    border-color: rgb(112, 112, 255) transparent transparent !important;
  }

  .ratsel-select.is-open .Select-arrow {
    border-color: transparent transparent rgb(112, 112, 255) !important;
  }

  .ratsel-select .Select-arrow-zone {
    padding: 0 !important;
  }

  .ratsel-select .react-select__menu {
    margin-top: 0;
    overflow: hidden;
    box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.08);
  }

  .ratsel-select .react-select__option {
    padding: 13px 12px !important;
    font-size: 14px !important;
    line-height: 1.43 !important;
    font-family: 'Gotham Pro', Helvetica, Arial;
  }

  .ratsel-select .react-select__option.react-select__option--is-focused {
    background-color: #eff4fa !important;
    color: #4a4a4a !important;
  }

  .ratsel-select .react-select__option.react-select__option--is-selected {
    background-color: #f0f0ff !important;
    color: #7070ff !important;
  }

  .ratsel-select.react-select__control--is-focused > .react-select__control {
    border-color: #B3B3B3;
    box-shadow: none !important;
  }

  .ratsel-select.has-error .react-select__control {
    border-color: #da4c5a !important;
    color: #da4c5a !important;
  }

  .ratsel-select.has-error .react-select__control {
    border-color: #da4c5a !important;
  }

  .ratsel-select .react-select__clear {
    font-size: 22px !important;
  }

  .ratsel-select .react-select__control--is-disabled {
    opacity: .5;
    cursor: not-allowed;
  }
  .react-select__control {
    line-height: 34px !important;
  }
`;
