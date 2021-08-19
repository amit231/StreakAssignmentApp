import React, { useReducer, useCallback, useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  useWindowDimensions,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';

import { addUserData } from '../actions';
import { CrossButton } from './SVG';
import InputField from './InputField';
import Button from './Button';
import { useDispatch } from 'react-redux';



const UserForm = ({ navigation }) => {
  const dimensions = useWindowDimensions();
  const dispatchToRedux = useDispatch();
  const FORM_INPUT_UPDATE = 'FORM_INPUT_UPDATE';
  const formReducer = (state, action) => {
    if (action.type === FORM_INPUT_UPDATE) {
      const updatedValues = {
        ...state.inputValues,
        [action.input]: action.value,
      };
      const updatedValidities = {
        ...state.inputValidities,
        [action.input]: action.isValid,
      };
      let updatedFormIsValid = true;
      for (const key in updatedValidities) {
        updatedFormIsValid = updatedFormIsValid && updatedValidities[key];
        console.log(updatedFormIsValid)
      }
      return {
        formIsValid: updatedFormIsValid,
        inputValues: updatedValues,
        inputValidities: updatedValidities,
      };
    }
    return state;
  };
  const [showValidations, setShowValidation] = useState(false)
  const [formState, dispatchFormState] = useReducer(formReducer, {
    inputValues: {
      firstName: '',
      secondName: '',
      mobileNumber: '',
      email: '',
    },
    inputValidities: {
      email: false,
      mobileNumber: false,
      firstName: false,
      secondName: true,
    },
    formIsValid: false,
  });
  function onCrossPress() {
    navigation.push('Home')
  }
  const inputChangeHandler = useCallback(
    (inputIdentifier, inputValue, inputValidity) => {
      dispatchFormState({
        type: FORM_INPUT_UPDATE,
        value: inputValue,
        isValid: inputValidity,
        input: inputIdentifier,
      });
    },
    [dispatchFormState],
  );
  console.log(formState.inputValues);
  function SubmitHandler() {
    console.log(formState.formIsValid, ' it is validity of form')
    setShowValidation(true)
    console.log(navigation)
    if (formState.formIsValid) {
      const data = formState.inputValues;
      dispatchToRedux(addUserData(data.firstName, data.secondName, data.mobileNumber, data.email))
      navigation.push('Home')
    }
  }
  return (
    <ScrollView>
    <KeyboardAvoidingView
      style={{
        ...styles.container,
        flex: 1,
        minHeight: dimensions.height,
        minWidth: dimensions.width,
      }}
      behavior="padding"
        keyboardVerticalOffset={45}>
        <View style={styles.profileFormHeader}>

          <View style={styles.heading}>
            <Text style={styles.headingText}>Profile</Text>
            <TouchableOpacity onPress={onCrossPress} style={{}}>
              <CrossButton style={styles.crossButton} width={40} height={40} />
            </TouchableOpacity>
          </View>
          <Text style={styles.headerText}>
            Enter your details so we can get to know you better.
          </Text>
          <View style={styles.userDetailsForm}>
            <InputField
              id="firstName"
              autoCapitalize="none"
              errorText="First name is required!"
              label="First Name*"
              keyboardType="default"
              required
              showValidations={showValidations}
              onInputChange={inputChangeHandler}
              initialValue=""
            />
            <InputField
              id="secondName"
              autoCapitalize="none"
              label="Second Name"
              keyboardType="default"
              showValidations={showValidations}
              onInputChange={inputChangeHandler}
              initialValue=""
            />
            <InputField
              id="email"
              autoCapitalize="none"
              errorText="Please enter a valid email address"
              label="Email*"
              keyboardType="email-address"
              required
              email
              showValidations={showValidations}

              onInputChange={inputChangeHandler}
              initialValue=""
            />
            <InputField
              id="mobileNumber"
              autoCapitalize="none"
              errorText="Number must contain atleast 10 digits!"
              label="Mobile Number*"
              keyboardType="number-pad"
              required
              min={10}
              showValidations={showValidations}
              onInputChange={inputChangeHandler}
              initialValue=""
            />
          </View>
          <Text style={styles.otpText}>OTP Verification in the next step</Text>
        </View>
        <Button style={styles.fadeButton} onPress={SubmitHandler}>
          <Text style={styles.buttonText}>Create Profile</Text>
        </Button>
    </KeyboardAvoidingView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingHorizontal: 18,

  },
  profileFormHeader: {
    paddingTop: 29,
  },
  heading: {
    flexDirection: 'row',
    marginBottom: 20,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  headingText: {
    fontSize: 22,
    fontWeight: '700',
    // fontWeight: '600',
    color: '#501761',
  },

  headerText: {
    paddingRight: '35%',
    fontSize: 16,
    fontWeight: '600',
    letterSpacing: 0,
    fontWeight: '700',
    color: '#646464',
    fontFamily: 'IBM Plex Sans',
    paddingBottom: 30,
    borderBottomWidth: 2,
    borderBottomColor: 'rgba(229,229,229,0.5)',
  },
  userDetailsForm: {
    paddingTop: 30,
    marginBottom: 18,
  },
  otpText: {
    textAlign: 'center',
    fontSize: 16,
    color: '#8A8A8A',
    fontWeight: '700',
    letterSpacing: -0.1
  },
  fadeButton: {
    width: '100%',
    height: 56,
    borderRadius: 8,
    backgroundColor: '#500061',
    marginTop: 60,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '700',
    color: 'white'
  },
});
export default UserForm;
