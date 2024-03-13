import { ComponentPropsWithoutRef } from 'react'


type InputProps = {
  className?: string
} & ComponentPropsWithoutRef<'input'>

const Input = ({ className, ...rest  }: InputProps) => {
  return <input className={className} {...rest}/>
}

export default Input