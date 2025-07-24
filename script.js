document.querySelectorAll('.recordButton').forEach(button => {
    button.addEventListener('click', function() {
        const timeList = document.getElementById('timeList');
        const buttonName = this.getAttribute('data-button');
        const currentTime = new Date().toLocaleTimeString();
        
        const listItem = document.createElement('li');

        const timeSpan = document.createElement('span');
        timeSpan.textContent = currentTime;
        timeSpan.className = 'time-color';
        listItem.textContent = `${buttonName} `;
        listItem.appendChild(timeSpan);
        timeList.prepend(listItem);
    });
});
