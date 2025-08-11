import React, { useState, useEffect } from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native'
import axios from 'axios'

export const EditService = ({ service, reload, close }) => {
  const [data, setData] = useState({
    name: service.name,
    description: service.description,
    price: String(service.price),
  })

  const submit = async () => {
    try {
      Alert.alert('Actualizando servicio...')
      await axios.put(`http://127.0.0.1:5000/services/update/${service.id}`, {
        name: data.name,
        description: data.description,
        price: Number(data.price),
      })
      Alert.alert('Servicio actualizado con éxito')
      close(false)
      reload()
    } catch (error) {
      console.log(error)
      Alert.alert('Ocurrió un error al actualizar el servicio')
    }
  }

  const onChange = (key, value) => {
    setData(prev => ({ ...prev, [key]: value }))
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Editar servicio</Text>

      <Text style={styles.label}>Nombre:</Text>
      <TextInput
        style={styles.input}
        value={data.name}
        onChangeText={text => onChange('name', text)}
      />

      <Text style={styles.label}>Descripción:</Text>
      <TextInput
        style={styles.input}
        value={data.description}
        onChangeText={text => onChange('description', text)}
      />

      <Text style={styles.label}>Precio:</Text>
      <TextInput
        style={styles.input}
        value={data.price}
        keyboardType="numeric"
        onChangeText={text => onChange('price', text)}
      />

      <TouchableOpacity style={styles.button} onPress={submit}>
        <Text style={styles.buttonText}>Actualizar</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff0f6',
    padding: 20,
    borderRadius: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#d6336c',
    marginBottom: 15,
    textAlign: 'center',
  },
  label: {
    color: '#b43b68',
    marginBottom: 5,
    fontWeight: '600',
  },
  input: {
    borderWidth: 1,
    borderColor: '#f783ac',
    backgroundColor: '#ffe5f0',
    padding: 10,
    borderRadius: 8,
    marginBottom: 15,
    color: '#6f084e',
  },
  button: {
    backgroundColor: '#d6336c',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
})
