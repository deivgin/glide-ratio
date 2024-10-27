import {
  FieldValues,
  useController,
  UseControllerProps,
} from 'react-hook-form';
import { Input } from '../ui/input';
import { Label } from '@radix-ui/react-label';

interface Props<T extends FieldValues> extends UseControllerProps<T> {
  label: string;
  placeholder: string;
}

export default function FormInputGroup<T extends FieldValues>(props: Props<T>) {
  const { field } = useController(props);
  const { label, placeholder } = props;

  return (
    <div className="space-y-2">
      <Label htmlFor={field.name}>{label}</Label>
      <Input {...field} placeholder={placeholder} />
    </div>
  );
}
