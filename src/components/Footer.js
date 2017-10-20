import { Nav, NavItem, Navbar } from 'react-bootstrap'
import React, {Component} from 'react'

import 'bootstrap'

import '../css/Footer.css'

class Footer extends Component {
  constructor () {
    super()
    this.state = {
      YelperBCN: '',
      About: '',
      Contact: '',
      ThanksTo: ''
    }
  }
  render () {
    return (
      <div>
        <Navbar inverse collapseOnSelect className={`nav-selector ${this.props.style}`} >
          <Navbar.Header>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <Navbar.Brand data-toggle="collapse"  data-target="#yelperbcn"  eventKey={1}>YelperBCN</Navbar.Brand>
              <NavItem data-toggle="collapse"  data-target="#about" >About</NavItem>
              <NavItem  data-toggle="collapse"  data-target="#contact"  eventKey={3}>Contact</NavItem>
              <NavItem  data-toggle="collapse"  data-target="#thanksto"  eventKey={4}>Thanks to</NavItem>
              <div className="divCollapse" >
                <div id="about" className="collapse divFooterAbout">
                  <p> <br /> <br /> <br />YelperBCN es una aplicación basada en la API pública de yelp.com mediante la cual podemos acceder a una gran base de datos sobre distintos tipos de negocios.
                  Usando el buscador podemos introducir peticiones de busqueda tales como el nombre un tipo de negocio o un producto en concreto.
                  Los resultados se van a presentar en una lista con información detallada de la búsqueda. Posteriormente se puede seleccionar uno de los elementos listados para acceder a sus reviews.</p>
                </div>
                <div id="yelperbcn" className="collapse divFooterYelperBcn">
                  <p> <br /> <br /> <br />YelperBCN surge como un proyecto de equipo propuesto por la academia Skylabcoders a fin de consolidar los conocimientos adqueridos durante el curso en el apartado front-end.</p>
                </div>
                <div id="contact" className="collapse divFooterContact">
                  <p> <br /> <br /> <br />YelperBCN ha sido diseñado por cuatro estudiantes de SkylabCoders</p>
                  <div className="container">
                    <div className="row">
                      <div className="col-md-4">
                        <p>Pau Sarobe</p>
                        <p>Abel Canet</p>
                        <p>Nacho Torrella</p>
                        <p>Kevin Palomino</p>
                      </div>
                      <div className="col-md-1">
                        <a href="https://github.com/pausarobe"><img className="github_img" src="https://image.flaticon.com/icons/svg/25/25231.svg" /></a>
                        <a href="https://github.com/eibol87"><img className="github_img" src="https://image.flaticon.com/icons/svg/25/25231.svg" /></a>
                        <a href="https://github.com/agonistickatai"><img className="github_img" src="https://image.flaticon.com/icons/svg/25/25231.svg" /></a>
                        <a href="https://github.com/<kevinrosmusic> </kevinrosmusic>"><img className="github_img" src="https://image.flaticon.com/icons/svg/25/25231.svg" /></a>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="thanksto" className="collapse divFooterThanksTo">
                  <br /> <br /> <br />
                  Desde YelperBCN queremos agradecer a Juanma Garrido, Manuel Barzi, Joan Albert, Alex Delgado, Angels Gilabert y David Monreal por la dedicación y atención para este proyecto.
                </div>
              </div>
            </Nav>
            <Nav pullRight>
              <NavItem eventKey={5}>SkylabStudents - © 2017</NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    )
  }
}

export default Footer
