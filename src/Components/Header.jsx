import React from 'react'
import "./Style.css"

export function Header(props) {
  return (
    <header>
        <div className='heading'>
            <h1 className='title'>{props.title}</h1>
            <p className='sub-title'>{props.subTitle}</p>
        </div>
    </header>
  )
}
