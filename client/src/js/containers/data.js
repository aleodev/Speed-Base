import React from 'react'
import Retrieved from './retrieved'

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
      loadingImages: ['/assets/loading1.gif.gz', '/assets/loading2.gif.gz', '/assets/loading3.gif.gz', '/assets/loading4.gif.gz', '/assets/loading5.gif.gz']
    }
  }
  componentDidMount(){

  }
  getRetrieval () {
    switch (this.props.loaded) {
      case 1:
        return (<h1>Initial</h1>)
      case 2:
        return (<img id="loadimg" alt="loading" src={this.state.loadingImages[Math.floor((Math.random() * 5))]}/>)
      case 3:
        return (<Retrieved getRanking={this.props.getRanking}/>)
      case 4:
        return (<h1>Private</h1>)
      default:
      return (<h1>lol</h1>)
    }
}
  render () {
    return(<div>
      {this.getRetrieval()}
    </div>)
  }
}
