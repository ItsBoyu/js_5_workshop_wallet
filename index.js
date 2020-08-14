document.addEventListener("DOMContentLoaded", function(){
  
  const form = document.getElementById('item-form')
  let formData = {}

  form.addEventListener('submit', function(e){
    e.preventDefault();
    formData =  {
                  'date': form.date.value,
                  'category': form.category.value,
                  'description': form.description.value,
                  'amount': parseInt(form.amount.value)
                }
  })

}); 