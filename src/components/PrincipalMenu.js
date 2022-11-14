import React, { Component } from 'react'
import './estilo.css';
import { Link } from 'react-router-dom'
export default class PrincipalMenu extends Component {
    render() {
        return (
            <section class="page-section bg-light" id="portfolio">
                <div class="container">
                    <div class="text-center">
                        <h2 class="section-heading text-uppercase">Menu Principal</h2>
                        <h3 class="section-subheading text-muted">Seleccione la opcion que guste</h3>
                    </div>
                    <div class="row">

                        <div class="col-lg-6 col-sm-6 mb-4">
                            <div class="portfolio-item">
                                <Link class="portfolio-link" data-bs-toggle="modal" to="/Calendario">
                                    <div class="portfolio-hover">
                                        <div class="portfolio-hover-content"><i class="fas fa-plus fa-3x"></i></div>
                                    </div>
                                    <img class="img-fluid" src="https://i.pinimg.com/originals/f3/47/df/f347df43315982dedff0123ef95c2d5f.png" />
                                </Link>
                                <div class="portfolio-caption">
                                    <div class="portfolio-caption-heading">Calendario</div>
                                    <div class="portfolio-caption-subheading text-muted">Por Fechas</div>
                                </div>
                            </div>
                        </div>


                        <div class="col-lg-6 col-sm-6 mb-4">
                            <div class="portfolio-item">
                                <Link class="portfolio-link" data-bs-toggle="modal" to="/grupos">
                                    <div class="portfolio-hover">
                                        <div class="portfolio-hover-content"><i class="fas fa-plus fa-3x"></i></div>
                                    </div>
                                    <img class="img-fluid" src="https://i.pinimg.com/originals/35/3a/db/353adb402a6863f7b7860295dcf709e9.png" />
                                </Link>
                                <div class="portfolio-caption">
                                    <div class="portfolio-caption-heading">Grupos</div>
                                    <div class="portfolio-caption-subheading text-muted">Fase de Grupos</div>
                                </div>
                            </div>
                        </div>

                      

                    </div>
                </div>
            </section>
        )
    }
}
