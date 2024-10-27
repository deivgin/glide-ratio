import { Plane } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/card';
import PlaneInfoStep from './PlaneInfoStep';
import { Button } from '../ui/button';
import { useState } from 'react';

export default function Wizard() {
  const [step, setStep] = useState(0);

  const handleNext = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const getStepContent = () => {
    switch (step) {
      case 0:
        return <PlaneInfoStep />;
      default:
        return null;
    }
  };

  return (
    <Card className="w-full max-w-2xl bg-white">
      <CardHeader>
        <CardTitle className="text-2xl font-bold flex items-center justify-center">
          <Plane className="mr-2" />
          UAV Performance Calculator
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form className="space-y-4" onSubmit={handleNext}>
          {getStepContent()}
          <Button type="submit" className="w-full">
            Next
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
