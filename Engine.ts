export class Engine {
	 private w: number;
	 private h: Number;
	/**
	 * @constructor
	 * Initial game setup
	 * @param {GameConfig} configObject
	 * 
	 */
	constructor({canvasID, w, h }: GameConfig) {
		let canvas; 
		canvas = document.getElementById( canvasID );
		//resolution size:
		canvas.width = w;
		canvas.height = h;
		//fullscreen by default:
		canvas.style.width = "100%";

		let ctx = canvas.getContext('2d');
		ctx.fillStyle = 'rgb(200, 0, 0)';
		ctx.fillRect(10, 10, 50, 50);
		ctx.fillStyle = 'rgba(0, 0, 200, 0.5)';
		ctx.fillRect(30, 30, 50, 500);

		
	}
}

export interface GameConfig {
	canvasID: string,
	w: number,
	h: number
}