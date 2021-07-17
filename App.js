import React, { useEffect, useState } from 'react';
import { FlatList, Alert, View, StyleSheet } from 'react-native';
// import { uuid } from 'uuidv4'; not working
import 'react-native-get-random-values';
import Main from './components/Main';

const App = () => {


  return (

    <Main />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: 60,

  }
})

export default App