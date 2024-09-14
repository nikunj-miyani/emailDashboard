import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import FastImage from 'react-native-fast-image';
import {images} from '../helpers/imageConstant';
import {colors} from '../helpers/utils';

const Header = ({noHeader}) => {
  return (
    <View style={styles.container}>
      {noHeader ? (
        <TouchableOpacity style={styles.closeContainer}>
          <FastImage
            source={images.closeIcon}
            style={styles.closeIcon}
            resizeMode="contain"
          />
        </TouchableOpacity>
      ) : (
        <View style={styles.subContainer}>
          <TouchableOpacity>
            <FastImage source={images.backIcon} style={styles.backIcon} />
          </TouchableOpacity>
          <Text style={styles.titleText}>Header</Text>
        </View>
      )}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    height: 60,
    paddingHorizontal: 18,
    justifyContent: 'center',
    borderBottomWidth: 0.5,
    borderBottomColor: colors.borderColor,
  },
  subContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backIcon: {
    width: 20,
    height: 20,
  },
  titleText: {
    fontSize: 18,
    paddingLeft: 20,
    fontWeight: '500',
  },
  closeContainer: {
    alignSelf: 'flex-end',
    padding: 5,
  },
  closeIcon: {
    width: 15,
    height: 15,
  },
});
