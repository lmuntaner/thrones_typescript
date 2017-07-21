import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Action, Dispatch } from 'redux';

import House from 'models/House';
import { State } from 'store';
import { addHouses, AddHousesAction } from 'store/actions';

import HouseListItem from 'components/HousesListItem';

interface Props {
  addHouses: (houses: [House]) => AddHousesAction;
  houses: [House];
}

class HousesList extends Component<Props, {}> {

  public componentDidMount() {
    fetch('https://anapioficeandfire.com/api/houses?pageSize=20')
      .then((res) => res.json())
      .then((houses: [House]): AddHousesAction => this.props.addHouses(houses));
  }

  public render() {
    return (
      <div>
        {
          this.props.houses.map((house: House) =>
            <HouseListItem key={ house.url } house={ house } />
          )
        }
      </div>
    )
  }
}

// using ES2017 to use Object.values
const mapStateToProps = (state: State) => ({
  houses: Object.values(state.houses),
});

const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
  addHouses: (houses: [House]): AddHousesAction => dispatch(addHouses(houses)),
});

// https://github.com/DefinitelyTyped/DefinitelyTyped/issues/8787
export default connect(mapStateToProps, mapDispatchToProps)(HousesList);
