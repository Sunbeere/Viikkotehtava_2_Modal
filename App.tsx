
import { StyleSheet, Text, View, Pressable, Modal } from 'react-native';

import { useState } from 'react';
const App = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
      <View style={styles.container}>
     <Pressable onPress={() => setModalVisible(true)}>
    <Text>Show Modal message</Text>
          </Pressable>
    <Modal visible={modalVisible}>
    <View>
    <Text>This is Modal...</Text>
    
    <Pressable onPress={() => setModalVisible(false)}>
    <Text>Close</Text>
    </Pressable>
    
    </View>
    </Modal>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default App;