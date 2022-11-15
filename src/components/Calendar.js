import React, { Component } from 'react'
import { Link } from 'react-router-dom'


const teams = [
  { id: 1, team: "Qatar", flag: "https://static3.depositphotos.com/1000501/170/i/600/depositphotos_1709033-stock-photo-qatari-flag.jpg",grou:"Grupo A" },
  { id: 2, team: "Ecuador", flag: "https://www.lifeder.com/wp-content/uploads/2018/10/bandera-de-Ecuador.jpg",grou:"Grupo A" },
  { id: 3, team: "Senegal", flag: "https://static.vecteezy.com/system/resources/previews/001/228/858/original/senegal-3d-flag-vector.jpg",grou:"Grupo A" },
  { id: 4, team: "Paises Bajos", flag: "https://static.vecteezy.com/system/resources/previews/001/228/894/non_2x/netherlands-3d-flag-vector.jpg",grou:"Grupo A" },
  { id: 5, team: "Inglaterra", flag: "https://media.istockphoto.com/id/489954902/es/foto/brit%C3%A1nica-bandera-union-jack-soplando-en-el-viento.jpg?s=612x612&w=0&k=20&c=wG_SQIW5KZikL92dcqu_spY1JPurLWpOR3n-Wr86ncY=",grou:"Grupo B" },
  { id: 6, team: "Iran", flag: "https://st.depositphotos.com/1482106/4308/i/450/depositphotos_43088291-stock-photo-waving-iran-flag.jpg",grou:"Grupo B" },
  { id: 7, team: "Estados Unidos", flag: "https://img.freepik.com/foto-gratis/bandera-estados-unidos-america_1401-253.jpg?w=2000",grou:"Grupo B" },
  { id: 8, team: "Gales", flag: "https://img.freepik.com/fotos-premium/bandera-gales-reino-unido_118047-3220.jpg?w=2000",grou:"Grupo B" },
  { id: 9, team: "Argentina", flag: "https://www.ucalp.edu.ar/wp-content/uploads/2019/07/banderaargentina.jpg",grou:"Grupo C" },
  { id: 10, team: "Arabia Saudi", flag: "https://w0.peakpx.com/wallpaper/756/16/HD-wallpaper-saudi-arabia-flag-green-silk-flag-national-symbols-saudi-arabia.jpg",grou:"Grupo C" },
  { id: 11, team: "Mexico", flag: "https://www.mexicodesconocido.com.mx/wp-content/uploads/2018/01/significado_colores_bandera_mexico.jpg",grou:"Grupo C" },
  { id: 12, team: "Polonia", flag: "https://descubrepolonia.net/wp-content/uploads/2021/03/flaga-polski-scaled.jpg",grou:"Grupo C" },
  { id: 13, team: "Francia", flag: "https://st.depositphotos.com/1610517/3425/i/450/depositphotos_34252637-stock-photo-france-flag-blowing-in-the.jpg",grou:"Grupo D" },
  { id: 14, team: "Australia", flag: "https://static9.depositphotos.com/1006269/1088/i/450/depositphotos_10884457-stock-photo-australian-flag.jpg",grou:"Grupo D" },
  { id: 15, team: "Dinamarca", flag: "https://st.depositphotos.com/1482106/4745/i/450/depositphotos_47456267-stock-photo-waving-denmark-flag.jpg",grou:"Grupo D" },
  { id: 16, team: "Tunez", flag: "https://cdn.pixabay.com/photo/2017/12/23/23/36/flag-of-tunisia-3036189_960_720.jpg",grou:"Grupo D" },
  { id: 17, team: "España", flag: "https://img.freepik.com/fotos-premium/bandera-espana-ilustracion-3d-bandera-espanola-ondeando_2227-2339.jpg",grou:"Grupo E" },
  { id: 18, team: "Costa Rica", flag: "https://i.pinimg.com/736x/8f/5a/6c/8f5a6cc4336464f7005368edea706363.jpg",grou:"Grupo E" },
  { id: 19, team: "Alemania", flag: "https://imagenesnoticias.com/wp-content/uploads/2019/01/0-e1547604146279.jpg",grou:"Grupo E" },
  { id: 20, team: "Japon", flag: "https://supercurioso.com/wp-content/uploads/2019/11/Bandera-de-Jap%C3%B3n-_-Descripci%C3%B3n-y-significado.jpg",grou:"Grupo E" },
  { id: 21, team: "Bélgica", flag: "https://cdn.pixabay.com/photo/2017/12/23/23/31/belgium-3036184_1280.jpg",grou:"Grupo F" },
  { id: 22, team: "Canada", flag: "https://es.red-leaf.com/content/files/07be08c6-454c-40f6-a56d-a74737ef9cf5/0.jpg",grou:"Grupo F" },
  { id: 23, team: "Marruecos", flag: "https://www.marruecos.com/wp-content/uploads/bandera-marruecos-grande-1920px.jpg",grou:"Grupo F" },
  { id: 24, team: "Croacia", flag: "https://c4.wallpaperflare.com/wallpaper/703/478/458/bandera-croacia-europa-wallpaper-preview.jpg",grou:"Grupo F" },
  { id: 25, team: "Brasil", flag: "https://t2.uc.ltmcdn.com/es/posts/1/2/5/significado_de_la_bandera_y_escudo_de_brasil_49521_orig.jpg",grou:"Grupo G" },
  { id: 26, team: "Serbia", flag: "https://img.freepik.com/fotos-premium/bandera-serbia-primer-plano-seda_406939-918.jpg?w=2000",grou:"Grupo G" },
  { id: 27, team: "Suiza", flag: "https://img.freepik.com/fotos-premium/bandera-suiza-ilustracion-3d-bandera-suiza-ondeando_2227-2353.jpg",grou:"Grupo G" },
  { id: 28, team: "Camerun", flag: "https://sooluciona.com/wp-content/uploads/2019/01/bandera-de-Camerun.jpg",grou:"Grupo G" },
  { id: 29, team: "Portugal", flag: "https://p4.wallpaperbetter.com/wallpaper/238/877/247/flags-flag-of-portugal-flag-portuguese-flag-hd-wallpaper-preview.jpg",grou:"Grupo H" },
  { id: 30, team: "Ghana", flag: "https://w0.peakpx.com/wallpaper/850/807/HD-wallpaper-ghana-flag-ghanian-flag-ghana-flag.jpg",grou:"Grupo H" },
  { id: 31, team: "Uruguay", flag: "https://st4.depositphotos.com/14547870/23623/i/600/depositphotos_236231110-stock-photo-uruguay-flag-waving-flag-of.jpg",grou:"Grupo H" },
  { id: 32, team: "Corea del Sur", flag: "https://cdn.pixabay.com/photo/2021/06/06/04/28/flag-6314261_960_720.jpg",grou:"Grupo H" },
];

