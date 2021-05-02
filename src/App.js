import React from 'react';
import Dashboard from './screens/Dashboard';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


const App = () => {
  return (
		<Router>
			<Dashboard />
		</Router>
	);
};

export default App;
