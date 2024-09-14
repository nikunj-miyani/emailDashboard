import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import {images} from '../../helpers/imageConstant';
import {useNavigation} from '@react-navigation/native';
import {colors} from '../../helpers/utils';

const Onboard1 = () => {
  const {navigate} = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headingText}>Email Dashboard</Text>
      <Text style={styles.descText}>Get your all emails</Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.googleButton}
          onPress={() => navigate('Onboard2')}>
          <FastImage
            source={images.google}
            resizeMode="contain"
            style={styles.googleImg}
          />
          <Text style={styles.googleTxt}>Continue with google</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Onboard1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headingText: {
    fontSize: 25,
    color: colors.description,
    fontWeight: '500',
  },
  descText: {
    fontSize: 15,
    color: colors.description,
    fontWeight: '400',
    paddingTop: 10,
  },
  buttonContainer: {
    paddingTop: 30,
  },
  googleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    borderColor: colors.borderColor,
  },
  googleImg: {
    width: 20,
    height: 20,
  },
  googleTxt: {
    fontSize: 15,
    color: colors.description,
    fontWeight: '500',
    marginLeft: 10,
  },
});
