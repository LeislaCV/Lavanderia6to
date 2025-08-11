import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

export function Dashboard() {
  const navigation = useNavigation();

  const [counting, setCounting] = useState(null);
  const [orders, setOrders] = useState([]);
  const [pendingOrders, setPendingOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);

      const [countRes, ordersRes, pendingRes] = await Promise.all([
        axios.get("http://127.0.0.1:5000/orders/get-counting"),
        axios.get("http://127.0.0.1:5000/orders/get-orders-dashboard?pagination=1"),
        axios.get("http://127.0.0.1:5000/orders/get-pending-orders-dashboard?pagination=1"),
      ]);

      setCounting(countRes.data);
      setOrders(ordersRes.data);
      setPendingOrders(pendingRes.data);
    } catch (err) {
      console.log("Error cargando datos:", err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#e83e8c" />
        <Text>Cargando información...</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>📌 Dashboard</Text>

      {/* Conteo por unidad */}
      <View style={styles.countContainer}>
        <TouchableOpacity style={styles.countItem} onPress={() => navigation.navigate('ListGarment')}>
          <Text style={styles.countNumber}>{counting?.quantity_garments}</Text>
          <Text>Prendas</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.countItem} onPress={() => navigation.navigate('ListService')}>
          <Text style={styles.countNumber}>{counting?.quantity_services}</Text>
          <Text>Servicios</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.countItem} onPress={() => navigation.navigate('ListClient')}>
          <Text style={styles.countNumber}>{counting?.quantity_clients}</Text>
          <Text>Clientes</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.countItem} onPress={() => navigation.navigate('ListUser')}>
          <Text style={styles.countNumber}>{counting?.quantity_users}</Text>
          <Text>Usuarios</Text>
        </TouchableOpacity>
      </View>

      {/* Botón crear orden */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('CreateOrder')}
      >
        <Icon name="clipboard-list" size={30} color="#fff" />
        <Text style={styles.buttonText}>Crear Orden</Text>
      </TouchableOpacity>

      {/* Listado de órdenes */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>📄 Listado de Órdenes</Text>
        {orders.length > 0 ? (
          orders.map((o, i) => (
            <Text key={i}>#{o.id} - {o.status}</Text>
          ))
        ) : (
          <Text>No hay órdenes registradas.</Text>
        )}
      </View>

      {/* Órdenes pendientes */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>⏳ Órdenes Pendientes</Text>
        {pendingOrders.length > 0 ? (
          pendingOrders.map((o, i) => (
            <Text key={i}>#{o.id} - {o.status}</Text>
          ))
        ) : (
          <Text>No hay órdenes pendientes.</Text>
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff0f6', padding: 20 },
  title: { fontSize: 28, fontWeight: 'bold', color: '#d6336c', marginBottom: 20 },
  center: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  countContainer: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', marginBottom: 20 },
  countItem: { backgroundColor: '#f8d7e2', padding: 15, borderRadius: 10, width: '48%', alignItems: 'center', marginBottom: 10 },
  countNumber: { fontSize: 20, fontWeight: 'bold', color: '#d6336c' },
  button: { flexDirection: 'row', backgroundColor: '#e83e8c', padding: 15, borderRadius: 12, alignItems: 'center', marginVertical: 12 },
  buttonText: { color: '#fff', fontSize: 18, marginLeft: 15 },
  section: { backgroundColor: '#fff', padding: 15, borderRadius: 12, marginVertical: 10 },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 8 },
});
