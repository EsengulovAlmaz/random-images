import { useState, useEffect } from 'react'

import type { PhotoTypes } from '../types'

const FAVORITES_KEY = 'favorites'

const savedFavorites = localStorage.getItem(FAVORITES_KEY)

export const useFavorites = () => {
  const [favorites, setFavorites] = useState<PhotoTypes[]>(savedFavorites ? JSON.parse(savedFavorites) : [])

  useEffect(() => {
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites))
  }, [favorites])

  const addFavorite = (photo: PhotoTypes) => {
    if (!favorites.some(item => item.id === photo.id)) {
      setFavorites((prevFavorites) => [...prevFavorites, photo])
    }
  }

  const removeFavorite = (photoId: string) => {
    setFavorites((prevFavorites) => prevFavorites.filter((item) => item.id !== photoId))
  }

  const isFavorite = (photoId: string) => {
    return favorites.some((item) => item.id === photoId)
  }

  return { 
    favorites, 
    addFavorite, 
    removeFavorite, 
    isFavorite, 
  }
}