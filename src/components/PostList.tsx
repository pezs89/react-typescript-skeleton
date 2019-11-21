import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../store/features/posts/actions';

interface PostListProps {
  fetchPosts: Function;
}

class PostList extends Component<PostListProps> {
  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    return <div>PostList</div>
  }
}

export default connect(null, { fetchPosts })(PostList);