import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Footer from './Footer'
import NavigationBar from './NavigationBar'
import PrincipalMenu from './PrincipalMenu'
export default class StartPage extends Component {
  render() {
    return (
      <div>
        <NavigationBar />
        <PrincipalMenu />
        <Footer/>
      </div>
    )
  }
}
