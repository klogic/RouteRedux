import React, { Component } from 'react';
import { connect } from 'react-redux';
import  { fetchPosts } from '../actions';
import { Link } from 'react-router-dom';

class PostIndex extends Component{
  componentDidMount(){
    this.props.fetchPosts()
  }

  returnPosts(){
    return _.map(this.props.posts, post => {
      return (
        <li className="list-group-item" key={ post.id } >
        <Link to={`/posts/${post.id}`}>
          { post.title } 
        </Link>
        </li>
      )
    })
  }
  render(){
    return(
      <div>
        <div className="text-xs-right">
          <Link className="btn btn-primary" to="/posts/new">
            Add Post
          </Link>
        </div>
        <h3>Posts</h3>
        <ul className="list-group">
          { this.returnPosts() }
        </ul>
      </div>
    );
  }
}

function mapStatetoProps(state) {
  return { posts: state.posts }
}
export default connect(mapStatetoProps, { fetchPosts })(PostIndex);