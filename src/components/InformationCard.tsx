import { Card, CardHeader, CardTitle, CardContent } from './ui/card';

export default function InformationCard() {
  return (
    <Card className="w-full max-w-2xl mt-4">
      <CardHeader>
        <CardTitle>About UAV Performance Metrics</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-600">
          The lift-drag ratio is a measure of the aerodynamic efficiency of a
          UAV. A higher ratio indicates better performance, as it means the
          aircraft generates more lift for a given amount of drag. This ratio is
          crucial for determining the range and endurance of the UAV.
        </p>
        <p className="text-sm text-gray-600 mt-2">
          Glide efficiency, calculated as the ratio of airspeed to sink rate,
          indicates how well the UAV can glide. A higher efficiency means the
          UAV can cover more horizontal distance for a given loss of altitude,
          which is important for energy conservation and extended flight times.
        </p>
      </CardContent>
    </Card>
  );
}
