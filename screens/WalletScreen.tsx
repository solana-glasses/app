import React from 'react';
import { View, Text, StyleSheet, Image, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

// Mock data for the transaction list
const transactions = [
  {
    id: '1',
    name: 'Starbucks',
    time: '10:43 PM',
    amountUSD: '$503.12',
    amountCrypto: '50 ETH',
    icon: 'coffee',
  },
  {
    id: '2',
    name: 'Costa Coffee',
    time: '5:00 AM',
    amountUSD: '$269.27',
    amountCrypto: '2.05 BTC',
    icon: 'coffee',
  },
  {
    id: '3',
    name: 'IhhyFuddsUGiu....',
    time: 'Yesterday',
    amountUSD: '$6,927',
    amountCrypto: '2.05 LTC',
    icon: 'wallet',
  },
];

interface TransactionItemProps {
  item: {
    id: string;
    name: string;
    time: string;
    amountUSD: string;
    amountCrypto: string;
    icon: string;
  };
}

// Reusable component for each transaction item
const TransactionItem = ({ item }: TransactionItemProps) => (
  <View style={styles.transactionItem}>
    <View style={styles.transactionIconContainer}>
      {/* In a real app, you'd have different icons based on item.icon */}
      <View style={styles.transactionIcon} />
    </View>
    <View style={styles.transactionDetails}>
      <Text style={styles.transactionName}>{item.name}</Text>
      <Text style={styles.transactionTime}>{item.time}</Text>
    </View>
    <View style={styles.transactionAmount}>
      <Text style={styles.transactionAmountUSD}>{item.amountUSD}</Text>
      <Text style={styles.transactionAmountCrypto}>{item.amountCrypto}</Text>
    </View>
  </View>
);

const WalletScreen = () => {
  return (
    <LinearGradient colors={['#8BEDDE', '#D6EFFF']} start={{x: 0, y: 0}} end={{x: 1, y: 0}} style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
          {/* Header component matching HomeScreen */}
          <View style={styles.header}>
            <View>
              <Text style={styles.greeting}>Wallet</Text>
              <Text style={styles.subGreeting}>Manage your Solana assets</Text>
            </View>
            <Image
              source={{ uri: 'https://i.pravatar.cc/150?u=a042581f4e29026704d' }}
              style={styles.avatar}
            />
          </View>

          <View style={styles.balanceContainer}>
            <Text style={styles.balanceLabel}>Balance</Text>
            <Text style={styles.balanceAmount}>$87,430.12</Text>
            <View style={styles.toggleContainer}>
              <View style={styles.toggleThumb} />
            </View>
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.depositButton}>
              <Text style={styles.depositButtonText}>Deposit</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.withdrawButton}>
              <Text style={styles.withdrawButtonText}>Withdraw</Text>
            </TouchableOpacity>
          </View>

          <Image
            source={require('../assets/glass-preview.png')}
            style={styles.glassesImage}
            resizeMode="cover"
          />

          <View style={styles.transactionsHeader}>
            <Text style={styles.transactionsTitle}>Transactions</Text>
            <TouchableOpacity>
              <Text style={styles.seeAllText}>See All</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.transactionsList}>
            {transactions.map(item => (
              <TransactionItem key={item.id} item={item} />
            ))}
          </View>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeArea: { 
    flex: 1, 
    marginHorizontal: 12,
    paddingTop: 15,
  },
  scrollContent: {
    paddingBottom: 40,
  },
  // Header styles matching HomeScreen
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 25,
    marginBottom: 15,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    padding: 28,
    borderRadius: 24,
    marginHorizontal: 0,
    borderWidth: 1,
    borderColor: 'rgba(1, 3, 26, 0.2)',
  },
  greeting: { 
    fontSize: 28, 
    fontWeight: 'bold', 
    color: '#01031A',
    marginBottom: 6,
  },
  subGreeting: { 
    fontSize: 16, 
    color: '#01031A',
    lineHeight: 22,
  },
  avatar: {
    width: 64,
    height: 64,
    borderRadius: 32,
    borderWidth: 3,
    borderColor: 'rgba(1, 3, 26, 0.3)',
  },
  balanceContainer: {
    alignItems: 'center',
    marginVertical: 30,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: 24,
    padding: 28,
    marginHorizontal: 0,
    borderWidth: 1,
    borderColor: 'rgba(1, 3, 26, 0.2)',
  },
  balanceLabel: {
    fontSize: 20,
    color: '#01031A',
    marginBottom: 8,
  },
  balanceAmount: {
    fontSize: 42,
    fontWeight: 'bold',
    color: '#01031A',
    marginVertical: 12,
  },
  toggleContainer: {
    width: 90,
    height: 36,
    backgroundColor: '#374151',
    borderRadius: 18,
    justifyContent: 'center',
    paddingHorizontal: 0,
    marginTop: 8,
  },
  toggleThumb: {
    width: 26,
    height: 26,
    backgroundColor: '#fff',
    borderRadius: 13,
    alignSelf: 'flex-end',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 25,
    paddingHorizontal: 0,
  },
  depositButton: {
    backgroundColor: 'rgba(1, 3, 26, 0.9)',
    paddingVertical: 18,
    paddingHorizontal: 32,
    borderRadius: 16,
    flex: 1,
    marginRight: 12,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(1, 3, 26, 0.2)',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },
  depositButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
  },
  withdrawButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderWidth: 2,
    borderColor: '#01031A',
    paddingVertical: 18,
    paddingHorizontal: 32,
    borderRadius: 16,
    flex: 1,
    marginLeft: 12,
    alignItems: 'center',
  },
  withdrawButtonText: {
    color: '#01031A',
    fontSize: 18,
    fontWeight: '600',
  },
  glassesImage: {
    width: '100%',
    height: 160,
    borderRadius: 20,
    marginVertical: 30,
    marginHorizontal: 0,
  },
  transactionsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    paddingHorizontal: 0,
  },
  transactionsTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#01031A',
  },
  seeAllText: {
    fontSize: 16,
    color: '#01031A',
    textDecorationLine: 'underline',
  },
  transactionsList: {
    marginBottom: 20,
    paddingHorizontal: 0,
  },
  transactionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    padding: 20,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: 'rgba(1, 3, 26, 0.2)',
  },
  transactionIconContainer: {
    width: 56,
    height: 56,
    borderRadius: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    marginRight: 18,
    borderWidth: 1,
    borderColor: 'rgba(1, 3, 26, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  transactionIcon: {
    // Placeholder for an actual icon
  },
  transactionDetails: {
    flex: 1,
  },
  transactionName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#01031A',
    marginBottom: 4,
  },
  transactionTime: {
    fontSize: 15,
    color: '#01031A',
    marginTop: 2,
  },
  transactionAmount: {
    alignItems: 'flex-end',
  },
  transactionAmountUSD: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#01031A',
    marginBottom: 4,
  },
  transactionAmountCrypto: {
    fontSize: 15,
    color: '#01031A',
    marginTop: 2,
  },
});

export default WalletScreen; 