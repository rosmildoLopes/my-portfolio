import React, { Children } from 'react'

const Layout = ({children, className=''}) => {
  return (
    <div className={`${className} h-full w-full inline-block z-0 bg-light p-32`}>
      {children}
    </div>
  )
}

export default Layout