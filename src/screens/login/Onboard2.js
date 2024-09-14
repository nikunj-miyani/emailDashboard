import {Keyboard, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Header} from '../../components';
import {WebView} from 'react-native-webview';
import {colors} from '../../helpers/utils';

const Onboard2 = () => {
  const [isStarting, setIsStarting] = useState(true);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const keyboardShowListener = Keyboard.addListener('keyboardDidShow', () =>
      setIsVisible(false),
    );
    const keyboardHideListener = Keyboard.addListener('keyboardDidHide', () =>
      setIsVisible(true),
    );

    return () => {
      keyboardShowListener?.remove();
      keyboardHideListener?.remove();
    };
  }, []);

  const onPressHelp = () => {
    if (isStarting) {
      setIsStarting(false);
    } else {
      setIsStarting(true);
    }
  };

  return (
    <View style={styles.container}>
      <Header noHeader />
      <WebView
        source={{uri: 'https://accounts.google.co.in/'}}
        onOpenWindow={() => console.log('magan')}
        onResponderGrant={() => console.log('000000')}
      />
      {isVisible && (
        <View style={styles.bottomContainer}>
          <TouchableOpacity onPress={onPressHelp}>
            <View style={styles.smallBar} />
            {isStarting ? (
              <Text style={styles.helpTxt}>Need Help?</Text>
            ) : (
              <Text style={styles.helpTxt}>
                Please sign in to your Google Account.
              </Text>
            )}
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default Onboard2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  bottomContainer: {
    padding: 15,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: colors.primary,
  },
  descImg: {
    width: 45,
    height: 45,
  },
  helpView: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  helpTxt: {
    fontSize: 18,
    paddingHorizontal: 25,
    color: colors.white,
    fontWeight: '500',
    textAlign: 'center',
    paddingTop: 20,
  },
  smallBar: {
    height: 5,
    width: 40,
    backgroundColor: colors.borderColor,
    alignSelf: 'center',
    borderRadius: 100,
  },
});
