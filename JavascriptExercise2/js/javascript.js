/**
 * Created by Jonas on 22-09-2015.
 */

urlParam = function (param) {
    var results = new RegExp('[\?&]' + param + '=([^&#]*)').exec(window.location.href);
    if (results == null) {
        return null;
    }
    else {
        return results[1] || 0;
    }
};


$('#submit').on('click', function (e) {
    e.preventDefault();

    var firstName = $('#firstname').val();
    $('#div1').text(firstName);

    var lastName = $('#lastname').val();
    $('#div2').text(lastName);

    var phone = $('#phone').val();
    $('#div3').text(phone);

    var email = $('#email').val();
    $('#div4').text(email);

});

$('#div1').on('click', function () {
    $('#div1').text(urlParam('text'));
});
$('#div2').on('click', function () {
    $('#div2').text("Hej Div2");
});
$('#div3').on('click', function () {
    $('#div3').text("Hej Div3");
});
$('#div4').on('click', function () {
    $('#div4').text("Hej Div4");
});

var student = {
    id: 1,
    name: "Jan",
    classroom: "2.26"
};

var student1 = {
    id: 2,
    name: "Hanne",
    classroom: "2.26"
};

var students = [];

var registerItem = function (student) {
    students.push(student);
};

registerItem(student1);


var logItem = function (students) {
    students.forEach(function (stud) {
        console.log(stud.id + " " + stud.name + " " + stud.classroom);
    });
};

$('#log').on('click', function () {
    registerItem(student, function (students) {
        logItem(students);
    });
});



