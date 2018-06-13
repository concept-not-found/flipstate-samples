import React, {Fragment} from 'react'
import {addState} from './state'

export const RedState = addState('Red', {
  value: String(Math.round(255 * Math.random())),
  updateValue(state, {target: {value}}) {
    return {
      value
    }
  }
})

export default () => (
  <RedState>
    {({value, updateValue}) => (
      <Fragment>
        <h2>Red {value}</h2>
        <input
          type="range"
          value={value}
          min="0"
          max="255"
          onChange={updateValue}
        />
      </Fragment>
    )}
  </RedState>
)
