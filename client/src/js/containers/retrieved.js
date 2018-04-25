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
      <div id="retrieved" className="row" style={{ display: 'none' , margin: '0 5px 0 20px'}}>
        <div id="profile" className="col-xs-4 col-sm-4 col-md-4 col-lg-4 box1">
          <div className="row" id="winterseason">
            <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">lol</div>
            <div className="col-xs-7 col-sm-7 col-md-7 col-lg-7">lol</div>
            </div>
        </div>
        <div id="match-history" className="col-xs-8 col-sm-8 col-md-8 col-lg-8 sm-offset-1 box2">
        </div>
      </div>
    )
  }
}
