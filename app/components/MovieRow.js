import React, { Component } from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';

Icon.loadFont();

export default function MovieRow({ movie }) {
    return (
        <View style={styles.container}>
            <Image source={{ uri: movie.Poster }} style={styles.poster} />
            <Text style={styles.title}>{movie.Title}</Text>
            <View style={styles.iconContainer}>
                <Icon name="heart-o" size={36} color="red" />
            </View>

        </View >
    )

}

const styles = StyleSheet.create({
    iconContainer: {
        flex: 1,
        alignItems: 'center',
    },
    title: {
        flex: 2,
        fontSize: 20,
        fontWeight: '300',
        marginLeft: 10,
    },
    poster: {
        height: 100,
        width: 70,
        resizeMode: 'contain',
    },
    container: {
        flexDirection: 'row',
        padding: 5,
        alignItems: 'center',
    }
})
