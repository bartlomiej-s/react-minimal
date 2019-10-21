import React from 'react'
import { render } from 'react-dom'
import MyApp from './MyApp'
import AppTitle from './AppTitle'
import generateArray from './MyApp'


render(<MyApp />, document.getElementById('reactinjectedhere'))
render(<AppTitle />, document.getElementById('reactinjectedtitle'))