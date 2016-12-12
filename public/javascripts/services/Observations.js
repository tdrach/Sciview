app.service('Observations', function($http, $cookieStore, $state) {
    var Observations = {};
    var data_points = [];

    Observations.getObservations = function() {
        return [
            {
                data_set: "launch_39.2",
                data_point: "0",
                img: "../img/prof-1.png",
                author: "Thomas Drach",
                created: "1288323623006",
                observation: "This doesn't look good, it could be X or Y, but not Z."
            },                
            {
                data_set: "TEST_3A",
                data_point: "1",
                img: "../img/prof-1.png",
                author: "Thomas Drach",
                created: "1288323623006",
                observation: "I think this problem will continue to grow if we don't address immediately. I think we could do Z if we had A and B, but that's up to Stan."
            },                          
            {
                data_set: "launch_39.2",
                data_point: "2",
                img: "../img/prof-1.png",
                author: "Thomas Drach",
                created: "1288323623006",
                observation: "This doesn't look good, it could be X or Y, but not Z."
            }
        ];
    },

    Observations.getDataPoints = function(index) {
        data_points = [
            {
                list: [
                    {
                        count: 5,
                        position: {
                            x: 34,
                            y: 22
                        }
                    },            
                    {
                        count: 3,
                        position: {
                            x: 200,
                            y: 78
                        }
                    },            
                    {
                        count: 12,
                        position: {
                            x: 605,
                            y: 152
                        }
                    }
                ]
            }
        ];
        return data_points[index];
    }

    return Observations;
});
