import React,{Component} from 'react'
import Gender from './Gender'
import Countries from './Countries'
class Form extends Component{
    constructor(props){
        super(props)
        this.state={
            nada:[]
        }
    }
    render(){
        return(
            <div className="container mt-1" >
                <div className="jumbotron">
                    <form onSubmit={this.props.onSubmit} >
                        <div className="form-group">
                            <label htmlFor="numero">Resultado</label>
                            <input type="number" className="form-control" id="numero" placeholder="1-2000" min="1" max="2000" value={this.props.estado.numero} onChange={this.props.onChange}/>
                        </div>
                          <Gender
                          onChange={this.props.onChange}
                          onSubmit={this.props.onSubmit}
                          estado={this.props.estado}
                          ></Gender>
                          <hr className="btn-primary" ></hr>
                          <Countries
                          onChange={this.props.onChange}
                          estado={this.props.estado}
                          ></Countries>
                          <hr className="btn-primary" ></hr>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        )
    }
}
export default Form
