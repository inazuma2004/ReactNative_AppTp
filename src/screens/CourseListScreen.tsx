import React from 'react';
import {
  View,
  FlatList,
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';
import { coursesData } from '../data/coursesData';

export default function CourseListScreen({ navigation }: any) {
  const renderCourse = ({ item }: any) => (
    <TouchableOpacity
      style={styles.courseCard}
      onPress={() =>
        navigation.navigate('CourseDetail', { course: item })
      }>
      <Text style={styles.courseName}>{item.name}</Text>
      <Text style={styles.courseDescription}>{item.description}</Text>
      <Text style={styles.courseProfessor}>Prof: {item.professor}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={coursesData}
        renderItem={renderCourse}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  list: {
    padding: 10,
  },
  courseCard: {
    backgroundColor: 'white',
    padding: 15,
    marginVertical: 8,
    borderRadius: 8,
    borderLeftWidth: 4,
    borderLeftColor: '#007AFF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  courseName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  courseDescription: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
  courseProfessor: {
    fontSize: 12,
    color: '#999',
  },
});