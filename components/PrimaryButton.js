import {View, Text, Pressable, StyleSheet} from 'react-native';

const PrimaryButton = ({children, onPress}) => {
  return (
    <View>
      <Pressable
        onPress={onPress}
        android_ripple={{color: '#7987cd', radius: 1}}
        style={({pressed}) =>
          pressed
            ? [styles.innerContainer, styles.pressed]
            : styles.innerContainer
        }>
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    overflow: 'hidden',
  },
  innerContainer: {
    borderWidth: 2,
    backgroundColor: '#3D54C8',
    borderColor: '#3D54C8',
    borderRadius: 8,
    padding: 12,
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
  },
  pressed: {
    opacity: 0.75,
  },
});

export default PrimaryButton;
