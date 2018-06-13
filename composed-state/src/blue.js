import React, {Fragment} from 'react'
import {addState} from './state'

export const BlueState = addState('Blue', {
  value: String(Math.round(255 * Math.random())),
  updateValue(state, {target: {value}}) {
    return {
      value
    }
  }
})

export default () => (
  <BlueState>
    {({value, updateValue}) => (
      <Fragment>
        <h2>Blue {value}</h2>
        <input
          type="range"
          value={value}
          min="0"
          max="255"
          onChange={updateValue}
        />
      </Fragment>
    )}
  </BlueState>
)
