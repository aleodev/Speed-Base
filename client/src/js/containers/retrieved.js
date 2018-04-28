import React from 'react'
import $ from '../../../node_modules/jquery/dist/jquery.min'

export default class Retrieved extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      // ARRAY [0] = WINTERSEASON, ARRAY [1] = OFFSEASON
      parsedData: [
        {
          wRating: this.ratingImgCalc(),
          wPoints: Math.round(this.props.getRanking.rating, 0)

        }, {
          oRating: this.props.getRanking.tier,
          oPoints: this.props.getRanking.score
        }
      ],
      rankTable: [
        {entry: '#7c807f'},
        {beginner: '#333232'},
        {advanced: '#1c1b1b'},
        {expert: '#23254f'},
        {bronze: '#917248'},
        {silver: '#c7d4ea'},
        {gold: '#ede79a'},
        {platinum: '#66bc90'},
        {diamond: '#4a35be'}
      ]
    }
  }
  componentDidMount() {
    $("#search").hide()
    $("#winterseason").addClass(Object.keys(this.state.rankTable[this.state.parsedData[0].wRating]))
    $("#wSpan").addClass(Object.keys(this.state.rankTable[this.state.parsedData[0].wRating] + 'T'))
    $("#offseason").addClass(Object.keys(this.state.rankTable[this.state.parsedData[1].oRating]))
    $("#oSpan").addClass(Object.keys(this.state.rankTable[this.state.parsedData[1].oRating] + 'T'))
    $("#retrieved").fadeIn(1000)
  }
  ratingImgCalc() {
    var Score = this.props.getRanking.rating
    if (Score >= 0 && Score < 8000) {
      // ENTRY
      return 0
    } else if (Score >= 8000 && Score < 9000) {
      // BEGINNER
      return 1
    } else if (Score >= 9000 && Score < 10000) {
      // ADVANCED
      return 2
    } else if (Score >= 10000 && Score < 12000) {
      // EXPERT
      return 3
    } else if (Score >= 12000 && Score < 17000) {
      // BRONZE
      return 4
    } else if (Score >= 17000 && Score < 20000) {
      // SILVER
      return 5
    } else if (Score >= 20000 && Score < 24000) {
      // GOLD
      return 6
    } else if (Score >= 24000 && Score < 29000) {
      // PLATINUM
      return 7
    } else if (Score >= 29000 && Score < 999999) {
      // DIAMOND
      return 8
    }
  }
  render() {
    return (<div>
      <div id="retrieved" className="row" style={{
          display: 'none'
        }}>
        <div id="profile" className="col-xs-12 col-sm-4 col-md-4 col-lg-4 box1">
          <div className="ws row" id="winterseason">
            <div className="winter col-xs-12 col-sm-12 col-md-5 col-lg-5">
              <section id="snow"></section>
              <img className="rankImg" alt="winterrank" src={"/assets/winter" + this.state.parsedData[0].wRating + ".png.gz"}/><br/>
              <span className="rankSpan">Winter Season</span>
            </div>
            <div className="winter col-xs-12 col-sm-12 col-md-7 col-lg-7">
              <section id="snow"></section>
              <span id="wSpan" className="rankTSpan">{Object.keys(this.state.rankTable[this.state.parsedData[0].wRating])}</span>
            </div>
          </div>
          <div className="os row" id="offseason">
            <div className="off col-xs-12 col-sm-12 col-md-5 col-lg-5">
              <img className="rankImg" alt="offseasonrank" src={"/assets/off" + this.state.parsedData[1].oRating + ".png.gz"}/><br/>
              <span className="rankSpan">Off Season</span>
            </div>
            <div className="off col-xs-12 col-sm-12 col-md-7 col-lg-7">
              <span id="oSpan" className="rankTSpan lrankT">{Object.keys(this.state.rankTable[this.state.parsedData[1].oRating])}</span>
              <div className="progress-factor">
                <div className="progress-bar">
							<div className="bar has-rotation has-colors red heat-gradient" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">
								<div className="tooltip heat-gradient-tooltip"></div>
								<div className="bar-face face-position roof percentage"></div>
								<div className="bar-face face-position back percentage"></div>
								<div className="bar-face face-position floor percentage volume-lights"></div>
								<div className="bar-face face-position left"></div>
								<div className="bar-face face-position right"></div>
								<div className="bar-face face-position front percentage volume-lights shine"></div>
							</div>
						</div>
              </div>
            </div>
          </div>
        </div>
        <div id="match-history" className="col-xs-12 col-sm-8 col-md-8 col-lg-8 sm-offset-1 box2"></div>

      </div>
    </div>)
  }
}
//  {this.state.parsedData[0].wPoints} WINTER POINTS
//  {this.state.parsedData[1].oPoints} OFF SEASON POINTS
