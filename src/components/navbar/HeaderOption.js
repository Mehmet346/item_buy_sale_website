import React from 'react'

function HeaderOption( {image, title} ) {
  return (
    <div className="hover:text-sky-500 dark:hover:text-sky-400 cursor-pointer flex items-center gap-1">
        {image}
        {title}
    </div>
  )
}

export default HeaderOption