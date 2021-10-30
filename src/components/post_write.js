import React from "react";

class PostWrite extends React.Component {
  constructor(props) {
    super(props);
    this.state = {username: '', text: '', title: ''};

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeText = this.handleChangeText.bind(this);
    this.handleChangeTitle = this.handleChangeTitle.bind(this);
    this.handleChangeImg = this.handleChangeImg.bind(this);
  }

  handleSubmit(event) {
      event.preventDefault();

      if (!("title" in this.state) || this.state.title.length === 0) {
        alert("You need to enter title.")
        return;
      }
      if (!("username" in this.state) || this.state.username.length === 0) {
        alert("You need to enter username.")
        return;
      }
      if (!("text" in this.state) || this.state.text.length === 0) {
        alert("You need to enter content.")
        return;
      }

      console.log("Submitting form...");
      
      console.log(JSON.stringify(this.state))
      fetch(`https://serverless-api.xuyaoyou.workers.dev/api/posts`, {
        method: 'post',
        body: JSON.stringify(this.state),
        headers: {
          'content-type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        },
      }).then(function(response) {
        console.log(JSON.stringify(response.json))
        alert("success")
        window.location.href="/";
        // return response.json();
      })
  }

  handleChange(event) {
    this.setState({username: event.target.value});
  }

  handleChangeText(event) {
    this.setState({text: event.target.value});
  }

  handleChangeTitle(event) {
    this.setState({title: event.target.value});
  }

  handleChangeImg(event) {
    this.setState({img: event.target.value});
  }


  render() {
    return (
    <div style={{marginLeft: 2 + 'em', marginTop: 2 + 'em', marginRight: 2 + 'em'}}>
      <form className="ui reply form" onSubmit={this.handleSubmit}>
      <div className="field mb-3">
          <label for="exampleInputEmail1" class="form-label">Your Username</label>
          <input className="form-control" type="text" value={this.state.username} placeholder="username" onChange={this.handleChange}/>
        </div>
        <div className="field mb-3">
          <label for="exampleInputEmail1" class="form-label">Blog Title</label>
          <input className="form-control" type="text" value={this.state.title} placeholder="title" onChange={this.handleChangeTitle}/>
        </div>
        <div className="field mb-3">
          <label for="exampleInputEmail1" class="form-label">Blog Content</label>
          <textarea className="form-control" value={this.state.text} placeholder="text" onChange={this.handleChangeText}></textarea>
        </div>
        <div className="field mb-3">
          <label for="exampleInputEmail1" class="form-label">Image URL</label>
          <textarea className="form-control" value={this.state.img} placeholder="text" onChange={this.handleChangeImg}></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Post
        </button>
      </form>
    </div>
    );
  }
};

export default PostWrite;