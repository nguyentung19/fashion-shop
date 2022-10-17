import React from 'react'
import PropTypes from 'prop-types'

const PolicyCard = props => {
  return (
    <div className='policy-card__item'>
      <div className="policy-card__icon">
        <i className={props.icon}></i>
      </div>
      <div className="policy-card__content">
        <p className="policy-card__title">{props.name}</p>
        <p className='policy-card__description'>{props.description}</p>
      </div>
    </div>
  )
}

PolicyCard.propTypes = {}

export default PolicyCard