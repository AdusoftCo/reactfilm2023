import { tmdb_api, tmdb_paths } from "../../../core/datasource/remote/tmdb/tmdb_api";
import { tdmbMoviesTvAdapter } from "../../adapters/tmdb_adapters";


export const getAiringTodayTv = async () => {
    const { data } = await tmdb_api.get(tmdb_paths.tv.airing_today);

    return tdmbMoviesTvAdapter(data);
};


export const getPopularTv = async () => {
    const { data } = await tmdb_api.get(tmdb_paths.tv.top_rated);

    return tdmbMoviesTvAdapter(data);
};