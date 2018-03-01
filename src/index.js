require("babel-core/register");
require("babel-polyfill");
import * as React from "react";

export class TBMScanner extends React.Component {
	constructor(props) {
		super(props);
		this.fetchData = this.fetchData.bind(this);
		this.updateData = this.fetchData.bind(this);
		this.fetchData();
		setInterval(this.updateData, 1000);
		this.trips = [];
		this.stopPoints = [];
		this.index = 0;
	}

	async fetchData() {
		const response = await fetch(`https://ws.infotbm.com/ws/1.0/network/line-informations/line:TBC:${this.props.lineId}`);
		const result = await response.json();
		this.stopPoints = result.routes[0].stopPoints.map(stopPoint => {
			return stopPoint.id.split(":")[3];
		});
	}
	
	async updateData() {
		if(!this.stopPoints) {
			console.log("no stop points");
			return;
		}
		this.index = (this.index + 1) % this.stopPoints.length;
		const stopId = this.stopPoints[this.index];
		const response = await fetch(`https://ws.infotbm.com/ws/1.0/get-realtime-pass/${stopId}/${this.props.lineId}`);
		const result = await response.json();
		for(const destinationId in result.destinations) {
			for(const trip of result.destinations[destinationId]) {
				const tripIndex = this.trips.findIndex(it => it.trip_id === trip.trip_id);
				if (tripIndex === -1) {
					this.trips.push(trip);
					if(this.props.onNewBus) {
						this.props.onNewBus(trip);
					}
				} else {
					this.trips[tripIndex] = trip;
					if(this.props.onBusUpdate) {
						this.props.onBusUpdate(trip);
					}
				}
			}
		}
	}

	render() {
		return null;
	}
}