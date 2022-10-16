import * as CheckBoxPrimitive from '@radix-ui/react-checkbox';
import { clsx } from 'clsx'
import { Check } from 'phosphor-react';

export interface CheckboxProps {}

export function Checkbox({}: CheckboxProps) {

  return (
    <CheckBoxPrimitive.Root className={"w-6 h-6 p-[2px] bg-gray-800 rounded"} >
      <CheckBoxPrimitive.CheckboxIndicator asChild>
        <Check size={20} weight="bold" className='h-5 w-5 text-cyan-500' />
      </CheckBoxPrimitive.CheckboxIndicator>
    </CheckBoxPrimitive.Root>
  )
}