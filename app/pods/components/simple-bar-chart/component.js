import Ember from 'ember';

export default Ember.Component.extend({

    draw: Ember.observer('height', function () {
        this.$().empty();
        console.log("in draw");

        let data = this.get("data"),
            options = {
                chart: {
                    type: 'column'
                },
                title: {
                    text: this.attrs.title
                },
                subtitle: {
                    text: this.attrs.subtitle || ''
                },
                credits: {
                    enabled: false
                },
                xAxis: {
                    categories: this.get("categories"),
                    crosshair: true,
                    title: {
                        text: this.attrs.xTitle,
                        style: {fontSize: "16px"}
                    },
                    labels: {
                        style: {fontSize: "20px"}
                    }
                },
                yAxis: {
                    min: 0,
                    title: {
                        text: this.attrs.yTitle,
                        style: {fontSize: "16px"}
                    },
                    tickInterval: this.attrs.tickInterval
                },
                plotOptions: {
                    column: {
                        pointPadding: 0.2,
                        borderWidth: 0
                    }
                },
                series: this.get("series")
            };

        if (this.attrs.colors) {
            options.colors = this.attrs.colors.split(' ');
        }

        options.chart.height = this.get('height');

        this.$().highcharts(options);
    }),

    onInsertion: function () {
        this.set('height', (this.$().innerHeight() || $(window).innerHeight()) * 0.9);
    }.on("didInsertElement")

});
