import React, { useState } from "react";
import Context from "./Context";

const ProviderContext = (props) => {
	const [mission, setMission] = useState({
        missionName: "Find Antoni kirchopshki",
        missionCountry: "Russia",
		missionAgentCode: "007",
		missionAgentName: "Agent James Bond",
		isMissionAgentAccepted: false,
	});
	return (
		<Context.Provider
			value={{
				data: mission,
				isMissionAccepted: () => {
					setMission({
						...mission,
						isMissionAgentAccepted: true,
					});
				},
				isMissionDecline: () => {
					setMission({
						...mission,
						isMissionAgentAccepted: false,
					});
				},
			}}
		>
			{props.children}
		</Context.Provider>
	);
};

export default ProviderContext;
