import * as React from "react";
import { Component } from "react";
import { MusicDetailsUI } from "./MusicDetailsUI";

export interface IState {
  musicDetails: any;
}

export class MusicDetails extends Component<any, IState> {
  constructor(props: any) {
    super(props);
    this.state = {
      musicDetails: {},
    };
  }

  componentDidMount() {
    const { params } = this.props.route;
    this.setState({ musicDetails: params?.musicDetails });
  }

  render() {
    return <MusicDetailsUI musicDetails={this.state.musicDetails} />;
  }
}
