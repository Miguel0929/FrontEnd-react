
import {BrowserRouter, BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './App.css';
import ListarPacienteComponent from './Components/ListarPacienteComponet';
import CrearPacienteComponet from './Components/CrearPacienteComponent';
import EditarPacienteComponent from './Components/EditarPacienteComponent';

function App() {
  return (
    <div>
      <Router>
        <div className="container">
          <BrowserRouter>
          <Switch>
          <Route path = "/" exact component = {ListarPacienteComponent}></Route>
          <Route path = "/pacientes" component = {ListarPacienteComponent}></Route>
          <Route path = "/agregar-paciente" component = {CrearPacienteComponet}></Route>
          <Route path = "/editar-paciente/:idpac" component = {EditarPacienteComponent}></Route>
          </Switch>
          </BrowserRouter>
        </div>
      </Router>
    </div>
  );
}

export default App;
