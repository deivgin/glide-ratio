import { useState } from 'react';
import { useForm } from 'react-hook-form';

type Kilograms = number;
type SquareMiles = number;

export type WizardFormValues = {
  planeWeight: Kilograms;
  wingArea: SquareMiles;
};

type WizardSteps = 'planeInfo' | 'measurements';

const defaultValues: WizardFormValues = {
  planeWeight: 30.94,
  wingArea: 1,
};

export const useWizard = () => {
  const [step, setStep] = useState<WizardSteps>('planeInfo');

  const form = useForm<WizardFormValues>({ defaultValues, mode: 'onChange' });

  const submit = form.handleSubmit((values) => {
    switch (step) {
      case 'planeInfo':
        setStep('measurements');
        break;
      case 'measurements':
        console.log(values);
        break;
      default:
        break;
    }
  });

  return { form, step, submit };
};
