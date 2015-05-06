import {Map, Record} from 'immutable';

export default class Schema extends Record({
  calls: Map(),
  types: Map(),
}) {
}
