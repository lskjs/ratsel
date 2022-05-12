import React from 'react';

import { TimePicker } from '../src';

export default {
  default: (
    <div style={{ maxWidth: 192 }}>
      <TimePicker
        onChange={(newValue) => {
          console.log('onChange', newValue);
        }}
      />
    </div>
  ),
  clearable: (
    <div style={{ maxWidth: 192 }}>
      <TimePicker
        clearable
        defaultValue={new Date()}
        onChange={(newValue) => {
          console.log('onChange', newValue);
        }}
      />
    </div>
  ),
  defaultValue: (
    <div style={{ maxWidth: 192 }}>
      <TimePicker
        clearable
        defaultValue={new Date()}
        onChange={(newValue) => {
          console.log('onChange', newValue);
        }}
      />
    </div>
  ),
  submitOnClose: (
    <div style={{ maxWidth: 192 }}>
      <TimePicker
        clearable
        submitOnClose
        defaultValue={new Date()}
        onChange={(newValue) => {
          console.log('onChange', newValue);
        }}
      />
    </div>
  ),
  placeholder: (
    <div style={{ maxWidth: 192 }}>
      <TimePicker
        clearable
        placeholder="Укажите время"
        onChange={(newValue) => {
          console.log('onChange', newValue);
        }}
      />
    </div>
  ),
  focusOnOpen: (
    <div style={{ maxWidth: 192 }}>
      <TimePicker
        clearable
        focusOnOpen
        placeholder="Укажите время"
        onChange={(newValue) => {
          console.log('onChange', newValue);
        }}
      />
    </div>
  ),
};
