import React from "react";
import {View, Text} from "react-native";

class Home extends React.Component{
	render() {
		return(
			<View style={{flex:1,justifyContent:"center", alignItems:"center"}}>
				<Text>Hi TaxiAPP!!</Text>
			</View>
		);
	}
}

export default Home;