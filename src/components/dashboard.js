import React, {Component} from 'react'
import '../css/main.css'
import Busqueda from '../components/busqueda'
import BusquedaAvanzada from '../components/busquedaAvanzada'
export default class dashboard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showComponentBusqueda: false,
            showComponentBusquedaAvanzada: false
        }
        this.showBusqueda = this.showBusqueda.bind(this)
        this.showBusquedaAvanzada = this.showBusquedaAvanzada.bind(this)
    }
    showBusqueda() {
        this.setState({showComponentBusqueda: true})
        this.setState({showComponentBusquedaAvanzada:false})
       
     }
     showBusquedaAvanzada() {
         this.setState({showComponentBusquedaAvanzada:true})
         this.setState({showComponentBusqueda:false})
        
     }
    render(){
        const {showComponentBusqueda, showComponentBusquedaAvanzada} = this.state
        return(
            <div>
              <div className="dashboardTopBar"></div>
                <a className="tabLinks" href="#" onClick={this.showBusqueda}>Busqueda de Aspirantes</a>
                <a className="tabLinks" href="#" onClick={this.showBusquedaAvanzada}>Avanzada</a>
                {showComponentBusqueda ?
                      <Busqueda />:
                      null
                    }
                  {showComponentBusquedaAvanzada ?
                      <BusquedaAvanzada />:
                      null
                    }
            </div>
        )
    }
}