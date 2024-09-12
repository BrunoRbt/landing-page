// Função para adicionar o vídeo do YouTube
document.addEventListener('DOMContentLoaded', function() {
    const youtubeForm = document.getElementById('youtube-form');
    if (youtubeForm) {
        youtubeForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            const urlInput = document.getElementById('youtube-url');
            const videoContainer = document.getElementById('added-video');
            
            // Extrai o ID do vídeo do URL
            const videoUrl = urlInput.value;
            const videoId = videoUrl.split('v=')[1]?.split('&')[0]; // Extrai o ID
            const embedUrl = `https://www.youtube.com/embed/${videoId}`;
            
            // Atualiza o iframe com o novo vídeo
            videoContainer.innerHTML = `<iframe src="${embedUrl}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
            videoContainer.style.display = 'block'; // Mostra o vídeo
            urlInput.value = ''; // Limpa o campo de entrada
        });
    }
});