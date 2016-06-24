class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      currentVideo: null
    };
  }
  componentWillMount() {
    var YOUTUBE_API_KEY = 'AIzaSyBEsl8wfrHqZ9Ue3NCyRjARt3S8NeTv8as';
    console.log(this.props.YOUTUBE_API_KEY);
    this.setState({videos: this.props.videoData});
    const option = {
      key: YOUTUBE_API_KEY,
      query: 'react tutorial'
    };
    this.props.searchYouTube(option, function(response) {
      this.setState({videos: response, currentVideo: response[0]});
    }.bind(this));
  }
  render() {
    return (
      <div>
        <Nav />
        <div className="col-md-7">
          <VideoPlayer video={this.state.videos[0]}/>
          <h1>Hello</h1>
        </div>
        <div className="col-md-5">
          <VideoList videos={this.state.videos}/>
        </div>
      </div>
    );
  }

}
  


// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
