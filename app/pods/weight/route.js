import Ember from 'ember';
import DATA from '../../data'

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