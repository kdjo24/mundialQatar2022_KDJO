import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './estilo.css';

export default class NavigationBar extends Component {
    scroll = (int) => {
        window.scroll(0,2000)
    }
    render() {
        return (
            <div>

                <div class="menu fixed-left">
                    <hr></hr>
                    <div class="label">Menu Rapido</div>
                    <div class="spacer"></div>
                    <div class="item"><span><Link to="/">Inicio</Link></span></div>
                    <div class="item"><span><Link to="/grupos">Grupos</Link></span></div>
                    <div class="item"><span><Link to="/calendario">Calendario</Link></span></div>
                </div>

                <header class="masthead">
                    <div class="container">
                        <div class="masthead-subheading"></div>
                        <div class="masthead-subheading"></div>
                        <div class="masthead-subheading">Bienvenido</div>
                        <div class="masthead-heading text-uppercase">Qatar 2022</div>

                        <div class="btn btn-primary btn-xl text-uppercase" onClick={() => this.scroll()}>Menu Principal</div>

                    </div>
                </header>
            </div>

        )
    }
}
