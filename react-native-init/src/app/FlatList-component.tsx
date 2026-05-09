import { View, Text, FlatList, StyleSheet, StatusBar } from 'react-native';
import React from 'react';

const DATA = [
  { id: '1', title: 'First Item' },
  { id: '2', title: 'Second Item' },
  { id: '3', title: 'Third Item' },
  { id: '4', title: 'Fourth Item' },
  { id: '5', title: 'Fifth Item' },
  { id: '6', title: 'Sixth Item' },
  { id: '7', title: 'Seventh Item' },
  { id: '8', title: 'Eighth Item' },
  { id: '9', title: 'Ninth Item' },
  { id: '10', title: 'Tenth Item' },
];


const FlatListExample = () => {
  return (
      <FlatList
        data={DATA}
        renderItem={({ item }) => <Text>title={item.title}</Text>}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={()=>(
          <View style = {{height:1, backgroundColor : "#d1eb79"}} />
        )}
      />
  );
};


export default FlatListExample;
