import './styles/index.scss';
import {CompassApp} from './core/CompassApp';
import {isResultHash} from './core/utils';

const compass = new CompassApp('.profile__form');
if (isResultHash()) {
  compass.generateResult();
} else {
  compass.start();
}

addEventListener('hashchange', () => {
  if (isResultHash()) {
    compass.generateResult();
  }
});

document.querySelector('#profile_submit')
    .addEventListener('click', compass.profile.postData);
