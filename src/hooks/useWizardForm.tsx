import { useState } from 'react';
import { useForm } from 'react-hook-form';

type Kilograms = number;
type SquareMiles = number;
type Knots = number;
type MetersPerSecond = number;

export type SpeedSinkPairs = {
  [key: string]: { airspeed: Knots; sinkRate: MetersPerSecond };
};

export type WizardFormValues = {
  planeWeight: Kilograms;
  wingArea: SquareMiles;
  speedSinkPairs: SpeedSinkPairs;
};

type WizardSteps = 'planeInfo' | 'measurements';

const defaultValues: WizardFormValues = {
  planeWeight: 30.94,
  wingArea: 1,
  speedSinkPairs: {
    pair0: { airspeed: 18.4073, sinkRate: 0.4958 },
    pair1: { airspeed: 21.6701, sinkRate: 0.5283 },
    pair2: { airspeed: 18.4073, sinkRate: 0.4958 },
    pair3: { airspeed: 23.7812, sinkRate: 0.5446 },
    pair4: { airspeed: 26.4206, sinkRate: 0.5527 },
    pair5: { airspeed: 29.2035, sinkRate: 0.6665 },
    pair6: { airspeed: 31.6032, sinkRate: 0.7153 },
    pair7: { airspeed: 34.0024, sinkRate: 0.8209 },
    pair8: { airspeed: 36.4015, sinkRate: 1.0566 },
    pair9: { airspeed: 39.1844, sinkRate: 1.2517 },
    pair10: { airspeed: 41.5841, sinkRate: 1.268 },
    pair11: { airspeed: 43.9833, sinkRate: 1.4468 },
    pair12: { airspeed: 46.4303, sinkRate: 1.9345 },
    pair13: { airspeed: 48.9256, sinkRate: 2.0483 },
    pair14: { airspeed: 51.7589, sinkRate: 2.5766 },
    pair15: { airspeed: 54.012, sinkRate: 2.9667 },
    pair16: { airspeed: 58.9039, sinkRate: 3.9177 },
    pair17: { airspeed: 61.3525, sinkRate: 4.7874 },
  },
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
