import React, { Fragment } from "react";
import ProviderContext from "./Provider";
import Context from "./Context";

const App = () => {
	return (
		<div>
			<h1>Context API</h1>
			<ProviderContext>
				<Agents />
			</ProviderContext>
		</div>
	);
};

const Agents = () => {
	return <AgentOne />;
};
const AgentOne = () => {
	return <AgentTwo />;
};
const AgentTwo = () => {
	return <AgentThree />;
};
const AgentThree = () => {
	return <AgentBond />;
};

const AgentBond = () => {
	return (
		<Context.Consumer>
			{(context) => {
				return (
					<Fragment>
						<h3>Mission Information</h3>
						<p>
							Mission Name: <strong>{context.data.missionName}</strong>
						</p>
						<p>
							Mission country: <strong>{context.data.missionCountry}</strong>
						</p>
						<p>
							Agent Code: <strong>{context.data.missionAgentCode}</strong>
						</p>
						<p>
							Current status of mission:{" "}
							<strong>
								{context.data.isMissionAgentAccepted
									? "Mission Accepted"
									: "Not Accepted"}
							</strong>
						</p>
						<button onClick={context.isMissionAccepted}>
							Click to accept
							<br />
							the mission
						</button>
						<button onClick={context.isMissionDecline}>
							Click to decline
							<br />
							the mission
						</button>
					</Fragment>
				);
			}}
		</Context.Consumer>
	);
};

export default App;
