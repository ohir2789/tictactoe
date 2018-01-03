import {X,O} from '../Sign/signs';

export default function setTurn(sign){
    if(sign==X) return O;
      else return X;
}