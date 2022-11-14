import React, { Component } from 'react'
import { Link } from 'react-router-dom';
const teams = [
    { id: 1, team: "Qatar", flag: "https://static3.depositphotos.com/1000501/170/i/600/depositphotos_1709033-stock-photo-qatari-flag.jpg" },
    { id: 2, team: "Ecuador", flag: "https://www.lifeder.com/wp-content/uploads/2018/10/bandera-de-Ecuador.jpg" },
    { id: 3, team: "Senegal", flag: "https://static.vecteezy.com/system/resources/previews/001/228/858/original/senegal-3d-flag-vector.jpg" },
    { id: 4, team: "Paises Bajos", flag: "https://static.vecteezy.com/system/resources/previews/001/228/894/non_2x/netherlands-3d-flag-vector.jpg" },
    { id: 5, team: "Inglaterra", flag: "https://media.istockphoto.com/id/489954902/es/foto/brit%C3%A1nica-bandera-union-jack-soplando-en-el-viento.jpg?s=612x612&w=0&k=20&c=wG_SQIW5KZikL92dcqu_spY1JPurLWpOR3n-Wr86ncY=" },
    { id: 6, team: "Iran", flag: "https://st.depositphotos.com/1482106/4308/i/450/depositphotos_43088291-stock-photo-waving-iran-flag.jpg" },
    { id: 7, team: "Estados Unidos", flag: "https://img.freepik.com/foto-gratis/bandera-estados-unidos-america_1401-253.jpg?w=2000" },
    { id: 8, team: "Gales", flag: "https://img.freepik.com/fotos-premium/bandera-gales-reino-unido_118047-3220.jpg?w=2000" },
    { id: 9, team: "Argentina", flag: "https://www.ucalp.edu.ar/wp-content/uploads/2019/07/banderaargentina.jpg" },
    { id: 10, team: "Arabia Saudi", flag: "https://w0.peakpx.com/wallpaper/756/16/HD-wallpaper-saudi-arabia-flag-green-silk-flag-national-symbols-saudi-arabia.jpg" },
    { id: 11, team: "Mexico", flag: "https://www.mexicodesconocido.com.mx/wp-content/uploads/2018/01/significado_colores_bandera_mexico.jpg" },
    { id: 12, team: "Polonia", flag: "https://descubrepolonia.net/wp-content/uploads/2021/03/flaga-polski-scaled.jpg" },
    { id: 13, team: "Francia", flag: "https://st.depositphotos.com/1610517/3425/i/450/depositphotos_34252637-stock-photo-france-flag-blowing-in-the.jpg" },
    { id: 14, team: "Australia", flag: "https://static9.depositphotos.com/1006269/1088/i/450/depositphotos_10884457-stock-photo-australian-flag.jpg" },
    { id: 15, team: "Dinamarca", flag: "https://st.depositphotos.com/1482106/4745/i/450/depositphotos_47456267-stock-photo-waving-denmark-flag.jpg" },
    { id: 16, team: "Tunez", flag: "https://cdn.pixabay.com/photo/2017/12/23/23/36/flag-of-tunisia-3036189_960_720.jpg" },
    { id: 17, team: "España", flag: "https://img.freepik.com/fotos-premium/bandera-espana-ilustracion-3d-bandera-espanola-ondeando_2227-2339.jpg" },
    { id: 18, team: "Costa Rica", flag: "https://i.pinimg.com/736x/8f/5a/6c/8f5a6cc4336464f7005368edea706363.jpg" },
    { id: 19, team: "Alemania", flag: "https://imagenesnoticias.com/wp-content/uploads/2019/01/0-e1547604146279.jpg" },
    { id: 20, team: "Japon", flag: "https://supercurioso.com/wp-content/uploads/2019/11/Bandera-de-Jap%C3%B3n-_-Descripci%C3%B3n-y-significado.jpg" },
    { id: 21, team: "Bélgica", flag: "https://cdn.pixabay.com/photo/2017/12/23/23/31/belgium-3036184_1280.jpg" },
    { id: 22, team: "Canada", flag: "https://es.red-leaf.com/content/files/07be08c6-454c-40f6-a56d-a74737ef9cf5/0.jpg" },
    { id: 23, team: "Marruecos", flag: "https://www.marruecos.com/wp-content/uploads/bandera-marruecos-grande-1920px.jpg" },
    { id: 24, team: "Croacia", flag: "https://c4.wallpaperflare.com/wallpaper/703/478/458/bandera-croacia-europa-wallpaper-preview.jpg" },
    { id: 25, team: "Brasil", flag: "https://t2.uc.ltmcdn.com/es/posts/1/2/5/significado_de_la_bandera_y_escudo_de_brasil_49521_orig.jpg" },
    { id: 26, team: "Serbia", flag: "https://img.freepik.com/fotos-premium/bandera-serbia-primer-plano-seda_406939-918.jpg?w=2000" },
    { id: 27, team: "Suiza", flag: "https://img.freepik.com/fotos-premium/bandera-suiza-ilustracion-3d-bandera-suiza-ondeando_2227-2353.jpg" },
    { id: 28, team: "Camerun", flag: "https://sooluciona.com/wp-content/uploads/2019/01/bandera-de-Camerun.jpg" },
    { id: 29, team: "Portugal", flag: "https://p4.wallpaperbetter.com/wallpaper/238/877/247/flags-flag-of-portugal-flag-portuguese-flag-hd-wallpaper-preview.jpg" },
    { id: 30, team: "Ghana", flag: "https://w0.peakpx.com/wallpaper/850/807/HD-wallpaper-ghana-flag-ghanian-flag-ghana-flag.jpg" },
    { id: 31, team: "Uruguay", flag: "https://st4.depositphotos.com/14547870/23623/i/600/depositphotos_236231110-stock-photo-uruguay-flag-waving-flag-of.jpg" },
    { id: 32, team: "Corea del Sur", flag: "https://cdn.pixabay.com/photo/2021/06/06/04/28/flag-6314261_960_720.jpg" },
];
export default class Groups extends Component {
    state = {
        teams: teams
    }

