import React from 'react';
import {StatusBar} from './src/components';

import NavigationContainer from './src/navigation/navigation-container';
import {SafeAreaView} from 'react-native';

function App(): React.JSX.Element {
  return (
    <SafeAreaView className="w-full h-full">
      <StatusBar />
      <NavigationContainer />
    </SafeAreaView>
  );
}

export default App;
