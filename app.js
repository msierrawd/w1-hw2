// Left component 
class Left extends React.Component {
    render(){
        return(
            <div className="leftS">
                <h1>Blah</h1>
            </div>
        )
    }
    }

// Middle component
class TopM extends React.Component {
    render() {
        return(
            <div className="topM">
                <div className ="topM1">
                    <h1>Blah</h1>
                </div>
                <div className="topM2">
                    <h1>Blah</h1>
                </div>
                <div className="topM3">
                    <h1>Blah</h1>
                </div>
            </div>
        )
    }
}

// Main 
class App extends React.Component {
    render () {
        return(
            <div className="overallDiv"> 
                <Left />
                <TopM />
            </div>
        )
    }
}


ReactDOM.render( <App/> , document.querySelector('main') );