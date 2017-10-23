app.controller('contactCtrl', function ($scope, services) {
    console.log($scope);
    $scope.contact = {
        inputName: "",
        inputEmail: "",
        inputPhone: "",
        inputMessage: ""
    };

    $scope.SubmitContact = function () {
        var data = {"inputName": $scope.contact.inputName, 
        "inputEmail": $scope.contact.inputEmail, 
        "inputPhone": $scope.contact.inputPhone, 
        "inputMessage": $scope.contact.inputMessage,"token":'contact_form'};
        var contact_form = JSON.stringify(data);
        alert(contact_form);
        services.post('contact', 'process_contact', contact_form).then(function (response) {
            alert(response);
            response = response.split("|");
            $scope.message = response[1];
            if (response[0].substring(1,5) == 'true') {
                $scope.class = 'alert alert-success';
            } else {
                $scope.class = 'alert alert-error';
            }
        });
    };
});
