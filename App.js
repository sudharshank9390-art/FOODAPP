import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StatusBar } from 'expo-status-bar';

import AppNavigator from './navigation/AppNavigator';

export default function App() {
  const [initialRoute, setInitialRoute] = useState('Onboarding');
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const loadAppState = async () => {
      try {
        const onboardingValue = await AsyncStorage.getItem('little-lemon-onboarding');
        const profileData = await AsyncStorage.getItem('little-lemon-profile');

        if (onboardingValue === 'true' && profileData) {
          setInitialRoute('Home');
        } else {
          setInitialRoute('Onboarding');
        }
      } catch (error) {
        setInitialRoute('Onboarding');
      } finally {
        setIsReady(true);
      }
    };

    loadAppState();
  }, []);

  if (!isReady) {
    return null;
  }

  return (
    <>
      <StatusBar style="light" />
      <AppNavigator initialRouteName={initialRoute} />
    </>
  );
}
