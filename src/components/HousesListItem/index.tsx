import React from 'react';

import House from '../../models/House';

interface Props {
  house: House;
}

class HouseListItem extends React.Component<Props, {}> {

  public render() {
    return <p onClick={ this.onClick }>{ this.props.house.name }</p>
  }

  private onClick = (): void => {
    console.log('in da onClick');
    console.log(this.props);
  }
}

export default HouseListItem;
