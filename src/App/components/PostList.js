import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPosts } from '../action/fetchPostsAction';
import Loading from '../screens/layouts/loading';
import Div, { Body, Button, Data, Header, Row, Table, TableHeader, Text } from '../htmlTags';

/* Component for rendering single post in the table */
class Post extends PureComponent {
  render() {
    const post = this.props.postDetail;
    return (
      <Row uniqkey={post.id}>
        <Data>{post.userId}</Data>
        <Data>{post.id}</Data>
        <Data>{post.title}</Data>
        <Data>{post.body}</Data>
        <Data>
          <Link to={`/posts/${post.id}`}>
            <Button className="btn btn-outline-primary">
              <Text>View</Text>
            </Button>
          </Link>
        </Data>
      </Row>
    );
  }
}

/* Component for rendering table of all posts */
class PostList extends PureComponent {
  constructor(props) {
    super(props);
    this.props.dispatch(fetchPosts()); // get all posts
  }

  render() {
    if (this.props.postListStoreState.isLoading) return <Loading />;
    const { postList } = this.props.postListStoreState;
    const renderPostsList = postList.map(postDetail => <Post key={postDetail.id} postDetail={postDetail} />);
    return (
      <Div className="col-md-12 col-lg-12">
        <Div className="card mb-4">
          <Div className="card-block">
            <h3 className="card-title" style={{ textAlign: 'center' }}>
              <Text>Posts from JSONPlaceholder Mock Api</Text>
            </h3>
            <Div className="table-responsive">
              <Table className="table table-striped">
                <TableHeader>
                  <Row style={{ textAlign: 'center' }}>
                    <Header>User Id</Header>
                    <Header>Post Id</Header>
                    <Header>Title</Header>
                    <Header>Body</Header>
                    <Header>View</Header>
                  </Row>
                </TableHeader>
                <Body>{renderPostsList}</Body>
              </Table>
            </Div>
          </Div>
        </Div>
      </Div>
    );
  }
}

export default connect(
  state => ({
    postListStoreState: state.postListStoreState,
  }),
  null,
)(PostList);
