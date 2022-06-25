
// Display Current time on the header

document.getElementById('currentDay').innerHTML = moment().format('MMMM Do YYYY, h:mm:ss a');

// Update date every 1 second

var dateUpdated = function() {
document.getElementById('currentDay').innerHTML = moment().format('MMMM Do YYYY, h:mm:ss a');
}
setInterval(dateUpdated, 1000);


// Buttons Funcionality 

//Save to Local Storage 
document.getElementById("saveBtn-6a").addEventListener("click", function ()
{
        var task6a = document.getElementById("textarea-6a").value ;
        localStorage.setItem("task6a", task6a);
});
document.getElementById("saveBtn-7a").addEventListener("click", function ()
{
        var task7a = document.getElementById("textarea-7a").value ;
        localStorage.setItem("task7a", task7a);
});
document.getElementById("saveBtn-8a").addEventListener("click", function ()
{
        var task8a = document.getElementById("textarea-8a").value ;
        localStorage.setItem("task8a", task8a);
});
document.getElementById("saveBtn-9a").addEventListener("click", function ()
{
        var task9a = document.getElementById("textarea-9a").value ;
        localStorage.setItem("task9a", task9a);
});
document.getElementById("saveBtn-10a").addEventListener("click", function ()
{
        var task10a = document.getElementById("textarea-10a").value ;
        localStorage.setItem("task10a", task10a);
});
document.getElementById("saveBtn-11a").addEventListener("click", function ()
{
        var task11a = document.getElementById("textarea-11a").value ;
        localStorage.setItem("task11a", task11a);
});
document.getElementById("saveBtn-12a").addEventListener("click", function ()
{
        var task12a = document.getElementById("textarea-12a").value ;
        localStorage.setItem("task12a", task12a);
});
document.getElementById("saveBtn-1p").addEventListener("click", function ()
{
        var task1p = document.getElementById("textarea-1p").value ;
        localStorage.setItem("task1p", task1p);
});
document.getElementById("saveBtn-2p").addEventListener("click", function ()
{
        var task2p = document.getElementById("textarea-2p").value ;
        localStorage.setItem("task2p", task2p);
});
document.getElementById("saveBtn-3p").addEventListener("click", function ()
{
        var task3p = document.getElementById("textarea-3p").value ;
        localStorage.setItem("task3p", task3p);
});
document.getElementById("saveBtn-4p").addEventListener("click", function ()
{
        var task4p = document.getElementById("textarea-4p").value ;
        localStorage.setItem("task4p", task4p);
});
document.getElementById("saveBtn-5p").addEventListener("click", function ()
{
        var task5p = document.getElementById("textarea-5p").value ;
        localStorage.setItem("task5p", task5p);
});
document.getElementById("saveBtn-6p").addEventListener("click", function ()
{
        var task6p = document.getElementById("textarea-6p").value ;
        localStorage.setItem("task6p", task6p);
});

//Load from Local Storage
var loadTasks = function() {
    task6a = localStorage.getItem('task6a');
    document.getElementById("textarea-6a").value = task6a 

    task7a = localStorage.getItem('task7a');
    document.getElementById("textarea-7a").value = task7a

    task8a = localStorage.getItem('task8a');
    document.getElementById("textarea-8a").value = task8a

    task9a = localStorage.getItem('task9a');
    document.getElementById("textarea-9a").value = task9a

    task10a = localStorage.getItem('task10a');
    document.getElementById("textarea-10a").value = task10a 

    task11a = localStorage.getItem('task11a');
    document.getElementById("textarea-11a").value = task11a

    task12a = localStorage.getItem('task12a');
    document.getElementById("textarea-12a").value = task12a

    task1p = localStorage.getItem('task1p');
    document.getElementById("textarea-1p").value = task1p

    task2p = localStorage.getItem('task2p');
    document.getElementById("textarea-2p").value = task2p
    
    task3p = localStorage.getItem('task3p');
    document.getElementById("textarea-3p").value = task3p

    task4p = localStorage.getItem('task4p');
    document.getElementById("textarea-4p").value = task4p
    
    task5p = localStorage.getItem('task5p');
    document.getElementById("textarea-5p").value = task5p

    task6p = localStorage.getItem('task6p');
    document.getElementById("textarea-6p").value = task6p
}

// Delete Tasks

document.getElementById('deleteBtn-6a').addEventListener('click', function(){
    localStorage.removeItem('task6a');
    document.getElementById('textarea-6a').value = ""
})
document.getElementById('deleteBtn-7a').addEventListener('click', function(){
    localStorage.removeItem('task7a');
    document.getElementById('textarea-7a').value = ""
})
document.getElementById('deleteBtn-8a').addEventListener('click', function(){
    localStorage.removeItem('task8a');
    document.getElementById('textarea-8a').value = ""
})
document.getElementById('deleteBtn-9a').addEventListener('click', function(){
    localStorage.removeItem('task9a');
    document.getElementById('textarea-9a').value = ""
})
document.getElementById('deleteBtn-10a').addEventListener('click', function(){
    localStorage.removeItem('task10a');
    document.getElementById('textarea-10a').value = ""
})
document.getElementById('deleteBtn-11a').addEventListener('click', function(){
    localStorage.removeItem('task11a');
    document.getElementById('textarea-11a').value = ""
})
document.getElementById('deleteBtn-12a').addEventListener('click', function(){
    localStorage.removeItem('task12a');
    document.getElementById('textarea-12a').value = ""
})
document.getElementById('deleteBtn-1p').addEventListener('click', function(){
    localStorage.removeItem('task1p');
    document.getElementById('textarea-1p').value = ""
})
document.getElementById('deleteBtn-2p').addEventListener('click', function(){
    localStorage.removeItem('task2p');
    document.getElementById('textarea-2p').value = ""
})
document.getElementById('deleteBtn-3p').addEventListener('click', function(){
    localStorage.removeItem('task3p');
    document.getElementById('textarea-3p').value = ""
})
document.getElementById('deleteBtn-4p').addEventListener('click', function(){
    localStorage.removeItem('task4p');
    document.getElementById('textarea-4p').value = ""
})
document.getElementById('deleteBtn-5p').addEventListener('click', function(){
    localStorage.removeItem('task5p');
    document.getElementById('textarea-5p').value = ""
})
document.getElementById('deleteBtn-6p').addEventListener('click', function(){
    localStorage.removeItem('task6p');
    document.getElementById('textarea-6p').value = ""
})

