import { Plus, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useFormContext, useWatch } from 'react-hook-form';
import { SpeedSinkPairs, WizardFormValues } from '@/hooks/useWizardForm';
import FormInputGroup from './FormInputGroup';

export default function MeasurementsStep() {
  const { control, setValue } = useFormContext<WizardFormValues>();
  const { speedSinkPairs } = useWatch({ control });

  const addRow = () => {
    const newPair = { airspeed: 0, sinkRate: 0 };
    const newPairIndex = Date.now();

    setValue(`speedSinkPairs.pair${newPairIndex}`, newPair);
  };

  const removeRow = (key: string) => {
    const newSpeedSinkPairs = { ...speedSinkPairs } as SpeedSinkPairs;
    delete newSpeedSinkPairs[key];

    setValue('speedSinkPairs', newSpeedSinkPairs);
  };

  return (
    <>
      {Object.keys(speedSinkPairs ?? {}).map((key) => (
        <div
          key={key}
          className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 items-end"
        >
          <FormInputGroup
            control={control}
            name={`speedSinkPairs.${key}.airspeed`}
            label="Airspeed (m/s)"
            placeholder="Enter airspeed"
          />
          <FormInputGroup
            control={control}
            name={`speedSinkPairs.${key}.sinkRate`}
            label="Sink Rate (m/s)"
            placeholder="Enter sink rate"
          />
          <Button
            type="button"
            variant="destructive"
            className="w-full sm:w-auto mt-2 sm:mt-0"
            onClick={() => removeRow(key)}
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      ))}
      <Button
        type="button"
        variant="outline"
        className="w-full"
        onClick={addRow}
      >
        <Plus className="mr-2 h-4 w-4" /> Add Row
      </Button>
    </>
  );
}
