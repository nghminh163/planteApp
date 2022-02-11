import React from 'react';
// import WelcomeScreen from '@screens/auth/welcome';
import VerifyMobile from '@screens/auth/verify-mobile';
import RegisterScreen from '@screens/auth/register';
import WelcomeScreen from '@screens/auth/welcome';
import PlantInformationScreen from '@screens/auth/plant-information';
import CategoryScreen from '@screens/auth/category';
import SearchScreen from '@screens/auth/search';
import { StatusBar } from 'react-native';

function App() {
  return (
    <>
      <StatusBar hidden />
      {/* <RegisterScreen /> */}
      {/* <WelcomeScreen /> */}
      {/* <PlantInformationScreen /> */}
      {/* <CategoryScreen /> */}
      <SearchScreen />
    </>
  );
}

export default App;
