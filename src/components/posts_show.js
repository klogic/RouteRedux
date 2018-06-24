import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost } from '../actions';

class PostsShow extends Component{
  componentDidMount(){
    const { id } = this.props.match.params;
    this.props.fetchPost(id);
  }

  render(){
    return (
      <div>
        Post PostShow
      </div>
    )
  }
}

function mapStatetoProps({ posts }, ownProps){
 return { post : posts[ownProps.match.params.id ]};
}

export default connect(mapStatetoProps, { fetchPost })(PostsShow);