const dates = [
  { id: 1, dateF: "Domingo, 20 de Noviembre de 2022", hour: "10:00", teamA: 1, teamB: 2 },
  { id: 2, dateF: "Lunes, 21 de Noviembre de 2022", hour: "07:00", teamA: 5, teamB: 6 },
  { id: 3, dateF: "Lunes, 21 de Noviembre de 2022", hour: "10:00", teamA: 3, teamB: 4 },
  { id: 4, dateF: "Lunes, 21 de Noviembre de 2022", hour: "13:00", teamA: 7, teamB: 8 },
  { id: 5, dateF: "Martes, 22 de Noviembre de 2022", hour: "04:00", teamA: 9, teamB: 10 },
  { id: 6, dateF: "Martes, 22 de Noviembre de 2022", hour: "07:00", teamA: 15, teamB: 16 },
  { id: 7, dateF: "Martes, 22 de Noviembre de 2022", hour: "10:00", teamA: 11, teamB: 12 },
  { id: 8, dateF: "Martes, 22 de Noviembre de 2022", hour: "13:00", teamA: 13, teamB: 14 },
  { id: 9, dateF: "Miercoles, 23 de Noviembre de 2022", hour: "04:00", teamA: 23, teamB: 24 },
  { id: 10, dateF: "Miercoles, 23 de Noviembre de 2022", hour: "07:00", teamA: 19, teamB: 20 },
  { id: 11, dateF: "Miercoles, 23 de Noviembre de 2022", hour: "10:00", teamA: 17, teamB: 18 },
  { id: 12, dateF: "Miercoles, 23 de Noviembre de 2022", hour: "13:00", teamA: 21, teamB: 22 },
  { id: 13, dateF: "Jueves, 24 de Noviembre de 2022", hour: "04:00", teamA: 27, teamB: 28 },
  { id: 14, dateF: "Jueves, 24 de Noviembre de 2022", hour: "07:00", teamA: 31, teamB: 32 },
  { id: 15, dateF: "Jueves, 24 de Noviembre de 2022", hour: "10:00", teamA: 29, teamB: 30 },
  { id: 16, dateF: "Jueves, 24 de Noviembre de 2022", hour: "13:00", teamA: 25, teamB: 26 },
  { id: 17, dateF: "Viernes, 25 de Noviembre de 2022", hour: "04:00", teamA: 8, teamB: 6 },
  { id: 18, dateF: "Viernes, 25 de Noviembre de 2022", hour: "07:00", teamA: 1, teamB: 3 },
  { id: 19, dateF: "Viernes, 25 de Noviembre de 2022", hour: "10:00", teamA: 4, teamB: 2 },
  { id: 20, dateF: "Viernes, 25 de Noviembre de 2022", hour: "13:00", teamA: 5, teamB: 7 },
  { id: 21, dateF: "Sabado, 26 de Noviembre de 2022", hour: "04:00", teamA: 16, teamB: 14 },
  { id: 22, dateF: "Sabado, 26 de Noviembre de 2022", hour: "07:00", teamA: 12, teamB: 10 },
  { id: 23, dateF: "Sabado, 26 de Noviembre de 2022", hour: "10:00", teamA: 13, teamB: 15 },
  { id: 24, dateF: "Sabado, 26 de Noviembre de 2022", hour: "13:00", teamA: 9, teamB: 11 },
  { id: 25, dateF: "Domingo, 27 de Noviembre de 2022", hour: "04:00", teamA: 20, teamB: 18 },
  { id: 26, dateF: "Domingo, 27 de Noviembre de 2022", hour: "07:00", teamA: 21, teamB: 23 },
  { id: 27, dateF: "Domingo, 27 de Noviembre de 2022", hour: "10:00", teamA: 24, teamB: 22 },
  { id: 28, dateF: "Domingo, 27 de Noviembre de 2022", hour: "13:00", teamA: 17, teamB: 19 },
  { id: 29, dateF: "Lunes, 28 de Noviembre de 2022", hour: "04:00", teamA: 28, teamB: 26 },
  { id: 30, dateF: "Lunes, 28 de Noviembre de 2022", hour: "07:00", teamA: 32, teamB: 30 },
  { id: 31, dateF: "Lunes, 28 de Noviembre de 2022", hour: "10:00", teamA: 25, teamB: 27 },
  { id: 32, dateF: "Lunes, 28 de Noviembre de 2022", hour: "13:00", teamA: 29, teamB: 31 },
  { id: 33, dateF: "Martes, 29 de Noviembre de 2022", hour: "09:00", teamA: 2, teamB: 3 },
  { id: 34, dateF: "Martes, 29 de Noviembre de 2022", hour: "09:00", teamA: 4, teamB: 1 },
  { id: 35, dateF: "Martes, 29 de Noviembre de 2022", hour: "13:00", teamA: 6, teamB: 7 },
  { id: 36, dateF: "Martes, 29 de Noviembre de 2022", hour: "13:00", teamA: 8, teamB: 5 },
  { id: 37, dateF: "Miercoles, 30 de Noviembre de 2022", hour: "09:00", teamA: 16, teamB: 13 },
  { id: 38, dateF: "Miercoles, 30 de Noviembre de 2022", hour: "09:00", teamA: 14, teamB: 15 },
  { id: 39, dateF: "Miercoles, 30 de Noviembre de 2022", hour: "13:00", teamA: 12, teamB: 9 },
  { id: 40, dateF: "Miercoles, 30 de Noviembre de 2022", hour: "13:00", teamA: 10, teamB: 11 },
  { id: 41, dateF: "Jueves, 1 de Diciembre de 2022", hour: "09:00", teamA: 24, teamB: 21 },
  { id: 42, dateF: "Jueves, 1 de Diciembre de 2022", hour: "09:00", teamA: 22, teamB: 23 },
  { id: 43, dateF: "Jueves, 1 de Diciembre de 2022", hour: "13:00", teamA: 20, teamB: 17 },
  { id: 44, dateF: "Jueves, 1 de Diciembre de 2022", hour: "13:00", teamA: 18, teamB: 19 },
  { id: 45, dateF: "Viernes, 2 de Diciembre de 2022", hour: "09:00", teamA: 32, teamB: 29 },
  { id: 46, dateF: "Viernes, 2 de Diciembre de 2022", hour: "09:00", teamA: 30, teamB: 31 },
  { id: 47, dateF: "Viernes, 2 de Diciembre de 2022", hour: "13:00", teamA: 26, teamB: 27 },
  { id: 48, dateF: "Viernes, 2 de Diciembre de 2022", hour: "13:00", teamA: 28, teamB: 25 }
]





