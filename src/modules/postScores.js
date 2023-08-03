const postData = async (user, score) => {
  try {
    const userData = {
      name: 'My leatherboard',
      return: 'Game with ID: CobbyElson added.',
      user,
      score,
    };

    const data = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/CobbyElson/scores', {
      method: 'post',
      body: JSON.stringify(userData),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    if (data.status === 201) {
      const successMess = document.querySelector('.successMess');
      successMess.textContent = 'Score added successfully';
    }
  } catch (error) {
    throw new Error('Something went wrong');
  }
};

module.exports = postData;