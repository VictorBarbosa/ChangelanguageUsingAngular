angular.module("app", []);
angular.module("app").controller("InfoController" , function ($scope,$http) {
    var selection = GetLangSelected();
    CustomersController.$inject = ['Restangular', 'ngTableParams'];
 
    window.onload = function () {

        function loadComponets() {
            $http.get('../json/configuration.json').success(function (configuration) {

                $scope.Informations = { availableOptions: configuration, selectedOption: selection }
            }).error(function () {
                //alert("deu merda");
            });
        }
        function loadValues() {
            $http.get('../json/values.json').success(function (value) {
                $scope.InformationsGrid = value;
            }).error(function () {

            });
        }

        loadComponets();
        loadValues();
    }

    $scope.Informations = {
        availableOptions: [],
        selectedOption: selection//This sets the default value of the select in the ui
    }

    $scope.InformationsGrid = [];
});



function GetLangSelected() {
    switch (localStorage.getItem('langage')) {
        case "English":
            return { id: '1', lang: "English", placeHolder: "Search", tabelName: "Name", tabelSurName: "Surname", tabelaAge: "Age", tabelaEmail: "Email", }
            break;
        case "Français":
            return { id: '2', lang: "Français", placeHolder: "Rechercher", tabelName: "Prenom", tabelSurName: "Nom de famille", tabelaAge: "Âge", tabelaEmail: "Courriel" }
            break;
        case "Português":
            return { id: '3', lang: "Português", placeHolder: "Pesquisar", tabelName: "Nome", tabelSurName: "Sobrenome", tabelaAge: "Idade", tabelaEmail: "Email", }
            break;
        default:
            window.location = "../home";
            break;
    }
}