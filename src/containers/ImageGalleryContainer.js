import React, {Component} from 'react'
import ImageGallery from '../components/image-gallery/ImageGallery'

const imageData = [
  {
	 id: 1,
    url: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast',
    author: '@bkristastucchio',
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
	 id: 2,
    url: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger',
    author: '@rollelflex_graphy726',
  },
  {
	 id: 3,
    url: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
    author: '@helloimnik',
  },
  {
	 id: 4,
    url: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee',
    author: '@nolanissac',
    cols: 2,
  },
  {
	 id: 5,
    url: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    title: 'Hats',
    author: '@hjrc33',
    cols: 2,
  },
  {
	 id: 6,
    url: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Honey',
    author: '@arwinneil',
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
	 id: 7,
    url: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    title: 'Basketball',
    author: '@tjdragotta',
  },
  {
	  id: 8,
    url: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
    title: 'Fern',
    author: '@katie_wasserman',
  },
  {
	 id: 9,
    url: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
    title: 'Mushrooms',
    author: '@silverdalex',
    rows: 2,
    cols: 2,
  },
  {
	 id: 10,
    url: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
    title: 'Tomato basil',
    author: '@shelleypauls',
  },
  {
	 id: 11,
    url: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
    title: 'Sea star',
    author: '@peterlaster',
  },
  {
	 id: 12,
    url	: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
    title: 'Bike',
    author: '@southside_customs',
    cols: 2,
  },
];


class ImageGalleryContainer extends Component {
	
	constructor(props) {
		super(props);
		this.state = { imageData: [] };
		this.onDeleteConfirmed = this.onDeleteConfirmed.bind(this);
	};
	
	getUserImages(){
		return imageData;
	};
	
	onDeleteConfirmed(image){
		console.log(this);
		console.log("Delete image: " + image.url);
		
		var new_data = [...this.state.imageData];
  	 	var index = new_data.indexOf(image)
		new_data.splice(index, 1);
		this.setState({imageData: new_data});
	};

	componentDidMount(){
		this.setState({imageData : this.getUserImages()});
	};
	
	render(){
		return (
			<ImageGallery onDeleteConfirmed={this.onDeleteConfirmed} imageData={this.state.imageData}/>
	)};


};

export default ImageGalleryContainer;