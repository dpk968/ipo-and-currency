import * as React from 'react';
import {View, useWindowDimensions, Text} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import IpoScreen from './IpoScreen';
import CurrencyRate from './CurrencyRate';

const FirstRoute = () => (
  <View style={{backgroundColor: '#0D222B', height: '100%'}}>
    <IpoScreen />
  </View>
);

const SecondRoute = () => (
  <View style={{backgroundColor: '#0D222B', height: '100%'}}>
    <CurrencyRate />
  </View>
);

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
});

const renderTabBar = props => (
  <TabBar
    {...props}
    indicatorStyle={{backgroundColor: '#fff'}}
    style={{backgroundColor: '#FB3640'}}
  />
);

const HomeScreen = () => {
  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'Home'},
    {key: 'second', title: 'Currency Rate'},
  ]);

  return (
    <TabView
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{width: layout.width}}
      renderTabBar={renderTabBar}
      tabBarPosition="bottom"
    />
  );
}


export default HomeScreen;
