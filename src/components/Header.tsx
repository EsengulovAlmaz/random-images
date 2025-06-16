import { Link, useLocation } from 'react-router-dom'

import { heart, logo, search } from '../assets/icons'

import { Container } from './Container'

export const Header = () => {
  const location = useLocation()

  return (
    <div className="bg-black">
      <Container className="flex items-center justify-between py-9">
        <Link to="/">
          <img 
            src={logo}
            alt="logo"
            className="w-[185px] h-[72px]"
          />
        </Link>

        <div className="flex align-center gap-9">
          {
            location.pathname !== '/' && (
              <Link to="/" className="flex items-center text-white gap-2.5 cursor-pointer">
                <img 
                  src={search}
                  alt="heart"
                  className="w-[23px]"
                />

                <p className="font-normal text-lg">Поиск</p>
              </Link>
            )
          }

          <Link to="/favorites" className="flex items-center text-white gap-2.5 cursor-pointer">
            <img 
              src={heart}
              alt="heart"
              className="w-[23px]"
            />

            <p className="font-normal text-lg">Избранное</p>
          </Link>
        </div>
      </Container>
    </div>
  )
}
