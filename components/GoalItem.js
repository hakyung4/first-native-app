// Render a single goal item.
import { StyleSheet, View, Text, Pressable } from 'react-native';

function GoalItem(props) {
    return (
        <View style={styles.goalItem}>
            <Pressable style={({pressed}) => pressed && styles.pressedItem} android_ripple={{color: 'gray'}} onPress={props.onDeleteItem.bind(this, props.id)}>
                    <Text style={styles.goalText}>{props.text}</Text>
            </Pressable>
        </View>
    );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: 'lightgray',
  },
  goalText: {
    color: 'black',
    padding: 8,
  },
  pressedItem: {
    backgroundColor: 'gray',
  }
});
