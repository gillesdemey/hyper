import React from 'react';
import Component from '../component';

export default class Search extends Component {

  componentDidMount() {
  }

  componentWillReceiveProps() {
  }

  template(css) {
    return (
      <div className={css(this.props.active ? 'visible' : 'hidden')}>
        <input type="text" placeholder="Search..."/>
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
