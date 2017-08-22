'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
console.log('Building spreadsheet.js');

exports.name = 'Spreadsheet';

exports.exec = async (msg, {send}) =>
  send('The spreadsheet can be found at this site: https://docs.google.com/spreadsheets/d/18HlGT-Ys2Z5mFTD18QZeFgnVQunf1LqT5VxnddDnbuw/edit?usp=sharing')
;
