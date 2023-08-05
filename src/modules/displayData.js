const displayData = async () => {
  const data = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Cobby/scores');
  const arrData = await data.json();
  const tableContainer = document.querySelector('.tableContainer');
  tableContainer.innerHTML = '';
  arrData.result.sort((a, b) => b.score - a.score).forEach((element) => {
    const eachDetail = `
         <span class="username pl-1">${element.user}</span>:
         <span class="scores">${element.score}</span>
       `;

    // Create a new DOM element and set its innerHTML
    const listItem = document.createElement('li');
    listItem.setAttribute('class', 'eachDetail');
    listItem.innerHTML = eachDetail;

    // Append the new DOM element to the tableContainer
    tableContainer.appendChild(listItem);
  });
};

module.exports = displayData;
