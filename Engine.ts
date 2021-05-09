export class Engine {
	/**
	 * @constructor
	 * Create a new game.
	 * 
	 * @param configObject
	 * @property canvasId
	 *  
	 *  
	 * 
	 */
	constructor({canvasID, w, h }) {
		let canvas; 
		canvas = document.getElementById( canvasID );
		//resolution size:
		canvas.width = w;
		canvas.height = h;
		//fullscreen by default:
		

		let ctx = canvas.getContext('2d');

		ctx.fillStyle = 'rgb(200, 0, 0)';
		ctx.fillRect(10, 10, 50, 50);

		ctx.fillStyle = 'rgba(0, 0, 200, 0.5)';
		ctx.fillRect(30, 30, 50, 500);
	}
}