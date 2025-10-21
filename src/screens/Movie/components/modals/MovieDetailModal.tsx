import { Modal, View, ScrollView, ActivityIndicator } from 'react-native';
import { TextCustom } from '../../../../components/atoms/Text/TextCustom';
import { Button } from '../../../../components/atoms/Button/Button';
import { styles } from './styles';
import { colors } from '../../../../constants/colors';
import { useMovieModal } from '../../../../contexts/MovieModal/MovieModalContext';
import { useMovieDetails } from '../../../../hooks/useMovieDetails';
import { CastList } from '../../../../components/CastList/CastList';
import { useMovieCredits } from '../../../../hooks/useMovieCredits';

export const MovieDetailModal = () => {
  const { selectedMovieId, isModalVisible, closeMovieDetails } =
    useMovieModal();


  const { data, loading, error } = useMovieDetails(
    selectedMovieId ?? 0,
    !!selectedMovieId && isModalVisible
  );

  const { data: credits, loading: loadingCredits } = useMovieCredits(
    selectedMovieId ?? 0,
    !!selectedMovieId && isModalVisible
  );

  const cast = credits?.cast ?? [];
  const formatTime = (minutes: number) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return hours > 0 ? `${hours}h ${mins}m` : `${mins}m`;
  };

  return (
    <Modal
      visible={isModalVisible}
      transparent={true}
      statusBarTranslucent={true}
      animationType="slide"
      onRequestClose={closeMovieDetails}
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
          ) : data ? (
            <ScrollView showsVerticalScrollIndicator={false}>
              <View style={styles.titleContainer}>
                <TextCustom variant="title" style={styles.movieTitleModal}>
                  {data.title}
                </TextCustom>
              </View>

              <View style={styles.movieInfoContainer}>
                <View style={styles.infoRow}>
                  <TextCustom variant="body" style={styles.infoLabel}>
                    Release Date:
                  </TextCustom>
                  <TextCustom variant="body" style={styles.infoValue}>
                    {data.release_date}
                  </TextCustom>
                </View>

                <View style={styles.infoRow}>
                  <TextCustom variant="body" style={styles.infoLabel}>
                    Runtime:
                  </TextCustom>
                  <TextCustom variant="body" style={styles.infoValue}>
                    {formatTime(data.runtime)}
                  </TextCustom>
                </View>

                <View style={styles.infoRow}>
                  <TextCustom variant="body" style={styles.infoLabel}>
                    Original Language:
                  </TextCustom>
                  <TextCustom variant="body" style={styles.infoValue}>
                    {data.original_language.toUpperCase()}
                  </TextCustom>
                </View>

                <View style={styles.genresContainer}>
                  <TextCustom variant="body" style={styles.genresLabel}>
                    Genres:
                  </TextCustom>
                  <View style={styles.genresList}>
                    {data.genres.map(genre => (
                      <View key={genre.id} style={styles.genreChip}>
                        <TextCustom variant="body" style={styles.genreText}>
                          {genre.name}
                        </TextCustom>
                      </View>
                    ))}
                  </View>
                </View>

                <TextCustom variant="body" style={styles.overviewLabel}>
                  Overview:
                </TextCustom>
                <TextCustom variant="body" style={styles.overviewText}>
                  {data.overview}
                </TextCustom>

                <View style={{ marginVertical: 20 }}>
                  <TextCustom variant="body" style={styles.genresLabel}>
                    Cast:
                  </TextCustom>
                  {loadingCredits ? (
                    <ActivityIndicator size="small" color={colors.primary} />
                  ) : (
                    <CastList cast={cast.slice(0, 10)} />
                  )}
                </View>
                <Button
                  title="Close"
                  onPress={closeMovieDetails}
                  variant="primary"
                />
              </View>
            </ScrollView>
          ) : (
            <View style={styles.errorContainer}>
              <TextCustom variant="body" style={styles.errorText}>
                {`Error loading movie details: ${error}`}
              </TextCustom>
              <Button
                title="Close"
                onPress={closeMovieDetails}
                variant="primary"
              />
            </View>
          )}
        </View>
      </View>
    </Modal>
  );
};
