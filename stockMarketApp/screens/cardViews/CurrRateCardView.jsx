import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
const CurrRateCardView = ({item}) => {

  const dateConvert = (timestamp) =>{
    return new Date(timestamp).toLocaleString();
  }
  return (
    <View style={styles.card}>
      <Text style={styles.title}>Company Symbol: {item.companyName}</Text>
      <View style={styles.row}>
        <View style={{alignItems: 'center'}}>
          <Text style={styles.key}>Rate</Text>
          <Text style={styles.value}>{item.rate}</Text>
        </View>
        <View style={{alignItems: 'center'}}>
          <Text style={styles.key}>Time</Text>
          <Text style={styles.value}>{dateConvert(item.timestamp)}</Text>
        </View>
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
    padding: 10,
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
export default CurrRateCardView;
