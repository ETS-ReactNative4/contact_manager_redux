import React, { Component } from 'react';
import Contact from './Contact';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

class Contacts extends Component {
  render() {
    const { contacts } = this.state;
    return (
      <React.Fragment>
        <h1 className="display-4 mb-2">
          <span className="text-danger">Contact</span> List
        </h1>
        {contacts.map(contact => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </React.Fragment>
    );
  }
}

const mapStateToProps = function(state){
  {contacts: state.contact.contacts}
};

const mapDispatchToProps = function(dispatch){
  {
    getContacts: function(){
      dispatch({type: GET_CONTACTS})
    }
  }
}
// connect takes anything we want:
// 1. mapped from Redux state to props in the component (function)
// 2. anything (actions) we want dispatched
export default connect()(Contacts);
