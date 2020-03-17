import React from 'react';

const ParticularImg = () => {
    
 //   setSpans = () => {
 //       const height = this.imageRef.current.clientHeight;
 //       const spansRows = Math.ceil(height / 10 );
 //       this.setState({ spans: spansRows })}

            return (
            <div style={{gridRowEnd: `span ${this.state.spans}`}}>
                <img ref={this.imageRef}
                    src={this.props.image.urls.regular}
                    alt={this.props.image.alt_description} />
            </div>
        )
    }


export default ParticularImg;