    numState = {
        num: 4
    }

    numStateTwo = {
        numTwo: 0
    }

    stateGroup = {
        groupUpdate: "Grupo A",
        numCharacter: 65
    }

    intToChar = (int) => {
        return String.fromCharCode(int);
    }

    searchValue = (valuee)=>{
        return this.state.teams[valuee]
    }

    updateNum = () => {
        if (this.numState.num < 32) {

            this.stateGroup.numCharacter = this.stateGroup.numCharacter + 1
            this.setState({ numCharacter: this.stateGroup.numCharacter })

            this.stateGroup.groupUpdate = "Grupo " + String.fromCharCode(this.stateGroup.numCharacter)
            this.setState({ groupUpdate: this.stateGroup.groupUpdate })

            this.numStateTwo.numTwo = this.numState.num
            this.setState({ numTwo: this.numStateTwo.numTwo })
            this.numState.num = this.numState.num + 4
            this.setState({ num: this.numState.num })
        }
        else {
            this.numState.num = 4
            this.numStateTwo.numTwo = 0
            this.stateGroup.numCharacter = 65
            this.stateGroup.groupUpdate = "Grupo " + String.fromCharCode(this.stateGroup.numCharacter)
            this.setState({ groupUpdate: this.stateGroup.groupUpdate })
            this.setState({ numCharacter: this.stateGroup.numCharacter })
            this.setState({ numTwo: this.numStateTwo.numTwo })
            this.setState({ num: this.numState.num })
        }
    }

    render() {
        return (

            <div>
                <div class="menu fixed-left ">
                    <hr></hr>
                    <div class="label">Menu</div>
                    <div class="spacer"></div>
                    <div class="item"><span><Link to="/">Inicio</Link></span></div>
                    <div class="item"><span><Link to="/calendario">Calendario</Link></span></div>
                </div>
                <button class="btn btn-primary btn-xl text-uppercase fixed-bottom " onClick={() => this.updateNum()} >Siguiente</button>

                <section class="page-section bg-dark" id="ni">
                <div class="container">
                    <div class="text-center">
                        <h4 class="section-heading text-uppercase">{this.stateGroup.groupUpdate}</h4>
                        <h3 class="section-subheading ">Fase de Grupos</h3>
                    </div>
                    <div class="row">
                            {this.state.teams.filter(dataTeams => dataTeams.id > this.numStateTwo.numTwo && dataTeams.id <= this.numState.num).map((dataTeams) => {
                                return (
                                    <div class="col-lg-6 col-sm-6 mb-4">
                                    <div class="portfolio-item">
                                        <Link class="portfolio-link" data-bs-toggle="modal">
                                            <div class="portfolio-hover">
                                                <div class="portfolio-hover-content"><i class="fas fa-plus fa-3x"></i></div>
                                            </div>
                                            <img class="img-fluid" src={dataTeams.flag} />
                                        </Link>
                                        <div class="portfolio-caption">
                                            <div class="portfolio-caption-heading">{dataTeams.team}</div>
                                            <div class="portfolio-caption-subheading ">{this.stateGroup.groupUpdate} </div>
                                        </div>
                                    </div>
                                </div>
                                )
                            })}
                         </div>
                </div>
            </section>

            </div>
        )
    }
}
