export function getCurrentDay() {
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const monthsOfYear = [
        "January", "February", "March", "April", "May", "June", 
        "July", "August", "September", "October", "November", "December"
    ];

    const now = new Date();

    const day = daysOfWeek[now.getDay()];
    const month = monthsOfYear[now.getMonth()];
    const date = now.getDate();
    const year = now.getFullYear();

    return `${day}, ${month} ${date}, ${year}`;
    
    // alert(formattedDate);
}

// Call the function to display the date
// showCurrentDate();
