import React, { useRef } from 'react'
import PropTypes from 'prop-types'

const Checkbox = props => {

    const inputRef = useRef(null)

    const inChange = () => {
        if (props.onChange) {
            props.onChange(inputRef.current)
        }
    }

    return (
        <label className='custom-checkbox'>
            <input
                type="checkbox"
                ref={inputRef}
                onChange={inChange}
                className="custom-checkbox__input"
            />
            <span className='custom-checkbox__input-box'>
                <i className="fa fa-check custom-checkbox__input-icon"></i>
            </span>
            <span className='custom-checkbox__display'>
                {props.item.display}
            </span>
        </label>
    )
}

Checkbox.propTypes = {}

export default Checkbox