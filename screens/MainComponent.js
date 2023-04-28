import { View, Text } from 'react-native';
import Constants from 'expo-constants';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Main = () => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgb(34, 47, 62)' }}>
            <Text style={{ color: 'white' }}>
                Welcome to my React Native App for AppointMe!
            </Text>
        </View>
    );
}

export default Main;