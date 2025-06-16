import React from 'react'
import { useParams } from 'react-router-dom'

import clsx from 'clsx'

import axiosInstance from '../api/axios'
import { black_heart, download } from '../assets/icons'
import { Container, Loader } from '../components'
import { useFavorites } from '../hooks/useFavorites'

import type { PhotoTypes } from '../types'
import type { AxiosError } from 'axios'

export const SinglePhoto = () => {
  const [isLoading, setIsLoading] = React.useState(false)
  const [photo, setPhoto] = React.useState<PhotoTypes>()
    
  const { id } = useParams()
  const { addFavorite, removeFavorite, isFavorite } = useFavorites()

  const getSinglePhoto = async () => {
    setIsLoading(true)

    try {
      const res = await axiosInstance.get(`/photos/${id}`)
        
      setPhoto(res.data)
    } catch (e) {
      const error = e as AxiosError
      console.error(error.message)
    } finally {
      setIsLoading(false)
    }
  }

  const isCurrentlyFavorite = photo ? isFavorite(photo.id) : false

  const onFavoriteClick = () => {
    if (!photo) return

    if (isCurrentlyFavorite) {
      removeFavorite(photo.id)
    } else {
      addFavorite(photo)
    }
  }

  const handleDownload = async () => {
    try {
      const res = await axiosInstance(`/photos/${photo?.id}/download`)
      const downloadUrl = res.data.url

      const link = document.createElement('a')
      link.href = downloadUrl
      link.download = 'unsplash-photo.jpg'
      link.target = '_blank'
      link.click()
    } catch (error) {
      console.error('Ошибка при скачивании:', error)
    }
  }

  React.useEffect(() => {
    getSinglePhoto()
  }, [id])

  if(isLoading) return <Loader className="h-[75vh]" />

  return (
    <div className="relative w-full h-[600px]">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `
        linear-gradient(0deg, rgba(40, 36, 22, 0.08), rgba(40, 36, 22, 0.08)),
        url(${photo?.urls.regular})
      `,
          backgroundBlendMode: 'normal',
        }}
      />
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
  
      <Container className="relative z-10 text-white py-11">
        <div className="flex align-center justify-between mb-10">
          <div className="flex align-center gap-2.5">
            <img 
              src={photo?.user.profile_image.large}
              alt={photo?.user.name}
              className="w-[55px] h-[55px] rounded-lg border border-[#FFFFFF]"
            />

            <div>
              <h3 className="font-normal text-3xl leading-none">
                {photo?.user.name}
              </h3>
              <p className="font-normal text-lg">
                @{photo?.user.instagram_username}
              </p>
            </div>
          </div>

          <div className="flex align-center gap-5 py-1.5">
            <button 
              onClick={onFavoriteClick}
              disabled={!photo}
              className={clsx('rounded-lg p-3 cursor-pointer', isCurrentlyFavorite ? 'bg-red-500' : 'bg-white')}
            >
              <img 
                src={black_heart}
                alt="heart"
                className="w-[23px]"
              />
            </button>

            <button 
              onClick={handleDownload}
              className="flex align-center gap-4 bg-[#FFF200] rounded-lg py-2 px-6 cursor-pointer"
            >
              <img 
                src={download}
                alt="download"
                className="w-[26px]"
              />
              <p className="font-light text-xl text-black">
                Download
              </p>
            </button>
          </div>
        </div>

        <div>
          <img 
            src={photo?.urls.full}
            alt={photo?.description}
            className="w-full h-[740px] rounded-lg object-cover"
          />
        </div>
      </Container>
    </div>
  )
}
