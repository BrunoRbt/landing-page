document.addEventListener('DOMContentLoaded', function () {
    // Define a data do evento
    const eventDate = new Date('2025-01-29T00:00:00').getTime();

    // Atualiza o contador a cada segundo
    const countdownInterval = setInterval(function () {
        const now = new Date().getTime();
        const timeRemaining = eventDate - now;

        // Calcula o tempo restante em dias, horas, minutos e segundos
        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        // Atualiza o contador no HTML
        document.getElementById('days').innerText = days;
        document.getElementById('hours').innerText = hours.toString().padStart(2, '0');
        document.getElementById('minutes').innerText = minutes.toString().padStart(2, '0');
        document.getElementById('seconds').innerText = seconds.toString().padStart(2, '0');

        // Se o tempo acabar, exibe mensagem
        if (timeRemaining < 0) {
            clearInterval(countdownInterval);
            document.getElementById('countdown').innerHTML = "O evento começou!";
        }
    }, 1000);
});
