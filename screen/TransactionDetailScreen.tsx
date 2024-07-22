import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/AppNavigator';

type TransactionDetailScreenRouteProp = RouteProp<RootStackParamList, 'TransactionDetail'>;

type Props = {
  route: TransactionDetailScreenRouteProp;
};

const TransactionDetailScreen: React.FC<Props> = ({ route }) => {
  const { transaction } = route.params;
  
  console.log('Transaction details received:', transaction);

  if (!transaction) {
    return <Text>No transaction data</Text>;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{transaction.name}</Text>
      <Text style={styles.amount}>Amount: ${transaction.amount.toFixed(2)}</Text>
      <Text style={styles.date}>Date: {transaction.date}</Text>
      <Text style={styles.place}>Place: {transaction.place}</Text>
    </View>
  );
};


const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  name: { fontSize: 24, fontWeight: 'bold' },
  amount: { fontSize: 20, marginVertical: 10 },
  date: { fontSize: 18 },
  place: { fontSize: 18 },
});

export default TransactionDetailScreen;
