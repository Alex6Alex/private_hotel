import React from 'react'

export default class Slider extends React.Component {
  constructor(props) {
    super(props);

    this.state = { imageIndex: 0, lockChange: false };
  }

  componentDidMount() {
    if (this.props.autoChange) this.createInterval();
  }

  componentWillUnmount() {
    clearInterval(this.state.sliderInterval);
  }

  createInterval() {
    let sliderInterval = setInterval(() => {
      this.changeImage(this.state.imageIndex + 1);
    }, 5000);

    this.setState({ sliderInterval });
  }

  setLockTimeout() {
    this.setState({ lockChange: true });
    setTimeout(() => this.setState({ lockChange: false }), 1000);
  }

  changeImage(nextImageIndex) {
    const lastImageIndex = this.props.images.length - 1;
    let imageIndex = nextImageIndex;

    if (nextImageIndex > lastImageIndex) imageIndex = 0;
    if (nextImageIndex < 0) imageIndex = lastImageIndex;

    this.setState({ imageIndex });
  }

  render() {
    return(
      <div className='slider' style={{ backgroundImage: `url(${this.getImage()})` }}>
        { !this.props.autoChange && this.renderControlElements() }
      </div>
    )
  }

  renderControlElements() {
    return(
      <div className='control-panel'>
        <div className='arrow fas fa-arrow-left' onClick={() => this.handleChangePhotoClick(-1) }/>
        <div className='photo-dots'>
          {
            this.props.images.map((_, index) => {
              return(
                <div key={ index }
                     className={ (index === this.state.imageIndex) ? 'photo-dot active' : 'photo-dot' }
                     onClick={() => this.handleChangePhotoClick(index - this.state.imageIndex) }/>
              )
            })
          }
        </div>
        <div className='arrow fas fa-arrow-right' onClick={() => this.handleChangePhotoClick(1) }/>
      </div>
    )
  }

  getImage() {
    return this.props.images[this.state.imageIndex];
  }

  handleChangePhotoClick(indexChanger) {
    if (this.state.lockChange) return;

    this.setLockTimeout();
    this.changeImage(this.state.imageIndex + indexChanger);
  }
}
