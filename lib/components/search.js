import React from 'react';
import Component from '../component';

export default class Search extends Component {

  constructor() {
    super();
  }

  componentDidMount() {
  }

  componentWillReceiveProps(next) {
    const {active} = next;
  }

  template(css) {
    return (
      <div className={css(this.props.active ? 'visible' : 'hidden')}>
        <input type='text' placeholder='Search...' />
      </div>
    );
  }

  styles() {
    return {
      hidden: {
        display: 'none'
      },
      visible: {
        dispay: 'block'
      }
    };
  }

}
