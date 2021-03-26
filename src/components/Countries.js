import React from 'react'
function Countries (props){
    return(
        <>
        <h3>Countries</h3>
            <div className="form-group">
                <div className="form-check form-check-inline">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        id="AU"
                        value="AU"
                        onChange={props.onChange}
                        checked={props.estado.paises.AU}
                    />
                    <label className="form-check-label" htmlFor="AU">Australia</label>
                </div>
                <div className="form-check form-check-inline">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        id="BR"
                        value="BR"
                        onChange={props.onChange}
                        checked={props.estado.paises.BR}
                    />
                    <label className="form-check-label" htmlFor="BR">Brazil</label>
                </div>
                <div className="form-check form-check-inline">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        id="CA"
                        value="CA"
                        onChange={props.onChange}
                        checked={props.estado.paises.CA}
                    />
                    <label className="form-check-label" htmlFor="CA">Canada</label>
                </div>
                <div className="form-check form-check-inline">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        id="CH"
                        value="CH"
                        onChange={props.onChange}
                        checked={props.estado.paises.CH}
                    />
                    <label className="form-check-label" htmlFor="CH">Switzerland</label>
                </div>
                <div className="form-check form-check-inline">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        id="DE"
                        value="DE"
                        onChange={props.onChange}
                        checked={props.estado.paises.DE}
                    />
                    <label className="form-check-label" htmlFor="DE">Germany</label>
                </div>
                <div className="form-check form-check-inline">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        id="DK"
                        value="DK"
                        onChange={props.onChange}
                        checked={props.estado.paises.DK}
                    />
                    <label className="form-check-label" htmlFor="DK">Denmark</label>
                </div>
                <div className="form-check form-check-inline">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        id="ES"
                        value="ES"
                        onChange={props.onChange}
                        checked={props.estado.paises.ES}
                    />
                    <label className="form-check-label" htmlFor="ES">Spain</label>
                </div>
                <div className="form-check form-check-inline">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        id="FI"
                        value="FI"
                        onChange={props.onChange}
                        checked={props.estado.paises.FI}
                    />
                    <label className="form-check-label" htmlFor="FI">Finland</label>
                </div>
                <div className="form-check form-check-inline">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        id="FR"
                        value="FR"
                        onChange={props.onChange}
                        checked={props.estado.paises.FR}
                    />
                    <label className="form-check-label" htmlFor="FR">France</label>
                </div>
                <div className="form-check form-check-inline">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        id="GB"
                        value="GB"
                        onChange={props.onChange}
                        checked={props.estado.paises.GB}
                    />
                    <label className="form-check-label" htmlFor="GB">Britain</label>
                </div>
                <div className="form-check form-check-inline">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        id="IE"
                        value="IE"
                        onChange={props.onChange}
                        checked={props.estado.paises.IE}
                    />
                    <label className="form-check-label" htmlFor="IE">Ireland</label>
                </div>
                <div className="form-check form-check-inline">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        id="IR"
                        value="IR"
                        onChange={props.onChange}
                        checked={props.estado.paises.IR}
                    />
                    <label className="form-check-label" htmlFor="IR">Iran</label>
                </div>
                <div className="form-check form-check-inline">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        id="NO"
                        value="NO"
                        onChange={props.onChange}
                        checked={props.estado.paises.NO}
                    />
                    <label className="form-check-label" htmlFor="NO">Norway</label>
                </div>
                <div className="form-check form-check-inline">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        id="NL"
                        value="NL"
                        onChange={props.onChange}
                        checked={props.estado.paises.NL}
                    />
                    <label className="form-check-label" htmlFor="NL">Holanda</label>
                </div>
                <div className="form-check form-check-inline">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        id="TR"
                        value="TR"
                        onChange={props.onChange}
                        checked={props.estado.paises.TR}
                    />
                    <label className="form-check-label" htmlFor="TR">Turkey</label>
                </div>
                <div className="form-check form-check-inline">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        id="US"
                        value="US"
                        onChange={props.onChange}
                        checked={props.estado.paises.US}
                    />
                    <label className="form-check-label" htmlFor="US">United States of America</label>
                </div>
            </div>
        </>
    )
}
export default Countries
