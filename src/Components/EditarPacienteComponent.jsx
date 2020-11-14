import React, { Component } from 'react'
import pacientservice from '../service/PacienteService'
class EditarPacienteComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            idpac: this.props.match.params.idpac,
            nombre: '',
            apellidoP: '',
            apellidoM: '',
            fechaNaci: '',
            edad: '',
            telefono: ''
        }
    }

    componentDidMount(){
        pacientservice.obtenerID(this.state.idpac).then( (res) =>{
            let paciente = res.data;
            this.setState({ nombre: paciente.nombre,
                apellidoP: paciente.apellidoP,
                apellidoM : paciente.apellidoM,
                fechaNaci : paciente.fechaNaci,
                edad : paciente.edad,
                telefono : paciente.telefono
            });
        });
    }
    guardar = (e) => {
        e.preventDefault();
        let paciente = {
            nombre: this.state.nombre,
            apellidoP: this.state.apellidoP,
            apellidoM: this.state.apellidoM,
            fechaNaci: this.state.fechaNaci,
            edad: this.state.edad,
            telefono: this.state.telefono
        };
        console.log('pacientes => ' + JSON.stringify(paciente));
        pacientservice.EditarPaciente(paciente, this.state.idpac).then(res =>
            this.props.history.push('/'))


    }
    changeNombre = (event) => {
        this.setState({ nombre: event.target.value });
    }
    changePaterno = (event) => {
        this.setState({ apellidoP: event.target.value });
    }
    changeMaterno = (event) => {
        this.setState({ apellidoM: event.target.value });
    }
    changeNacimiento = (event) => {
        this.setState({ fechaNaci: event.target.value });
    }
    changeEdad = (event) => {
        this.setState({ edad: event.target.value });
    }
    changeTel = (event) => {
        this.setState({ telefono: event.target.value });
    }


    render() {
        return (
            <div>
                <h3 className="text-center">EDITAR PACIENTE</h3>
                <form>
                    <label> NOMBRE: </label>
                    <input name="nombre"
                        value={this.state.nombre} onChange={this.changeNombre} />
                    <br></br>
                    <label> PATERNO: </label>
                    <input name="paterno"
                        value={this.state.apellidoP} onChange={this.changePaterno} />
                    <br></br>
                    <label> MATERNO: </label>
                    <input name="materno"
                        value={this.state.apellidoM} onChange={this.changeMaterno} />
                    <br></br>
                    <label> FECHA NACIMIENTO: </label>
                    <input name="fecha" type="date"
                        value={this.state.fechaNaci} onChange={this.changeNacimiento} />
                    <br></br>
                    <label> EDAD: </label>
                    <input name="edad"
                        value={this.state.edad} onChange={this.changeEdad} />
                    <br></br>
                    <label> TELEFONO: </label>
                    <input name="tel"
                        value={this.state.telefono} onChange={this.changeTel} />

                    <button onClick={this.guardar}>Guardar</button>

                </form>
            </div>
        )
    }
}
export default EditarPacienteComponent
