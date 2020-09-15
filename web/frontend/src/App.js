import React from 'react';
import Tree from 'react-tree-graph'
import Axios from 'axios';

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      data:{},
      upload:{status:false,file:null}
    }

    this.fileChange = this.fileChange.bind(this);
    this.submit = this.submit.bind(this);
  }

  submit(){
    let fd = new FormData();
    fd.append('file', this.state.upload.file);
    console.log(fd.get('file'));
    Axios.post('http://localhost:3002/uploadFile',fd).then(res=>{
      this.setState({
        upload:{status:true,file:null},
        data:res.data
      })
    }).catch(err=>{
      console.log(err);
    })
  }

  fileChange(event){
    // console.log(event.target.files[0]);
    this.setState({upload:{status:false,file:event.target.files[0]}});
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
    if(this.state.upload.status){
      return(
        <Tree
          data={this.state.data}
          height={400}
          width={400}
        />
      );
    }
    else{
      return(
        <div>
            <input type = "file" onChange={this.fileChange}/>
            <button onClick={this.submit}>Button</button>
        </div>
      );
    }
  }
}

export default App;