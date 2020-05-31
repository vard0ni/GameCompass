import {Diagram} from '../components/diagram/Diagram';
import {Games} from '../components/games/Games';
import {Profile} from '../components/profile/Profile';
import {node} from './utils';

export class CompassApp {

  constructor(id) {
    this.root = node(id);
    this.profile = new Profile();
    this.diagram = new Diagram();
    this.games = new Games();
  }

  start() {
    this.insert(this.profile.template());
  }

  generateResult() {
    this.appendResult(this.games.result() + this.diagram.result());
  }

  insert(template) {
    this.root.innerHTML = template;
  }

  appendResult(template) {
    const profileNode = node(this.profile.class);
    if (profileNode) {
      //this.root.removeChild(profileNode);
    }
    this.insert(template);
  }
}
