import { View, Text } from 'react-native';
import Constants from 'expo-constants';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './HomeScreen'

const Main = () => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgb(34, 47, 62)' }}>
            <Home />
        </View>
    );
}

export default Main;