document.addEventListener("DOMContentLoaded", function(){
  
  const form = document.getElementById('item-form')

  form.addEventListener('submit', function(e){
    e.preventDefault();

    const recordList = JSON.parse(localStorage.getItem('records')) || []
    let formData =  {
                      'date': form.date.value,
                      'category': form.category.value,
                      'description': form.description.value,
                      'amount': parseInt(form.amount.value)
                    }

    recordList.push(formData)
    updateRecords();
    console.log(recordList);

    function updateRecords() {
      localStorage.setItem('records',JSON.stringify(recordList))
    }
  })

}); 