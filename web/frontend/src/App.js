import React from 'react';
import Tree from 'react-tree-graph'
import Axios from 'axios';

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      data:{}
    }
  }

  componentDidMount(){
    Axios.get("http://localhost:3002/").then(res=>{
      console.log(res.data);
      this.setState({data:res.data});
    }).catch(err=>{
      console.log(err);
    })
  }

  render(){
    return(
      <Tree
        data={this.state.data}
        height={400}
        width={400}
      />
    );
  }
}

export default App;