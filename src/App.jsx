import React, { Component } from 'react'

class App extends Component {
  render() {
    return (
      <div>
        <h1 style={h1Style}>TODO</h1>
      </div>
    )
  }
}

const h1Style = {
  textAlign: 'center',
  fontSize: '10rem',
  margin: 'auto'
}

export default App
