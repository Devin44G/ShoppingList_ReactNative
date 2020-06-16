import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Alert } from 'react-native';
import uuid from 'uuid-random';

import Header from './components/Header';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';

const App = () => {
  const [items, setItems] = useState([
    {id: uuid(), text: 'Milk'},
    {id: uuid(), text: 'Tea'},
    {id: uuid(), text: 'Sugar'},
    {id: uuid(), text: 'Bread'},
  ]);

  console.log(items);

  const deleteItem = (id) => {
    setItems(prevItems => {
      return prevItems.filter(item => item.id != id);
    });
  };

  const addItem = (item) => {
    if(!item) {
      Alert.alert('Error', 'Please enter an item', [{text: 'Ok'}]);
    } else {
      setItems(prevItems => {
        return [{id: uuid(), text: item}, ...prevItems];
      });
    }
  }

  return(
    <View style={styles.container}>
      <Header />
      <AddItem addItem={addItem}/>
      <FlatList
        data={items}
        renderItem={({ item }) => (
          <ListItem item={item} deleteItem={deleteItem} />
        )}
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
