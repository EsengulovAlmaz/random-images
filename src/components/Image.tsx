import React from 'react'
import { Link } from 'react-router-dom'

import clsx from 'clsx'

interface Props {
  id: string
  src: string
  alt: string
  className?: string
}

export const Image: React.FC<Props> = ({ id, src, alt, className }) => {
  const [loaded, setLoaded] = React.useState(false)

  return (
    <div className="relative w-full h-[390px] rounded-lg overflow-hidden bg-gray-200">
      {!loaded && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-10 h-10 border-4 border-white border-t-transparent rounded-full animate-spin" />
        </div>
      )}
      
      <Link to={`/photo/${id}`}>
        <img
          src={src}
          alt={alt}
          onLoad={() => setLoaded(true)}
          className={clsx(
            'w-full h-full object-cover transition-opacity duration-300 cursor-pointer',
            loaded ? 'opacity-100' : 'opacity-0',
            className,
          )}
        />
      </Link>
    </div>
  )
}
