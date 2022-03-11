'use strict';

const weekdays = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday' ,'satoday', 'sunday'];

const openingHours = {

    [weekdays[3]] : {
        open:12,
        close:22,
    },
//using template literal
    [`day-${2+4}`] : {
        open:11,
        close:23,
    },

    [weekdays[2]] : {
        open:0,
        close:24,
    }
};

const resturant = {
    name:'Hotel Traslyvania',
    location:'Angelo Tavanti 23,Firenze',
    categories:['Italian', 'Pizzeria', 'vegeterian', 'organic'],
    startMenu:['Focaccia', 'Bruschetta', 'Garlic', 'Bread'],
    mainMenu: ['pizza', 'pasta', 'Risotto'],
    openingHours,

}