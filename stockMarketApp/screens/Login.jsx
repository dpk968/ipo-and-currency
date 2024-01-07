import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Button,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import CustomAlertBox from './CustomAlertBox';
import {useAuth} from '../auth/AuthContext';

const LoginScreen = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisablity, setpasswordVisablity] = useState(true);
  const [rememberMe, setRememberMe] = useState(false);
  const {login, user, pass} = useAuth();
  const [isAlertVisible, setAlertVisible] = useState(false);
  const [alertMsg, setAlertMsg] = useState('');
  const [buttonColor, setButtonColor] = useState('#ff0000');
  const closeAlert = () => {
    setAlertVisible(false);
  };

  const handleRagister = () => {
    navigation.navigate('Register');
  };
  const handleLogin = () => {
    if (username === '' || password === '') {
      setButtonColor('#ff0000');
      setAlertMsg('Please Enter Username and Password!');
      setAlertVisible(true);
    } else {
      if (user == null || pass == null) {
        setButtonColor('#ff0000');
        setAlertMsg('User Not Exist! Register First');
        setAlertVisible(true);
      } else {
        if ((username === user.username) & (password === pass.password)) {
          login(username, password);
          setUsername('');
          setPassword('');
          setButtonColor('#00ff00');
          setAlertMsg('Logged In Successfully!');
          setAlertVisible(true);
          setTimeout(() => {
            navigation.navigate('Home');
          }, 2000);
        }
      }
    }

    setUsername('');
    setPassword('');
  };

  return (
    <View style={styles.container}>
      <View style={styles.sectionContainer}>
        <Text style={[styles.topMsg, styles.textColor]}>Let's sign you in</Text>
        <Text style={[styles.textColor, {marginTop: 10}]}>
          {'Welcome back, \nplease enter your details'}
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Username"
          onChangeText={text => setUsername(text)}
        />

        <View
          style={{
            alignItems: 'center',
            flexDirection: 'row',
            // justifyContent: 'center',
            borderBottomWidth: 1,
            borderBottomColor: 'grey',
          }}>
          <TextInput
            style={{
              height: 40,
              marginTop: 45,
              paddingLeft: 10,
              width: '95%',
            }}
            placeholder="Password"
            secureTextEntry={passwordVisablity}
            placeholderTextColor={'#fff'}
            onChangeText={text => setPassword(text)}
          />
          <TouchableOpacity
            onPress={() => setpasswordVisablity(!passwordVisablity)}>
            <Text style={{fontSize: 20, marginTop: 50}}>👁️</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.checkboxContainer}>
          <View style={styles.checkboxLabel}>
            <CheckBox
              value={rememberMe}
              onValueChange={() => setRememberMe(!rememberMe)}
            />
            <Text style={{marginLeft: 10, color: '#fff'}}>Remember Me</Text>
          </View>
          <TouchableOpacity>
            <Text style={styles.forgotPassword}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.signInButton} onPress={handleLogin}>
          <Text style={styles.signInButtonText}>Sign In</Text>
        </TouchableOpacity>
        <View
          style={{
            // flex: 1,
            marginTop: 30,
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <Text style={{color: '#fff'}}>Don't have account?</Text>
          <TouchableOpacity onPress={handleRagister}>
            <Text style={{color: '#FB3640'}}> Register Now</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View>
        {/* <Button title="Show Alert" onPress={showAlert} /> */}
        <CustomAlertBox
          visible={isAlertVisible}
          onClose={closeAlert}
          message={alertMsg}
          buttonColor={buttonColor}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0D222B',
    height: '100%',
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // padding: 20,
  },
  textColor: {
    color: '#fff',
  },
  sectionContainer: {
    marginTop: 40,
    paddingHorizontal: 10,
  },
  topMsg: {
    fontSize: 30,
  },
  input: {
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: 'black',

    marginTop: 50,
    paddingLeft: 10,
    width: '100%',
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  eyeIcon: {
    marginLeft: 10,
  },
  checkboxContainer: {
    // flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    marginTop: 30,
  },
  checkboxLabel: {
    // marginLeft: 10,
    // flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  forgotPassword: {
    marginLeft: 'auto',
    color: '#fff',
  },
  signInButton: {
    backgroundColor: '#FB3640',
    padding: 10,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
    marginTop: 20,
  },
  signInButtonText: {
    color: 'white',
    fontWeight: 'bold',
    height: 30,
    textAlignVertical: 'center',
  },
});

export default LoginScreen;
