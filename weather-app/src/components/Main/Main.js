import CitySelect from "components/Selects/CitySelect";
import StateSelect from "components/Selects/StateSelect";
import Chart from "containers/Chart";
import Map from "containers/Map";
import React, { useContext } from "react";
import { LocationContext } from "store/store";
import '../../stylesheets/map.css';

const Main = () => {
	const { currCity, currentWeather, currState } = useContext(LocationContext);
	return (
		<div>
			<div className="absolute z-40 flex flex-row space-x-3 rounded">
				<CitySelect />
			</div>
			<Map />
			<Chart />
		</div>
	);
};

export default Main;
