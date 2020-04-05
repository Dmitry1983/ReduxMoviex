import React, { Component } from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

//Icon.loadFont();

export default function MovieRow({ movie }) {
    return (
        <View style={styles.container}>
            <Image source={{ uri: movie.Poster }} style={styles.poster} />
            <Text>{movie.Title}</Text>
            <Icon name="fa-camera-retro" size={30} color="#4F8EF7" />
        </View >
    )

}

const styles = StyleSheet.create({
    poster: {
        height: 100,
        width: 70,
        resizeMode: 'contain',
    },
    container: {
        flexDirection: 'row',
        padding: 5,
    }
})
