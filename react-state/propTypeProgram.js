import React from 'react';
import ReactDOM from 'react-dom';;


class MessageDisplayer extends React.Component {
  render() {
    return <h1>{this.props.message}</h1>;
  }
}

// This propTypes object should have one property for each expected prop:
MessageDisplayer.propTypes = {
  message: React.PropTypes.string
};

class BestSeller extends React.Component {
  render() {
    return (
      <li>
        Title:
        <span>
          {this.props.title}
        </span><br/>

        Author:
        <span>
          {this.props.author}
        </span><br/>

        Weeks:
        <span>
          {this.props.weeksOnList}
        </span>
      </li>
    );
  }
}

BestSeller.propTypes = {
  title: React.PropTypes.string.isRequired,
  author: React.PropTypes.string.isRequired,
  weeksOnList: React.PropTypes.number.isRequired

}


class BookList extends React.Component {
  render() {
    return (
      <div>
        <h1>Best Sellers</h1>
        <div>
          <ol>
            <BestSeller
              title="Glory and War Stuff for Dads"
              author="Sir Eldrich Van Hoorsgaard"
              weeksOnList={10}/>
            <BestSeller
              title="The Crime Criminals!"
              author="Brenda Sqrentun"
              weeksOnList={2}/>
            <BestSeller
              title="Subprime Lending For Punk Rockers"
              author="Malcolm McLaren"
              weeksOnList={600}/>
          </ol>
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <BookList/>, document.getElementById('app'));