import { LogoutLink, RegisterLink } from '@kinde-oss/kinde-auth-nextjs/components'
import { KindeUser } from '@kinde-oss/kinde-auth-nextjs/types'
import React from 'react'

function Navbar({user}:{user:KindeUser | null}) {

  return (
    <div>
        <div>
            {
                !user ?
                <RegisterLink className='bg-gray-300 px-6 py-2 rounded-lg'>Register</RegisterLink>
                :
                <LogoutLink className='bg-gray-300 px-6 py-2 rounded-lg'>LogOut</LogoutLink>
            }
        </div>
    </div>
  )
}

export default Navbar