import React, { useState } from 'react';
import { View } from 'react-native';
import PasswordEye from 'react-native-password-eye';

const MyTextInput = () => {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View>
      <PasswordEye
        value={password}
        onChangeText={setPassword}
        placeholder="Enter password"
        visible={showPassword}
        onVisibleChange={setShowPassword}
      />
    </View>
  );
};

export default MyTextInput;
