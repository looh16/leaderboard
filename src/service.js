const baseUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/O5OBPHUu1VEEKKKkUIc0/scores/';

export const getAll = async () => {
  const response = (await fetch(baseUrl)).json();

  return response;
};

export const create = async (gameScore) => {
  await fetch(baseUrl, {
    method: 'POST',
    body: JSON.stringify({
      user: gameScore.name,
      score: gameScore.score,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
};
