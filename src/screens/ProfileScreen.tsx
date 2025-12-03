import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
} from 'react-native';

export default function ProfileScreen({ navigation }: any) {
  // Récupérer le userName depuis la navigation (passé en paramètre depuis DrawerNavigator)
  const userName = React.useContext(React.createContext()).userName || 'Utilisateur';

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>👤</Text>
        </View>
      </View>

      <View style={styles.content}>
        <View style={styles.card}>
          <Text style={styles.label}>Nom d'utilisateur</Text>
          <Text style={styles.value}>{userName}</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.label}>Email</Text>
          <Text style={styles.value}>{userName}@campus.edu</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.label}>Numéro d'étudiant</Text>
          <Text style={styles.value}>STU-2024-001</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.label}>Année d'études</Text>
          <Text style={styles.value}>2ème année</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.label}>Filière</Text>
          <Text style={styles.value}>Informatique</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.label}>Moyenne générale</Text>
          <Text style={styles.valueHighlight}>16.5/20</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#007AFF',
    paddingVertical: 30,
    alignItems: 'center',
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarText: {
    fontSize: 40,
  },
  content: {
    padding: 15,
  },
  card: {
    backgroundColor: 'white',
    padding: 15,
    marginVertical: 8,
    borderRadius: 8,
    borderLeftWidth: 4,
    borderLeftColor: '#007AFF',
  },
  label: {
    fontSize: 12,
    color: '#999',
    marginBottom: 5,
    fontWeight: '600',
  },
  value: {
    fontSize: 16,
    color: '#333',
    fontWeight: '500',
  },
  valueHighlight: {
    fontSize: 16,
    color: '#007AFF',
    fontWeight: 'bold',
  },
});