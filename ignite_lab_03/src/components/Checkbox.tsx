import { clsx } from 'clsx'

export interface CheckboxProps {}

export function Checkbox({}: CheckboxProps) {

  return (
    <div className={clsx(
      "py-4 px-3 bg-cyan-500 rounded font-semibold text-black text-sm w-full hover:bg-cyan-300 transition-colors focus:ring-2 ring-white",
      {
        
      })
    }>
    </div>
  )
}