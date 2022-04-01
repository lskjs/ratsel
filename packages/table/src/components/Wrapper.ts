import { keyframes, styled } from '@ratsel/core';

const typing = keyframes`
  0% {
    background-color: #747d86;
    box-shadow: 20px 0px 0px 0px rgba(116, 125, 134, 0.2),
      40px 0px 0px 0px rgba(116, 125, 134, 0.2);
  }
  25% {
    background-color: rgba(116, 125, 134, 0.4);
    box-shadow: 20px 0px 0px 0px #747d86,
      40px 0px 0px 0px rgba(116, 125, 134, 0.2);
  }
  75% {
    background-color: rgba(116, 125, 134, 0.4);
    box-shadow: 20px 0px 0px 0px rgba(116, 125, 134, 0.2),
      40px 0px 0px 0px #747d86;
  }
  100% {
    box-shadow: none;
  }
`;

export const Wrapper = styled('div')`
  .ka-icon-tree-arrow-collapsed:before {
    content: '\e800';
  }

  .ka-icon-group-arrow-collapsed:before {
    content: '\e800';
  }

  .ka-icon-close:before {
    content: '\e801';
  }

  .ka-icon-tree-arrow-expanded:before {
    content: '\e802';
  }

  .ka-icon-group-arrow-expanded:before {
    content: '\e802';
  }

  .ka-icon-sort-arrow-down:before {
    content: '\e803';
  }

  .ka-icon-sort-arrow-up:before {
    content: '\e804';
  }

  .ka-icon-filter:before {
    content: '\e805';
  }

  .ka {
    overflow: hidden;
    background-color: white;
    font-size: 14px;
    display: flex;
    flex-direction: column;
  }

  .ka-table-wrapper {
    height: 100%;
    width: 100%;
    overflow-y: auto;
  }

  .ka-table {
    width: 100%;
    table-layout: fixed;
    border-collapse: collapse;
  }

  .ka-thead-background {
    background-color: #f1f5f7;
  }

  .ka-thead-cell-height {
    box-sizing: border-box;
    height: 47px;
  }

  .ka-thead-fixed {
    position: sticky;
  }

  .ka-thead-row:nth-child(1) .ka-thead-fixed {
    top: 0px;
  }

  .ka-thead-row:nth-child(2) .ka-thead-fixed {
    top: 47px;
  }

  .ka-thead-row:nth-child(3) .ka-thead-fixed {
    top: 94px;
  }

  .ka-thead-row:nth-child(4) .ka-thead-fixed {
    top: 141px;
  }

  .ka-thead-row:nth-child(5) .ka-thead-fixed {
    top: 188px;
  }

  .ka-thead-row:nth-child(6) .ka-thead-fixed {
    top: 235px;
  }

  .ka-thead-cell {
    padding: 15px 20px;
    color: #747d86;
  }

  .ka-thead-cell-wrapper {
    display: flex;
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
    padding: 8px 20px;
    line-height: 29px;
    color: #353c44;
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
    border: 1px solid;
  }

  .ka-cell-editor-validation-error .ka-input {
    background: #ffe7e7;
    border: 1px solid #ff0c0c;
  }

  .ka-validation-message-container {
    position: absolute;
  }

  .ka-validation-message {
    font-size: 12px;
    color: white;
    background-color: #ff0c0c;
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
    border-bottom: 2px solid #f9fbfc;
    border-top: 2px solid #f9fbfc;
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
    background-color: #f9fbfc;
    box-sizing: border-box;
    border-bottom: 1px solid white;
    border-top: 1px solid white;
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
    animation: ${typing} 1s linear infinite alternate;
    position: relative;
    left: -20px;
  }

  .ka-thead-cell-resize {
    user-select: none;
    width: 2px;
    cursor: col-resize;
    background-color: #d7e4eb;
    position: relative;
    left: 19px;
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
    padding: 12px 20px;
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
`;
