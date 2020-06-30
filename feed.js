import React, {Component} from 'react';
import { View, Text, Button } from 'react-native';

import { styles } from './styles/styles';


class Feed extends Component {
    render() {
        console.log(this .props);
        return(

        <View style={styles.center}>
            <Text style={styles.title}>Navigation Drawer</Text>
            <Button 
                title='Go toFeed Item' 
                onPress={() => this.props.navigation.navigate('Detail', {screenName: "Kev Detail Screen"})}
            />
        </View>

        );
       
    }
}


export default  Feed;