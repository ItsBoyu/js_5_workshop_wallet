document.addEventListener("DOMContentLoaded", function(){
  
  const form = document.getElementById('item-form')
  const panel = document.getElementById('records-panel')
  const recordList = JSON.parse(localStorage.getItem('records')) || []

  showRecords(recordList);

  form.addEventListener('submit', function(e){
    e.preventDefault();

    let formData =  {
                      'date': form.date.value,
                      'category': form.category.value,
                      'description': form.description.value,
                      'amount': parseInt(form.amount.value)
                    }

    recordList.push(formData);
    updateRecords();
    console.log(recordList);
    showRecords(recordList);

    function updateRecords() {
      localStorage.setItem('records',JSON.stringify(recordList))
    }
  })

  function showRecords(data){
    panel.innerHTML = ''
    data.reverse().map((el)=>{
      panel.innerHTML += recordsHTML(el)
    });
  }

  function recordsHTML(data) {
    return `
            <tr class="item">
            <th scope="row">${data.date}</th>
            <td>${data.category}</td>
            <td>${data.description}</td>
            <td>${data.amount}</td>
            <td><span class="remove">x</span></td>
            </tr>
           `
  }

}); 