
import { StyleSheet, Text, View, Pressable, Modal } from 'react-native';

import { useState } from 'react';
const App = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
      <View style={styles.container}>
        
     <Pressable
     onPress={() => setModalVisible(true)}>

    <Text style={styles.modalText}>Show Modal message</Text>


          </Pressable>
    <Modal visible={modalVisible}
      transparent={false}
      onRequestClose={() => setModalVisible(false)}>

    <View style={styles.modalContainer}>
      <View style={styles.modalBox}>
    <Text style={styles.modalText}>This is Modal...</Text>
    
    <Pressable style={styles.closeButton} onPress={() => setModalVisible(false)}>
    <Text style={styles.closeText}>Close</Text>
    </Pressable>
    </View>
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

  modalContainer: {
    flex: 1, 
    alignItems: 'center',
    padding: 120,
  },

  modalText: {
    color: '#000000',
    fontWeight: '500',
  },

  closeButton: {
    paddingTop:40,
  },

  closeText: {
    color: '#000000',
    fontWeight: '900',
  },

  modalBox: {
    backgroundColor: '#cccccc27',
    borderRadius:8,
    padding: 40,
    alignItems: 'center',
    width: 380,
     shadowColor: '#efecec',

    shadowOffset: {
      width: 0,
      height: 2,
    },

    shadowOpacity: 0.12,
    shadowRadius: 2,
    elevation: 2,
  },
});
export default App;