export default class Popup {

	constructor(options){
		this._els = document.querySelectorAll(options.selector);
		this.init();
	}

	init(){
		this._loop();
	}

	_loop(){
		for(let i = 0 ; i < this._els.length; i++){
			this._addHideClickEvent(this._els[i]);
			this._open(this._els[i], this._els[i].getAttribute('data-popup'))
	console.log(1);
		}
	}

	_open(el, target){
		document.querySelector(`.js-popup-link[data-popup-open=${target}]`).addEventListener('click', (e) => {
			// console.log(this);
			e.preventDefault();
			this._fadeIn(el);
		});
	}

	_addHideClickEvent(el){
		el.querySelector(".js-popup-overlay").addEventListener("click", this._hidefromOverlay.bind(this));
		el.querySelector(".js-close-popup").addEventListener("click", this._hidefromCloseBtn.bind(this));
	}

	_hidefromOverlay(el){
		let target = event.target;
		this._fadeOut(target.parentNode)
	}

	_hidefromCloseBtn(el){
		let target = event.target;
		this._fadeOut(target.parentNode.parentNode)
	}

	_fadeOut(el){
		el.style.opacity = 1;
		(function fade() {
			if ((el.style.opacity -= .1) < 0) {
				el.style.display = "none";
			} else {
				requestAnimationFrame(fade);
			}
		})();
	}

	_fadeIn(el, display){
		el.style.opacity = 0;
		el.style.display = "block";
		(function fade() {
			let val = parseFloat(el.style.opacity);
			if (!((val += .1) > 1)) {
				el.style.opacity = val;
				requestAnimationFrame(fade);
			}
		})();
	}
	// end
};