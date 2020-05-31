import {CompassComponent} from '../CompassComponent';
import {createProfile} from './createProfile';
import {fetching} from '../../store/actions';
import {store} from '../../store/store';
import {QUESTIONS} from './question';


export class Profile extends CompassComponent {

  get class() {
    return '.profile';
  }

  template() {
    return createProfile();
  }

  postData() {
    let params = {};
    QUESTIONS.forEach(q => {
      let values = [];
      q.inputs.forEach(i => {
        const el = document.getElementById(i.id);
        if (el.checked) {
          values.push(el.value);
        }
      });
      params = {...params, [q.key]: values};
    });
    console.log(params);
    store.dispatch(fetching(params));
  }
}
