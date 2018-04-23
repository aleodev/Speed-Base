import React from 'react'
import $ from '../../../node_modules/jquery/dist/jquery.min'
// this.props.data.tier
export default class Retrieved extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }
  componentDidMount () {
    $("#search").hide()
    $("#retrieved").fadeIn(1000)
  }
  render () {
    return(
      <div id="retrieved" className="row" style={{ display: 'none' }}>
        <div id="profile" className="col-xs-3 col-sm-3 col-md-3 col-lg-3 box1">
        </div>
        <div id="match-history" className="col-xs-9 col-sm-9 col-md-9 col-lg-9 box2">
        </div>
      </div>
    )
  }
}
