var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GUINEAPATHS = ['https://image.ibb.co/bLO5h6/church_2464899_1920.jpg', 'https://image.ibb.co/jYRQh6/church_3015728_1920.jpg', 'https://image.ibb.co/evUd26/mont_saint_michel_688405_1920.jpg', 'https://image.ibb.co/gszNUm/mont_saint_michel_2489373_1920.jpg', 'https://image.ibb.co/doQU9m/moscow_2105606_1920.jpg', 'https://image.ibb.co/ebGrN6/san_francisco_1893985_1920.jpg', 'https://image.ibb.co/bMnCvR/canal_2989865_1920.jpg', 'https://image.ibb.co/cP3Vh6/eastern_state_penitentiary_3004123_1920.jpg', 'https://image.ibb.co/mHKsvR/fantasy_2995326_1920.jpg', 'https://image.ibb.co/jFdkFR/iceland_1979445_1920.jpg', 'https://image.ibb.co/gADwN6/lapland_2984828_1920.jpg'];

var GuineaPigs = function (_React$Component) {
  _inherits(GuineaPigs, _React$Component);

  function GuineaPigs(props) {
    _classCallCheck(this, GuineaPigs);

    var _this = _possibleConstructorReturn(this, (GuineaPigs.__proto__ || Object.getPrototypeOf(GuineaPigs)).call(this, props));

    _this.state = { currentGP: 0 };
    _this.interval = null;

    _this.nextGP = _this.nextGP.bind(_this);
    return _this;
  }

  _createClass(GuineaPigs, [{
    key: 'nextGP',
    value: function nextGP() {
      var current = this.state.currentGP;
      var next = ++current % GUINEAPATHS.length;
      this.setState({ currentGP: next });
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.interval = setInterval(this.nextGP, 5000);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      clearInterval(this.interval);
    }
  }, {
    key: 'render',
    value: function render() {
      var src = GUINEAPATHS[this.state.currentGP];
      return React.createElement(
        'div',
        null,
        React.createElement(
          'h1',
          null,
          'React Photo Carousel'
        ),
        React.createElement('img', { src: src })
      );
    }
  }]);

  return GuineaPigs;
}(React.Component);

ReactDOM.render(React.createElement(GuineaPigs, null), document.getElementById('app'));