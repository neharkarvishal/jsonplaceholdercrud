import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Loading from '../screens/layouts/loading';
import Div, { Text } from '../htmlTags';
import { fetchPost } from '../action/fetchPostAction';

/* Component for rendering single post with details */
class PostDetail extends PureComponent {
  constructor(props) {
    super(props);
    this.props.dispatch(fetchPost(props.match.params.id)); // get post id
  }

  render() {
    if (this.props.postDetailsStoreState.isLoading) return <Loading />;
    const { postDetails } = this.props.postDetailsStoreState;
    return (
      <Div className="col-md-12 col-lg-10">
        <Div className="card">
          <Div className="card-header">
            <Text>
              Post Id : {postDetails.id} | User Id : {postDetails.userId}
            </Text>
          </Div>
          <Div className="card-block" style={{ textAlign: 'center' }}>
            <Text> Title : {postDetails.title}</Text>
          </Div>
        </Div>
        <hr />
        <Div className="card">
          <Div className="card-header">
            <Text>Text body :</Text>
          </Div>
          <Div className="card-block" style={{ textAlign: 'center' }}>
            <Text>{postDetails.body}</Text>
          </Div>
        </Div>
      </Div>
    );
  }
}
export default connect(
  state => ({
    postDetailsStoreState: state.postDetailsStoreState,
  }),
  null,
)(PostDetail);
