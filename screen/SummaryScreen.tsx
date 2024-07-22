import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Transaction } from '../navigation/AppNavigator';

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

const totalExpenses = transactions.reduce((sum, transaction) => sum + transaction.amount, 0);
const highestExpense = Math.max(...transactions.map(transaction => transaction.amount));
const lowestExpense = Math.min(...transactions.map(transaction => transaction.amount));

const SummaryScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Total Expenses: ${totalExpenses}</Text>
      <Text style={styles.text}>Highest Expense: ${highestExpense}</Text>
      <Text style={styles.text}>Lowest Expense: ${lowestExpense}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  text: { fontSize: 20, marginVertical: 10 },
});

export default SummaryScreen;
