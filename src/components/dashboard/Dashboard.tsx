import * as React from 'react';
import {Component} from 'react';
import {DashboardUI} from './DashboardUI';
import {StyleSheet} from 'react-native';
import {Colors} from '../../res/styles/Colors';
import ResponsivePixels from '../../res/styles/ResponsivePixels';

export interface IState {
  data: any;
  name: string;
}

export class Dashboard extends Component<any, IState> {
  constructor(props: any) {
    super(props);
    this.state = {
      data: [],
      name: '',
    };
  }

  componentDidMount() {}

  render() {
    return <DashboardUI />;
  }
}
const myStyles = StyleSheet.create({
  ParentView: {
    flex: 1,
    flexDirection: 'column',
  },
  TabView: {
    backgroundColor: 'transparent',
    borderTopColor: 'transparent',
    // marginHorizontal: ResponsivePixels.size10,
    position: 'absolute',
    // shadow: false,
    // borderRadius: 5,
    // padding: 5,
    zIndex: 100, //
    // bottom: 0,
  },
  LabelStyle: {
    fontSize: ResponsivePixels.size12,
    fontWeight: '500',
  },
  ImageStyleInactive: {
    height: 20,
    width: 20,
    tintColor: Colors.normalGrey,
  },
  ImageStyleActive: {
    height: 25,
    width: 25,
    // tintColor: Colors.Defaultblack,
  },
  headerImage: {
    height: ResponsivePixels.size25,
    width: ResponsivePixels.size25,
    tintColor: Colors.normalGrey,
    marginHorizontal: ResponsivePixels.size20,
  },
});
