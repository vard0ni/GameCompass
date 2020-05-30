import {CompassComponent} from '../CompassComponent';
import {createProfile} from './createProfile';

export class Profile extends CompassComponent {

  get class() {
    return '.profile';
  }

  template() {
    return createProfile();
  }
}
