import _ from 'lodash';
import './style.css';
import Img from './asd.jpg';
import Data from './data.xml';

function component() {
	const element = document.createElement('div');

	// Lodash, now imported by this script
	element.innerHTML = _.join(['Hello', 'webpack'], ' ');
	element.classList.add('hello');

	// Add the image to our existing div.
	const myIcon = new Image();
	myIcon.src = Img;

	element.appendChild(myIcon);

	console.log(Data)

	return element;
}

document.body.appendChild(component());