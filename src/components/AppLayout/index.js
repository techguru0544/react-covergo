import React from 'react'
function AppLayout({ children }) {
  return (
    <div className='container fluid'>
      {children}
    </div>
  )
}

export default AppLayout