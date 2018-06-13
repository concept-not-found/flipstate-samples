import React, {Fragment} from 'react'
import {addState} from './state'

export const GreenState = addState('Green', {
  value: String(Math.round(255 * Math.random())),
  updateValue(state, {target: {value}}) {
    return {
      value
    }
  }
})

export default () => (
  <GreenState>
    {({value, updateValue}) => (
      <Fragment>
        <h2>Green {value}</h2>
        <input
          type="range"
          value={value}
          min="0"
          max="255"
          onChange={updateValue}
        />
      </Fragment>
    )}
  </GreenState>
)
