import * as React from "react";
import { Component } from "react";
import { MusicDetailsUI } from "./MusicDetailsUI";
import { secondsToHms } from "../../../constants/Utils";

export interface IState {
  musicDetails: any;
  sliderValue: number;
  maximumValue: number;
}

export class MusicDetails extends Component<any, IState> {
  intervalID: any;
  constructor(props: any) {
    super(props);
    this.state = {
      musicDetails: {},
      sliderValue: 0,
      maximumValue: 100,
    };
  }

  componentDidMount() {
    const { params } = this.props.route;
    this.setState({ musicDetails: params?.musicDetails });
    this.startSong();
  }

  startSong() {
    this.intervalID = setInterval(() => {
      this.setState({ sliderValue: this.state.sliderValue + 1 });
    }, 100);
  }

  stopSong() {
    clearInterval(this.intervalID);
  }

  onSliderValueChange(value: number) {
    if (value >= this.state.maximumValue) {
      this.stopSong();
      this.setState({ sliderValue: 0 }, () => {
        this.startSong();
      });
    }
  }

  handleBack() {
    this.props.navigation.goBack();
  }

  render() {
    return (
      <MusicDetailsUI
        goBack={() => this.handleBack()}
        sliderValue={this.state.sliderValue}
        musicDetails={this.state.musicDetails}
        maximumValue={this.state.maximumValue}
        onSliderValueChange={(value: number) => this.onSliderValueChange(value)}
      />
    );
  }
}
