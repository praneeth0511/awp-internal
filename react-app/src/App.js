import React from 'react'

class App extends React.Component{
    constructor(props){
        super(props)
        this.state={count:0}
    }

    render(){
        return(<>
            <h1>Class Component </h1>
            <p>Passed props are {this.props.name},{this.props.rollno}</p>
            </>
        )
    }

}

export default App