loadTasks()

// Set TimeBlocks to a time
var hour6 = moment().hour(6);
var hour7 = moment().hour(7);
var hour8 = moment().hour(8);
var hour9 = moment().hour(9);
var hour10 = moment().hour(10);
var hour11 = moment().hour(11);
var hour12 = moment().hour(12);
var hour13 = moment().hour(13);
var hour14 = moment().hour(14);
var hour15 = moment().hour(15);
var hour16 = moment().hour(16);
var hour17 = moment().hour(17);
var hour18 = moment().hour(18);
var hour19 = moment().hour(19);

var auditTime = function () {

    // Audit hour 6 and set color
    if (moment().isBetween(hour6, hour7)) {
        $("#textarea-6a").addClass("present");
    } else if (moment().isAfter(hour7)) {
        $("#textarea-6a").addClass("past");
    } else {
        $("#textarea-6a").addClass("future");
    }

    // Audit hour 7 and set color
    if (moment().isBetween(hour7, hour8)) {
        $("#textarea-7a").addClass("present");
    } else if (moment().isAfter(hour8)) {
        $("#textarea-7a").addClass("past");
    } else {
        $("#textarea-7a").addClass("future");
    }

    // Audit hour 8 and set color
    if (moment().isBetween(hour8, hour9)) {
        $("#textarea-8a").addClass("present");
    } else if (moment().isAfter(hour9)) {
        $("#textarea-8a").addClass("past");
    } else {
        $("#textarea-8a").addClass("future");
    }
    
    // Audit hour 9 and set color
    if (moment().isBetween(hour9, hour10)) {
        $("#textarea-9a").addClass("present");
    } else if (moment().isAfter(hour10)) {
        $("#textarea-9a").addClass("past");
    } else {
        $("#textarea-9a").addClass("future");
    }

    // Audit hour 10 and set color
    if (moment().isBetween(hour10, hour11)) {
        $("#textarea-10a").addClass("present");
    } else if (moment().isAfter(hour11)) {
        $("#textarea-10a").addClass("past");
    } else {
        $("#textarea-10a").addClass("future");
    }

    // Audit hour 11 and set color
    if (moment().isBetween(hour11, hour12)) {
        $("#textarea-11a").addClass("present");
    } else if (moment().isAfter(hour12)) {
        $("#textarea-11a").addClass("past");
    } else {
        $("#textarea-11a").addClass("future");
    }

    // Audit hour 12 and set color
    if (moment().isBetween(hour12, hour13)) {
        $("#textarea-12a").addClass("present");
    } else if (moment().isAfter(hour13)) {
        $("#textarea-12a").addClass("past");
    } else {
        $("#textarea-12a").addClass("future");
    }

    // Audit hour 13 and set color
    if (moment().isBetween(hour13, hour14)) {
        $("#textarea-1p").addClass("present");
    } else if (moment().isAfter(hour14)) {
        $("#textarea-1p").addClass("past");
    } else {
        $("#textarea-1p").addClass("future");
    }

    // Audit hour 14 and set color
    if (moment().isBetween(hour14, hour15)) {
        $("#textarea-2p").addClass("present");
    } else if (moment().isAfter(hour15)) {
        $("#textarea-2p").addClass("past");
    } else {
        $("#textarea-2p").addClass("future");
    }

    // Audit hour 15 and set color
    if (moment().isBetween(hour15, hour16)) {
        $("#textarea-3p").addClass("present");
    } else if (moment().isAfter(hour16)) {
        $("#textarea-3p").addClass("past");
    } else {
        $("#textarea-3p").addClass("future");
    }

    // Audit hour 16 and set color
    if (moment().isBetween(hour16, hour17)) {
        $("#textarea-4p").addClass("present");
    } else if (moment().isAfter(hour17)) {
        $("#textarea-4p").addClass("past");
    } else {
        $("#textarea-4p").addClass("future");
    }

    // Audit hour 17 and set color
    if (moment().isBetween(hour17, hour18)) {
        $("#textarea-5p").addClass("present");
    } else if (moment().isAfter(hour18)) {
        $("#textarea-5p").addClass("past");
    } else {
        $("#textarea-5p").addClass("future");
    }

    // Audit hour 17 and set color
    if (moment().isBetween(hour18, hour19)) {
        $("#textarea-6p").addClass("present");
    } else if (moment().isAfter(hour19)) {
        $("#textarea-6p").addClass("past");
    } else {
        $("#textarea-6p").addClass("future");
    }
}

auditTime()

setInterval(auditTime, 180000);