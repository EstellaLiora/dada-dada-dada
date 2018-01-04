import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import withRoot from '../components/withRoot';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Home from "./home"
import Page1 from "./page-1"
import Header from "../components/header"
import FirebaseExamples from "./firebase-examples"

const styles = {
  root: {
  },
};

class Index extends Component {

  render() {
    return (
      <Router>
        <div className={this.props.classes.root}>
            <Header />
            <div>
              <Route exact path="/" component={Home}/>
              <Route path="/page-1" component={Page1}/>
              <Route path="/firebase-examples" component={FirebaseExamples}/>
            </div>
        </div>
      </Router>
    );
  }
}

Index.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(Index));
