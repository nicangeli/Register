$(document).ready(function() {

    Parse.initialize("I4QEDhaLf5zxcvjbNFLXJ4aYZqEJrL1YUOuOfLEf", "gG2uAt51ygvHqegcGpNQLoI0hwmZboH6sWeO8zNc");
    var Register = Parse.Object.extend("Register");


    function Student(name) {
        var self = this;
        self.name = name;
    }

    function RegisterViewModel() {
        var self = this;
        self.students = ko.observableArray([new Student("Nicholas Angeli")]);
        self.newStudentName = ko.observable();


        self.signRegister = function() {
            self.students.push(new Student(self.newStudentName()));
            self.newStudentName("");
        }

        self.save = function() {
            var r = new Register();
            r.set('students', self.students());
            
            r.save(null, {
                success: function(obj) {
                    alert('success')
                },
                error: function(obj, error) {
                    alert('Error' + error.description)
                }
            });

        }
    }

    ko.applyBindings(new RegisterViewModel());
});


