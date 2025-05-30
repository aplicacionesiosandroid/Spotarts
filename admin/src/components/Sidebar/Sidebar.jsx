import React from 'react'
import { assets } from '../../assets/assets'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
    return (
        <div className='bg-[#003A10] min-h-screen pl-[4vw]'>

            <img src={assets.logo} alt="" className="mt-5 w-[max-content]" />
            <img src={assets.logo_small} alt="" className="mt-5 block sm:hidden w-[max-content]" />

            <div className="flex flex-col gap-5 mt-10">

                <NavLink to='/add-song' className="flex items-center gap-3 p-2 rounded hover:bg-[#006622]">
                    <img className='w-5' src={assets.add_song} alt="Add Song" />
                    <p className='hidden sm:block'>Add Song</p>
                </NavLink>

                <NavLink to='/list-songs' className="flex items-center gap-3 p-2 rounded hover:bg-[#006622]">
                    <img className='w-5' src={assets.song_icon} alt="List Songs" />
                    <p className='hidden sm:block'>List Songs</p>
                </NavLink>

                <NavLink to='/add-album' className="flex items-center gap-3 p-2 rounded hover:bg-[#006622]">
                    <img className='w-5' src={assets.add_album} alt="Add Album" />
                    <p className='hidden sm:block'>Add Album</p>
                </NavLink>

                <NavLink to='/list-albums' className="flex items-center gap-3 p-2 rounded hover:bg-[#006622]">
                    <img className='w-5' src={assets.album_icon} alt="List Album" />
                    <p className='hidden sm:block'>List Album</p>
                </NavLink>

                {/* Aquí agregamos el nuevo link para Usuarios */}
                <NavLink to='/users' className="flex items-center gap-3 p-2 rounded hover:bg-[#006622]">
                    <img className='w-5' src={assets.user_icon} alt="Usuarios" />
                    <p className='hidden sm:block'>Usuarios</p>
                </NavLink>

            </div>
        </div>
    )
}

export default Sidebar


