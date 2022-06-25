import {useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  const [enteredtext, setEnteredText] = useState('');
  const [goalList, setGoalList] = useState([]);
  
  function goalInputHandler(text) {
    setEnteredText(text);
  };

  function addGoalHandler() {
    setGoalList(currentGoals => [...currentGoals, enteredtext]);
  };

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder='Add a goal' onChangeText={goalInputHandler} />
        <Button title="Add a goal" onPress={addGoalHandler} />
      </View> 
      <View style={styles.goalsContainer}>
       {goalList.map((goal) => <Text key={goal}>{goal}</Text>)}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },
  textInput: {
    borderWidth: 1,
    borderColor: 'lightgray',
    width: '60%',
    marginRight: 10,
    padding: 8,
  },
  goalsContainer: {
    flex: 4,
  }
});
