import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import mockMovies from '../mockMovies';
import MovieRow from '../components/MovieRow'

class Home extends Component {
  constructor(props) {
    super(props)
    // this.state = {
    //   movies: [],
    // };
  }

  async componentDidMount() {
    const url = 'http://www.omdbapi.com/?apikey=38bf28a2&s=batman';
    const response = await fetch(url);
    const data = await response.json();
    // this.setState({ movies: data.Search });
  }

  render() {
    const { movies } = this.props
    //const { movies } = this.state

    return (
      <View style={styles.container}>
        <FlatList
          data={movies}
          renderItem={({ item: movie }) => (
            // <View>
            //   <Text>{movie.Title}</Text>
            // </View>
            <MovieRow movie={movie} />
          )}
          keyExtractor={(movie) => movie.imdbID}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e8e6bd'
  }
})
function mapStateToProps(state) {
  return {
    movies: state
  }
}

export default connect(
  mapStateToProps,
)(Home)