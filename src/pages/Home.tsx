import React from 'react'

import axiosInstance from '../api/axios'
import { Container, Image, Loader } from '../components'
import { Search } from '../components/Search'

import type { PhotoTypes } from '../types'
import type { AxiosError } from 'axios'

export const Home = () => {
  const [isLoading, setIsLoading] = React.useState(false)
  const [photos, setPhotos] = React.useState<PhotoTypes[]>()
  const [inputValue, setInputValue] = React.useState('')

  const getPhotos = async () => {
    setIsLoading(true)

    try {
      if (inputValue.trim() !== '') {
        const res = await axiosInstance.get(`/search/photos/?query=${inputValue}&per_page=9`)

        setPhotos(res.data.results)
      } else {
        const res = await axiosInstance.get('/photos/random/?count=9')
        
        setPhotos(res.data)
      }
    } catch (e) {
      const error = e as AxiosError
      console.error(error.message)
    } finally {
      setIsLoading(false)
    }
  }

  React.useEffect(() => {
    getPhotos()
  }, [])

  return (
    <div>
      <Search 
        value={inputValue}
        onChange={setInputValue}
        onSearch={getPhotos}
      />

      <Container>
        {
          isLoading && <Loader className="h-[40vh]" />
        }
        
        <div className="grid grid-cols-3 gap-[30px] py-28">
          {
            photos?.map(item => (
              <Image
                key={item.id}
                id={item.id}
                src={item.urls.regular}
                alt={item.description}
              />
            ))
          }
        </div>
      </Container>
    </div>
  )
}
