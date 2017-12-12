import React from 'react';
import ReactDOM from 'react-dom';
import {Button} from './Button';

class Talker extends React.Component {
    talk() {
        let speech = '';
        for (let i = 0; i < 10000; i++) {
            speech += 'blah ';
        }
        alert(speech);
    }

    render() {
        return <Button talk={this.talk}/>;
    }
}

ReactDOM.render(
    <Talker/>, document.getElementById('app'));

// Button.js

import React from 'react';

export class Button extends React.Component {
    render() {
        return (
            <button>
                Click me!
            </button>
        );
    }
}