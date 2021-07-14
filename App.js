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
  // const [isLoading, setLoading] = useState(true);
  // const [data, setData] = useState([]);
  // console.log(data);

  // useEffect(() => {
  //   fetch('https://raw.githubusercontent.com/adhithiravi/React-Hooks-Examples/master/testAPI.json')
  //     .then((response) => response.json())
  //     .then((json) => setData(json))
  //     .catch((error) => console.error(error))
  //     .finally(() => setLoading(false));
  // }, []);

  return (

    <View>
      <Header title="Shopping List" />
      <FlatList data={items}
        renderItem={({ item }) => <ListItem item={item} />}
      />
    </View>
    // <View style={{ flex: 1, padding: 24 }}>
    //   {isLoading ? <Text>Loading...</Text> :
    //     (<View style={{ flex: 1, flexDirection: 'column', justifyContent: 'space-between' }}>
    //       <Text style={{ fontSize: 18, color: 'green', textAlign: 'center' }}>{data.title}</Text>
    //       <Text style={{ fontSize: 14, color: 'green', textAlign: 'center', paddingBottom: 10 }}>Articles:</Text>
    //       <FlatList
    //         data={data.articles}
    //         keyExtractor={({ id }, index) => id}
    //         renderItem={({ item }) => (
    //           <Text>{item.id + '. ' + item.title}</Text>
    //         )}
    //       />
    //     </View>
    //     )}
    // </View>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,

  }
})

export default App