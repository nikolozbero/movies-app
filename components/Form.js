import {StyleSheet, View, TextInput} from 'react-native';

import PrimaryButton from './PrimaryButton';

const Form = ({input, setInput, addMoviesHandler}) => {
  return (
    <View style={styles.formContainer}>
      <TextInput
        style={styles.textInput}
        autoCapitalize="none"
        autoCorrect={false}
        value={input}
        onChangeText={val => setInput(val)}
      />
      <PrimaryButton onPress={addMoviesHandler}>Add Movie</PrimaryButton>
    </View>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 24,
  },
  textInput: {
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#10162f',
    width: '70%',
    marginRight: 5,
    fontSize: 24,
    paddingHorizontal: 12,
  },
});

export default Form;
