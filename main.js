document.addEventListener('DOMContentLoaded', function () {
    const pierre = document.querySelector('#pierre');
    const feuille = document.querySelector('#feuille');
    const sciseaux = document.querySelector('#sciseaux');
    const onsaitPas = document.querySelector('#onsaitPas');
    const onsaitPas1 = document.querySelector('#onsaitPas1');
    const un = document.querySelector('#un');

    const setChoiceAndRedirect = (choice) => {
        localStorage.setItem('userChoice', choice); 
        window.location.href = 'duel.html'; 
    };

    if (pierre) {
        pierre.addEventListener('click', () => setChoiceAndRedirect('pierre'));
    }

    if (feuille) {
        feuille.addEventListener('click', () => setChoiceAndRedirect('feuille'));
    }

    if (sciseaux) {
        sciseaux.addEventListener('click', () => setChoiceAndRedirect('sciseaux'));
    }

    const updateDuelPage = () => {
        const userChoice = localStorage.getItem('userChoice'); 

        if (un && userChoice) {
            let content = '';
            if (userChoice === 'pierre') {
                onsaitPas1.style.display = "none"
                content = '<button class="pickers picker" id="pierre"><img src="pierrze.png" alt="pierre" class="imgPi" class="pierre"></button>';
            } else if (userChoice === 'feuille') {
                onsaitPas1.style.display = "none"
                content = '<button class="pickers"  id="feuille"><img src="feuille.png" alt="feuille" class="imgPi"></button>';
            } else if (userChoice === 'sciseaux') {
                onsaitPas1.style.display = "none"
                content = '<button class="pickers" id="sciseaux"><img src="sciseaux.png" alt="sciseaux" class="imgPi"></button><h2></h2>';
            }

            un.innerHTML = content; 
        }
    };

    if (window.location.pathname.includes('duel.html')) {
        updateDuelPage();
    }
});
