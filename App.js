import {useState} from 'react';
import { StyleSheet, View, Button, ScrollView, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';
export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [goalList, setGoalList] = useState([]);


  function startAddGoalHandler() {
    setModalIsVisible(true);
  }

  function endAddGoalHandler() {
    
  }
  // Since I'm using FlatList to render list of items, I need to pass the key. FlaList will automatically look for the 'key' here.
  // function addGoalHandler() {
  //   setGoalList(currentGoals => [...currentGoals, {text: enteredtext, key: Math.random().toString()}]);
  // };

  // But if I cannot use the name 'key' for some reasons, I can pass the key this way.
  function addGoalHandler(enteredtext) {
    setGoalList(currentGoals => [...currentGoals, {text: enteredtext, id: Math.random().toString()}]);
  };

  function deleteGoalHandler(id) {
    setGoalList(currentGoals => {
      return currentGoals.filter((goal) => goal.id !== id); //if the condition is true, it will be filtered
    })
  };

  return (
    // By default, View component is not scrollable.
    <View style={styles.appContainer}>
      <Button onPress={startAddGoalHandler} title="Add new goal" color='purple' />
        <GoalInput visible={modalIsVisible} onAddGoal={addGoalHandler} />
        {/* add styling here so that it can adjust the height of scrolling view. */}
          <View style={styles.goalsContainer}>
            {/* Scrollview renders child component at the same time, meaning it could affect performance if there are thousands of items being rendered at the same time. */}
            {/* Scrollview is good for static size components such as news articles, but not so good for dynamic size components such as lists of items. */}
            {/* Flatlist will render items whenever they need to be visible. When they become visible, it will be rendered lazily. */}
            {/* Use Flalist for dynamic size of list or array or object */}
            {/* <ScrollView alwaysBounceVertical={false}> */}
            <FlatList data={goalList} renderItem={(itemData) => {
              return <GoalItem id={itemData.item.id} text={itemData.item.text} onDeleteItem={deleteGoalHandler} />
            }}
            // if I cannot set key to 'key' I can use keyExtractor.
            keyExtractor={(item, index) => {
              return item.id;
            }}
            alwaysBounceVertical={false} />
            {/* </ScrollView> */}
          </View>
    </View>
  );
}

// Unlike css, properties don't inherit.
const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  goalsContainer: {
    flex: 4,
  },
});
