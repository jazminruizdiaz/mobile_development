import { Modal, View, ScrollView, ActivityIndicator } from 'react-native';
import { TextCustom } from '../../../../components/atoms/Text/TextCustom';
import { Button } from '../../../../components/atoms/Button/Button';
import { styles } from './styles';
import { DetailMovie } from '../../../../types/DetailMovie';
import { useEffect, useState } from 'react';
import { getMovieDetails } from '../../../../services/MDBService';
import { colors } from '../../../../constants/colors';

type Props = {
  movie_id: number;
  showDetailModal: boolean;
  closeDetailModal: () => void;
};

export const MovieDetailModal = ({
  movie_id,
  showDetailModal,
  closeDetailModal,
}: Props) => {
  const [movie, setMovie] = useState<DetailMovie | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (movie_id && showDetailModal) {
      setLoading(true);
      setMovie(null);
      getMovieDetails(movie_id)
        .then(response => {
          setMovie(response);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [movie_id, showDetailModal]);

  const formatTime = (minutes: number) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return hours > 0 ? `${hours}h ${mins}m` : `${mins}m`;
  };

  return (
    <Modal
      visible={showDetailModal}
      transparent={true}
      statusBarTranslucent={true}
      animationType="slide"
      onRequestClose={closeDetailModal}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          {loading ? (
            <View style={styles.loadingContainer}>
              <ActivityIndicator size="large" color={colors.primary} />
              <TextCustom variant="body" style={styles.loadingText}>
                Loading details...
              </TextCustom>
            </View>
          ) : movie ? (
            <ScrollView showsVerticalScrollIndicator={false}>
              <View style={styles.titleContainer}>
                <TextCustom variant="title" style={styles.movieTitleModal}>
                  {movie.title}
                </TextCustom>
              </View>

              <View style={styles.movieInfoContainer}>
                <View style={styles.infoRow}>
                  <TextCustom variant="body" style={styles.infoLabel}>
                    Release Date:
                  </TextCustom>
                  <TextCustom variant="body" style={styles.infoValue}>
                    {movie.release_date}
                  </TextCustom>
                </View>

                <View style={styles.infoRow}>
                  <TextCustom variant="body" style={styles.infoLabel}>
                    Runtime:
                  </TextCustom>
                  <TextCustom variant="body" style={styles.infoValue}>
                    {formatTime(movie.runtime)}
                  </TextCustom>
                </View>

                <View style={styles.infoRow}>
                  <TextCustom variant="body" style={styles.infoLabel}>
                    Original Language:
                  </TextCustom>
                  <TextCustom variant="body" style={styles.infoValue}>
                    {movie.original_language.toUpperCase()}
                  </TextCustom>
                </View>

                <View style={styles.genresContainer}>
                  <TextCustom variant="body" style={styles.genresLabel}>
                    Genres:
                  </TextCustom>
                  <View style={styles.genresList}>
                    {movie.genres.map(genre => (
                      <View key={genre.id} style={styles.genreChip}>
                        <TextCustom variant="body" style={styles.genreText}>
                          {genre.name}
                        </TextCustom>
                      </View>
                    ))}
                  </View>
                </View>

                <View style={styles.overviewContainer}>
                  <TextCustom variant="body" style={styles.overviewLabel}>
                    Overview:
                  </TextCustom>
                  <TextCustom variant="body" style={styles.overviewText}>
                    {movie.overview}
                  </TextCustom>
                </View>

                <Button
                  title="Close"
                  onPress={closeDetailModal}
                  variant="primary"
                />
              </View>
            </ScrollView>
          ) : (
            <View style={styles.errorContainer}>
              <TextCustom variant="body" style={styles.errorText}>
                Error loading movie details
              </TextCustom>
              <Button
                title="Close"
                onPress={closeDetailModal}
                variant="primary"
              />
            </View>
          )}
        </View>
      </View>
    </Modal>
  );
};
