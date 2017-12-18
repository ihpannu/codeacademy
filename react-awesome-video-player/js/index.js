var VIDEOS = {
  deer: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_video-fast.mp4',
  snail: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_video-slow.mp4',
  cat: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_video-cute.mp4',
  spider: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_video-eek.mp4'
};

//--------------------------------------------
var App = React.createClass({
  displayName: 'App',
  getInitialState: function getInitialState() {
    return { src: VIDEOS.deer };
  },
  chooseVideo: function chooseVideo(newVideo) {
    this.setState({
      src: VIDEOS[newVideo]
    });
  },
  render: function render() {
    return React.createElement(
      'div',
      null,
      React.createElement(
        'h1',
        null,
        'React Video Player'
      ),
      React.createElement(Menu, { chooseVideo: this.chooseVideo }),
      React.createElement(Video, { src: this.state.src })
    );
  }
});

//--------------------------------------------
var Video = React.createClass({
  displayName: 'Video',
  render: function render() {
    return React.createElement(
      'div',
      null,
      React.createElement('video', {
        controls: true,
        autoPlay: true,
        src: this.props.src })
    );
  }
});

//--------------------------------------------
var Menu = React.createClass({
  displayName: 'Menu',
  handleClick: function handleClick(e) {
    var text = e.target.value;
    this.props.chooseVideo(text);
  },
  render: function render() {
    return React.createElement(
      'form',
      { onClick: this.handleClick },
      React.createElement('input', { type: 'radio', name: 'src', value: 'deer' }),
      ' Deer',
      React.createElement('input', { type: 'radio', name: 'src', value: 'snail' }),
      ' Snail',
      React.createElement('input', { type: 'radio', name: 'src', value: 'cat' }),
      ' Cat',
      React.createElement('input', { type: 'radio', name: 'src', value: 'spider' }),
      ' Spider'
    );
  }
});

//--------------------------------------------
ReactDOM.render(React.createElement(App, null), document.getElementById('app'));