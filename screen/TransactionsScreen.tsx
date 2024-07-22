import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList, Transaction } from '../navigation/AppNavigator';

type TransactionsScreenNavigationProp = StackNavigationProp<RootStackParamList, 'TransactionsList'>;

type Props = {
  navigation: TransactionsScreenNavigationProp;
};

const transactions: Transaction[] = [
    { id: '1', name: 'Starbucks', amount: 12.00, date: '2024-07-01', place: 'Seattle' },
    { id: '2', name: 'Apple Store', amount: 101.00, date: '2024-07-02', place: 'San Francisco' },
    { id: '3', name: 'Sephora', amount: 120.00, date: '2024-07-03', place: 'Los Angeles' },
    { id: '4', name: 'Shoppers Drug Mart', amount: 12.00, date: '2024-07-04', place: 'Toronto' },
    { id: '5', name: 'Pizza Hut', amount: 24.00, date: '2024-07-05', place: 'New York' },
    { id: '6', name: 'Cheesecake Factory', amount: 45.00, date: '2024-07-06', place: 'Chicago' },
    { id: '7', name: 'Nike', amount: 250.00, date: '2024-07-07', place: 'Boston' },
    { id: '8', name: 'Tim Hortons', amount: 7.89, date: '2024-07-08', place: 'Vancouver' },
    { id: '9', name: 'Whole Foods', amount: 78.00, date: '2024-07-09', place: 'Austin' },
    { id: '10', name: 'Cineplex', amount: 42.50, date: '2024-07-10', place: 'Montreal' }
  ];

  const TransactionsScreen: React.FC<Props> = ({ navigation }) => {
    return (
      <View style={styles.container}>
        <FlatList
          data={transactions}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => {
              console.log('navigating to transactionetail with:', item); // print here
              navigation.navigate('TransactionDetail', { transaction: item });
            }}>
              <View style={styles.item}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.amount}>${item.amount.toFixed(2)}</Text>
                <Text style={styles.date}>{item.date}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    );
  };

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  item: { padding: 20, marginVertical: 8, backgroundColor: '#f9f9f9' },
  name: { fontSize: 18 },
  amount: { fontSize: 16 },
  date: { fontSize: 14, color: '#666' },
});

export default TransactionsScreen;
