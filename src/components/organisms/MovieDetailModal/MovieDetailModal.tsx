import { Modal, View, ScrollView, ActivityIndicator } from 'react-native';
import { TextCustom } from '../../atoms/Text/TextCustom';
import { Button } from '../../atoms/Button/Button';
import { modalStyles } from './styles';
import { useThemedColors } from '../../../hooks/useThemedColors';
import { useMovieModal } from '../../../contexts/MovieModal/MovieModalContext';
import { useMovieDetails } from '../../../hooks/useMovieDetails';
import { CastList } from './component/Cast/CastList';
import { useMovieCredits } from '../../../hooks/useMovieCredits';

export const MovieDetailModal = () => {
  const { selectedMovieId, isModalVisible, closeMovieDetails } = useMovieModal();
  const colors = useThemedColors();

  const { data, loading, error } = useMovieDetails(
    selectedMovieId ?? 0,
    !!selectedMovieId && isModalVisible
  );

  const {  data: credits, loading: loadingCredits } = useMovieCredits(
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
      <View style={modalStyles.modalOverlay}>
        <View style={[modalStyles.modalContent, { backgroundColor: colors.backgroundLight }]}>
          {loading ? (
            <View style={modalStyles.loadingContainer}>
              <ActivityIndicator size="large" color={colors.primary} />
              <TextCustom
                variant="body"
                style={[modalStyles.loadingText, { color: colors.textPrimary }]}
              >
                Loading details...
              </TextCustom>
            </View>
          ) : data ? (
            <ScrollView showsVerticalScrollIndicator={false}>
              <View
                style={[
                  modalStyles.titleContainer,
                  {
                    backgroundColor: colors.backgroundLight,
                    borderBottomColor: colors.textPrimary + '1a', 
                  },
                ]}
              >
                <TextCustom
                  variant="title"
                  style={[modalStyles.movieTitleModal, { color: colors.textPrimary }]}
                >
                  {data.title}
                </TextCustom>
              </View>

              <View style={modalStyles.movieInfoContainer}>
                <View
                  style={[
                    modalStyles.infoRow,
                    { borderBottomColor: colors.textPrimary + '1a' }, 
                  ]}
                >
                  <TextCustom variant="body" style={[modalStyles.infoLabel, { color: colors.textPrimary }]}>
                    Release Date:
                  </TextCustom>
                  <TextCustom variant="body" style={[modalStyles.infoValue, { color: colors.textSecondary }]}>
                    {data.release_date}
                  </TextCustom>
                </View>

                <View
                  style={[
                    modalStyles.infoRow,
                    { borderBottomColor: colors.textPrimary + '1a' }, 
                  ]}
                >
                  <TextCustom variant="body" style={[modalStyles.infoLabel, { color: colors.textPrimary }]}>
                    Runtime:
                  </TextCustom>
                  <TextCustom variant="body" style={[modalStyles.infoValue, { color: colors.textSecondary }]}>
                    {formatTime(data.runtime)}
                  </TextCustom>
                </View>

                <View
                  style={[
                    modalStyles.infoRow,
                    { borderBottomColor: colors.textPrimary + '1a' }, 
                  ]}
                >
                  <TextCustom variant="body" style={[modalStyles.infoLabel, { color: colors.textPrimary }]}>
                    Original Language:
                  </TextCustom>
                  <TextCustom variant="body" style={[modalStyles.infoValue, { color: colors.textSecondary }]}>
                    {data.original_language.toUpperCase()}
                  </TextCustom>
                </View>

                <View style={modalStyles.genresContainer}>
                  <TextCustom variant="body" style={[modalStyles.genresLabel, { color: colors.textPrimary }]}>
                    Genres:
                  </TextCustom>
                  <View style={modalStyles.genresList}>
                    {data.genres.map(genre => (
                      <View key={genre.id} style={[modalStyles.genreChip, { backgroundColor: colors.primary }]}>
                        <TextCustom variant="body" style={[modalStyles.genreText, { color: colors.textDark }]}>
                          {genre.name}
                        </TextCustom>
                      </View>
                    ))}
                  </View>
                </View>

                <TextCustom variant="body" style={[modalStyles.overviewLabel, { color: colors.textPrimary }]}>
                  Overview:
                </TextCustom>
                <TextCustom variant="body" style={[modalStyles.overviewText, { color: colors.textSecondary }]}>
                  {data.overview}
                </TextCustom>

                <View style={modalStyles.overviewCast}>
                  <TextCustom variant="body" style={[modalStyles.genresLabel, { color: colors.textPrimary }]}>
                    Cast:
                  </TextCustom>
                  {loadingCredits ? (
                    <ActivityIndicator size="small" color={colors.primary} />
                  ) : (
                    <CastList cast={cast.slice(0, 10)} />
                  )}
                </View>

                <Button title="Close" onPress={closeMovieDetails} variant="primary" />
              </View>
            </ScrollView>
          ) : (
            <View style={modalStyles.errorContainer}>
              <TextCustom
                variant="body"
                style={[modalStyles.errorText, { color: colors.textSecondary }]}
              >
                {`Error loading movie details: ${error}`}
              </TextCustom>
              <Button title="Close" onPress={closeMovieDetails} variant="primary" />
            </View>
          )}
        </View>
      </View>
    </Modal>
  );
};
