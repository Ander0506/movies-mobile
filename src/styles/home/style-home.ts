import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  content: {
    backgroundColor: '#5ca0d3',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: Dimensions.get('window').height,
    flex: 1,
  },
  contentHeader: {
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
  contentList: {
    backgroundColor: '#2c3848',
    width: '100%',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    flex: 1,
    padding: 25,
    paddingBottom: 20,
  },
  titleHome: {
    color: 'white',
    fontSize: 35,
    fontWeight: 'bold',
    lineHeight: 50,
  },
  contentInputSH: {
    height: 50,
    marginTop: 20,
  },
  inputSearchHome: {
    backgroundColor: '#8dbde0',
    height: 50,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderRadius: 25,
    borderBottomWidth: 0,
    minHeight: 0,
    fontSize: 20,
    margin: 'auto',
  },
  contentDescriptor: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  descriptor: {
    color: 'white',
    fontSize: 13,
    fontWeight: 'bold',
  },
});
