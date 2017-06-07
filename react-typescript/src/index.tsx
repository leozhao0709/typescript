import * as React from "react";
import * as ReactDOM from "react-dom";
import { Home } from './components/home/Home';

ReactDOM.render(<Home name="Max" age={27}></Home>, document.getElementById('app'))
