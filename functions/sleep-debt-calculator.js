// The program will determine the actual and ideal hours of sleep for each night of the last week.
// Finally, it will calculate, in hours, how far you are from your weekly sleep goal.

const getSleepHours = day => {
    switch (day) {
        case 'monday':
            return '8'
            break;
        case 'tuesday':
            return '8';
            break;
        case 'wednesday':
            return '8';
            break;
        case 'thursday':
            return '8';
            break;
        case 'friday':
            return '10'
            break;
        case 'saturday':
            return '8'
            break;
        case 'sunday':
            return '8';
            break;
        default:
            return 'no sleep maybe';
            break;
    }
}

console.log(getSleepHours('wednesday'));

const getActualSleepHours = () =>
    getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') +
    getSleepHours('sunday');

console.log(getActualSleepHours())