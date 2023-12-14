const timeContainer = document.getElementById("time-container");
const DAY_STARTING = "1-01-2017";
const DAY_STARTING_DATE = new Date(DAY_STARTING);
const intlNumberFormatter = new Intl.NumberFormat("en-US");

setInterval(() => {
    const now = new Date();
    const difference = Math.floor(
        (now.getTime() - DAY_STARTING_DATE.getTime()) / 1000
    );

    timeContainer.innerText = intlNumberFormatter.format(difference);
}, 1000);