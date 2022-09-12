// import reactLogo from "./assets/react.svg";

import Home from "./page/home/Home";
import { Routes, Route, Link } from "react-router-dom";
import Login from "./page/login/Login";
import List from "./page/list/List";
import Single from "./page/single/Single";
import New from "./page/new/New";
import { userInputs } from "./formSource";
function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/">
					<Route index element={<Home />} />
					<Route path="login" element={<Login />} />
					<Route path="users">
						<Route index element={<List />} />
						<Route path=":userId" element={<Single />} />
						<Route
							path="new"
							element={
								<New inputs={userInputs} title="Add New User" />
							}
						/>
					</Route>
					<Route path="products">
						<Route index element={<List />} />
						<Route path=":productId" element={<Single />} />
						<Route
							path="new"
							element={
								<New
									inputs="{productInputs}"
									title="Add New Product"
								/>
							}
						/>
					</Route>
				</Route>
			</Routes>
		</div>
	);
}

export default App;
