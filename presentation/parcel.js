// Import React
import React from "react";
import parcelBack from './../assets/parcel-back.png';
import parcelFront from './../assets/parcel-front.png';
const icons = [
  'js',
  'json',
  'css',
  'sass',
  'less',
  'html',
  'jpg',
  'png',
  'gif',
  'bmp',
  'svg',
  'raw',
  'rs',
  'ts'
];
import './../assets/icons.svg';

export default class Parcel extends React.Component {
  constructor(props){
    super(props);
    this.state = { icons: [] }
  }
  
  componentDidMount() {
    const timer = this.timer;
    this.countDown = setTimeout(function run() {
      timer();
      this.secondCountDown = setTimeout(run, 500 + Math.random() * 400)
    }, 500 + Math.random() * 400)
    
    this.timer();
  }

  componentWillUnmount() {
    clearInterval(this.countdown);
    clearInterval(this.secondCountDown);
  }

  timer = () => {
    const icon = {value: icons[Math.floor(Math.random() * icons.length)], left: 25 + Math.random() * 50 + '%'};
    this.setState({
      icons: [...this.state.icons, icon]
    });
  }

  render() {
    return (
      <div className="parcel">
        <img src={parcelBack} />
        <div id="icons" className="icons">
          {this.state.icons.map((icon, index) => (<Icon icon={icon.value} left={icon.left} key={index} />))}
        </div>
        <img src={parcelFront} />
      </div>
    );
  }
}

export class Icon extends React.Component {
  constructor(props){
    super(props);
    this.state = { visible: true };
  }
  componentDidMount() {
    this.timer = setTimeout(this.setInvisible, 3000);
  }

  setInvisible = () => {
    this.setState({ visible: false });
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }
  render() {
    const random = Math.random();
    return this.state.visible ? (
    <svg xmlns="http://www.w3.org/2000/svg" style={{left: this.props.left}} className={`icon`}>
      <use xlinkHref={`#icons_${this.props.icon}`} />
    </svg>
  ) : '';
  }
}
