import { HYDRATIONS } from './constants';
import type { StyleId, Unit } from './types';

export function fmt(val: number, unit: Unit): string {
  if (unit === 'metric') return Math.round(val) + 'g';
  return (val * 0.035274).toFixed(1) + 'oz';
}

export function toGrams(val: number, unit: Unit): number {
  return unit === 'metric' ? val : val / 0.035274;
}

export function parseLoafSizeInput(raw: string, unit: Unit): number {
  const n = parseFloat(raw);
  if (!Number.isFinite(n)) return unit === 'metric' ? 750 : 26;
  return n;
}

export interface CalcResult {
  flour: number;
  water: number;
  starter: number;
  salt: number;
  total: number;
  h: number;
  s: number;
}

export function calcValues(
  loafSizeInput: number,
  unit: Unit,
  selectedStyleId: StyleId,
  starterPct: number,
  saltPct: number
): CalcResult {
  const loafSizeG = toGrams(loafSizeInput, unit);
  const h = HYDRATIONS[selectedStyleId];
  const s = starterPct / 100;
  const saltRatio = saltPct / 100;
  const flour = loafSizeG / (1 + h + s + saltRatio);
  return {
    flour,
    water: flour * h,
    starter: flour * s,
    salt: flour * saltRatio,
    total: loafSizeG,
    h,
    s,
  };
}
