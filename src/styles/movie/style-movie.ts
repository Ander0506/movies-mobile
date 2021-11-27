import {Dimensions, StyleSheet} from 'react-native';

export default StyleSheet.create({
  content: {
    paddingVertical: 10,
    marginHorizontal: 5,
    width: 100,
  },
  contentImage: {
    paddingBottom: 5,
    alignItems: 'center',
  },
  contentTextDescriptor: {
    flex: 1,
    justifyContent: 'center',
  },
  contentImageBg: {
    height: Dimensions.get('window').height / 2.5,
    zIndex: 1,
  },
  contentList: {
    backgroundColor: '#2c3848',
    width: '100%',
    flex: 1.1,
    padding: 25,
    paddingBottom: 20,
  },
  contentBR: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 15,
    alignItems: 'center',
  },
  ImageBg: {
    height: Dimensions.get('window').height / 2.4,
    width: Dimensions.get('window').width,
    borderRadius: 20,
  },
  Image: {
    width: 90,
    height: 115,
    borderRadius: 20,
  },
  textDescriptor: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 10,
    textAlign: 'center',
  },
  title: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
  },
  contentDescription: {
    paddingVertical: 15,
  },
  description: {
    color: '#868d95',
    fontSize: 15,
    lineHeight: 25,
    fontWeight: '500',
    textAlign: 'justify',
  },
  btnWacthNow: {
    backgroundColor: '#6b737f',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
  },
  textBtnWacthNow: {
    color: 'white',
    fontSize: 15,
    fontWeight: '500',
  },
  textDescriptorFooter: {
    color: 'white',
    fontWeight: '700',
    flex: 0.3,
  },
  textDescriptionFooter: {
    color: '#868d95',
    flex: 1,
  },
  contentDescriptionFooter: {
    flexDirection: 'row',
    paddingVertical: 2,
    alignItems: 'center',
  },
  contentFooter: {
    flex: 1,
    justifyContent: 'center',
    paddingVertical: 10,
  },
});