export default class Calendar extends Component {
  state = {
    teams: teams
  }

  stateTwo = {
    dates: dates
  }

  numState = {
    num: 1
  }

  numStateTwo = {
    numTwo: 0
  }

  stateGroup = {
    groupUpdate: "Domingo, 20 de Noviembre de 2022"
  }

  intToChar = (int) => {
    return String.fromCharCode(int);
  }

  searchValue = (valuee) => {
    return this.state.teams[valuee-1]
  }

  updateNum = () => {
    if (this.numState.num <= 1) {
      this.numStateTwo.numTwo = this.numState.num
      this.setState({ numTwo: this.numStateTwo.numTwo })
      this.numState.num = this.numState.num + 3
      this.setState({ num: this.numState.num })
      this.stateGroup.groupUpdate = this.stateTwo.dates[this.numState.num - 1].dateF
      this.setState({ groupUpdate: this.stateGroup.groupUpdate })
    }

    else if (this.numState.num < 48) {
      this.numStateTwo.numTwo = this.numState.num
      this.setState({ numTwo: this.numStateTwo.numTwo })
      this.numState.num = this.numState.num + 4
      this.setState({ num: this.numState.num })
      this.stateGroup.groupUpdate = this.stateTwo.dates[this.numState.num - 1].dateF
      this.setState({ groupUpdate: this.stateGroup.groupUpdate })
    }

    else {
      this.numState.num = 1
      this.numStateTwo.numTwo = 0
      this.stateGroup.groupUpdate = "Domingo, 20 de Noviembre de 2022"
      this.setState({ groupUpdate: this.stateGroup.groupUpdate })
      this.setState({ numTwo: this.numStateTwo.numTwo })
      this.setState({ num: this.numState.num })
    }
  }

