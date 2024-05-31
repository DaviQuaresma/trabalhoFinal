

function NextPage(){
    const link1 = document.querySelector('#link2')

    link1.addEventListener('click', () => {
        window.location.href = '../../index.html'
    })

}

NextPage()