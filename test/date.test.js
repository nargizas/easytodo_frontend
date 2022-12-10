import { getFormattedDateAndTime, getFormattedDate, getFormattedTime } from '../util/date';

require('jest');

test('Formats input date as YYYY-MM-DD hh:mm', () => {
  const d = new Date(1670584011000);
  expect(getFormattedDateAndTime(d)).toBe('2022-12-09 20:06');
});

test('Formats input date as YYYY-MM-DD hh:mm', () => {
  const d = new Date(1227947528000);
  expect(getFormattedDateAndTime(d)).toBe('2008-11-29 17:32');
});

test('Formats input date as YYYY-MM-DD', () => {
  const d = new Date(600304688000);
  expect(getFormattedDate(d)).toBe('1989-01-09');
});

test('Formats input date as YYYY-MM-DD', () => {
  const d = new Date(1540390808000);
  expect(getFormattedDate(d)).toBe('2018-10-24');
});

test('Formats input date as hh:mm', () => {
  const d = new Date(600304688000);
  expect(getFormattedTime(d)).toBe('08:18');
});

test('Formats input date as hh:mm', () => {
  const d = new Date(1540390808000);
  expect(getFormattedTime(d)).toBe('23:20');
});
