import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import TransactionsScreen from '../screen/TransactionsScreen';
import TransactionDetailScreen from '../screen/TransactionDetailScreen';
import SummaryScreen from '../screen/SummaryScreen';
import { MaterialIcons, FontAwesome } from 'react-native-vector-icons'; // Import icons

export type RootStackParamList = {
  TransactionsList: undefined;
  TransactionDetail: { transaction: Transaction };
};

export type Transaction = {
  id: string;
  name: string;
  amount: number;
  date: string;
  place: string;
};

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator<RootStackParamList>();

const TransactionsStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="TransactionsList" component={TransactionsScreen} options={{ title: 'Transactions' }} />
    <Stack.Screen name="TransactionDetail" component={TransactionDetailScreen} options={{ title: 'Transaction Detail' }} />
  </Stack.Navigator>
);

const AppNavigator = () => (
  <NavigationContainer>
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Transaction') {
            iconName = 'list'; // Change icon name as needed
            return <MaterialIcons name={iconName} size={size} color={color} />;
          } else if (route.name === 'Summary') {
            iconName = 'bar-chart'; // Change icon name as needed
            return <FontAwesome name={iconName} size={size} color={color} />;
          }
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Transaction" component={TransactionsStack} />
      <Tab.Screen name="Summary" component={SummaryScreen} />
    </Tab.Navigator>
  </NavigationContainer>
);

export default AppNavigator;
