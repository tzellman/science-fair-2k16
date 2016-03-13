import Ember from 'ember';
import DATA from '../../data'

export default Ember.Route.extend({

    model(){
        return Ember.Object.create({
            categories: Object.keys(DATA).map(k => DATA[k]["label"] || k.capitalize()),
            series: [{
                name: 'Sugar',
                data: Object.keys(DATA).map(k => DATA[k].sugar)
            }]
        });
    }
});
