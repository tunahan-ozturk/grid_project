import React from 'react'
import Header from '../Components/Header'
import Grid from '../Components/Grid'
import 'bootstrap/dist/css/bootstrap.css';

function Home() {
  return (
      <div>
          {/* Header */}
          <Header /> 
          {/* Grid */}
          <Grid/>
    </div>
  )
}

export default Home