  render() {
    return (

      <div>
        <div class="menu fixed-left">
          <hr></hr>
          <div class="label">Menu</div>
          <div class="spacer"></div>
          <div class="item"><span><Link to="/">Inicio</Link></span></div>
          <div class="item"><span><Link to="/Grupos">Grupos</Link></span></div>
        </div>
        <button class="btn btn-primary btn-xl text-uppercase fixed-bottom" onClick={() => this.updateNum()} >Siguiente</button>

        <section class="page-section bg-dark" id="ni">
          <div class="container">
            <div class="text-center">
              <h4 class="section-heading text-uppercase">{this.stateGroup.groupUpdate}</h4>
              <h3 class="section-subheading ">Calendario Fase de Grupos</h3>
            </div>
            {this.stateTwo.dates.filter(dataDates => dataDates.id > this.numStateTwo.numTwo && dataDates.id <= this.numState.num).map((dataDates) => {
              return (
                <div class="row">
                  
                  <div class="col-lg-2 col-sm-10 mb-4">
                    <div class="portfolio-item">
                      <div class="portfolio-link" data-bs-toggle="modal">
                        <div >
                          <div ><i class="fas fa-plus fa-3x"></i></div>
                        </div>
                        <img  src="" />
                      </div>
                    </div>
                  </div>

                  <div class="col-lg-3 col-sm-6 mb-4">
                    <div class="portfolio-item">
                      <Link class="portfolio-link" data-bs-toggle="modal">
                        <div class="portfolio-hover">
                          <div class="portfolio-hover-content"><i class="fas fa-plus fa-3x"></i></div>
                        </div>
                        <img class="img-fluid" src={this.searchValue(dataDates.teamA).flag} />
                      </Link>
                      <div class="portfolio-caption">
                        <div class="portfolio-caption-heading">{this.searchValue(dataDates.teamA).team}</div>
                        <div class="portfolio-caption-subheading ">Hora del Partido: {dataDates.hour} </div>
                        <div class="portfolio-caption-subheading ">{this.searchValue(dataDates.teamA).grou}</div>
                      </div>
                    </div>
                  </div>

                  <div class="col-lg-2 col-sm-10 mb-4">
                    <div class="portfolio-item">
                      <Link class="portfolio-link" data-bs-toggle="modal">
                        <div class="portfolio-hover">
                          <div class="portfolio-hover-content"><i class="fas fa-plus fa-3x"></i></div>
                        </div>
                        <img class="img-fluid" src="https://www.onlygfx.com/wp-content/uploads/2020/07/comic-vs-versus-1.png" />
                      </Link>
                    </div>
                  </div>


                  <div class="col-lg-3 col-sm-6 mb-4">
                    <div class="portfolio-item">
                      <Link class="portfolio-link" data-bs-toggle="modal">
                        <div class="portfolio-hover">
                          <div class="portfolio-hover-content"><i class="fas fa-plus fa-3x"></i></div>
                        </div>
                        <img class="img-fluid" src={this.searchValue(dataDates.teamB).flag} />
                      </Link>
                      <div class="portfolio-caption">
                        <div class="portfolio-caption-heading">{this.searchValue(dataDates.teamB).team}</div>
                        <div class="portfolio-caption-subheading">Hora del Partido: {dataDates.hour} </div>
                        <div class="portfolio-caption-subheading ">{this.searchValue(dataDates.teamA).grou}</div>
                      </div>
                    </div>
                  </div>

                  <div class="col-lg-2 col-sm-10 mb-4">
                    <div class="portfolio-item">
                      <div class="portfolio-link" data-bs-toggle="modal">
                        <div >
                          <div ><i class="fas fa-plus fa-3x"></i></div>
                        </div>
                        <img  src="" />
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-2 col-sm-10 mb-4">
                    <div class="portfolio-item">
                      <div class="portfolio-link" data-bs-toggle="modal">
                        <div >
                          <div ><i class="fas fa-plus fa-3x"></i></div>
                        </div>
                        <img  src="" />
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-2 col-sm-10 mb-4">
                    <div class="portfolio-item">
                      <div class="portfolio-link" data-bs-toggle="modal">
                        <div >
                          <div ><i class="fas fa-plus fa-3x"></i></div>
                        </div>
                        <img  src="" />
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-2 col-sm-10 mb-4">
                    <div class="portfolio-item">
                      <div class="portfolio-link" data-bs-toggle="modal">
                        <div >
                          <div ><i class="fas fa-plus fa-3x"></i></div>
                        </div>
                        <img  src="" />
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-2 col-sm-10 mb-4">
                    <div class="portfolio-item">
                      <div class="portfolio-link" data-bs-toggle="modal">
                        <div >
                          <div ><i class="fas fa-plus fa-3x"></i></div>
                        </div>
                        <img  src="" />
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-2 col-sm-10 mb-4">
                    <div class="portfolio-item">
                      <div class="portfolio-link" data-bs-toggle="modal">
                        <div >
                          <div ><i class="fas fa-plus fa-3x"></i></div>
                        </div>
                        <img  src="" />
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-2 col-sm-10 mb-4">
                    <div class="portfolio-item">
                      <div class="portfolio-link" data-bs-toggle="modal">
                        <div >
                          <div ><i class="fas fa-plus fa-3x"></i></div>
                        </div>
                        <img  src="" />
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-2 col-sm-10 mb-4">
                    <div class="portfolio-item">
                      <div class="portfolio-link" data-bs-toggle="modal">
                        <div >
                          <div ><i class="fas fa-plus fa-3x"></i></div>
                        </div>
                        <img  src="" />
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-2 col-sm-10 mb-4">
                    <div class="portfolio-item">
                      <div class="portfolio-link" data-bs-toggle="modal">
                        <div >
                          <div ><i class="fas fa-plus fa-3x"></i></div>
                        </div>
                        <img  src="" />
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-2 col-sm-10 mb-4">
                    <div class="portfolio-item">
                      <div class="portfolio-link" data-bs-toggle="modal">
                        <div >
                          <div ><i class="fas fa-plus fa-3x"></i></div>
                        </div>
                        <img  src="" />
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-2 col-sm-10 mb-4">
                    <div class="portfolio-item">
                      <div class="portfolio-link" data-bs-toggle="modal">
                        <div >
                          <div ><i class="fas fa-plus fa-3x"></i></div>
                        </div>
                        <img  src="" />
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-2 col-sm-10 mb-4">
                    <div class="portfolio-item">
                      <div class="portfolio-link" data-bs-toggle="modal">
                        <div >
                          <div ><i class="fas fa-plus fa-3x"></i></div>
                        </div>
                        <img  src="" />
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-2 col-sm-10 mb-4">
                    <div class="portfolio-item">
                      <div class="portfolio-link" data-bs-toggle="modal">
                        <div >
                          <div ><i class="fas fa-plus fa-3x"></i></div>
                        </div>
                        <img  src="" />
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-2 col-sm-10 mb-4">
                    <div class="portfolio-item">
                      <div class="portfolio-link" data-bs-toggle="modal">
                        <div >
                          <div ><i class="fas fa-plus fa-3x"></i></div>
                        </div>
                        <img  src="" />
                      </div>
                    </div>
                  </div>
                  




                </div>

                
              )
            })}
          </div>
        </section>

      </div>
    )
  }
}
