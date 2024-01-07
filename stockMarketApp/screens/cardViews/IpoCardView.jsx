import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Card, Paragraph} from 'react-native-paper';

const IpoCardView = ({item}) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{item.companyName}</Text>
      <View style={styles.row}>
        <Text style={styles.key}>Symbol:</Text>
        <Text style={styles.value}>{item.symbol}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.key}>Filing Date:</Text>
        <Text style={styles.value}>{item.filedDate}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.key}>Offering Date:</Text>
        <Text style={styles.value}>{item.offeringDate}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.key}>Price Range:</Text>
        <Text style={styles.value}>
          ${item.priceRangeLow}-${item.priceRangeHigh}
        </Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.key}>Shares:</Text>
        <Text style={styles.value}>{item.shares}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#0D253A',
    borderRadius: 10,
    padding: 10,
    margin: 10,
    shadowColor: 'black',
    // flexWrap:'wrap',
    // shadowOffset: { width: 0, height: 2 },
    width: '100%',
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5,
  },
  key: {
    fontWeight: 'bold',
    marginRight: 5,
    fontSize: 20,
  },
  value: {
    // flex: 1,
    fontSize: 20,
  },
});

export default IpoCardView;
