const displayData = async () => {
  const data = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Cobby/scores');
  const arrData = await data.json();
  const tableContainer = document.querySelector('.tableContainer');
  tableContainer.innerHTML = '';
  arrData.result.sort((a, b) => b.score - a.score).forEach((element, index) => {
    const addPositionSuffix = (number) => {
      if (number > 3) {
        return 'th';
      }
      return '';
    };

    const medalPosition = [
      './images/first.png',
      './images/second.png',
      './images/third.png',
    ];

    const position = index + 1;
    const positionSuffix = addPositionSuffix(position);
    let eachDetail;
    if (position < 4) {
      eachDetail = `
        <div>
         <img src="${medalPosition[position - 1]}" alt="medal" class="medal"/>
        </div>
        <div><img src="./images/user.png" alt="user"  class="userProfile"></div>
        <div class="nameAndScore">
          <div> <h3 class="username pl-1">${element.user.toUpperCase()}</h3></div>
          <div >
            <h3 class="scores">${element.score}</h3>
          </div>
        </div>
        </div>
       `;
    } else {
      eachDetail = `
      <div>
       <span class="position">${position}${positionSuffix}</span>
      </div>
      <div>
      <img src="./images/user.png" alt="user"  class="userProfile">
      </div>
    
      <div class="nameAndScore">
        <div> <h3 class="username pl-1">${element.user.toUpperCase()}</h3></div>
        <div>
          <h3 class="scores">${element.score}</h3>
        </div>
     
      </div>
      </div>
     `;
    }

    // Create a new DOM element and set its innerHTML
    const listItem = document.createElement('li');
    listItem.setAttribute('class', 'eachDetail');
    listItem.innerHTML = eachDetail;

    // Append the new DOM element to the tableContainer
    tableContainer.appendChild(listItem);
  });
};

module.exports = displayData;
