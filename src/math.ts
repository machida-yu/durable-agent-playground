export function add(left: number, right: number): number {
  return left + right;
}

export function sub(left: number, right: number): number {
  return left - right;
}

export function mul(left: number, right: number): number {
  return left * right;
}

export function clamp(value: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, value));
}
