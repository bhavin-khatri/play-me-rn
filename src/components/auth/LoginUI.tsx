import React, {useState} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {Colors} from '../../res/styles/Colors';
import ResponsivePixels from '../../res/styles/ResponsivePixels';
import Images from '../../common/Images';

export interface IProps {
  email: string;
  password: string;
  onEmailChange: (email: string) => void;
  onPasswordChange: (pass: string) => void;
  onSubmitClick: () => void;
}

export const LoginUI = (props: IProps) => {
  const {email, password, onEmailChange, onPasswordChange, onSubmitClick} =
    props;

  const [passwordVisibility, setPasswordVisibility] = useState(true);

  return (
    <View style={myStyles.mainViewBg}>
      <View style={myStyles.plieView}>
        <Text
          style={{
            fontSize: ResponsivePixels.size80,
          }}>
          Plie
        </Text>
        <Image style={myStyles.imageView} source={Images.imagePlaceholder} />
      </View>
      <View style={myStyles.bottomView}>
        <View style={myStyles.mailView}>
          <Text>Email</Text>
          <View style={myStyles.radiusView}>
            <TextInput
              style={myStyles.TextInput}
              placeholderTextColor={Colors.normalGrey}
              placeholder={'Enter Email'}
              value={email}
              onChangeText={(email: string) => onEmailChange(email)}
            />
          </View>
        </View>
        <View style={myStyles.mailView}>
          <Text>Password</Text>
          <View style={myStyles.radiusView}>
            <TextInput
              style={myStyles.TextInput}
              placeholderTextColor={Colors.normalGrey}
              placeholder={'Enter Password'}
              secureTextEntry={passwordVisibility}
              value={password}
              onChangeText={(pass: string) => onPasswordChange(pass)}
            />
          </View>
        </View>
        <Text
          style={{
            ...myStyles.size12Text,
            alignSelf: 'flex-end',
            color: Colors.normalGrey,
            marginHorizontal: ResponsivePixels.size10,
          }}>
          Forgot Password?
        </Text>
        <TouchableOpacity
          style={myStyles.Button}
          onPress={() => onSubmitClick()}>
          <Text style={myStyles.ButtonLabel}>SignIn</Text>
        </TouchableOpacity>
        <Text
          style={{
            ...myStyles.size12Text,
            alignSelf: 'flex-end',
            color: Colors.Defaultblack,
            marginHorizontal: ResponsivePixels.size10,
          }}>
          Not a member? SignUp Here
        </Text>
        <View
          style={{
            // flex: 1,
            flexDirection: 'row',
            marginVertical: ResponsivePixels.size20,
            marginHorizontal: ResponsivePixels.size10,
            alignItems: 'center',
          }}>
          <View style={myStyles.lineView} />
          <Text style={{marginHorizontal: ResponsivePixels.size5}}>
            or Sign In With
          </Text>
          <View style={myStyles.lineView} />
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
          <View style={myStyles.radiusViewSmall}>
            <Image style={myStyles.imageView} source={Images.google} />
          </View>

          <View style={myStyles.radiusViewSmall}>
            <Image style={myStyles.imageView} source={Images.apple} />
          </View>
          <View style={myStyles.radiusViewSmall}>
            <Image style={myStyles.imageView} source={Images.facebook} />
          </View>
        </View>
      </View>
    </View>
  );
};

export const myStyles = StyleSheet.create({
  mainViewBg: {
    flex: 1,
    backgroundColor: Colors.normalGrey,
  },
  plieView: {
    alignItems: 'center',
    height: ResponsivePixels.size250,
    justifyContent: 'space-between',
    // justifyContent: 'center',
  },
  TextInput: {
    // flex: 1,
    // padding: 10,
    // fontSize: 16,
    // color: Colors.Defaultblack,
  },
  Button: {
    alignItems: 'center',
    alignSelf: 'flex-end',
    justifyContent: 'center',
    width: ResponsivePixels.size100,
    height: ResponsivePixels.size40,
    marginVertical: ResponsivePixels.size10,
    marginHorizontal: ResponsivePixels.size10,
    borderRadius: ResponsivePixels.size5,
    backgroundColor: Colors.green,
  },
  ButtonLabel: {
    fontSize: 20,
    fontWeight: '700',
    color: 'white',
  },
  imageView: {
    height: ResponsivePixels.size40,
    width: ResponsivePixels.size40,
    borderRadius: ResponsivePixels.size8,
    margin: ResponsivePixels.size10,
  },
  bottomView: {
    flex: 1,
    backgroundColor: Colors.Defaultwhite,
    paddingVertical: ResponsivePixels.size10,
  },
  mailView: {
    marginHorizontal: ResponsivePixels.size20,
    // marginVertical: ResponsivePixels.size20,
  },
  radiusView: {
    backgroundColor: 'white',
    borderRadius: 8,
    width: '100%',
    height: ResponsivePixels.size40,
    marginVertical: 10,
    elevation: 5,
  },
  size16Text: {
    fontSize: ResponsivePixels.size16,
    color: Colors.Defaultblack,
  },
  size12Text: {
    fontSize: ResponsivePixels.size12,
    color: Colors.Defaultblack,
  },
  size10Text: {
    fontSize: ResponsivePixels.size10,
    color: Colors.Defaultblack,
  },
  lineView: {
    flex: 1,
    backgroundColor: Colors.Defaultblack,
    height: ResponsivePixels.size1,
  },
  radiusViewSmall: {
    backgroundColor: 'white',
    borderRadius: 8,
    // width: '100%',
    // height: ResponsivePixels.size40,
    // marginVertical: 10,
    marginHorizontal: ResponsivePixels.size10,
    elevation: 5,
  },
});
