import React, {Component} from 'react';
import { View, Text, Button } from 'react-native';

import { styles } from './styles/styles';


class Detail extends Component {


    render() {

        // console.log(this.props);

        return(
            <View style={styles.center}>
            <Text style={styles.title}>{this.props.route.params.screenName}</Text>
            <Button 
                title='View Bottom Tabs' 
                onPress={() => this.props.navigation.navigate('Bottom Tabs', {name: "param 1"})}
            />
    
            <Button 
                title='View Top Tabs' 
                onPress={() => this.props.navigation.navigate('Top Tabs',  {name: "param 2"})}
            />
            

            <Button 
                title='Pass Data Back' 
                onPress={() => this.props.navigation.navigate('Feed',  {data: "Hello back"})}
            />
    
        </View>
    
        );
       
    }
}
export default  Detail;