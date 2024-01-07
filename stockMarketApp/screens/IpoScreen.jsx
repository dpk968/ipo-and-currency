import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  TouchableWithoutFeedback,
  Animated,
  FlatList,
} from 'react-native';
import IpoCardView from './cardViews/IpoCardView';
import IpoFetcher from './ipo/IpoFetcher';

const IpoScreen = () => {
  const [animation] = useState(new Animated.Value(0));
  const [data, setData] = useState([]);

  const handlePressIn = () => {
    fetchData();
    Animated.timing(animation, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };
  const handlePressOut = () => {
    Animated.timing(animation, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };
  const rotate = animation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '-360deg'],
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        'https://api.iex.cloud/v1/data/CORE/UPCOMING_IPOS/market?token=pk_426dcba32a6848019e70d304cfadbf3f',
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
        IPO Dashboard
      </Text>
      <View
        style={{
          marginTop: 20,
          marginBottom: 20,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Text style={{fontSize: 30}}>UPCOMING IPOS</Text>
        <TouchableWithoutFeedback
          onPressIn={handlePressIn}
          onPressOut={handlePressOut}>
          <Animated.Text style={[styles.text, {transform: [{rotate}]}]}>
            {' '}
            <Text style={{fontSize: 42}}>↺</Text>
          </Animated.Text>
        </TouchableWithoutFeedback>
      </View>
      <View>
        <FlatList
          data={data}
          renderItem={({item}) => <IpoCardView item={item} />}
          keyExtractor={item => item.symbol}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default IpoScreen;
