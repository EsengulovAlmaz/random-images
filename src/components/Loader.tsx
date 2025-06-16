import React from 'react'

import clsx from 'clsx'

interface Props {
  className?: string
}

export const Loader: React.FC<Props> = ({ className }) => {
  return (
    <div className={clsx('flex items-center justify-center', className)}>
      <div className="w-16 h-16 border-4 border-black border-t-transparent rounded-full animate-spin" />
    </div>
  )
}
