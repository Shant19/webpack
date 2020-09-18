import _ from "lodash";

async function getComponent() {
//   const element = document.createElement("div");

	// Lodash, now imported by this script
 	// element.innerHTML = _.join(["Hello", "webpack"], " ");

	const element = document.createElement('div');
	const { default: _ } = await import(/* webpackChunkName: "lodash" */ 'lodash');

	element.innerHTML = _.join(['Hello', 'webpack'], ' ');

	return element;
//   return import(/* webpackChunkName: "lodash" */ "lodash")
//   .then(({ default: _ }) => {
// 	  	const element = document.createElement("div");
	  
//       	element.innerHTML = _.join(["Hello", "webpack"], " ");

//       	return element;
//     })
//     .catch((error) => "An error occurred while loading the component");
}

getComponent().then((component) => {
  	document.body.appendChild(component);
});
