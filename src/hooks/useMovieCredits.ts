import { useEffect, useState } from "react";
import axios from "axios";
import { TMDB_IMAGE_BASE_URL, TMDB_API_KEY, TMDB_ACCESS_TOKEN, TMDB_BASE_URL } from "@env"; // o defínelo tú mismo
import { useTMDB } from "./useTMDB";
import { DetailMovie } from "../types/DetailMovie";
import { MovieCast } from "../types/MovieCast";



export const useMovieCredits = (movieId: number, enabled = true) => {
    return useTMDB<MovieCast>(
        `/movie/${movieId}/credits`,
        { language: 'en-US' },
        enabled
    )
};
