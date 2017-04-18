import React, { Component } from 'react';
import {
  Text,
  AppRegistry
} from 'react-native';
import Header from './src/components/Header';

const App = () => (
  <Header text={'Albums!'}/>
);

AppRegistry.registerComponent('albums', () => App);
