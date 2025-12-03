import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AuthContext } from './src/context/AuthContext';
import LoginStackNavigator from './src/navigation/StackNavigation';
import DrawerNavigator from './src/navigation/DrawerNavigation';

export default function App() {
  const [state, dispatch] = React.useReducer(
    (prevState: any, action: any) => {
      switch (action.type) {
        case 'RESTORE_TOKEN':
          return {
            ...prevState,
            isLoading: false,
            isSignedIn: false,
          };
        case 'SIGN_IN':
          return {
            ...prevState,
            isSignedIn: true,
            userToken: action.payload,
            userName: action.userName,
          };
        case 'SIGN_OUT':
          return {
            ...prevState,
            isSignedIn: false,
            userToken: null,
            userName: null,
          };
        case 'SET_USERNAME':
          return {
            ...prevState,
            userName: action.payload,
          };
        default:
          return prevState;
      }
    },
    {
      isLoading: true,
      isSignedIn: false,
      userToken: null,
      userName: null,
    },
  );

  useEffect(() => {
    const bootstrapAsync = async () => {
      try {
        // Simulation: attendre 1 seconde
        await new Promise(resolve => setTimeout(resolve, 1000));
      } catch (e) {
        // Restauration d'état échouée
      }

      dispatch({ type: 'RESTORE_TOKEN' });
    };

    bootstrapAsync();
  }, []);

  const authContext = React.useMemo(
    () => ({
      signIn: async (userName: string) => {
        dispatch({
          type: 'SIGN_IN',
          payload: 'user-token',
          userName: userName,
        });
      },
      signOut: async () => {
        dispatch({ type: 'SIGN_OUT' });
      },
      signUp: async (data: any) => {
        dispatch({ type: 'SIGN_IN', payload: 'dummy-auth-token' });
      },
    }),
    [],
  );

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        {state.isSignedIn ? (
          <DrawerNavigator userName={state.userName} />
        ) : (
          <LoginStackNavigator />
        )}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}