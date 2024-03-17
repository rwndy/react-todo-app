import { ComponentPropsWithoutRef } from 'react'

type TitleProps = {
  className?: string
  title: string
} & ComponentPropsWithoutRef<'h1'>

const Title = ({ className, title, ...rest }: TitleProps) => {
  return (
    <h1 className={className} {...rest}>{title}</h1>
  )
}

export default Title