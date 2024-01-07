import React, {useState}from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert
} from 'react-native';
import {useAuth} from '../auth/AuthContext';
import CustomAlertBox from './CustomAlertBox';

const Register = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [confirmPass,setConfirmPass] = useState('');
  const [passwordVisablity,setpasswordVisablity] = useState(true);
  const [confrmPasswordVisablity,SetConfrmPasswordVisablity] = useState(true);
  const {user,pass,register} = useAuth();
  const [isAlertVisible, setAlertVisible] = useState(false);
  const [alertMsg,setAlertMsg] = useState('');
  const [buttonColor,setButtonColor] = useState('#ff0000')
  
  
  const closeAlert = () => {
    setAlertVisible(false);
  };

  const goToSignIn = () => {
    navigation.navigate('Login');
  };
  const handleSignIn = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(email)) {
      if (password === confirmPass) {
        register(username, password);
        setButtonColor('#00ff00')
        setAlertMsg('Success', 'Sign Up Successfully');
        setAlertVisible(true);
      setTimeout(() => {
        navigation.navigate('Login');
      }, 2000);
      }else{
        setAlertMsg('Confirm Password And Password Not Matched');
        setAlertVisible(true);
      }
    } else {
      setAlertMsg('Invalid Email Address.');
      setAlertVisible(true);
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.registerContainer}>
        <Text style={[styles.topMsg, styles.textColor]}>
          Start your journey
        </Text>
        <Text style={[styles.textColor, {marginTop: 10}]}>
          {'Create your account, \nplease enter your details'}
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Username"
          placeholderTextColor={'#fff'}
          onChangeText={text => setUsername(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Email Address"
          placeholderTextColor={'#fff'}
          onChangeText={text => setEmail(text)}
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
          <TouchableOpacity onPress={() => setpasswordVisablity(!passwordVisablity)}>
          <Text style={{fontSize: 20, marginTop: 50}}>👁️</Text>
          </TouchableOpacity>
        </View>
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
            placeholder="Confirm Password"
            secureTextEntry={confrmPasswordVisablity}
            placeholderTextColor={'#fff'}
            onChangeText={text => setConfirmPass(text)}
          />
          <TouchableOpacity onPress={() => SetConfrmPasswordVisablity(!confrmPasswordVisablity)}>
          <Text style={{fontSize: 20, marginTop: 50}}>👁️</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.signInButton} onPress={handleSignIn}>
          <Text style={styles.signInButtonText}>Sign Up</Text>
        </TouchableOpacity>

        <View
          style={{
            // flex: 1,
            marginTop: 30,
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <Text style={{color: '#fff'}}>Already Have Account?</Text>
          <TouchableOpacity onPress={goToSignIn}>
            <Text style={{color: '#FB3640'}}> Sign In Now</Text>
          </TouchableOpacity>
        </View>
        <CustomAlertBox visible={isAlertVisible} onClose={closeAlert} message={alertMsg} buttonColor={buttonColor}/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0D222B',
  },
  registerContainer: {
    marginTop: 40,
    paddingHorizontal: 10,
    height: '100%',
  },
  backgroundStyle: {
    backgroundColor: '#0D222B',
    height: '100%',
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
    borderBottomColor: 'grey',
    marginTop: 50,
    paddingLeft: 10,
    width: '100%',
  },
  passwordContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    textAlignVertical: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
  },
  eyeIcon: {
    marginLeft: 10,
  },
  checkboxContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    marginTop: 30,
  },
  checkboxLabel: {
    // marginLeft: 10,
    flex: 1,
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
    marginTop: 50,
  },
  signInButtonText: {
    color: 'white',
    fontWeight: 'bold',
    height: 30,
    textAlignVertical: 'center',
  },
});

export default Register;
