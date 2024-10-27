import { Plane } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/card';
import PlaneInfoStep from './PlaneInfoStep';
import { Button } from '../ui/button';
import { useWizard } from '@/hooks/useWizardForm';
import { FormProvider } from 'react-hook-form';

export default function Wizard() {
  const { form, step, submit } = useWizard();

  const getStepContent = () => {
    switch (step) {
      case 'planeInfo':
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
        <FormProvider {...form}>
          <form className="space-y-4" onSubmit={submit}>
            {getStepContent()}
            <Button type="submit" className="w-full">
              Next
            </Button>
          </form>
        </FormProvider>
      </CardContent>
    </Card>
  );
}
