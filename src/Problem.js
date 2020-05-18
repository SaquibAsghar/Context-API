// import React, { useState } from "react";

// const Child = ({ brand }) => {
// 	return (
// 		<div>
// 			<h3>Child Component</h3>
// 			<p>This is Child component rendering inside the grandchild component</p>
// 			<p>
// 				Having brand name : <strong>{brand}</strong>
// 			</p>
// 		</div>
// 	);
// };


// const GrandChild = ({ brandName }) => {
// 	return (
// 		<div>
// 			<h3>Grandchild Component</h3>
// 			<p>This is grandchild component</p>
// 			<Child brand={brandName} />
// 		</div>
// 	);
// };

// const App = () => {
// 	const [brandName, setBrandName] = useState("Amazon");
// 	return (
// 		<div>
// 			<h1>App component</h1>
// 			<GrandChild brandName={brandName} />
// 		</div>
// 	);
// };

// export default App;
