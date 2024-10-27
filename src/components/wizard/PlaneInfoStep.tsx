import { useFormContext } from 'react-hook-form';
import { WizardFormValues } from '@/hooks/useWizardForm';
import FormInputGroup from './FormInputGroup';

export default function PlaneInfoStep() {
  const { control } = useFormContext<WizardFormValues>();

  return (
    <>
      <FormInputGroup
        control={control}
        name="planeWeight"
        label="Plane Weight (kg)"
        placeholder="Enter plane weight"
      />
      <FormInputGroup
        control={control}
        name="wingArea"
        label="Wing Area (m²)"
        placeholder="Enter wing area"
      />
    </>
  );
}
