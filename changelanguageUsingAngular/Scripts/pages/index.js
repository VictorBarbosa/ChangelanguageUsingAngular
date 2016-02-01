angular.module("app", []);
angular.module("app", []).controller("languageController", function ($scope) {
    $scope.Laguage = [
    { language: "English", msg: "Choose your language", buttonMsg: "Enter" },
    { language: "Français", msg: "Choisissez votre langue", buttonMsg: "Entre" },
    { language: "Português", msg: "Escolha seus idioma", buttonMsg: "Entre" }
    ];
    $scope.Selected = function (Selected) {
        if (Selected != undefined) {
            localStorage.setItem("langage", Selected);
            window.location = "../home/info";
        }
    }
});