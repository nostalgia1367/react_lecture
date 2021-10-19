const React = require('react');
const { Component } = React;

class WordRelay extends Component {
    state = {
        text: 'Hello, webpack',
    };

    render() {
        return (
            <React.Fragment><h1>{this.state.text}</h1></React.Fragment>
        )
    }
}

module.exports = WordRelay;