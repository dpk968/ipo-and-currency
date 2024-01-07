import React, {useState, useEffect} from 'react';
import {View, Text, ScrollView, StyleSheet,FlatList} from 'react-native';
import CurrRateCardView from './cardViews/CurrRateCardView';


const CurrencyRate = () => {
  const [data, setData] = useState([]); 

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        'https://api.iex.cloud/v1/fx/latest?symbols=USDCAD,GBPUSD,USDJPY&token=pk_426dcba32a6848019e70d304cfadbf3f',
      );
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  return (
    <View style={{padding: 20}}>
      <Text
        style={{
          color: '#fff',
          fontSize: 20,
          backgroundColor: '#FB3640',
          padding: 15,
          shadowRadius: 4,
        }}>
        Currency Rates
      </Text>
      <View
        style={{
          marginTop: 20,
          marginBottom: 20,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Text style={{fontSize: 30}}>Latest Currency Rates</Text>
      </View>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={{alignItems: 'center', marginBottom: 150}}>
          <View style={{width:'100%'}}>
            <FlatList
              data={data}
              renderItem={({item}) => <CurrRateCardView item={item} />}
              keyExtractor={item => item.symbol}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
export default CurrencyRate;
