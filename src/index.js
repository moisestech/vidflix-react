import * as React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App () {
  return (
    <div class='app'>
      Welcome to Vidflix!
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)