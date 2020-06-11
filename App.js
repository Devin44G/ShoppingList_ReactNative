import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

import Header from './components/Header';
import ListItem from './components/ListItem';

const App = () => {
  const [items, setItems] = useState([
    {id: 1, text: 'Milk'},
    {id: 2, text: 'Tea'},
    {id: 3, text: 'Sugar'},
    {id: 4, text: 'Bread'},
  ]);

  const deleteItem = (id) => {
    setItems(prevItems => {
      return prevItems.filter(item => item.id != id);
    });
  }

  return(
    <View style={styles.container}>
      <Header />
      <FlatList
        data={items}
        renderItem={({item}) => <ListItem item={item} deleteItem={deleteItem} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30
  },
});

export default App;
