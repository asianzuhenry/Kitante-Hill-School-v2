const Span = document.querySelector('#span')
Span.textContent = new Date().getFullYear()


const LI = document.querySelectorAll('li')

LI.forEach(Li => {
    Li.addEventListener('click', () => {

        if (Li.classList = 'current') {
            LI.forEach(Li => {
                Li.classList = ''
            })
        }
        Li.classList = 'current'


    })
})



