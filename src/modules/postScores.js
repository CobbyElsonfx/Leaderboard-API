const postData = async (user, score) => {
  try {
    const userData = {
      name: 'My leatherboard',
      return: 'Game with ID: Cobby added.',
      user,
      score,
    };

    const data = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Cobby/scores', {
      method: 'post',
      body: JSON.stringify(userData),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    if (data.status === 201) {
      const successMess = document.querySelector('.successMess');
      setTimeout(() => {
        successMess.textContent = 'Score added successfully';
      }, 1000);
    }
  } catch (error) {
    throw new Error('Something went wrong');
  }
};

module.exports = postData;