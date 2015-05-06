import assert from '../../assert';
import r from 'rethinkdb';
import {getTerms} from '../RethinkDBTestUtils';
import AllSelector from '../../../query/selectors/AllSelector';

describe('AllSelector', () => {
  function makeQuery() {
    let selector = new AllSelector();

    return getTerms(selector.toReQL(
      r, r.db('testdb'), {tableName: 'user'}
    ));
  }

  it('Should use correct table', () => {
    let result = makeQuery().find((part) => part.op === 'TABLE');
    assert.equal(result.args.first(), 'user');
  });
});
