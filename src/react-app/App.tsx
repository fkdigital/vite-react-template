// src/App.tsx

import { useState } from "react";
import "./App.css";

function App() {
	const [count, setCount] = useState(0);
	const [name, setName] = useState("unknown");

	return (
		<>

			<h1>Mainafam Immich Desktop <a href="/photos" target="_blank">Photos</a></h1>
			<div className="card">
				
				
			</div>
			<div className="card">
				<button
					onClick={() => {
						fetch("/api/")
							.then((res) => res.json() as Promise<{ name: string }>)
							.then((data) => setName(data.name));
					}}
					aria-label="get name"
				>
					Name from API is: {name}
				</button>
		
			</div>
	
		</>
	);
}

export default App;
