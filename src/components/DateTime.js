    /* @flow */
    
    // Receives  a JavaScript Date instance using current date and time
    // Extracts and returns day, month and year in format dd.mm.yyyy 
    export function getToday() {
        var today = new Date();

        var dd = today.getDate();
        var mm = today.getMonth() + 1; // January is 0!

        var yyyy = today.getFullYear();
        if (dd < 10) {
            dd = '0' + dd;
        } 
        if (mm < 10) {
            mm = '0' + mm;
        } 

        var today = dd + '.' + mm + '.' + yyyy;

        return today;
    }

    // Receives date and optionally time in format yyyy-mm-ddThh:mm and creates new Date object
    // Extracts and returns day, month and year in format dd.mm.yyyy   
    export function getDate(dateTime: string) {
        var date = new Date(dateTime);

        var dd = date.getDate();
        var mm = date.getMonth() + 1;
        var yyyy = date.getFullYear();

        if (dd < 10) {
            dd = '0' + dd;
        } 
        if (mm < 10) {
            mm = '0' + mm;
        } 
        
        var date = dd + "." + mm + "." + yyyy;

        return date;
    } 

    // Receives date and optionally time in format yyyy-mm-ddThh:mm and creates new Date object
    // Extracts and returns hours and minutes in format hh:mm 
    export function getTime(dateTime: string) {
        var time = new Date(dateTime);

        var hh = time.getHours();
        var mm = time.getMinutes();

        if (hh < 10) {
        hh = '0' + hh;
        } 
        if (mm < 10) {
        mm = '0' + mm;
        } 

        var time =  hh + ":" + mm;

        return time;
    }

    // Receives date in format dd.mm.yyyy
    // Returns true if date matches current date
    export function isDateToday(date: string) {
        console.log("Date: " + date + " | " +  "Today: " + getToday())
        return date === getToday();
    }

    // Receives date in format dd.mm.yyyy
    // Returns true if date is between begin and ending date
    export function isDateWithinRange(begin_date: string, ending_date: string) {
        console.log("Time Frame: " + begin_date + " - " + ending_date + " | " +  "Today: " + getToday())
        return getToday() >= begin_date && getToday() <= ending_date;
    }