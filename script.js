function updateCountdown() {
    // Current time is Friday, December 12, 2025 (used as reference)
    const now = new Date();

    let christmasYear = now.getFullYear();
    const christmasDate = new Date(christmasYear, 11, 25); // Month is 0-indexed (Dec is 11)

    // If Christmas has already passed this year, set the target for next year
    if (now > christmasDate) {
        christmasYear++;
        christmasDate.setFullYear(christmasYear);
    }

    const differenceInMilliseconds = christmasDate - now;

    // Calculations (JavaScript handles this natively)
    const days = Math.floor(differenceInMilliseconds / (1000 * 60 * 60 * 24));
    const hours = Math.floor((differenceInMilliseconds % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((differenceInMilliseconds % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((differenceInMilliseconds % (1000 * 60)) / 1000);

    // Update the HTML elements
    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;
}

// Update the countdown immediately and then every second
updateCountdown();
setInterval(updateCountdown, 1000);
