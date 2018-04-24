import React from 'react'
import $ from '../../../node_modules/jquery/dist/jquery.min'
// {this.props.getRanking.tier}
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
      <div id="retrieved" className="row" style={{ display: 'none' , margin: '0 15px 0 15px'}}>
        <div id="profile" className="col-sm-3 box1">
            <p>lol</p>
        </div>
        <div id="match-history" className="col-sm-8 sm-offset-1 box2">
        </div>
      </div>
    )
  }
}
