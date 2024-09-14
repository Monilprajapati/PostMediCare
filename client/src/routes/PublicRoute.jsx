import React from 'react'
import { useUserContext } from '../contexts/userContext'
import { Navigate } from 'react-router-dom'
import roleOptions from '../constants/roleOptions'
import { DNA } from 'react-loader-spinner'

const PublicRoute = ({ children }) => {

  const { isAuth, userRole, isLoading } = useUserContext()

  if (isLoading) {
    return <div className="h-[80vh] w-full flex justify-center items-center">
      <div className="flex flex-col w-full items-center">
        <DNA
          visible={true}
          height="100"
          width="100"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper"
        />
        <h2 className="hidden md:flex text-sm md:text-md">
          Please wait while we load the application for you. This may take a
          few seconds...
        </h2>
      </div>
    </div>
  }

  return !isAuth ? children : <Navigate to={userRole === roleOptions[0].value ? "/patient-dashboard" : "/doctor-dashboard"} />
}

export default PublicRoute
