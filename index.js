document.addEventListener("DOMContentLoaded", function(){
  
  const form = document.getElementById('item-form')
  const panel = document.getElementById('records-panel')
  const recordList = JSON.parse(localStorage.getItem('records')) || []

  showRecords(recordList);

  form.addEventListener('submit', function(e){
    e.preventDefault();

    let formData =  {
                      'uuid': generateUUID(),
                      'date': form.date.value,
                      'category': form.category.value,
                      'description': form.description.value,
                      'amount': parseInt(form.amount.value)
                    }

    recordList.push(formData);
    updateRecords();
    console.log(recordList);
    showRecords(recordList);
  })



  function showRecords(data){
    panel.innerHTML = ''
    data.reverse().map((el)=>{
      panel.innerHTML += recordsHTML(el)
    });
    const removeBtns = document.querySelectorAll('.remove')

    removeBtns.forEach((el)=>{el.addEventListener('click', removeHandler)})
  }

  function removeHandler(evt){
    let remove = recordList.find((record)=>{ return record['uuid'] === evt.target.dataset.id})

    recordList.splice(recordList.indexOf(remove), 1)
    updateRecords();
    showRecords(recordList);
  }

  function updateRecords() {
    localStorage.setItem('records',JSON.stringify(recordList))
  }

  function recordsHTML(data) {
    return `
            <tr class="item">
            <th scope="row">${data.date}</th>
            <td>${data.category}</td>
            <td>${data.description}</td>
            <td>${data.amount}</td>
            <td><span class="remove" data-id=${data.uuid}>x</span></td>
            </tr>
           `
  }

  function generateUUID() {
    var d = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = (d+ Math.random()*16)%16 | 0;
      d = Math.floor(d/16);
      return (c=='x' ? r : (r&0x3|0x8)).toString(16);
    });
    return uuid;
  };

}); 