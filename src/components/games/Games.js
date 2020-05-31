import {CompassComponent} from '../CompassComponent';
import {store} from '../../store/store';

export class Games extends CompassComponent {

  template() {
    return `<div class="games">Games</div>`;
  }

  result() {
    const state = store.getState();
    console.log('Games: ', state.profile);
    console.log('Games: ', state);
    return this.template();
  }
}
