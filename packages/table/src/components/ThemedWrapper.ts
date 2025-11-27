/* eslint-disable max-len */
import { styled } from '@ratsel/core';

export const ThemedWrapper = styled('div')`
  .ka-icon-tree-arrow-collapsed:before {
    content: '\\e800';
  }

  .ka-icon-group-arrow-collapsed:before {
    content: '\\e800';
  }

  .ka-icon-close:before {
    content: '\\e801';
  }

  .ka-icon-tree-arrow-expanded:before {
    content: '\\e802';
  }

  .ka-icon-group-arrow-expanded:before {
    content: '\\e802';
  }

  .ka-icon-sort-arrow-down:before {
    content: '\\e803';
  }

  .ka-icon-sort-arrow-up:before {
    content: '\\e804';
  }

  .ka-icon-filter:before {
    content: '\\e805';
  }

  .ka {
    background-color: white;
    font-size: 14px;
    display: flex;
    flex-direction: column;
    font-family: ${(props) => props.theme.ratsel.fonts.main};
  }

  .ka-table-wrapper {
    height: 100%;
    width: 100%;
  }

  .ka-table {
    width: 100%;
    table-layout: fixed;
    border-collapse: collapse;
  }

  .ka-thead-background {
    background-color: ${(props) => props.theme.ratsel.table.head.background};
  }

  .ka-thead-cell-height {
    box-sizing: border-box;
    height: ${(props) => props.theme.ratsel.table.head.height};
  }

  .ka-thead-fixed {
    position: sticky;
    z-index: 2;
  }

  .ka-thead-row:nth-of-type(1) .ka-thead-fixed {
    top: 0px;
  }

  .ka-thead-row:nth-of-type(2) .ka-thead-fixed {
    top: ${(props) => props.theme.ratsel.table.head.height};
  }

  .ka-thead-row:nth-of-type(3) .ka-thead-fixed {
    top: calc(${(props) => props.theme.ratsel.table.head.height} * 2);
  }

  .ka-thead-row:nth-of-type(4) .ka-thead-fixed {
    top: calc(${(props) => props.theme.ratsel.table.head.height} * 3);
  }

  .ka-thead-row:nth-of-type(5) .ka-thead-fixed {
    top: calc(${(props) => props.theme.ratsel.table.head.height} * 4);
  }

  .ka-thead-row:nth-of-type(6) .ka-thead-fixed {
    top: calc(${(props) => props.theme.ratsel.table.head.height} * 5);
  }

  .ka-thead-cell {
    padding: ${(props) => props.theme.ratsel.table.head.padding};
    color: ${(props) => props.theme.ratsel.table.head.color};
    font-weight: ${(props) => props.theme.ratsel.table.head.fontWeight};
    font-size: ${(props) => props.theme.ratsel.table.head.fontSize};
    box-shadow: inset 0 -${(props) => props.theme.ratsel.table.borderWidth} 0 0 ${(props) => props.theme.ratsel.table.borderColor};
  }

  .ka-thead-cell-wrapper {
    display: flex;
    align-items: center;
  }

  .ka-thead-cell-content-wrapper {
    width: 100%;
  }

  .ka-thead-cell-content {
    width: 100%;
  }

  .ka-tbody {
    height: 100%;
  }

  .ka-thead-cell,
  .ka-cell {
    text-align: left;
  }

  .ka-cell {
    padding: ${(props) => props.theme.ratsel.table.body.padding};
    line-height: ${(props) => props.theme.ratsel.table.body.lineHeight};
    color: ${(props) => props.theme.ratsel.table.body.color};
    font-size: ${(props) => props.theme.ratsel.table.body.fontSize};
    font-weight: ${(props) => props.theme.ratsel.table.body.fontWeight};
    height: ${(props) => props.theme.ratsel.table.body.height};
  }

  .ka-cell-text {
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .ka-tree-cell {
    display: flex;
  }

  .ka-icon {
    font-weight: 100;
    font-size: 10px;
    font-family: 'icons';
  }

  .ka-input {
    max-width: 100%;
    border-width: ${(props) => props.theme.ratsel.table.borderWidth};
    border-style: solid;
  }

  .ka-cell-editor-validation-error .ka-input {
    border-width: ${(props) => props.theme.ratsel.table.borderWidth};
    border-style: solid;
    border-color: ${(props) => props.theme.ratsel.table.errorColor};
  }

  .ka-validation-message-container {
    position: absolute;
  }

  .ka-validation-message {
    font-size: 12px;
    color: white;
    background-color: ${(props) => props.theme.ratsel.table.errorColor};
    padding: 0 10px;
    max-width: 200px;
  }

  .ka-empty-cell {
    width: 40px;
    min-width: 40px;
  }

  .ka-tree-empty-space {
    width: 20px;
  }

  .ka-tr {
    width: 100%;
  }

  .ka-no-data-row {
    height: 100px;
    text-align: center;
  }

  .ka-row {
    box-sizing: border-box;
    border-top-width: ${(props) => props.theme.ratsel.table.borderWidth};
    border-top-style: solid;
    border-top-color: ${(props) => props.theme.ratsel.table.borderColor};
    border-bottom-width: ${(props) => props.theme.ratsel.table.borderWidth};
    border-bottom-style: solid;
    border-bottom-color: ${(props) => props.theme.ratsel.table.borderColor};
  }

  .ka-row:first-of-type {
    border-top: none;
  }

  .ka-thead-row > .ka-thead-cell:first-of-type,
  .ka-row > .ka-cell:first-of-type,
  .ka-summary-row > .ka-summary-cell:first-of-type {
    padding-left: ${(props) => props.theme.ratsel.table.firstLeftPadding};
  }

  .ka-dragged-row {
    opacity: 0.5;
  }

  .ka-drag-over-row {
    box-shadow: inset 0 7px 0px -4px #e1ebf0;
  }

  .ka-dragged-row ~ .ka-drag-over-row {
    box-shadow: inset 0 -7px 0px -4px #e1ebf0;
  }

  .ka-drag-over-column {
    box-shadow: inset 7px 0 0px -4px #e1ebf0;
  }

  .ka-dragged-column ~ .ka-drag-over-column {
    box-shadow: inset -7px 0 0px -4px #e1ebf0;
  }

  .ka-row-selected {
    background-color: #f7fcfd;
  }

  .ka-group-row {
    background-color: ${(props) => props.theme.ratsel.table.head.background};
    box-sizing: border-box;
    border-top-width: ${(props) => props.theme.ratsel.table.borderWidth};
    border-top-style: solid;
    border-top-color: white;
    border-bottom-width: ${(props) => props.theme.ratsel.table.borderWidth};
    border-bottom-style: solid;
    border-bottom-color: white;
  }

  .ka-group-cell {
    padding: 8px 10px;
  }

  .ka-group-cell-content {
    display: flex;
    align-items: center;
  }

  .ka-icon-group-arrow {
    padding: 10px 5px 10px 10px;
    margin-right: 5px;
    cursor: pointer;
  }

  .ka-icon-tree-arrow {
    padding: 0 10px 0 10px;
    margin-left: -10px;
    cursor: pointer;
  }

  .ka-icon-sort {
    margin-left: 3px;
  }

  .ka-pointer {
    cursor: pointer;
  }

  .ka-filter-row-cell {
    padding: 0 20px 15px 20px;
  }

  .ka-loading {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: #ffffff88;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .ka-loading-active {
    position: relative;
  }

  .ka-loading-icon {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    /* animation: $typing 1s linear infinite alternate; */
    position: relative;
    left: -20px;
  }

  .ka-thead-cell-resize {
    user-select: none;
    width: 5px;
    cursor: col-resize;
    background-color: ${(props) => props.theme.ratsel.table.borderColor};
    position: relative;
    left: 10px;
    z-index: 3;
    height: 24px;
    opacity: 0;
    transition: opacity 0.2s ease-out;
  }

  .ka-thead-row:hover .ka-thead-cell-resize {
    opacity: 1;
  }

  .ka-thead-cell-resize:active:after {
    content: '';
    display: block;
    position: fixed;
    cursor: col-resize;
    z-index: 2;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .ka-thead-background:active {
    z-index: 1;
  }

  .ka-summary-cell {
    padding: ${(props) => props.theme.ratsel.table.summary.padding};
    height: ${(props) => props.theme.ratsel.table.summary.height};
    line-height: ${(props) => props.theme.ratsel.table.summary.lineHeight};
    color: ${(props) => props.theme.ratsel.table.summary.color};
    font-size: ${(props) => props.theme.ratsel.table.summary.fontSize};
    font-weight: ${(props) => props.theme.ratsel.table.summary.fontWeight};
  }

  .ka-loading-text {
    margin-top: 15px;
    color: #353c44;
  }

  .ka-paging-sizes-active {
    display: flex;
    justify-content: space-between;
  }

  .ka-paging-pages,
  .ka-paging-sizes {
    list-style: none;
    display: flex;
    flex-direction: row;
    padding: 0 10px;
    margin: 0;
  }

  .ka-paging-pages {
    justify-content: flex-end;
  }

  .ka-paging-page-index,
  .ka-paging-size {
    cursor: pointer;
    padding: 5px;
    margin: 10px 5px;
    min-width: 18px;
    border-radius: 50%;
    text-align: center;
    color: #747d86;
    user-select: none;
  }

  .ka-paging-page-index-active,
  .ka-paging-size-active {
    background-color: #f1f5f7;
    font-weight: bold;
    color: #747d86;
  }

  .ka-popup {
    background-color: white;
    border: 1px solid #ddd;
    border-radius: 6px;
    box-sizing: border-box;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.18);
    color: #747d86;
    padding: 15px 20px;
    position: absolute;
    text-align: center;
    width: 245px;
    max-height: 325px;
    overflow-y: auto;
    z-index: 1000;
  }

  .ka-popup-content-item {
    display: flex;
    align-items: center;
    border-bottom: 1px solid #f9fbfc;
  }

  .ka-popup-content-item-value {
    padding: 8px 20px;
  }

  .ka-header-filter-button {
    font-size: 16px;
    margin-left: 3px;
  }

  .ka-header-filter-button-has-value {
    font-weight: bold;
  }

  .ka-row {
    background-color: ${(props) => props.theme.ratsel.table.body.background};
  }

  .ka-summary-row {
    background-color: ${(props) => props.theme.ratsel.table.summary.background};
  }

  .sticky-row-bottom {
    bottom: 0;
    position: sticky;
    z-index: 40;
    box-shadow: inset 0 ${(props) => props.theme.ratsel.table.borderWidth} 0 0
      ${(props) => props.theme.ratsel.table.borderColor};
  }

  .sticky-cell-left {
    left: var(--sticky-offset, 0);
    position: sticky;
    box-shadow: inset -${(props) => props.theme.ratsel.table.borderWidth} 0 0 0 ${(props) => props.theme.ratsel.table.borderColor};
    z-index: 20;
  }

  .sticky-cell-right {
    right: var(--sticky-offset, 0);
    position: sticky;
    box-shadow: inset ${(props) => props.theme.ratsel.table.borderWidth} 0 0 0
      ${(props) => props.theme.ratsel.table.borderColor};
    z-index: 20;
  }

  .sticky-cell-right.sticky-cell-thead {
    box-shadow: inset ${(props) => props.theme.ratsel.table.borderWidth} -${(props) =>
        props.theme.ratsel.table.borderWidth} 0 0 ${(props) => props.theme.ratsel.table.borderColor};
  }

  .sticky-cell-left.sticky-cell-thead {
    box-shadow: inset -${(props) => props.theme.ratsel.table.borderWidth} -${(props) =>
        props.theme.ratsel.table.borderWidth}
      0 0 ${(props) => props.theme.ratsel.table.borderColor};
    z-index: 21 !important;
  }

  .sticky-cell-thead {
    background-color: ${(props) => props.theme.ratsel.table.head.background};
    z-index: 21;
  }

  .sticky-cell-tbody {
    background-color: ${(props) => props.theme.ratsel.table.body.background};
    z-index: 20;
  }

  .sticky-cell-summary {
    background-color: ${(props) => props.theme.ratsel.table.summary.background};
    z-index: 20;
  }
`;
