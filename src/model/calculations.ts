type Kilograms = number;
type MetersPerSecond = number;
type SquareMeters = number;
type Pascals = number; // Pressure, is interchangeable with N/m^2
type Degrees = number;

//Why is it 16 times wing loading?
export function calculate16TimesWingLoading(
  weight: Kilograms,
  wingArea: SquareMeters
): Pascals {
  return 16 * (weight / wingArea);
}

export function calculateDecentAngle(
  airspeed: MetersPerSecond,
  sinkRate: MetersPerSecond
): Degrees {
  return Math.sqrt(1 - Math.pow(sinkRate / airspeed, 2));
}

export function calculateLiftCoefficient(
  weight: Kilograms,
  wingArea: SquareMeters,
  airspeed: MetersPerSecond,
  sinkRate: MetersPerSecond,
  airDensity = 1.225
) {
  const cosTheta = calculateDecentAngle(airspeed, sinkRate);
  const lift = weight * cosTheta;

  return (2 * lift) / (airDensity * Math.pow(airspeed, 2) * wingArea);
}
