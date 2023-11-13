document.addEventListener('DOMContentLoaded', () => {
    const goBackBtn = document.getElementById('goBack');

    goBackBtn.addEventListener('click', () => {
        // Navigate back to the main page
        window.location.href = 'index.html';
    });

    // Retrieve query parameters and populate the full view content
    const urlParams = new URLSearchParams(window.location.search);
    const title = urlParams.get('title');
    const description = urlParams.get('description');
    const content = urlParams.get('content');
    const imageUrl = urlParams.get('imageUrl');

    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');
    const modalContent = document.getElementById('modalContent');
    const modalImage = document.getElementById('modalImage');

    modalTitle.textContent = title;
    modalDescription.textContent = description;
    modalContent.textContent = content;
    modalImage.src = imageUrl;
});
