import React from 'react'
function Gender (props){
    return(
        <>
        <h3>Gender</h3>
        <div className="form-group " >
            <div className="form-check">
                <input className="form-check-input" type="radio" name="genero" id="male" value="male"
                checked={props.estado.genero === 'male'}
                onChange={props.onChange} />
                <label className="form-check-label" htmlFor="male">
                    Male
                </label>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="radio" name="genero" id="female" value="female"
                checked={props.estado.genero === 'female'}
                onChange={props.onChange} />
                <label className="form-check-label" htmlFor="female">
                    Female
                </label>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="radio" name="genero" id="any" value="any"
                checked={props.estado.genero === 'any'}
                onChange={props.onChange} />
                <label className="form-check-label" htmlFor="any">
                    Any
                </label>
            </div>
        </div>
        </>
    )
}
export default Gender 
