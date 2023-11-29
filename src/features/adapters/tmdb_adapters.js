import { tmdb_paths } from "../../core/datasource/remote/tmdb/tmdb_api";

export const tdmbMoviesTvAdapter = (response) => {
    const { results } = response;

    return results.map((item) => ({
        id: item.id,
        title: item.title || item.name,
        poster: item.poster_path
            ? `${tmdb_paths.images.poster.url}${tmdb_paths.images.poster.sizes.original}${item.poster_path}`
            : null,
        backdrop: item.backdrop_path
            ? `${tmdb_paths.images.backdrop.url}${tmdb_paths.images.backdrop.sizes.original}${item.backdrop_path}`
            : null,
        description: item.overview,
        rating: item.vote_average,
        video: item.video,
    }))
};
