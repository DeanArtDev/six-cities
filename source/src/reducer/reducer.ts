import {reducer as main} from './main/main';
import {reducer as user} from './user/user';
import {reducer as data} from './data/data';
import {combineReducers} from 'redux';
import {NameSpace} from '@root/types';

export default combineReducers({
  [NameSpace.MAIN]: main,
  [NameSpace.DATA]: data,
  [NameSpace.USER]: user,
});
