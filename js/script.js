const Pages = [
    {
        id: '1',
        Text: 'Home'
    },
    {
        id: '2',
        Text: 'About'
    },
    {
        id: '3',
        Text: 'Gullery'
    },
    {
        id: '4',
        Text: 'Contact'
    }
]

const Span = document.querySelector('#span')
Span.textContent = new Date().getFullYear()


const LI = document.querySelectorAll('li')
const WRAPPER = document.querySelector('.wrapper section h3')

LI.forEach(Li => {
    Li.addEventListener('click', () => {
        Pages.forEach(page => {

            if (Li.classList = 'current') {
                LI.forEach(Li => {
                    Li.classList = ''
                })
            }
            if (page.id === Li.id) {
                WRAPPER.textContent = page.Text;
            }
            Li.classList = 'current'


        })
    })
})


