import { expect, test } from 'vitest';
import {
  calculate16TimesWingLoading,
  calculateLiftCoefficient,
} from './calculations';

test('calculate wing load', () => {
  expect(calculate16TimesWingLoading(30.94, 1)).toBe(495.04);
});

test('calculate lift coefficient', () => {
  expect(calculateLiftCoefficient(30.94, 1, 18.4073, 0.4958)).toBe(1.461);
});
