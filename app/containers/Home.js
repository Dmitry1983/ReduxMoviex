import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, FlatList, StyleSheet } from 'react-native';
// import mockMovies from '../mockMovies';
import MovieRow from '../components/MovieRow'

class Home extends Component {

  constructor(props) {
    super(props)
    // this.state = {
    //   movies: [],
    // };
  }

  async componentDidMount() {
    const { addMovies } = this.props
    const url = 'http://www.omdbapi.com/?apikey=38bf28a2&s=batman';
    const response = await fetch(url);
    const data = await response.json();
    addMovies(data.Search);
    // this.setState({ movies: data.Search });
  }

  render() {
    const { movies } = this.props
    // const { movies } = this.state
    console.log(movies)
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
const mapStateToProps = (state) => {
  return {
    movies: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addMovies: (movies) => dispatch({
      type: 'ADD_MOVIES',
      payload: { movies }
    })
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home)