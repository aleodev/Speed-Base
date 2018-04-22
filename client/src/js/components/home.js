import React from 'react'
import $ from '../../../node_modules/jquery/dist/jquery.slim.min'
import Data from '../containers/data.js'

export default class Home extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      userData: [],
      //  1 = Initial, 2 = LOADING, 3 = SUCCESS, 4 = ERROR(PRIVATE)
      loaded: 1,
      err: 0
    }
  }

  // ON LOAD
  componentDidMount () {
    // BUTTON APPEAR
    $('#steamID').on('change keyup paste click blur', function () {
      if ($('#steamID').val().length > 13) {
        $('#button-wrapper').show()
      } else {
        $('#button-wrapper').hide()
      }
    })
    // ERROR HANDLE
    // if(this.state.err == 1){
    //
    // }
  }
  // ON LOAD
  // SEARCH FETCH
  handleSearch () {
    this.setState({loaded: 2})
    this.callApi()
      .then(res => this.setState({userData: res, loaded: 3}))
      .catch(err => this.setState({loaded: 4, err: 1}))
  }

  callApi = async () => {
    const response = await fetch('http://localhost:3001/data', {
      method: 'POST',
      body: JSON.stringify({steamID: $('#steamID').val()}),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    const body = await response.json()

    if (response.status !== 200)
      throw Error(body.message)

    return body
  };
  // SEARCH FETCH
  // RENDER
  render () {
    return (<main>
      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <div id="search">
            <span className="input input--minoru">
              <input className="input__field input__field--yoko" id="steamID" type="text" name="steamID"/>
              <label className="input__label input__label--yoko" htmlFor="steamID">
                <span className="input__label-content input__label-content--yoko">Steam ID</span>
              </label>
            </span>
            <div id="button-wrapper">
              <button onClick={this.handleSearch.bind(this)} className="btn btn-1 btn-1e">Search</button>
            </div>
          </div>
        </div>
      </div>
      <Data userData={this.state.userData} loaded={this.state.loaded}/>
    </main>)
  }
  // RENDER
}
