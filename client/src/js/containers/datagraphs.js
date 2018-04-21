import React from 'react'
import PropTypes from 'prop-types'

// <div className="row">
//   <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
//     <br/> {this.props.userData.count}
//     <br/> {this.props.userData.rating}
//     <br/> {this.props.userData.season}
//     <br/> {this.props.userData.score}
//     <br/> {this.props.userData.time}
//     <br/> {this.props.userData.tier}
//     <br/> {this.props.loaded}
//   </div>
// </div>
//
export default class Data extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      loadingImages: ['https://i.imgur.com/X5qB5C4.gif', 'https://i.imgur.com/NEOK7O2.gif', 'https://i.imgur.com/QlvrAQT.gif', 'https://i.imgur.com/gZeaiSZ.gif', 'https://i.imgur.com/GtB5uQO.gif']
    }
  }
  render () {
    switch (this.props.loaded) {
      case 1:
        return (<h1>Initial</h1>)
        break;
      case 2:
        return (<img src={this.state.loadingImages[Math.floor((Math.random() * 5))]}/>)
        break;
      case 3:
        return (<h1>Success</h1>)
        break;
      case 4:
        return (<h1>Private</h1>)
        break;
    }

  }
}

Data.propTypes = {
  userData: PropTypes.arrayOf(PropTypes.shape({
    count: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    season: PropTypes.number.isRequired,
    score: PropTypes.number.isRequired,
    time: PropTypes.number.isRequired,
    tier: PropTypes.number.isRequired
  })).isRequired,
  loaded: PropTypes.number.isRequired
}
