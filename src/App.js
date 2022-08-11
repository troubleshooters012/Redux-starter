import "./App.css";

import {connect} from 'react-redux';

import {ADD} from './Redux/Actions/Actions';

const mapStateToProps = (state) => {
  return {
    itemList: state.data
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addItem: (item) => {
      return dispatch(ADD(item))
    }
  }
}

function App(props) {
  function handleItem(e) {
    e.preventDefault();
    props.addItem({item: e.target.elements[0].value})
  }
    return (
      <div>
        <form onSubmit={handleItem}>
          <input type="text"/>
          <button>Submit</button>
        </form>
        {
          props.itemList.length > 0 && props.itemList.map((item,index)=>(
            <span key={index}>{item.item}</span>
          ))
        }
      </div>
    )
}

const AppComp = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppComp;
