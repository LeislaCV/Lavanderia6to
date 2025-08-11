import React, { useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import {Dashboard} from './Dashboard'

import CreateClientView from './clients/CreateClient';
import {ListClient} from './clients/ListClient';
import EditClient from './clients/EditClient';

import { CreateGarmentView } from './garments/Create';
import { EditGarmentView } from './garments/Edit';
import { ListGarmentsView } from './garments/List';

import { OrderTable } from './components/OrderTable'
;
import { CreateService } from './services/CreateService';
import { ListService } from './services/ListService';


import { CreateUser } from './users/CreateUser';
import { ListUser } from './users/ListUser';
import { EditUser } from './users/EditUser';

import { CreateOrder } from './orders/CreateOrder';



const Stack = createNativeStackNavigator()

export default function App() {
  return (
     <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}} >
        <Stack.Screen name='Dashboard' component={Dashboard}/>

        <Stack.Screen name='CreateClient' component={CreateClientView} />
        <Stack.Screen name='ListClient' component={ListClient} />
        <Stack.Screen name='EditClient' component={EditClient} />

        <Stack.Screen name='CreateGarment' component={CreateGarmentView} />
        <Stack.Screen name='ListGarment' component={ListGarmentsView}/>
        <Stack.Screen name='EditGarment' component={EditGarmentView}/>

        <Stack.Screen name='OrderTable' component={OrderTable}/>

        <Stack.Screen name='CreateService' component={CreateService} />
        <Stack.Screen name='ListService' component={ListService} />

        <Stack.Screen name='CreateUser' component={CreateUser} />
        <Stack.Screen name='ListUser' component={ListUser} />
        <Stack.Screen name='EditUsers' component={EditUser} />

        <Stack.Screen name="CreateOrder" component={CreateOrder} />

      </Stack.Navigator>
     </NavigationContainer>
   );
}
