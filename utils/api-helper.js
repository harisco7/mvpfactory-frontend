/* eslint-disable no-undef */
import localForage from 'localforage';

export function generateOMDBSearchEndpoint(query, page = 1) {
  return `http://www.omdbapi.com/?apikey=${process.env.NEXT_PUBLIC_OMDB_API_KEY}&s=${query}&page=${page}`;
}

export async function isMovieStarred(id) {
  try {
    const value = await localForage.getItem(`starred-${id}`);
    return value != null;
  } catch (err) {
    return false;
  }
}

export async function setMovieStarred(id, starred) {
  try {
    if (starred) {
      await localForage.setItem(`starred-${id}`, id);
    } else {
      await localForage.removeItem(`starred-${id}`);
    }
    return starred;
  } catch (err) {
    console.error(err);
  }
}
