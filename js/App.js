var baseUrl = 'https://kodilla.com/pl/bootcamp-api';
var myHeaders = {
   'X-Client-Id': '2641',
   'X-Auth-Token': 'e3a70ab5bc843c341ecb8129516ed527'
};

$.ajaxSetup({
   headers: myHeaders
});


$.ajax({
   url: baseUrl + '/board',
   method: 'GET',
   success: function(response) {
      setupColumns(response.columns);
   }
});


function setupColumns(columns) {
   columns.forEach(function(column) {
      var col = new Column(column.id, column.name);
      board.createColumn(col);
      setupCards(col, column.cards);
   });
}


function setupCards(col, cards) {
   cards.forEach(function(card) {
      var card = new Card(card.id, card.name, card.bootcamp_kanban_column_id);
      col.createCard(card);
   });
}