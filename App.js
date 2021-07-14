import React, { useEffect, useState } from 'react';
import { FlatList, Text, View, StyleSheet } from 'react-native';
import Header from './components/Header';
import ListItem from './components/ListItem';
// import { uuid } from 'uuidv4'; not working
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';

const App = () => {

  const [items, setItems] = useState([
    { id: uuidv4(), text: 'Milk' },
    { id: uuidv4(), text: 'Eggs' },
    { id: uuidv4(), text: 'Bread' },
    { id: uuidv4(), text: 'Juice' }
  ]);

  const deleteItem = (id) => {
    setItems(preItems => {
      return preItems.filter(item => item.id != id);
    });
  }

  return (

    <View style={styles.container}>
      <Header title="Shopping List" />
      <FlatList data={items}
        renderItem={({ item }) => <ListItem item={item} deleteItem={deleteItem}/>}
      />
    </View>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,

  }
})

export default App