import { StyleSheet } from 'react-native';
import * as colors from 'kitsu/constants/colors';
import { scenePadding } from 'kitsu/screens/Feed/constants';

export const styles = StyleSheet.create({
  textInputBox: {
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: colors.lightGrey,
    borderRadius: 100,
    height: 36,
    flexDirection: 'row',
    alignItems: 'center',
  },
  textInputField: {
    flex: 1,
    fontFamily: 'Open Sans',
    fontSize: 13,
    paddingHorizontal: scenePadding,
  },
  submitButton: {
    height: 36,
    paddingVertical: 5,
    paddingLeft: scenePadding * 2,
  },
  submitButtonIcon: {
    fontSize: 24,
  },
});
