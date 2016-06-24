class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      currentVideo: null
    };
  }
  componentWillMount() {
    this.getYoutubeVideo('angular tutorial');
  }
  setCurrentVideo(video) {
    console.log('setting video');
    this.setState({currentVideo: video});
  }
  getYoutubeVideo(query) {
    var YOUTUBE_API_KEY = '';
    const option = {
      key: YOUTUBE_API_KEY,
      query: query
    };
    this.props.searchYouTube(option, function(response) {
      this.setState({videos: response, currentVideo: response[0]});
    }.bind(this));
  }
  render() {
    if (!this.state.currentVideo) {
      return <div>Video Loading</div>;
    }
    return (
      <div>
        <Nav searchVideo={_.debounce((input) => this.getYoutubeVideo(input), 500)}/>
        <div className="col-md-7">
          <VideoPlayer video={this.state.currentVideo}/>
          <h1>Hello</h1>
        </div>
        <div className="col-md-5">
          <VideoList setVideo={this.setCurrentVideo.bind(this)} videos={this.state.videos}/>
        </div>
      </div>
    );
  }

}
  


// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
