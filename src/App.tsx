import { Plane } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from './components/ui/card';
import { Button } from './components/ui/button';
import { Label } from './components/ui/label';
import { Input } from './components/ui/input';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white p-4 flex flex-col items-center justify-center">
      <Card className="w-full max-w-2xl bg-white">
        <CardHeader>
          <CardTitle className="text-2xl font-bold flex items-center justify-center">
            <Plane className="mr-2" />
            UAV Performance Calculator
          </CardTitle>
          <CardDescription>
            Calculate lift-drag ratio and glide efficiency for your UAV
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="lift">Lift Force (N)</Label>
              <Input
                id="lift"
                type="number"
                placeholder="Enter lift force"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="drag">Drag Force (N)</Label>
              <Input
                id="drag"
                type="number"
                placeholder="Enter drag force"
                required
              />
            </div>
            <Button type="submit" className="w-full">
              Next
            </Button>
          </form>
        </CardContent>
      </Card>
      <Card className="w-full max-w-2xl mt-4">
        <CardHeader>
          <CardTitle>About UAV Performance Metrics</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-gray-600">
            The lift-drag ratio is a measure of the aerodynamic efficiency of a
            UAV. A higher ratio indicates better performance, as it means the
            aircraft generates more lift for a given amount of drag. This ratio
            is crucial for determining the range and endurance of the UAV.
          </p>
          <p className="text-sm text-gray-600 mt-2">
            Glide efficiency, calculated as the ratio of airspeed to sink rate,
            indicates how well the UAV can glide. A higher efficiency means the
            UAV can cover more horizontal distance for a given loss of altitude,
            which is important for energy conservation and extended flight
            times.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
