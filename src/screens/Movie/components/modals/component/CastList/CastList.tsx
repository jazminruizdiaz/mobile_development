import React from "react";
import { FlatList, Image, Text, View } from "react-native";
import { TMDB_IMAGE_BASE_URL } from "@env";
import { CastMember } from "../../../../../../types/MovieCast";
import { styles } from "./styles";
import { useThemedColors } from "../../../../../../hooks/useThemedColors";

const DEFAULT_CAST_IMG = require("../../../../../../assets/defaultcastimg.jpeg");
export const CastList = ({ cast }: { cast: CastMember[] }) => {
    const colors = useThemedColors();
    return (
        <FlatList
            horizontal
            data={cast}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
                <View style={styles.actorCard}>
                    <Image
                        source={item.profile_path ? { uri: `${TMDB_IMAGE_BASE_URL}${item.profile_path}` } : DEFAULT_CAST_IMG}
                        style={styles.actorImage}
                    />
                    <Text style={[styles.actorName, {color: colors.primary}]}>{item.name}</Text>
                    <Text style={[styles.actorCharacter, {color: colors.textPrimary}]}>{item.character}</Text>
                </View>
            )}
            showsHorizontalScrollIndicator={false}
        />
    );
};