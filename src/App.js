import React from "react";
import WebsiteRouter from "routers/WebsiteRouter";
import withClearCache from "./ClearCache";

const ClearCacheComponent = withClearCache(MainApp);

function App() {
	return <ClearCacheComponent />;
}

function MainApp() {
	React.useEffect(() => {
		document.body.style.overflow = "scroll";
	}, []);
	return (
		<div className="App">
			<WebsiteRouter />
		</div>
	);
}

export default MainApp;
