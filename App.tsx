/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  FlatList,
  TouchableOpacity,
} from 'react-native';

type Task = {
  id: number;
  title: string;
  completed: boolean;
};

const defaultTasks: Task[] = [
  {
    id: 1,
    title: 'Organize your desk/workspace',
    completed: false,
  },
  {
    id: 2,
    title: 'Build exciting apps',
    completed: false,
  },
  {
    id: 3,
    title: 'Meeting with the team',
    completed: true,
  },
];

function App(): JSX.Element {
  const [newTask, setNewTask] = useState('');
  const [tasks, setTasks] = useState<Task[]>(defaultTasks);
  const [currentEditId, setCurrentEditId] = useState<any>(null);

  const toggleCompletion = (index: number) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  const addTask = () => {
    if (newTask.trim() !== '') {
      if (currentEditId) {
        const updatedTasks = [...tasks];
        const index = updatedTasks.findIndex(item => {
          return item.id === currentEditId;
        });
        updatedTasks[index] = {...updatedTasks[index], title: newTask};
        setTasks(updatedTasks);
        setNewTask('');
        setCurrentEditId(null);
      } else {
        const updatedTask = [
          ...tasks,
          {
            id: Math.random(),
            title: newTask,
            completed: false,
          },
        ];
        setTasks(updatedTask);
        setNewTask('');
      }
    }
  };

  const editTask = (id: number) => {
    setCurrentEditId(id);
    const updatedTasks = [...tasks];
    const index = updatedTasks.findIndex(item => item.id === id);
    setNewTask(updatedTasks[index].title);
  };
  const deleteTask = (id: number) => {
    const updatedTasks = tasks.filter(item => item.id !== id);
    setTasks(updatedTasks);
  };
  const cancelEdit = () => {
    setCurrentEditId(null);
    setNewTask('');
  };

  const renderItem = ({item, index}: {item: Task; index: number}) => (
    <View style={styles.item}>
      <TouchableOpacity onPress={() => toggleCompletion(index)}>
        <Text
          style={[
            styles.itemTitle,
            {textDecorationLine: item.completed ? 'line-through' : 'none'},
          ]}>
          {item.title}
        </Text>
      </TouchableOpacity>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity onPress={() => editTask(item.id)}>
          <Text style={{color: 'yellow', padding: 10}}>Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => deleteTask(item.id)}>
          <Text style={{color: 'red', padding: 10}}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.layout}>
      <View style={styles.container}>
        <Text style={styles.title}>Tasks</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={newTask}
            onChangeText={text => setNewTask(text)}
            placeholder="Enter a task"
            placeholderTextColor={'#c2c2c2'}
          />
          <View
            style={{
              marginVertical: 15,
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <View style={styles.button}>
              <Button
                title={currentEditId ? 'Save' : 'Add'}
                onPress={addTask}
              />
            </View>
            {currentEditId && (
              <View style={styles.button}>
                <Button title={'Cancel'} onPress={cancelEdit} />
              </View>
            )}
          </View>
        </View>
        <FlatList data={tasks} renderItem={renderItem} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  layout: {flex: 1},
  container: {
    padding: 10,
    flex: 1,
    backgroundColor: '#211D2D',
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: '#454547',
    paddingVertical: 5,
  },
  title: {
    marginBottom: 15,
    fontSize: 28,
    textAlign: 'center',
    color: 'white',
  },
  inputContainer: {
    marginBottom: 20,
  },
  itemTitle: {
    marginLeft: 5,
    color: 'white',
  },
  input: {
    padding: 10,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#454547',
    borderRadius: 5,
    color: 'white',
  },
  button: {
    marginHorizontal: 5,
  },
});

export default App;
