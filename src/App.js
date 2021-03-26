import React from 'react';
import Form from './components/Form'
import People from './components/People'
class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      numero: 1,
      gente: [],
      genero: "any",
      paises: {
        AU: true,
        BR: false,
        CA: false,
        CH: false,
        DE: false,
        DK: false,
        ES: false,
        FI: false,
        FR: false,
        GB: false,
        IE: false,
        IR: false,
        NO: false,
        NL: false,
        TR: true,
        US: true
      }
    }
  }
  onChange = (e) => {
    if (e.target.name === "genero") {
      this.setState({
        [e.target.name]: e.target.value
      })
    } else if (e.target.type === "checkbox") {
      const id = e.target.id
      this.setState({
        paises: {...this.state.paises,[id]:e.target.checked}
      })
    } else {
      this.setState({
        [e.target.id]: e.target.value
      })
    }
  }
  onSubmit = (e) => {
    e.preventDefault()
    let verificados = this.paisesVerificados().join()
    this.fetchApi(this.state.numero,this.state.genero,verificados)
  }
  fetchApi = (numero,genero,paises) =>{
    const url = `https://randomuser.me/api/?results=${numero}&gender=${genero}&nat=${paises}`
    fetch(url)
      .then(respuesta => respuesta.json())
      .then(resultado => {
        this.setState({
          gente:resultado.results
        })
      })
      console.log(url)
  }
  paisesVerificados = ()=>{
    const verificados = []
    const paises = this.state.paises
    for (let pais in paises){
      if(paises[pais]){
        verificados.push(pais)
      }
    }
    return verificados
  }
  render(){
    return(
      <>
      <Form
      onChange={this.onChange}
      onSubmit={this.onSubmit}
      estado={this.state}
      ></Form>
      <div className="container">
        <div className="row">
          {this.state.gente.map((persona) =>{
            return (
              <People
              key={persona.login.uuid}
              id={`${persona.name.first}${persona.name.last}`}
              sal={`${persona.name.first}${persona.name.last}`.toUpperCase()}//otro id
              persona={`${persona.name.first} ${persona.name.last} `}
              email={persona.email}
              gender={persona.gender}
              nat={persona.nat}
              img={persona.picture.large}
              ></People>
            )
          })}
        </div>       
      </div>
      </>
    )
  }
}
export default App;
