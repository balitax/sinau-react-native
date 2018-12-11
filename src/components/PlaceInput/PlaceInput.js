import React, { Component } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Button, Text } from 'native-base';

class PlaceInput extends Component {

    state = {
        placeName: ""
    };

    componentDidMount() {
        
    }

    placeNameChangeHander = val => {
        this.setState({
          placeName: val
        });
    };

    placeSubmitHandler = () => {
        if (this.state.placeName.trim() === "") {
          alert('Please input place');
          return;
        }

        this.props.onPlaceAdded(this.state.placeName)

        // this.setState({
        //   placeName: ""
        // });
  
    };

    render () {
        return (
            <View style={styles.inputContainer}>
                <TextInput 
                    style={styles.placeInput}
                    value={this.state.placeName}
                    onChangeText={this.placeNameChangeHander}
                    placeholder="Input your place"
                />

                <Button transparent
                    style={styles.placeButton}
                    onPress={this.placeSubmitHandler}
                >
                    <Text>ADD</Text>
                </Button>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    inputContainer: {
      // flex: 1,
      width: "100%",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center"
    },
    placeInput: {
      width: "70%",
      borderBottomColor: '#dedede',
      height: 48,
      borderBottomWidth: 0.5,
    },
    placeButton: {
      width: "20%"
    }
  });

export default PlaceInput;