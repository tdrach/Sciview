app.service('DataSets', function($http, $cookieStore, $state) {
    var DataSets = {};

    DataSets.getDataSets = function() {
        return [
            {
                id: '0',
                title: 'Data Set 1',
                batch: [
                    {
                        title: 'Pressure',
                        chart: './img/graph_1.svg',
                        channel: [
                            {
                                title: 'Pressure Sensors',
                                group: [
                                    {
                                        title: 'fuel_pressure-d',
                                        category: 'pressure',
                                        state: "retracted",
                                        meta: [ { tag: "tag1" }, { key: "keyss", value: "valuess"}],
                                        key: {
                                            color: '#FF00D8',
                                            style: "dashed"
                                        }
                                    },                                    {
                                        title: 'oil_pressure-3a',
                                        category: 'pressure',
                                        state: "retracted",
                                        meta: [ { tag: "tag1" }, { key: "keyss", value: "valuess"}],
                                        key: {
                                            color: '#FFF81D',
                                            style: "solid"
                                        }
                                    }

                                ]
                            }
                        ],
                        data_points: [
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
                    },                    
                    {
                        title: 'Speed',
                        chart: './img/graph_2.svg',
                        channel: [
                            {
                                title: 'Pressure Sensors',
                                group: [
                                    {
                                        title: 'fuel_pressure-d',
                                        category: 'pressure',
                                        state: "retracted",
                                        meta: [ { tag: "tag1" }, { key: "keyss", value: "valuess"}],
                                        key: {
                                            color: '#AC00FF',
                                            style: "solid"
                                        }
                                    },                                    {
                                        title: 'oil_pressure-3a',
                                        category: 'pressure',
                                        state: "retracted",
                                        meta: [ { tag: "tag1" }, { key: "keyss", value: "valuess"}],
                                        key: {
                                            color: '#FF00D8',
                                            style: "solid"
                                        }
                                    }

                                ]
                            },
                            {
                                title: 'random_sensor',
                                category: 'pressure',
                                state: "retracted",
                                meta: [ { tag: "tag1" }, { key: "keyss", value: "valuess"}],
                                key: {
                                    color: '#00E7FF',
                                    style: "solid"
                                }
                            }
                        ],
                        data_points: [
                            {
                                count: 1,
                                position: {
                                    x: 59,
                                    y: 200
                                }
                            },            
                            {
                                count: 4,
                                position: {
                                    x: 200,
                                    y: 127
                                }
                            },            
                            {
                                count: 17,
                                position: {
                                    x: 615,
                                    y: 131
                                }
                            }
                        ]
                    }
                ]
                // Dummy chart for now
            },            
            {
                id: '1',
                title: 'Data Set 2'
            }
        ];
    }

    return DataSets;
});





















