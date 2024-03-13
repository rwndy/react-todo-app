import { ComponentPropsWithoutRef } from 'react'

type ButtonProps = {
  className?: string
} & ComponentPropsWithoutRef<'button'>

const Button = ({ className, children, ...rest }: ButtonProps) => {
  return (
    <button className={className} {...rest}>{ children }</button>
  )
}

export default Button