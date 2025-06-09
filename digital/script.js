function updateClock() {
  const now = new Date();

  const hours = now.getHours();
  const mins = now.getMinutes();
  const secs = now.getSeconds();

  const formattedTime = [
    hours % 12 || 12,
    mins.toString().padStart(2, '0'),
    secs.toString().padStart(2, '0')
  ].join(':') + (hours >= 12 ? ' PM' : ' AM');

  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const dayName = days[now.getDay()];
  const date = now.getDate();
  const month = months[now.getMonth()];
  const year = now.getFullYear();

  const formattedDate = `${dayName}, ${month} ${date}, ${year}`;

  document.getElementById('time').textContent = formattedTime;
  document.getElementById('date').textContent = formattedDate;
}

// Update every second
setInterval(updateClock, 1000);
updateClock(); // Run once immediately
