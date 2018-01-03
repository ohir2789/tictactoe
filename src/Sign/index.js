import React, { Component } from 'react';
import XPic from '../images/x.png';
import OPic from '../images/o.png';
import {X,O} from './signs'
import {ImageElement,EmptyElement,SignElement} from './styles';

class Sign extends Component {
  render() {
    return (
      <SignElement>
        {this.props.sign === X ? <ImageElement src={XPic}/>: null}
        {this.props.sign === O ? <ImageElement src={OPic}/> : null}
        {!this.props.sign? <EmptyElement />: null}
      </SignElement>
    );
  }
}

export default Sign;
