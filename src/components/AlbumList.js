import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
  constructor() {
    super();
    this.state = {
      albums: []
    };
  }

  componentWillMount() {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(response => this.setState({ albums: response.data }));
  }

  render() {
    return (
      <ScrollView>
        {this.state.albums.map((album, i) =>
          <AlbumDetail key={i} album={album} />
        )}
      </ScrollView>
    );
  }
}

export default AlbumList;
