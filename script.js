function getAndUpdate() {
    var title = document.getElementById('title').value;
    var description = document.getElementById('description').value;
  
    if (localStorage.getItem('itemJson') == null) {
      itemJsonArray = [];
      itemJsonArray.push([title, description]);
      localStorage.setItem('itemJson', JSON.stringify(itemJsonArray));
    } else {
      var itemJsonArrayStr = localStorage.getItem('itemJson');
      var itemJsonArray = JSON.parse(itemJsonArrayStr);
      itemJsonArray.push([title, description]);
      localStorage.setItem('itemJson', JSON.stringify(itemJsonArray));
    }
  
    updateItems();
  }
  
  function updateItems() {
    if (localStorage.getItem('itemJson') == null) {
      itemJsonArray = [];
      localStorage.setItem('itemJson', JSON.stringify(itemJsonArray));
    } else {
      var itemJsonArrayStr = localStorage.getItem('itemJson');
      var itemJsonArray = JSON.parse(itemJsonArrayStr);
    }
  
    var tableBody = document.getElementById('tablebody');
    var str = '';
  
    itemJsonArray.forEach(function(element, index) {
      str += '<tr>' +
        '<th scope="row">' + (index + 1) + '</th>' +
        '<td>' + element[0] + '</td>' +
        '<td>' + element[1] + '</td>' +
        '<td><button class="btn" onclick="deleteItem(' + index + ')">Delete</button></td>' +
        '</tr>';
    });
  
    tableBody.innerHTML = str;
  }
  
  function deleteItem(itemIndex) {
    var itemJsonArrayStr = localStorage.getItem('itemJson');
    var itemJsonArray = JSON.parse(itemJsonArrayStr);
    itemJsonArray.splice(itemIndex, 1);
    localStorage.setItem('itemJson', JSON.stringify(itemJsonArray));
  
    updateItems();
  }
  
  function clearStorage() {
    if (confirm('Do you really want to clear?')) {
      localStorage.clear();
      updateItems();
    }
  }
  
  document.getElementById('add').addEventListener('click', getAndUpdate);
  updateItems();
  