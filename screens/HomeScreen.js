import { View, ActivityIndicator } from 'react-native';
import Logo from '../assets/AppointMelogo.png';
import { Image, Button } from '@rneui/base';

const Home = () => {
  return (
    <View>
      <Image
        source={Logo}
        style={{  width: 200, height: 100}}
        PlaceholderContent={<ActivityIndicator />}
      />
      <Button
        title='Appointments'
        buttonStyle={{
            backgroundColor: 'rgb(49, 163, 159)',

            borderWidth: 0,
            borderRadius: 30
        }}
        containerStyle={{
            width: 200,
            marginVertical: 15
        }}
        titleStyle={{ fontWeight: 'bold'}}
      />
    </View>
  );
};

export default Home;
