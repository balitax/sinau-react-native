/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { connect } from 'react-redux';
 
import PlaceInput from './PlaceInput/PlaceInput';
import PlaceList from './PlaceList/PlaceList';
import PlaceDetail from './PlaceDetail/PlaceDetail';

import { addPlace, deletePlace, selectPlace, deselectPlace } from '../store/actions/index';

class MainScreen extends Component {

  placeAddedHandler = placeName => {
    this.props.onPlaceAdded(placeName)
  };
  
  placeDeletedHandler = () => {
    this.props.onDeletedPlace()
  }
  
  modalClosedHandler = () => {
    this.props.onDeselectPlace();
  }
  
  placeSelectedHandler = key => {
    this.props.onSelectPlace(key);
  }

  state = {
    places: [],
    selectedPlace: null
  }

  render() {
    return (
      <View style={styles.container}>
            <PlaceDetail 
            onModalClosed={this.modalClosedHandler}
            onItemDeleted={this.placeDeletedHandler}
            selectedPlace={this.props.selectedPlace} />
            <PlaceInput onPlaceAdded={this.placeAddedHandler} />
            <PlaceList 
            places={this.props.places} 
            onItemSelected={this.placeSelectedHandler}
            />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 26,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start"
  }
});

const mapStateToProps = state => {
  return {
      places: state.places.places,
      selectedPlace: state.places.selectedPlace
  };
};

const mapDispatchToProps = dispatch => {
  return {
      onPlaceAdded: (name) => dispatch(addPlace(name)),
      onDeletedPlace: () => dispatch(deletePlace()),
      onSelectPlace: (key) => dispatch(selectPlace(key)),
      onDeselectPlace: () => dispatch(deselectPlace())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);