import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
        <footer class="footer py-1" id="a">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-4 text-lg-start">KDJO24 &copy;</div>
                    <div class="col-lg-4 my-3 my-lg-0">
                        <div class=" btn-dark btn-social mx-2"><div ></div></div>
                        <div class=" btn-dark btn-social mx-2"><div ></div></div>
                        <div class=" btn-dark btn-social mx-2"><div ></div></div>
                    </div>
                    <div class="col-lg-4 text-lg-end">
                        <div class="link-dark text-decoration-none me-3" >Qatar 2022</div>
                    </div>
                </div>
            </div>
        </footer>
    )
  }
}
