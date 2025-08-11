import React, { useEffect, useState } from 'react';
import { Alert, FlatList, Modal, StyleSheet, Text, View, ActivityIndicator, TouchableOpacity } from 'react-native';
import axios from 'axios';
import { EditGarmentView } from './Edit';
import { useNavigation } from '@react-navigation/native';

export const ListGarmentsView = () => {
  const [garments, setGarments] = useState([]);
  const [showModalEdit, setShowModalEdit] = useState(false);
  const [currentGarment, setCurrentGarment] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();

  const getGarments = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get("http://127.0.0.1:5000/garments/get-all");
      setGarments(data.garments || []);
    } catch (error) {
      console.error(error);
      Alert.alert("❌ Error", "Ocurrió un error al traer las prendas");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getGarments();
  }, []);

  const deleteGarment = async (id) => {
    try {
      const response = await axios.delete(`http://127.0.0.1:5000/garments/delete/${id}`);
      Alert.alert("✅", response.data.msg || "Prenda eliminada correctamente");
      getGarments(); // refresca la lista
    } catch (error) {
      Alert.alert(
        "❌ Error",
        `No se pudo eliminar la prenda: ${
          error.response?.data?.msg || error.message || "Error desconocido"
        }`
      );
    }
  };

  const renderItem = ({ item, index }) => (
    <View style={styles.item}>
      <Text style={styles.itemText}>
        {index + 1}. Tipo: <Text style={{ fontWeight: 'bold', color: '#d6336c' }}>{item.type}</Text>
      </Text>
      <Text style={styles.itemText}>Descripción: {item.description}</Text>
      <View style={styles.buttons}>
        <TouchableOpacity
          style={[styles.btn, styles.editBtn]}
          onPress={() => {
            setCurrentGarment(item);
            setShowModalEdit(true);
          }}
        >
          <Text style={styles.btnText}>Editar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.btn, styles.deleteBtn]}
          onPress={() => deleteGarment(item.id)}
        >
          <Text style={styles.btnText}>Eliminar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>

      {loading ? (
        <ActivityIndicator size="large" color="#d6336c" style={{ marginTop: 20 }} />
      ) : (
        <FlatList
          data={garments}
          keyExtractor={(item) => item.id?.toString() || Math.random().toString()}
          renderItem={renderItem}
          contentContainerStyle={{ marginTop: 20 }}
          ListEmptyComponent={
            <Text style={{ textAlign: 'center', marginTop: 20, color: '#a83263' }}>
              No hay prendas registradas
            </Text>
          }
        />
      )}

      <TouchableOpacity
        style={styles.createBtn}
        onPress={() => navigation.navigate('CreateGarment')}
      >
        <Text style={styles.createBtnText}>➕ Crear Prenda</Text>
      </TouchableOpacity>

      <Modal visible={showModalEdit} animationType="slide">
        {currentGarment && (
          <EditGarmentView
            garment={currentGarment}
            onClose={() => setShowModalEdit(false)}
            onReload={getGarments}
          />
        )}
      </Modal>
    </View>
  );
};

// estilos aquí ...


const styles = StyleSheet.create({
  container: { padding: 20, flex: 1, marginTop: 40, backgroundColor: '#ffcde1ff' },
  item: {
    marginBottom: 15,
    padding: 15,
    borderWidth: 1,
    borderColor: '#eaa4c7',
    borderRadius: 12,
    backgroundColor: '#fff5f9',
    shadowColor: '#d6336c',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 5,
  },
  itemText: {
    marginBottom: 8,
    color: '#5a1a3b',
    fontWeight: '500',
  },
  buttons: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  btn: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
    marginHorizontal: 5,
  },
  editBtn: {
    backgroundColor: '#d6336c',
  },
  deleteBtn: {
    backgroundColor: '#f44336',
  },
  btnText: {
    color: 'white',
    fontWeight: '700',
  },
  createBtn: {
    backgroundColor: '#e83e8c',
    paddingVertical: 16,
    borderRadius: 14,
    alignItems: 'center',
    shadowColor: '#a83263',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.4,
    shadowRadius: 8,
    elevation: 7,
  },
  createBtnText: {
    color: '#fff',
    fontWeight: '800',
    fontSize: 18,
  },
});
