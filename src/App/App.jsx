import React, { Component } from 'react';
import AutocompleteInput from '../AutocompleteInput/AutocompleteInput';
import LeafletMap from '../LeafletMap/LeafletMap';
import SimpleInput from '../SimpleInput/SimpleInput';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { lat: 0, long: 0, zoom: 3 };
    this.onChange = this.onChange.bind(this);
  }

  onChange(id, value) {
    this.setState({ [id]: value });
  }

  centerOn(coordinates) {
    const [long, lat] = coordinates;
    this.setState({ lat, long, zoom: 14 });
  }

  render() {
    return (
      <div>
        <SimpleInput id="label" onChange={this.onChange} />
        <SimpleInput id="color" onChange={this.onChange} />
        <AutocompleteInput onSuggestionSelected={coordinates => this.centerOn(coordinates)} />
        <LeafletMap lat={this.state.lat} long={this.state.long} zoom={this.state.zoom} />
      </div>
    );
  }
}

export default App;
