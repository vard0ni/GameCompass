import './styles/index.scss';
import {CompassApp} from './core/CompassApp';
import {isResultHash} from './core/utils';

const compass = new CompassApp('#compass');
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
