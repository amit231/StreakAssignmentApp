import React, { useReducer, useEffect } from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';
const INPUT_CHANGE = 'INPUT_CHANGE';
const INPUT_BLUR = 'INPUT_BLUR';
const inputReducer = (state, action) => {
  switch (action.type) {
    case INPUT_CHANGE:
      return {
        ...state,
        value: action.value,
        isValid: action.isValid,
      };
    case INPUT_BLUR:
      return {
        ...state,
        touched: true,
      };
    default:
      return state;
  }
};
const InputField = props => {

  const [inputState, dispatch] = useReducer(inputReducer, {
    value: props.initialValue ? props.initialValue : '',
    isValid: !props.required,
    touched: true,
  });
  const { onInputChange, id } = props;
  useEffect(() => {
    if (inputState.touched) {
      console.log(inputState)
      onInputChange(id, inputState.value, inputState.isValid);
    }
  }, [inputState, onInputChange, id]);
  const lostFocusHandler = () => {
    dispatch({ type: INPUT_BLUR });
  };

  const textChangeHandler = text => {
    const emailRegex =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let isValid = true;
    if (props.required && text.trim().length === 0) {
      isValid = false;
    }
    if (props.email && !emailRegex.test(text.toLowerCase())) {
      isValid = false;
    }
    if (props.min != null && +text < props.min) {
      isValid = false;
    }
    if (props.max != null && +text > props.max) {
      isValid = false;
    }
    if (props.minLength != null && text.length > props.minLength) {
      isValid = false;
    }
    console.log(isValid)
    dispatch({ type: INPUT_CHANGE, value: text, isValid: isValid });
  };

  let styleObj = {}
  if (props.showValidations && !inputState.isValid && inputState.touched) {
    styleObj = { borderColor: '#650F5C' }
  }
  console.log(styleObj)
  return (
    <View style={styles.formControl}>
      <Text style={styles.label}>{props.label}</Text>
      <TextInput
        {...props}
        style={[styles.input, styleObj]}
        onBlur={lostFocusHandler}
        value={inputState.value}
        onChangeText={textChangeHandler}
      />
      {props.showValidations && !inputState.isValid && inputState.touched && (
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>{props.errorText}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  formControl: {
    width: '100%',
    position: 'relative',
    // backgroundColor: 'red'
  },
  label: {
    fontSize: 14,
    fontWeight: '700',
    marginBottom: 12,
    color: '#41536D'
  },
  input: {
    paddingHorizontal: 19,
    paddingVertical: 5,
    borderColor: 'rgba(229,229,229,0.5)',
    borderWidth: 2,
    marginBottom: 20,
    height: 50,
    fontSize: 15,
    fontWeight: '700',
    color: 'rgba(0,0,0,0.7)',
    borderRadius: 6
  },
  errorContainer: {
    position: "absolute",
    bottom: 3,
    left: 0,
    // margin: 1,
  },
  errorText: {
    fontFamily: 'open-sans',
    color: '#650F5C',
    fontSize: 13,
  },
});

export default InputField;
