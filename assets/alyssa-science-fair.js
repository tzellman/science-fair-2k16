"use strict";

/* jshint ignore:start */



/* jshint ignore:end */

define('alyssa-science-fair/app', ['exports', 'ember', 'alyssa-science-fair/resolver', 'ember-load-initializers', 'alyssa-science-fair/config/environment'], function (exports, _ember, _alyssaScienceFairResolver, _emberLoadInitializers, _alyssaScienceFairConfigEnvironment) {

  var App = undefined;

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = _ember['default'].Application.extend({
    modulePrefix: _alyssaScienceFairConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _alyssaScienceFairConfigEnvironment['default'].podModulePrefix,
    Resolver: _alyssaScienceFairResolver['default']
  });

  (0, _emberLoadInitializers['default'])(App, _alyssaScienceFairConfigEnvironment['default'].modulePrefix);

  exports['default'] = App;
});
define('alyssa-science-fair/components/app-version', ['exports', 'ember-cli-app-version/components/app-version', 'alyssa-science-fair/config/environment'], function (exports, _emberCliAppVersionComponentsAppVersion, _alyssaScienceFairConfigEnvironment) {

  var name = _alyssaScienceFairConfigEnvironment['default'].APP.name;
  var version = _alyssaScienceFairConfigEnvironment['default'].APP.version;

  exports['default'] = _emberCliAppVersionComponentsAppVersion['default'].extend({
    version: version,
    name: name
  });
});
define('alyssa-science-fair/controllers/array', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller;
});
define('alyssa-science-fair/controllers/object', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller;
});
define("alyssa-science-fair/data", ["exports"], function (exports) {
    var DATA = {
        coke: { before: 0.096, after: 0.064, sugar: 39 },
        gatorade: { before: 0.096, after: 0.032, sugar: 34 },
        oj: { before: 0.064, after: 0.032, sugar: 22, label: "Orange Juice" },
        coffee: { before: 0.064, after: 0.064, sugar: 0 },
        grapeJuice: { before: 0.060, after: 0.020, sugar: 30, label: "Grape Juice" },
        milk: { before: 0.064, after: 0.032, sugar: 12 },
        water: { before: 0.064, after: 0.064, sugar: 0 }
    };

    exports.DATA = DATA;
    exports["default"] = DATA;
});
define('alyssa-science-fair/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _emberInflectorLibHelpersPluralize) {
  exports['default'] = _emberInflectorLibHelpersPluralize['default'];
});
define('alyssa-science-fair/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _emberInflectorLibHelpersSingularize) {
  exports['default'] = _emberInflectorLibHelpersSingularize['default'];
});
define('alyssa-science-fair/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'alyssa-science-fair/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _alyssaScienceFairConfigEnvironment) {
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(_alyssaScienceFairConfigEnvironment['default'].APP.name, _alyssaScienceFairConfigEnvironment['default'].APP.version)
  };
});
define('alyssa-science-fair/initializers/container-debug-adapter', ['exports', 'ember-resolver/container-debug-adapter'], function (exports, _emberResolverContainerDebugAdapter) {
  exports['default'] = {
    name: 'container-debug-adapter',

    initialize: function initialize() {
      var app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _emberResolverContainerDebugAdapter['default']);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
define('alyssa-science-fair/initializers/data-adapter', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `data-adapter` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'data-adapter',
    before: 'store',
    initialize: _ember['default'].K
  };
});
define('alyssa-science-fair/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data/-private/core'], function (exports, _emberDataSetupContainer, _emberDataPrivateCore) {

  /*
  
    This code initializes Ember-Data onto an Ember application.
  
    If an Ember.js developer defines a subclass of DS.Store on their application,
    as `App.StoreService` (or via a module system that resolves to `service:store`)
    this code will automatically instantiate it and make it available on the
    router.
  
    Additionally, after an application's controllers have been injected, they will
    each have the store made available to them.
  
    For example, imagine an Ember.js application with the following classes:
  
    App.StoreService = DS.Store.extend({
      adapter: 'custom'
    });
  
    App.PostsController = Ember.ArrayController.extend({
      // ...
    });
  
    When the application is initialized, `App.ApplicationStore` will automatically be
    instantiated, and the instance of `App.PostsController` will have its `store`
    property set to that instance.
  
    Note that this code will only be run if the `ember-application` package is
    loaded. If Ember Data is being used in an environment other than a
    typical application (e.g., node.js where only `ember-runtime` is available),
    this code will be ignored.
  */

  exports['default'] = {
    name: 'ember-data',
    initialize: _emberDataSetupContainer['default']
  };
});
define('alyssa-science-fair/initializers/export-application-global', ['exports', 'ember', 'alyssa-science-fair/config/environment'], function (exports, _ember, _alyssaScienceFairConfigEnvironment) {
  exports.initialize = initialize;

  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_alyssaScienceFairConfigEnvironment['default'].exportApplicationGlobal !== false) {
      var value = _alyssaScienceFairConfigEnvironment['default'].exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = _ember['default'].String.classify(_alyssaScienceFairConfigEnvironment['default'].modulePrefix);
      }

      if (!window[globalName]) {
        window[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete window[globalName];
          }
        });
      }
    }
  }

  exports['default'] = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('alyssa-science-fair/initializers/injectStore', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `injectStore` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'injectStore',
    before: 'store',
    initialize: _ember['default'].K
  };
});
define('alyssa-science-fair/initializers/store', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `store` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'store',
    after: 'ember-data',
    initialize: _ember['default'].K
  };
});
define('alyssa-science-fair/initializers/transforms', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `transforms` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'transforms',
    before: 'store',
    initialize: _ember['default'].K
  };
});
define("alyssa-science-fair/instance-initializers/ember-data", ["exports", "ember-data/-private/instance-initializers/initialize-store-service"], function (exports, _emberDataPrivateInstanceInitializersInitializeStoreService) {
  exports["default"] = {
    name: "ember-data",
    initialize: _emberDataPrivateInstanceInitializersInitializeStoreService["default"]
  };
});
define("alyssa-science-fair/pods/application/route", ["exports", "ember"], function (exports, _ember) {

    var DATA = {
        coke: { before: 0.096, after: 0.064, sugar: 39 },
        gatorade: { before: 0.096, after: 0.032, sugar: 34 },
        oj: { before: 0.064, after: 0.032, sugar: 22, label: "Orange Juice" },
        coffee: { before: 0.064, after: 0.064, sugar: 0 },
        grapeJuice: { before: 0.060, after: 0.020, sugar: 30, label: "Grape Juice" },
        milk: { before: 0.064, after: 0.032, sugar: 12 },
        water: { before: 0.064, after: 0.064, sugar: 0 }
    };

    exports["default"] = _ember["default"].Route.extend({

        model: function model() {
            return _ember["default"].Object.create({
                categories: Object.keys(DATA).map(function (k) {
                    return DATA[k]["label"] || k.capitalize();
                }),
                series: [{
                    name: 'Before',
                    data: Object.keys(DATA).map(function (k) {
                        return DATA[k].before;
                    })
                }, {
                    name: 'After',
                    data: Object.keys(DATA).map(function (k) {
                        return DATA[k].after;
                    })

                }]
            });
        }
    });
});
define("alyssa-science-fair/pods/application/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type"]
        },
        "revision": "Ember@2.4.2",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 1,
            "column": 10
          }
        },
        "moduleName": "alyssa-science-fair/pods/application/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["content", "outlet", ["loc", [null, [1, 0], [1, 10]]]]],
      locals: [],
      templates: []
    };
  })());
});
define('alyssa-science-fair/pods/components/simple-bar-chart/component', ['exports', 'ember'], function (exports, _ember) {
    exports['default'] = _ember['default'].Component.extend({

        draw: _ember['default'].observer('height', function () {
            this.$().empty();
            console.log("in draw");

            var data = this.get("data"),
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
                        style: { fontSize: "16px" }
                    },
                    labels: {
                        style: { fontSize: "20px" }
                    }
                },
                yAxis: {
                    min: 0,
                    title: {
                        text: this.attrs.yTitle,
                        style: { fontSize: "16px" }
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

        onInsertion: (function () {
            this.set('height', (this.$().innerHeight() || $(window).innerHeight()) * 0.9);
        }).on("didInsertElement")

    });
});
define('alyssa-science-fair/pods/index/route', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define("alyssa-science-fair/pods/index/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.2",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 3
            },
            "end": {
              "line": 1,
              "column": 36
            }
          },
          "moduleName": "alyssa-science-fair/pods/index/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("Tooth Weight");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.2",
          "loc": {
            "source": null,
            "start": {
              "line": 2,
              "column": 3
            },
            "end": {
              "line": 2,
              "column": 28
            }
          },
          "moduleName": "alyssa-science-fair/pods/index/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("Sugar");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["multiple-nodes"]
        },
        "revision": "Ember@2.4.2",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 3,
            "column": 0
          }
        },
        "moduleName": "alyssa-science-fair/pods/index/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("p");
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0]), 0, 0);
        morphs[1] = dom.createMorphAt(dom.childAt(fragment, [2]), 0, 0);
        return morphs;
      },
      statements: [["block", "link-to", ["weight"], [], 0, null, ["loc", [null, [1, 3], [1, 48]]]], ["block", "link-to", ["sugar"], [], 1, null, ["loc", [null, [2, 3], [2, 40]]]]],
      locals: [],
      templates: [child0, child1]
    };
  })());
});
define('alyssa-science-fair/pods/sugar/route', ['exports', 'ember', 'alyssa-science-fair/data'], function (exports, _ember, _alyssaScienceFairData) {
    exports['default'] = _ember['default'].Route.extend({

        model: function model() {
            return _ember['default'].Object.create({
                categories: Object.keys(_alyssaScienceFairData['default']).map(function (k) {
                    return _alyssaScienceFairData['default'][k]["label"] || k.capitalize();
                }),
                series: [{
                    name: 'Sugar',
                    data: Object.keys(_alyssaScienceFairData['default']).map(function (k) {
                        return _alyssaScienceFairData['default'][k].sugar;
                    })
                }]
            });
        }
    });
});
define("alyssa-science-fair/pods/sugar/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type"]
        },
        "revision": "Ember@2.4.2",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 10,
            "column": 0
          }
        },
        "moduleName": "alyssa-science-fair/pods/sugar/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["inline", "simple-bar-chart", [], ["series", ["subexpr", "@mut", [["get", "model.series", ["loc", [null, [2, 7], [2, 19]]]]], [], []], "categories", ["subexpr", "@mut", [["get", "model.categories", ["loc", [null, [3, 11], [3, 27]]]]], [], []], "title", "Amount of Sugar in Drinks", "yTitle", "Amount of Sugar per Serving (grams)", "xTitle", "Drink", "colors", "#4eff3c", "tickInterval", 10], ["loc", [null, [1, 0], [9, 2]]]]],
      locals: [],
      templates: []
    };
  })());
});
define('alyssa-science-fair/pods/weight/route', ['exports', 'ember', 'alyssa-science-fair/data'], function (exports, _ember, _alyssaScienceFairData) {
    exports['default'] = _ember['default'].Route.extend({

        model: function model() {
            return _ember['default'].Object.create({
                categories: Object.keys(_alyssaScienceFairData['default']).map(function (k) {
                    return _alyssaScienceFairData['default'][k]["label"] || k.capitalize();
                }),
                series: [{
                    name: 'Before',
                    data: Object.keys(_alyssaScienceFairData['default']).map(function (k) {
                        return _alyssaScienceFairData['default'][k].before;
                    })
                }, {
                    name: 'After',
                    data: Object.keys(_alyssaScienceFairData['default']).map(function (k) {
                        return _alyssaScienceFairData['default'][k].after;
                    })

                }]
            });
        }
    });
});
define("alyssa-science-fair/pods/weight/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type"]
        },
        "revision": "Ember@2.4.2",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 12,
            "column": 0
          }
        },
        "moduleName": "alyssa-science-fair/pods/weight/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["inline", "simple-bar-chart", [], ["series", ["subexpr", "@mut", [["get", "model.series", ["loc", [null, [2, 7], [2, 19]]]]], [], []], "categories", ["subexpr", "@mut", [["get", "model.categories", ["loc", [null, [3, 11], [3, 27]]]]], [], []], "title", "Tooth Decay", "subtitle", "Change in Weight", "yTitle", "Weight (ounces)", "xTitle", "Drink", "colors", "#7cb5ec #ffce27", "tickInterval", 0.005], ["loc", [null, [1, 0], [10, 2]]]]],
      locals: [],
      templates: []
    };
  })());
});
define('alyssa-science-fair/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  exports['default'] = _emberResolver['default'];
});
define('alyssa-science-fair/router', ['exports', 'ember', 'alyssa-science-fair/config/environment'], function (exports, _ember, _alyssaScienceFairConfigEnvironment) {

    var Router = _ember['default'].Router.extend({
        location: _alyssaScienceFairConfigEnvironment['default'].locationType
    });

    Router.map(function () {
        this.route('weight');
        this.route('sugar');
    });

    exports['default'] = Router;
});
define('alyssa-science-fair/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _emberAjaxServicesAjax) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberAjaxServicesAjax['default'];
    }
  });
});
/* jshint ignore:start */



/* jshint ignore:end */

/* jshint ignore:start */

define('alyssa-science-fair/config/environment', ['ember'], function(Ember) {
  var prefix = 'alyssa-science-fair';
/* jshint ignore:start */

try {
  var metaName = prefix + '/config/environment';
  var rawConfig = Ember['default'].$('meta[name="' + metaName + '"]').attr('content');
  var config = JSON.parse(unescape(rawConfig));

  return { 'default': config };
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

/* jshint ignore:end */

});

/* jshint ignore:end */

/* jshint ignore:start */

if (!runningTests) {
  require("alyssa-science-fair/app")["default"].create({"LOG_ACTIVE_GENERATION":true,"LOG_TRANSITIONS":true,"LOG_TRANSITIONS_INTERNAL":true,"LOG_VIEW_LOOKUPS":true,"name":"alyssa-science-fair","version":"0.0.0+1ed24ef1"});
}

/* jshint ignore:end */
//# sourceMappingURL=alyssa-science-fair.map