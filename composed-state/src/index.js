import React, {Fragment} from 'react'
import {render} from 'react-dom'
import {Composed} from 'render-props-compose'
import stringify from 'json-stable-stringify'

import {StateProvider, GlobalState} from './state'

import Red, {RedState} from './red'
import Green, {GreenState} from './green'
import Blue, {BlueState} from './blue'

render(
  <StateProvider>
    <h1>flipstate composed state sample</h1>
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '600px'
      }}
    >
      <div>
        <Red />
        <Green />
        <Blue />
      </div>
      <div>
        <Composed components={[RedState, GreenState, BlueState]}>
          {({value: red}, {value: green}, {value: blue}) => (
            <Fragment>
              <h2>Composed color</h2>
              <div
                style={{
                  width: '100px',
                  height: '100px',
                  backgroundColor: `rgb(${red}, ${green}, ${blue})`,
                  border: '2px solid black'
                }}
              />
            </Fragment>
          )}
        </Composed>
      </div>
      <div>
        <h2>Full state</h2>
        <pre>
          <GlobalState>
            {state =>
              stringify(state, {
                space: 2,
                replacer(key, value) {
                  if (typeof value === 'function') {
                    return `function()`
                  }
                  return value
                }
              })
            }
          </GlobalState>
        </pre>
      </div>
    </div>
  </StateProvider>,
  document.getElementById('root')
)
