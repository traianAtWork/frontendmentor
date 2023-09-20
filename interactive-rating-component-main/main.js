// const inputs = Array.from(document.querySelectorAll('.rating-container input'));
// const rate = document.querySelector('.rate');
// const form = document.querySelector('form');


// console.log(inputs);
// console.log(inputs[1].value);
// inputs.forEach(input => input.addEventListener('click',()=>{
//     console.log(`you clicked ${input.value}`);
//     inputs.forEach(input=>input.parentNode.classList.remove('selected'))
//     input.parentNode.classList.add('selected');
// }))


// form.addEventListener('submit', (e)=>{
//     e.preventDefault();
//     console.log('submitted');
//     const [assignedRating] = inputs.filter(input=>input.checked);
//     console.log(assignedRating)
//     console.log(assignedRating.value);
//     console.log(assignedRating.textContent);
//     rate.textContent =assignedRating.value;    
// })
function initPage(){
    const form = document.querySelector('form');
    const inputs = Array.from(document.querySelectorAll('.rating-container input'));
    const thankYou = document.querySelector('.thank-you');

    const selectInput = function(){
        inputs.forEach(input=>input.parentNode.classList.remove('selected'))
        this.parentNode.classList.add('selected');
    }
    
    const alertUser = function (){
        alert('Please choose a rating!');
    }

    const displayRating = function(value){
        const rate = document.querySelector('.rate');
        rate.textContent = value;
    }
    
    const toggleDisplay = function() {
        form.classList.toggle('hide');
        thankYou.classList.toggle('hide');
    }
    
    function passValue(e){
        console.log('click');
        e.preventDefault();
        const hasOption = inputs.some(input=>input.checked);
        if(hasOption){
            const [rateValue] = inputs.filter(input=>input.checked)
            displayRating(rateValue.value);
            toggleDisplay();
        } else {
            alertUser()
        }
    }
    
    inputs.forEach(input=>input.addEventListener('click',selectInput))
    form.addEventListener('submit', passValue)
}
initPage();