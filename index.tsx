import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

const BollywoodWatchlist: React.FC = () => {
  const [movies] = useState([
    { id: 1, title: 'Dilwale Dulhania Le Jayenge', year: '1995', watched: true },
    { id: 2, title: 'Lagaan', year: '2001', watched: true },
    { id: 3, title: 'Kabhi Khushi Kabhie Gham', year: '2001', watched: false },
    { id: 4, title: '3 Idiots', year: '2009', watched: true },
    { id: 5, title: 'Zindagi Na Milegi Dobara', year: '2011', watched: false },
    { id: 6, title: 'Dangal', year: '2016', watched: false },
  ]);

  const [selectedMovie, setSelectedMovie] = useState(movies[2]);

  const watchedCount = movies.filter(m => m.watched).length;

  const toggleWatched = () => {
    setSelectedMovie({...selectedMovie, watched: !selectedMovie.watched});
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.topSection}>
          <Text style={styles.mainTitle}>my watchlist</Text>
          
          <View style={styles.counterBox}>
            <Text style={styles.counterText}>
              {watchedCount} out of {movies.length} watched
            </Text>
          </View>
        </View>

        <View style={styles.currentMovieSection}>
          <Text style={styles.sectionLabel}>currently picking:</Text>
          
          <View style={styles.movieBox}>
            <Text style={styles.movieName}>{selectedMovie.title}</Text>
            <Text style={styles.movieYear}>{selectedMovie.year}</Text>
            
            <TouchableOpacity 
              style={[styles.statusButton, selectedMovie.watched && styles.watchedButton]}
              onPress={toggleWatched}
            >
              <Text style={styles.statusButtonText}>
                {selectedMovie.watched ? '✓ watched' : 'mark as watched'}
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.listSection}>
          <Text style={styles.listTitle}>all movies:</Text>
          
          {movies.map((movie) => (
            <TouchableOpacity 
              key={movie.id}
              style={styles.movieItem}
              onPress={() => setSelectedMovie(movie)}
            >
              <View style={styles.movieItemLeft}>
                <Text style={styles.movieItemTitle}>{movie.title}</Text>
                <Text style={styles.movieItemYear}>{movie.year}</Text>
              </View>
              
              {movie.watched && (
                <View style={styles.watchedBadge}>
                  <Text style={styles.watchedBadgeText}>✓</Text>
                </View>
              )}
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.bottomSpace} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fef8f3',
  },
  scrollView: {
    flex: 1,
  },
  topSection: {
    backgroundColor: '#ff6b6b',
    paddingTop: 50,
    paddingBottom: 30,
    paddingHorizontal: 20,
  },
  mainTitle: {
    fontSize: 36,
    fontWeight: '600',
    color: '#fff',
    marginBottom: 15,
  },
  counterBox: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    paddingVertical: 12,
    paddingHorizontal: 18,
    borderRadius: 8,
    alignSelf: 'flex-start',
  },
  counterText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '500',
  },
  currentMovieSection: {
    padding: 20,
    backgroundColor: '#fff9e6',
  },
  sectionLabel: {
    fontSize: 14,
    color: '#666',
    marginBottom: 12,
    textTransform: 'lowercase',
  },
  movieBox: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 12,
    borderLeftWidth: 4,
    borderLeftColor: '#ff6b6b',
  },
  movieName: {
    fontSize: 24,
    fontWeight: '600',
    color: '#222',
    marginBottom: 6,
  },
  movieYear: {
    fontSize: 16,
    color: '#888',
    marginBottom: 20,
  },
  statusButton: {
    backgroundColor: '#ff6b6b',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignSelf: 'flex-start',
  },
  watchedButton: {
    backgroundColor: '#51cf66',
  },
  statusButtonText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '600',
  },
  listSection: {
    padding: 20,
  },
  listTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 15,
    textTransform: 'lowercase',
  },
  movieItem: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  movieItemLeft: {
    flex: 1,
  },
  movieItemTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
    marginBottom: 4,
  },
  movieItemYear: {
    fontSize: 13,
    color: '#999',
  },
  watchedBadge: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#51cf66',
    alignItems: 'center',
    justifyContent: 'center',
  },
  watchedBadgeText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  bottomSpace: {
    height: 30,
  },
});

export default BollywoodWatchlist;

