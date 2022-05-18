import { css, Theme } from '@ratsel/core';

export const base = (theme: Theme) => css`
  display: flex;
  align-items: center;
  box-shadow: inset 0 0 0 1px ${theme.ratsel.timePicker.base.borderColor};
  height: ${theme.ratsel.timePicker.base.height};
  border-radius: ${theme.ratsel.timePicker.base.borderRadius};
  background: ${theme.ratsel.timePicker.base.background};
  gap: ${theme.ratsel.timePicker.base.gap};
  cursor: pointer;
  padding: ${theme.ratsel.timePicker.base.padding};

  .ratsel-tp-input {
    border: none;
    appearance: none;
    -webkit-appearance: none;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    flex: 1;
    background: transparent;
    color: ${theme.ratsel.timePicker.input.color};

    font-family: ${theme.ratsel.fonts.main};
    font-weight: ${theme.ratsel.timePicker.input.fontWeight};
    font-size: ${theme.ratsel.timePicker.input.fontSize};
    line-height: 20px;
    letter-spacing: -0.01em;
    user-select: none;
    cursor: pointer;

    outline: none;
  }
`;

export const popup = (theme: Theme) => css`
  z-index: ${theme.ratsel.timePicker.popup.zIndex};
  position: absolute;
  box-sizing: border-box;
  /* display: none; */

  * {
    box-sizing: border-box;
  }

  .ratsel-tp-panel-inner {
    display: block;
    position: relative;
    outline: none;
    list-style: none;
    text-align: left;
    background-color: ${theme.ratsel.timePicker.popup.background};
    border-radius: ${theme.ratsel.timePicker.base.borderRadius};
    background-clip: padding-box;
    line-height: 1.5;
    box-shadow: inset 0 0 0 1px ${theme.ratsel.timePicker.base.borderColor},
      ${theme.ratsel.timePicker.popup.boxShadow};
  }

  .ratsel-tp-panel-input {
    margin: 0;
    padding: 0;
    width: 100%;
    cursor: auto;
    color: ${theme.ratsel.timePicker.input.color};

    font-family: ${theme.ratsel.fonts.main};
    font-weight: ${theme.ratsel.timePicker.input.fontWeight};
    font-size: ${theme.ratsel.timePicker.input.fontSize};
    line-height: 20px;
    letter-spacing: -0.01em;
    border-radius: ${theme.ratsel.timePicker.base.borderRadius}
      ${theme.ratsel.timePicker.base.borderRadius} 0 0;

    outline: none;
    border: none;
    appearance: none;
    -webkit-appearance: none;
    background: transparent;
    padding: ${theme.ratsel.timePicker.base.padding};
    height: 100%;
    box-shadow: inset 0 0 0 1px transparent;
  }

  .ratsel-tp-panel-input-wrap {
    box-sizing: border-box;
    position: relative;
    height: ${theme.ratsel.timePicker.base.height};
    padding: 0;
    box-shadow: inset 0 -1px 0 ${theme.ratsel.timePicker.base.borderColor};
  }

  .ratsel-tp-panel-input-invalid {
    box-shadow: inset 0 0 0 1px ${theme.ratsel.timePicker.input.errorColor};
  }

  .ratsel-tp-panel-select {
    font-size: 12px;
    border: 1px solid ${theme.ratsel.timePicker.base.borderColor};
    border-width: 0 1px;
    margin-left: -1px;
    box-sizing: border-box;
    max-height: 144px;
    overflow-y: auto;
    position: relative;

    scrollbar-width: thin;
    scrollbar-color: ${theme.ratsel.timePicker.popup.selectHoverBackground} transparent;

    &::-webkit-scrollbar {
      width: 8px;
    }

    &::-webkit-scrollbar-thumb {
      background: ${theme.ratsel.timePicker.popup.selectHoverBackground};
      border: 3px solid ${theme.ratsel.timePicker.popup.background};
    }

    &::-webkit-scrollbar-track {
      background: ${theme.ratsel.timePicker.popup.background};
    }
  }

  .ratsel-tp-panel-combobox {
    display: grid;
    grid-auto-flow: column;
  }

  .ratsel-tp-panel-select-active {
    overflow-y: auto;
  }

  .ratsel-tp-panel-select:first-of-type {
    border-left: 0;
    margin-left: 0;
  }

  .ratsel-tp-panel-select:last-of-type {
    border-right: 0;
  }

  .ratsel-tp-panel-select ul {
    list-style: none;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    width: 100%;
  }

  .ratsel-tp-panel-select li {
    list-style: none;
    margin: 0;
    padding: ${theme.ratsel.timePicker.popup.selectPadding};
    width: 100%;
    height: ${theme.ratsel.timePicker.popup.selectHeight};
    cursor: pointer;
    user-select: none;
    color: ${theme.ratsel.timePicker.popup.selectColor};
    font-family: ${theme.ratsel.fonts.main};
    font-weight: ${theme.ratsel.timePicker.popup.fontWeight};
    font-size: ${theme.ratsel.timePicker.popup.fontSize};
    line-height: 20px;
    letter-spacing: -0.01em;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  li.ratsel-tp-panel-select-option-selected {
    background: ${theme.ratsel.timePicker.popup.selectActiveBackground};
    font-weight: ${theme.ratsel.timePicker.popup.fontActiveWeight};
  }

  .ratsel-tp-panel-select li:hover {
    background: ${theme.ratsel.timePicker.popup.selectHoverBackground};
  }

  li.ratsel-tp-panel-select-option-disabled {
    color: ${theme.ratsel.timePicker.popup.selectDisabledColor};
  }

  li.ratsel-tp-panel-select-option-disabled:hover {
    background: transparent;
    cursor: not-allowed;
  }
`;
