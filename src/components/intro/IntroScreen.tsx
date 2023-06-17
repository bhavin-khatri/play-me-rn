import { Component } from "react";
import { IntroScreenUI } from "./IntroScreenUI";
import { navigationConstant } from "../../constants/NavigationConstant";

export interface IState {}
export class IntroScreen extends Component<any, IState> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    setTimeout(() => {
      this.navigateToDashBoard();
    }, 2000);
  }

  navigateToDashBoard() {
    this.props.navigation.navigate(navigationConstant.DASHBOARD);
  }

  render() {
    return <IntroScreenUI />;
  }
}
