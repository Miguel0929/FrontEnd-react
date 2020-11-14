import axios from 'axios';

const Url = "http://localhost:8856/vog/list/pacientes";
class PacienteService{
    
    getall(){
        return axios.get(Url);
    }
    crearPaciente(paciente){
        return axios.post(Url, paciente);
    }

    obtenerID(pacienteID){
        return axios.get(Url + '/' + pacienteID);
    }

    EditarPaciente(paciente, pacienteID){
        return axios.put(Url + '/' + pacienteID, paciente);
    }

    eliminarPaciente(PacienteID){
        return axios.delete(Url + '/' + PacienteID);
    }
}
export default new PacienteService()