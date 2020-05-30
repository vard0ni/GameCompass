import {CompassComponent} from '../CompassComponent';

export class Diagram extends CompassComponent {

  template() {
    // return `<div class="diagram">Diagram</div>`;
    return 'var gameDiagram = function CreateDiagramCanvas() {
		var  canvas = document.createElement("canvas");
		canvas.setAttribute("id", "diagram");
		canvas.setAttribute("width", "600");
		canvas.setAttribute("height", "600");

		document.body.appendChild(canvas);
		var ctx = canvas.getContext('2d');

		var x = 300;
		var y = 300;
		var width = 300;
		var halfWidth = width / 2;

		ctx.fillStyle = 'white';
		ctx.beginPath();

		//rhombus
		ctx.moveTo(x, y + halfWidth);
		ctx.lineTo(x - halfWidth, y);
		ctx.lineTo(x, y - halfWidth);
		ctx.moveTo(x, y + halfWidth);
		ctx.lineTo(x, y + halfWidth);
		ctx.lineTo(x + halfWidth, y);
		ctx.lineTo(x, y - halfWidth);
		//square
		ctx.moveTo(x, y);
		ctx.rect(x-halfWidth/2, y-halfWidth/2, halfWidth, halfWidth);

		ctx.stroke();
		};';
  }

  result() {
    return this.template();
  }
}
