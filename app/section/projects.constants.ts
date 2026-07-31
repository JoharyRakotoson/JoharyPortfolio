export type CarouselConfig = {
  mode: 'arc' | 'pile';
  fanSpread: number;
  fanRadiusRatio: number;
  sideStretch: number;
  cardHeight: number;
  exitDuration: number;
  moveDuration: number;
  step: number;
  cycleDelay: number;
  exitOffset: number;
  minRadius: number;
  yOffset: number;
  edgeGap?: number;
};

export const PLACE_CARDS = true;

const DESKTOP_CONFIG: CarouselConfig = {
  mode: 'arc',
  fanSpread: 50,
  fanRadiusRatio: 0.55,
  sideStretch: 1.3,
  cardHeight: 430,
  yOffset: 380,
  exitDuration: 0.7,
  moveDuration: 0.6,
  step: 0.32,
  cycleDelay: 1.2,
  exitOffset: 320,
  minRadius: 0,
};

const MOBILE_CONFIG: CarouselConfig = {
  mode: 'pile',
  fanSpread: 50,
  fanRadiusRatio: 0.55,
  sideStretch: 1.1,
  cardHeight: 350,
  yOffset: 0,
  edgeGap: 40,
  exitDuration: 1,
  moveDuration: 0.55,
  step: 0.32,
  cycleDelay: 1.2,
  exitOffset: 140,
  minRadius: 240,
};

export function getCarouselConfig(width: number): CarouselConfig {
  return width < 768 ? MOBILE_CONFIG : DESKTOP_CONFIG;
}
