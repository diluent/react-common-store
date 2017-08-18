import React from 'react';
import { render } from 'react-dom';
import { connect, Provider } from 'react-redux'
import { createStore } from 'redux'

let store = createStore( 
    (state = {}, action) => {
        switch(action.type) {
            case 'EDIT':
                return { ...state, ...action }
        }
    }
);

const mapStateToProps = (state = {}) => {
  return {
    value: state.value || ''
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onChange: e => {
        dispatch({type: 'EDIT', value: e.target.value })
    }
  }
}

const Component = props => {
        return <div>
            <textarea placeholder={props.name} value={props.value} onChange={props.onChange}></textarea>
        </div>
};

const WrappedComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component)


render((
    <Provider store={store}>
        <WrappedComponent name='component1'/>
    </Provider>
), document.getElementById('AppContainer1'));


render((
    <Provider store={store}>
        <WrappedComponent name='component2'/>
    </Provider>
), document.getElementById('AppContainer2'));