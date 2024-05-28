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



const LI = document.querySelectorAll('li')
const WRAPPER = document.querySelector('.wrapper section h3')

console.log(WRAPPER.innerText);

LI.forEach(Li => {
    console.log(Li);
    Li.addEventListener('click', () => {
        Pages.forEach(page => {

            if (Li.classList = 'current') {
                const LI = document.querySelectorAll('li')
                LI.forEach(Li => {
                    Li.classList = ''
                })
            }
            if (page.id === Li.id) {
                WRAPPER.innerText = page.Text;
                console.log(`page id matches li id, Pge id is ${page.id}`);
            }
            Li.classList = 'current'

        })
    })
})


