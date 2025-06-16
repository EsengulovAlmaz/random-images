import React from 'react'

import { black_search } from '../assets/icons'
import { search_back } from '../assets/images'


interface Props {
  value: string
  onChange: (value: string) => void
  onSearch: () => void
}

export const Search: React.FC<Props> = ({ value, onChange, onSearch }) => {
  return (
    <>
      <div
        className="flex align-center justify-center py-[92px] relative w-full bg-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${search_back})`,
        }}
      >
        <div className="w-2/4 inline-flex align-center justify-between bg-white px-8">
          <input
            value={value}
            placeholder="Поиск"
            onChange={(e) => onChange(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && onSearch()}
            className="w-full font-light text-2xl bg-none outline-0 py-5 placeholder:text-black"
          />
          <img 
            src={black_search}
            alt="search"
            className="w-[23px] cursor-pointer ml-5"
            onClick={onSearch}
          />
        </div>
      </div>
      
      <div className="bg-[#C4C4C4] h-4" />
    </>
  )
}
