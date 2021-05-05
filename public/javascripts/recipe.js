document.addEventListener("DOMContentLoaded", (event)=>{
  const reviewButton = document.querySelector('.reviews__button');
  reviewButton.addEventListener('click', (e)=>{
    console.log('CLICKYCLICKY')
    const reviewContainer = document.querySelector('#reviews__container');
    console.log(reviewContainer)
    if (reviewContainer.className === "reviews__container-hidden"){
      reviewContainer.classList.remove("reviews__container-hidden")
      reviewContainer.classList.add('reviews__container-visible');
      reviewButton.innerText = 'Cancel writing review'
    } else {
      reviewContainer.classList.remove('reviews__container-visible')
      reviewContainer.classList.add('reviews__container-hidden');
      reviewButton.innerText = 'Write a review'
    }
  })
})
