import { StatusBar } from 'expo-status-bar';
import { View ,Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigation from './Navigation/TabNavigation';

export default function App() {
  return (
    <View>
      <NavigationContainer>
        <TabNavigation/>
      </NavigationContainer>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


