import React from 'react'
import './AppCard.css'

const AppCard = ({ name, url, description }) => (
  <a href={url} className="AppCard">
    <h4>
      {name}
    </h4>
    <p>{description}</p>
  </a>
)

export default AppCard