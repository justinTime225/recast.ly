class App extends React.Component {
  componentWillMount() {
    console.log(this.props.videoData);
  }
  render() {
    return (
      <div>
        <Nav />
        <div className="col-md-7">
          <VideoPlayer/>
          <h1>Hello</h1>
        </div>
        <div className="col-md-5">
          <VideoList videos={this.props.videoData}/>
        </div>
      </div>
    );
  }

}
  


// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
