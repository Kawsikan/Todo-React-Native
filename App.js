import React, { useEffect, useState } from 'react';
import { FlatList, Alert, View, StyleSheet } from 'react-native';
// import { uuid } from 'uuidv4'; not working
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import Header from './components/Header';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';

const App = () => {

  const [items, setItems] = useState([]);

  const deleteItem = (id) => {
    setItems(preItems => {
      return preItems.filter(item => item.id != id);
    });
  }

  const addItem = (text) => {
    if (!text) {
      // Alert.alert('Error', 'Please enter an item', { text: 'Ok' }) - for ios
      Alert.alert('Error', 'Please enter an item', [
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ],
        { cancelable: true });
    } else {
      setItems(prevItems => {
        return [{ id: uuidv4(), text }, ...prevItems];
      });
    }
  }

  return (

    <View style={styles.container}>
      <Header title="Shopping List" />
      <AddItem addItem={addItem} />
      <FlatList data={items}
        renderItem={({ item }) => <ListItem item={item} deleteItem={deleteItem} />}
      />
    </View>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: 60,

  }
})

export default App