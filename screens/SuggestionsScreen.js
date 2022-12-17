/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-bind */
import {
  Text, View, StyleSheet, Pressable, FlatList,
} from 'react-native';
import React from 'react';

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 16,
    backgroundColor: '#1D7874',
    alignContent: 'center',
  },
  flatListContainer: {
    flex: 1,
  },
  textContainer: {
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: '#f5f5f5',
    marginVertical: 8,
    elevation: 2,
  },
  wordText: {
    fontSize: 16,
  },
  customText: {
    color: '#a3a3a3',
    fontSize: 16,
  },
});

const suggestions = [
  {
    id: 's1',
    title: 'Do homework',
  },
  {
    id: 's2',
    title: 'Work out',
  },
  {
    id: 's3',
    title: 'Take a pill',
  },
  {
    id: 's4',
    title: 'Call parents',
  }];

function SuggestionsScreen({ route, navigation }) {
  const sid = route.params?.sid;
  function renderSuggestions(itemData) {
    function pressHandler() {
      navigation.navigate('AddItem', {
        suggestionTitle: itemData.item.title,
        sid,
      });
    }

    return (

      <View>
        <Pressable onPress={pressHandler}>
          <View style={styles.textContainer}>
            <Text style={styles.wordText}>{itemData.item.title}</Text>
          </View>
        </Pressable>
      </View>

    );
  }
  function customPressHandler() {
    navigation.navigate('AddItem', {
      sid,
    });
  }
  return (
    <View style={styles.appContainer}>
      <View>
        <FlatList
          data={suggestions}
          keyExtractor={(item) => item.title}
          renderItem={renderSuggestions}
        />
      </View>
      <Pressable onPress={customPressHandler}>

        <View style={styles.textContainer}>
          <Text style={styles.customText}>Custom...</Text>
        </View>
      </Pressable>
    </View>

  );
}

export default SuggestionsScreen;
