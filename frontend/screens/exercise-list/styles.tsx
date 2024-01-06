import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  item: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  itemText: {
    fontSize: 18,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  description: {
    marginTop: 16,
    fontSize: 16,
  },

  categoryTitle: {

  },

  exerciseWrapper: {
    flex: 1,
    height: 150,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    padding: 10,
    margin: 10,
    textAlign: 'center',
  },
  exerciseImg: {
    height: 20,
    width: 20,
  },
  exerciseText: {}
});
