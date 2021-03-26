import React from'react'
function People(props){
    return(
        <>
        <div className="col-lg-4 col-md-6 col-sm-12 mt-1" >
          <div className="card" >
            <div className="card-header" >
              <div className="row">
                <img src={props.img} alt={props.persona} className="rounded mx-auto d-block" />
              </div>
              <div className="form-group row">
                <label className="col-sm-4 col-form-label">Name:</label>
                <div className="col-sm-8">
                  <input type="text" readOnly className="form-control-plaintext" value={props.persona} />
                </div>
              </div>
            </div>
            <div className="card-body" >
              <div className="form-group row">
                <label className="col-sm-4 col-form-label">Email:</label>
                <div className="col-sm-8">
                  <input type="text" readOnly className="form-control-plaintext" value={props.email} />
                </div>
              </div>
            </div>
            <div className="card-footer">
              <div className="form-group row">
                <label className="col-sm-4 col-form-label">Gender:</label>
                <div className="col-sm-8">
                  <input type="text" readOnly className="form-control-plaintext" value={props.gender} />
                </div>
              </div>
            </div>
          </div>
        </div>
        </>
    )
}
export default People
