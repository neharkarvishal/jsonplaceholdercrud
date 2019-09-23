import React, { PureComponent } from 'react';
import { Switch, Route } from 'react-router-dom';
import Layout from './screens/layouts/layout';

import ListPost from './components/PostList';
import DetailPost from './components/PostDetail';

class Routes extends PureComponent {
  render() {
    return (
      <Layout>
        <Switch>
          <Route exact path="/" component={ListPost} />
          <Route path={'/posts/:id'} component={DetailPost} />
        </Switch>
      </Layout>
    );
  }
}

export default Routes;
