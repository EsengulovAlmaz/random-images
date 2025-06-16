import React from 'react'

import clsx from 'clsx'

interface Props {
  children?: React.ReactNode
  className?: string
}

export const Container: React.FC<Props> = ({ children, className }) => {
  return (
    <div className={clsx('w-full max-w-[90%] mx-auto px-4 sm:px-6 lg:px-8', className)}>
      {children}
    </div>
  )
}
