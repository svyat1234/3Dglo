const modal = () => {
    const modal = document.querySelector('.popup')
    const buttons = document.querySelectorAll('.popup-btn')

    const animation = () => {
        modal.animate([
        {opacity: '0'},
        {opacity: '1'}
      ], 100);
    }
    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            modal.style.display = `block`
            animation()
        })
    })
    modal.addEventListener('click', (e) => {
        if (!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')) {
            modal.style.display = `none`
        }
    })
}

export default modal