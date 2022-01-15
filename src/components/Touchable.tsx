import React from 'react';
import {
  TouchableNativeFeedbackProps,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';

interface TouchableProps
  extends TouchableNativeFeedbackProps,
    TouchableOpacityProps {}

export default function TouchableCustom(props: TouchableProps) {
  return <TouchableOpacity {...props} />;
}
