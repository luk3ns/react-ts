import * as React from 'react';
import './style.scss';
import { render } from 'react-dom';
import AdoptMe from './AdoptMe';
import { getJson } from './service';


interface AppProps {
}
interface AppState {
  name: string,
  photos: string[],
  description: string,
  sex: string,
  age: string,
  loading: boolean
}

class App extends React.Component<AppProps, AppState> {
  constructor(props:any) {
    super(props);
    this.state = {
      name: "",
      photos: [],
      description: "",
      sex: "",
      age: "",
      loading: true
    };
  }

  render() {
    if(!this.state.loading)
    return (
      <div className='content'>
        <AdoptMe data={this.state} />
        <h4>Visit <a href="https://www.petfinder.com" target='_blank'>www.petfinder.com</a></h4>
      </div>
    );
    else return (
      <h4>Loading...</h4>
    )
  }
  componentDidMount() {

    getJson().then(obj => {
      console.log(obj.petfinder.pet);
      this.setState({
        name: obj.petfinder.pet.name.$t,
        description: obj.petfinder.pet.description.$t,
        sex: obj.petfinder.pet.sex.$t,
        age: obj.petfinder.pet.age.$t,
        photos: convert(obj.petfinder.pet.media.photos.photo),
        loading: false
      })
      console.log(this.state);
    });
  }
}

function convert(photos:any) {
  return photos
    .filter(photo => photo['@size'] == 'x')
    .map(photo => { let p = photo['$t']; return p.replace('http', 'https') })
}

render(<App />, document.getElementById('app'));
