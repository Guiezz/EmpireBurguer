document.addEventListener("DOMContentLoaded", function () {
    function isWithinTimeRange(startTime, endTime) {
        const now = new Date();
        const currentDay = now.getDay(); // 0 (Domingo) até 6 (Sábado)
        const currentHour = now.getHours();
        const currentMinute = now.getMinutes();

        const startParts = startTime.split(":");
        const endParts = endTime.split(":");

        const startHour = parseInt(startParts[0]);
        const startMinute = parseInt(startParts[1]);

        const endHour = parseInt(endParts[0]);
        const endMinute = parseInt(endParts[1]);

        if (currentDay >= 1 && currentDay <= 5) { // Dias de segunda a sexta-feira
            if (currentHour > startHour && currentHour < endHour) {
                return true;
            } else if (currentHour === startHour && currentMinute >= startMinute) {
                return true;
            } else if (currentHour === endHour && currentMinute <= endMinute) {
                return true;
            }
        } else if (currentDay >= 6) { // Sábado e domingo
            if (currentHour > startHour && currentHour < endHour) {
                return true;
            } else if (currentHour === startHour && currentMinute >= startMinute) {
                return true;
            } else if (currentHour === endHour && currentMinute <= endMinute) {
                return true;
            }
        }

        return false;
    }

    function updateStatus() {
        const statusElement = document.getElementById("status");
        if (!statusElement) return; // Verificar se o elemento existe
        
        const isOpen = isWithinTimeRange("17:00", "23:00") || isWithinTimeRange("18:00", "23:00");
        
        if (isOpen) {
            statusElement.textContent = "Aberto agora!";
            statusElement.style.color = "green";
            document.querySelector(".horarios").classList.add("aberto"); // Adicione a classe "aberto"
        } else {
            statusElement.textContent = "Fechado agora!";
            statusElement.style.color = "red";
            document.querySelector(".horarios").classList.remove("aberto"); // Remova a classe "aberto"
        }
    }

    updateStatus();
    setInterval(updateStatus, 60000);

    
});

