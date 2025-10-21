import { Modal, View, ScrollView, ActivityIndicator } from 'react-native';
import { TextCustom } from '../../../../components/atoms/Text/TextCustom';
import { Button } from '../../../../components/atoms/Button/Button';
import { useMovieModal } from '../../../../contexts/MovieModal/MovieModalContext';
import { useMovieDetails } from '../../../../hooks/useMovieDetails';
import { useTheme } from '../../../../contexts/Theme/ThemeContext';
import { getThemeColors } from '../../../../constants/colorsFun';
import { createStyles } from './styles';

export const MovieDetailModal = () => {
  const { themeMode } = useTheme();
    const colors = getThemeColors(themeMode);
    const styles = createStyles(colors);
  
    
  const { selectedMovieId, isModalVisible, closeMovieDetails } =
    useMovieModal();


  const {  data, loading, error } = useMovieDetails(
  selectedMovieId ?? 0,
  !!selectedMovieId && isModalVisible
);

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

                <View style={styles.overviewContainer}>
                  <TextCustom variant="body" style={styles.overviewLabel}>
                    Overview:
                  </TextCustom>
                  <TextCustom variant="body" style={styles.overviewText}>
                    {data.overview}
                  </TextCustom>
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
