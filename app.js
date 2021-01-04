class Left extends React.Component {
    render(){
        return(
            <div className="leftS">
                <h1>Blah</h1>
            </div>
        )
    }
    }


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

class BottomM extends React.Component {
    render() {
        return (
            <div className=" bottomM">

            </div>
        )
    }
}

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