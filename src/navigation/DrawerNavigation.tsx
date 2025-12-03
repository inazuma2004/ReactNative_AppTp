import React from 'react';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { AuthContext } from '../context/AuthContext';
import TabNavigator from './TabNavigation';
import SettingsScreen from '../screens/SettingsScreen';

const Drawer = createDrawerNavigator();

function CustomDrawerContent(props: any) {
  const { signOut } = React.useContext(AuthContext);
  const userName = props.userName || 'Utilisateur';

  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.drawerHeader}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>👤</Text>
        </View>
        <Text style={styles.greeting}>Bonjour {userName}</Text>
        <Text style={styles.subtext}>Bienvenue sur Campus App</Text>
      </View>

      <DrawerItemList {...props} />

      <View style={styles.logoutSection}>
        <TouchableOpacity
          style={styles.logoutItem}
          onPress={() => {
            signOut();
          }}>
          <Text style={styles.logoutText}>🚪 Déconnexion</Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
}

export default function DrawerNavigator({ userName }: any) {
  return (
    <Drawer.Navigator
      drawerContent={props => (
        <CustomDrawerContent {...props} userName={userName} />
      )}
      screenOptions={{
        headerStyle: {
          backgroundColor: '#007AFF',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 18,
        },
        drawerActiveTintColor: '#007AFF',
        drawerInactiveTintColor: '#666',
      }}>
      <Drawer.Screen
        name="TabNavigator"
        component={TabNavigator}
        options={{
          title: 'Accueil',
          drawerLabel: '🏠 Accueil',
          headerTitle: 'Campus App',
          headerShown: false,
        }}
      />
      <Drawer.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          title: 'Réglages',
          drawerLabel: '⚙️ Réglages',
        }}
      />
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  drawerHeader: {
    backgroundColor: '#007AFF',
    paddingVertical: 20,
    paddingHorizontal: 15,
    marginBottom: 20,
    alignItems: 'center',
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  avatarText: {
    fontSize: 30,
  },
  greeting: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 5,
  },
  subtext: {
    fontSize: 12,
    color: 'rgba(255,255,255,0.8)',
  },
  logoutSection: {
    marginTop: 20,
    paddingTop: 20,
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
  },
  logoutItem: {
    paddingHorizontal: 15,
    paddingVertical: 12,
  },
  logoutText: {
    fontSize: 14,
    color: '#FF3B30',
    fontWeight: '600',
  },
});