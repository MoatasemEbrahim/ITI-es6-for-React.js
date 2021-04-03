let count = 0;

const app = document.getElementById('app')

const countContainer = document.createElement('div')
countContainer.innerText = count

const increaseBtn = document.createElement('button')
increaseBtn.innerText = "Increase"

app.appendChild(countContainer)
app.appendChild(increaseBtn)

increaseBtn.addEventListener('click',()=>{
    // count++
    // countContainer.innerText = count
    countContainer.innerText = parseInt(countContainer.innerText) + 1
})

setInterval(() => {
    console.log(count)
}, 2000);