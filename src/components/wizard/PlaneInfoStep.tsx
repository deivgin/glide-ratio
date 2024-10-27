import { Input } from '../ui/input';
import { Label } from '../ui/label';

export default function PlaneInfoStep() {
  return (
    <>
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
    </>
  );
}
