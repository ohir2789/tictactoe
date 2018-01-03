import {X,O} from '../Sign/signs';

export default function randomPlayer(){
    if(Math.floor(Math.random() * 10)%2==0) return X;
    else return O;
  }