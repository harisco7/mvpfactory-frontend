/* eslint-disable no-undef */

import localForage from 'localforage';

const STARRED_KEY = 'starred';
const CURRENT_USER_KEY = 'current_user';

const getUserStarredKey = async () => {
  const user = await localForage.getItem(CURRENT_USER_KEY);
  return `${user}${STARRED_KEY}`;
};

export async function getCurrentUser() {
  try {
    const user = await localForage.getItem(CURRENT_USER_KEY);
    return user;
  } catch (err) {
    return null;
  }
}

export async function setCurrentUser(user) {
  try {
    await localForage.setItem(CURRENT_USER_KEY, user);
    return true;
  } catch (err) {
    console.error(err);
    return false;
  }
}

export async function getStarredMovies() {
  try {
    const starred = await localForage.getItem(await getUserStarredKey());
    return Object.keys(starred).map((id) => starred[id]);
  } catch (err) {
    return false;
  }
}

export async function isMovieStarred(id) {
  try {
    const starred = await localForage.getItem(await getUserStarredKey());
    const value = starred[id];
    return value != null;
  } catch (err) {
    return false;
  }
}

export async function setMovieStarred(movie, state) {
  try {
    const starred = (await localForage.getItem(await getUserStarredKey())) || {};
    if (state) {
      starred[movie.imdbID] = movie;
    } else {
      delete starred[movie.imdbID];
    }
    await localForage.setItem(await getUserStarredKey(), starred);
    return true;
  } catch (err) {
    console.error(err);
    return false;
  }
}
