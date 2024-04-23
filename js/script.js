//MY QUIZ!!!
document.addEventListener('DOMContentLoaded', function() {

    function checkAnswer() {
        const selectedOption = document.querySelector('input[name="quiz"]:checked');
        if (selectedOption && selectedOption.value === 'correct') {
            alert('Correct! You know your MCR trivia!');
        } else {
            alert('Oops! Try again!');
        }
    }

    const submitButton = document.getElementById('submit-btn');
    submitButton.addEventListener('click', function() {
        checkAnswer();
    });
});

//THE MODAL!!!
function showAlbumDetails(albumDetails) {
    const modal = document.getElementById('album-modal');
    const modalContent = modal.querySelector('.modal-content');

    modalContent.innerHTML = '';
    modalContent.appendChild(albumDetails);

    modal.style.display = 'block';
    modalContent.style.display = 'block';
}

function closeModal() {
    const modal = document.getElementById('album-modal');
    const modalContent = modal.querySelector('.modal-content');

    modal.style.display = 'none';
    modalContent.style.display = 'none';
}

document.addEventListener('DOMContentLoaded', function() {
    const albumImages = document.querySelectorAll('.albimg');

    albumImages.forEach(function(image) {
        image.addEventListener('click', function() {
            const albumDetailsId = this.getAttribute('data-album') + '-details';
            const albumDetails = document.getElementById(albumDetailsId);

            if (albumDetails) {
                showAlbumDetails(albumDetails);
            } else {
                console.error('Album details not found for ID: ' + albumDetailsId);
            }
        });
    });

    const modal = document.getElementById('album-modal');
    modal.addEventListener('click', function(event) {
        if (event.target === modal) {
            closeModal();
        }
    });

    const closeButton = document.querySelector('.close-button');
    closeButton.addEventListener('click', closeModal);
});