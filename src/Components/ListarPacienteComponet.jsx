import React, { Component } from 'react'
import pacienteService from '../service/PacienteService'

class ListarPacienteComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            pacientes: []
        }
       this.agregarPaciente=this.agregarPaciente.bind(this);
        this.editarPaciente=this.editarPaciente.bind(this);
        this.editarPaciente=this.editarPaciente.bind(this);
    }
    eliminarPaciente(idpac) {
        pacienteService.eliminarPaciente(idpac).then(res => {
            this.setState({ pacientes: this.state.pacientes.filter(paciente => paciente.idpac !== idpac) });
        });
    }
    componentDidMount() {
        pacienteService.getall().then((res) => {
            this.setState({ pacientes: res.data })
        });
    }
    agregarPaciente() {
        this.props.history.push('/agregar-paciente');
    }
    editarPaciente(idpac) {
        this.props.history.push(`/editar-paciente/${idpac}`);
    }
    render() {
        return (
            <div>
                                <h3>PACIENTES</h3>
                            
                            <br></br>
                                <button onClick={this.agregarPaciente}>Agregar</button>
                            <table>
                                <thead>
                                    <tr>
                                    <th>ID</th>
                                        <th>Nombre</th>
                                        <th>Paterno</th>
                                        <th>Materno</th>
                                        <th>Fecha Nacimiento</th>
                                        <th>Edad</th>
                                        <th>Telefono</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.pacientes.map(
                                            paciente =>
                                                <tr key={paciente.idpac}>
                                                    <td>{paciente.idpac}</td>
                                                    <td>{paciente.nombre}</td>
                                                    <td>{paciente.apellidoP}</td>
                                                    <td>{paciente.apellidoM}</td>
                                                    <td>{paciente.fechaNaci}</td>
                                                    <td>{paciente.edad}</td>
                                                    <td>{paciente.telefono}</td>
                                                    <td>
                                                    <button  onClick={() => this.editarPaciente(paciente.idpac)}>Editar </button>
                                                    <button  onClick={() => this.eliminarPaciente(paciente.idpac)}>Eliminar</button>
                                                    </td>
                                                </tr>
                                        )
                                    }
                                </tbody>
                            </table>
                            </div>                   
        )
    }
}
export default ListarPacienteComponent