const app = angular.module('app', []);

app.factory('Employees', [function FactoryTest() {
    const data = [{ "id": "54-4476641", "first_name": "Aylmer", "last_name": "Fazzioli", "email": "afazzioli0@china.com.cn", "gender": "Male", "salary": "$8008.83", "department": "Training", "job_title": "Occupational Therapist", "avatar": "https://robohash.org/eiusminimaperferendis.bmp?size=50x50&set=set1" },
    { "id": "63-1465987", "first_name": "Consuela", "last_name": "Boynton", "email": "cboynton1@zdnet.com", "gender": "Female", "salary": "$5462.04", "department": "Product Management", "job_title": "Statistician III", "avatar": "https://robohash.org/omnisaliquidipsam.png?size=50x50&set=set1" },
    { "id": "31-1087709", "first_name": "Evelina", "last_name": "Willatt", "email": "ewillatt2@abc.net.au", "gender": "Female", "salary": "$1050.42", "department": "Research and Development", "job_title": "Safety Technician I", "avatar": "https://robohash.org/consequunturprovidenteligendi.png?size=50x50&set=set1" },
    { "id": "02-8494376", "first_name": "Patrica", "last_name": "Hehl", "email": "phehl3@csmonitor.com", "gender": "Female", "salary": "$8472.67", "department": "Accounting", "job_title": "Quality Control Specialist", "avatar": "https://robohash.org/rerumitaquepariatur.bmp?size=50x50&set=set1" },
    { "id": "23-1920003", "first_name": "Wade", "last_name": "Shillaker", "email": "wshillaker4@icio.us", "gender": "Male", "salary": "$9899.02", "department": "Product Management", "job_title": "Media Manager III", "avatar": "https://robohash.org/enimutomnis.jpg?size=50x50&set=set1" },
    { "id": "28-8387703", "first_name": "Waldo", "last_name": "Gagie", "email": "wgagie5@example.com", "gender": "Male", "salary": "$8875.90", "department": "Business Development", "job_title": "Statistician IV", "avatar": "https://robohash.org/etabdolorem.jpg?size=50x50&set=set1" },
    { "id": "09-4253695", "first_name": "Bank", "last_name": "Borris", "email": "bborris6@weebly.com", "gender": "Male", "salary": "$5325.04", "department": "Marketing", "job_title": "General Manager", "avatar": "https://robohash.org/ipsamasperioresqui.jpg?size=50x50&set=set1" },
    { "id": "19-5929356", "first_name": "Ellary", "last_name": "Bezley", "email": "ebezley7@ning.com", "gender": "Male", "salary": "$1484.19", "department": "Sales", "job_title": "Office Assistant IV", "avatar": "https://robohash.org/debitisnumquamnecessitatibus.bmp?size=50x50&set=set1" },
    { "id": "52-8946271", "first_name": "Jonathan", "last_name": "Stillwell", "email": "jstillwell8@discovery.com", "gender": "Male", "salary": "$2219.65", "department": "Engineering", "job_title": "Mechanical Systems Engineer", "avatar": "https://robohash.org/accusantiumdoloribusest.jpg?size=50x50&set=set1" },
    { "id": "80-5827550", "first_name": "Dun", "last_name": "Goodlud", "email": "dgoodlud9@japanpost.jp", "gender": "Male", "salary": "$9350.28", "department": "Training", "job_title": "Social Worker", "avatar": "https://robohash.org/providentnecessitatibusdoloremque.jpg?size=50x50&set=set1" },
    { "id": "10-1574793", "first_name": "Odille", "last_name": "Hodge", "email": "ohodgea@telegraph.co.uk", "gender": "Female", "salary": "$2945.98", "department": "Engineering", "job_title": "VP Accounting", "avatar": "https://robohash.org/dignissimossequinesciunt.png?size=50x50&set=set1" },
    { "id": "87-3196666", "first_name": "Gav", "last_name": "Knappett", "email": "gknappettb@over-blog.com", "gender": "Male", "salary": "$7258.83", "department": "Human Resources", "job_title": "Paralegal", "avatar": "https://robohash.org/dolorautipsum.jpg?size=50x50&set=set1" },
    { "id": "58-2216992", "first_name": "Wallie", "last_name": "McGiff", "email": "wmcgiffc@prlog.org", "gender": "Male", "salary": "$2671.26", "department": "Training", "job_title": "Systems Administrator I", "avatar": "https://robohash.org/explicaboeiusoptio.bmp?size=50x50&set=set1" },
    { "id": "17-6992453", "first_name": "Benny", "last_name": "Belvard", "email": "bbelvardd@list-manage.com", "gender": "Female", "salary": "$6585.85", "department": "Training", "job_title": "Associate Professor", "avatar": "https://robohash.org/voluptatemquipraesentium.bmp?size=50x50&set=set1" },
    { "id": "56-3226701", "first_name": "Mort", "last_name": "Threader", "email": "mthreadere@cdbaby.com", "gender": "Male", "salary": "$7064.36", "department": "Support", "job_title": "Nurse", "avatar": "https://robohash.org/quassintut.bmp?size=50x50&set=set1" },
    { "id": "00-2305201", "first_name": "Dorisa", "last_name": "Anfusso", "email": "danfussof@cam.ac.uk", "gender": "Female", "salary": "$6804.95", "department": "Business Development", "job_title": "Senior Sales Associate", "avatar": "https://robohash.org/excepturiillumsimilique.png?size=50x50&set=set1" },
    { "id": "71-2467696", "first_name": "Noak", "last_name": "Bragg", "email": "nbraggg@qq.com", "gender": "Male", "salary": "$2080.71", "department": "Engineering", "job_title": "VP Accounting", "avatar": "https://robohash.org/namquideserunt.bmp?size=50x50&set=set1" },
    { "id": "92-8988327", "first_name": "Allyn", "last_name": "Baldocci", "email": "abaldoccih@seesaa.net", "gender": "Female", "salary": "$8851.69", "department": "Sales", "job_title": "VP Sales", "avatar": "https://robohash.org/aliquidrepellatporro.png?size=50x50&set=set1" },
    { "id": "25-5885075", "first_name": "Jaymee", "last_name": "Urridge", "email": "jurridgei@bluehost.com", "gender": "Female", "salary": "$3906.39", "department": "Product Management", "job_title": "Clinical Specialist", "avatar": "https://robohash.org/delenitietullam.png?size=50x50&set=set1" },
    { "id": "04-1334352", "first_name": "Chelsae", "last_name": "Pimlett", "email": "cpimlettj@slideshare.net", "gender": "Female", "salary": "$4331.54", "department": "Support", "job_title": "General Manager", "avatar": "https://robohash.org/voluptatummaximevoluptatem.bmp?size=50x50&set=set1" }]
    return {
        getEmployees: () => data,
        getEmployeById: (id) => data.filter(emp => emp.id === id)[0]
    }
}]);

app.directive('empDetails', function () {
    return {
        templateUrl: './empDetails.html'
    };
});

app.directive('clExample', function () {
    return {
        template: "<div> HOLA </div>"
       // templateUrl: './compileLinkDirective.html'
    };
});



app.controller('EmpController', function EmpController($scope, Employees) {
    $scope.nombre = "carlos";
    $scope.selectedEmp = null;
    $scope.selectEmp = (id) => $scope.selectedEmp = Employees.getEmployeById(id)
    $scope.employees = Employees.getEmployees();
});

