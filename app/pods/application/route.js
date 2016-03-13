import Ember from 'ember';

const DATA = {
    coke: {before: 0.096, after: 0.064, sugar: 39},
    gatorade: {before: 0.096, after: 0.032, sugar: 34},
    oj: {before: 0.064, after: 0.032, sugar: 22, label: "Orange Juice"},
    coffee: {before: 0.064, after: 0.064, sugar: 0},
    grapeJuice: {before: 0.060, after: 0.020, sugar: 30, label: "Grape Juice"},
    milk: {before: 0.064, after: 0.032, sugar: 12},
    water: {before: 0.064, after: 0.064, sugar: 0}
};

export default Ember.Route.extend({

    model(){
        return Ember.Object.create({
            categories: Object.keys(DATA).map(k => DATA[k]["label"] || k.capitalize()),
            series: [{
                name: 'Before',
                data: Object.keys(DATA).map(k => DATA[k].before)
            }, {
                name: 'After',
                data: Object.keys(DATA).map(k => DATA[k].after)

            }]
        });
    }
});
