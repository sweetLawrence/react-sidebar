import React from 'react'

const Toolbar = ({openSideBar}) => {
  return (
    <div className='tool-bar'>
        <div className="burger" onClick={openSideBar}>
            <p>Open</p>
        </div>
    </div>
  )
}

export default Toolbar