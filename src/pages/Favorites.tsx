import React from 'react'

import { Container, Image } from '../components'

import type { PhotoTypes } from '../types'

export const Favorites = () => {
  const [favorites, setFavorites] = React.useState<PhotoTypes[]>()

  React.useEffect(() => {
    const saved = localStorage.getItem('favorites')
    if (saved) {
      setFavorites(JSON.parse(saved))
    }
  }, [])

    
  return (
    <Container className="py-23">
      <h2 className="font-bold text-7xl mb-27 text-center">
        Избранное
      </h2>

      {
        favorites && favorites.length === 0
          ? <p className="text-2xl text-center">Нет избранных изображений!</p>
          : (
            <div className="grid grid-cols-3 gap-[30px] py-28">
              {
                favorites?.map(item => (
                  <Image
                    key={item.id}
                    id={item.id}
                    src={item.urls.regular}
                    alt={item.description}
                  />
                ))
              }
            </div>
          )
      }
    </Container>
  )
}
