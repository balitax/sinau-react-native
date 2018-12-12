import React, { Component } from 'react'
import { Modal, View, StyleSheet, Image } from 'react-native'
import { Button, Text } from 'native-base';

const PlaceDetail = props => {

    let modalContent = null;  

    if (props.selectedPlace) {
        modalContent = ( 
            <View>
                <Image source={props.selectedPlace.image}  style={styles.placeImage}/>
                <Text style={styles.placeName}>{props.selectedPlace.name}</Text>
            </View>
        )
    }

    return (
        <Modal onRequestClose={props.onModalClosed} visible={props.selectedPlace !== null} animationType="slide">
            <View style={styles.containerModal}>
                {modalContent}
                <View>
                    <Button style={styles.buttonAction} danger onPress={props.onItemDeleted}>
                        <Text>DELETE</Text>
                    </Button>
                    <Button style={styles.buttonAction}  primary onPress={props.onModalClosed}>
                        <Text>CLOSE</Text>
                    </Button>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    containerModal: {
        marginTop: 28,
        padding: 20,
    },
    placeImage: {
        width: '100%',
        height: 200
    },
    placeName: {
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 28,
        marginTop: 20,
    },
    buttonAction: {
        width: '100%',
        marginTop: 10,
        borderRadius: 0,
    }
})

export default PlaceDetail;