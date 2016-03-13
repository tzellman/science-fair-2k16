define('alyssa-science-fair/tests/app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass jshint.');
  });
});
define('alyssa-science-fair/tests/data.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - data.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'data.js should pass jshint.');
  });
});
define('alyssa-science-fair/tests/helpers/destroy-app', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = destroyApp;

  function destroyApp(application) {
    _ember['default'].run(application, 'destroy');
  }
});
define('alyssa-science-fair/tests/helpers/destroy-app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers/destroy-app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass jshint.');
  });
});
define('alyssa-science-fair/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'alyssa-science-fair/tests/helpers/start-app', 'alyssa-science-fair/tests/helpers/destroy-app'], function (exports, _qunit, _alyssaScienceFairTestsHelpersStartApp, _alyssaScienceFairTestsHelpersDestroyApp) {
  exports['default'] = function (name) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _alyssaScienceFairTestsHelpersStartApp['default'])();

        if (options.beforeEach) {
          options.beforeEach.apply(this, arguments);
        }
      },

      afterEach: function afterEach() {
        if (options.afterEach) {
          options.afterEach.apply(this, arguments);
        }

        (0, _alyssaScienceFairTestsHelpersDestroyApp['default'])(this.application);
      }
    });
  };
});
define('alyssa-science-fair/tests/helpers/module-for-acceptance.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers/module-for-acceptance.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass jshint.');
  });
});
define('alyssa-science-fair/tests/helpers/resolver', ['exports', 'alyssa-science-fair/resolver', 'alyssa-science-fair/config/environment'], function (exports, _alyssaScienceFairResolver, _alyssaScienceFairConfigEnvironment) {

  var resolver = _alyssaScienceFairResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _alyssaScienceFairConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _alyssaScienceFairConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});
define('alyssa-science-fair/tests/helpers/resolver.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers/resolver.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass jshint.');
  });
});
define('alyssa-science-fair/tests/helpers/start-app', ['exports', 'ember', 'alyssa-science-fair/app', 'alyssa-science-fair/config/environment'], function (exports, _ember, _alyssaScienceFairApp, _alyssaScienceFairConfigEnvironment) {
  exports['default'] = startApp;

  function startApp(attrs) {
    var application = undefined;

    var attributes = _ember['default'].merge({}, _alyssaScienceFairConfigEnvironment['default'].APP);
    attributes = _ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    _ember['default'].run(function () {
      application = _alyssaScienceFairApp['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }
});
define('alyssa-science-fair/tests/helpers/start-app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers/start-app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass jshint.');
  });
});
define('alyssa-science-fair/tests/pods/application/route.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - pods/application/route.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/application/route.js should pass jshint.');
  });
});
define('alyssa-science-fair/tests/pods/components/simple-bar-chart/component.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - pods/components/simple-bar-chart/component.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'pods/components/simple-bar-chart/component.js should pass jshint.\npods/components/simple-bar-chart/component.js: line 9, col 13, \'data\' is defined but never used.\npods/components/simple-bar-chart/component.js: line 61, col 55, \'$\' is not defined.\n\n2 errors');
  });
});
define('alyssa-science-fair/tests/pods/index/route.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - pods/index/route.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/index/route.js should pass jshint.');
  });
});
define('alyssa-science-fair/tests/pods/sugar/route.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - pods/sugar/route.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'pods/sugar/route.js should pass jshint.\npods/sugar/route.js: line 2, col 30, Missing semicolon.\n\n1 error');
  });
});
define('alyssa-science-fair/tests/pods/weight/route.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - pods/weight/route.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'pods/weight/route.js should pass jshint.\npods/weight/route.js: line 2, col 30, Missing semicolon.\n\n1 error');
  });
});
define('alyssa-science-fair/tests/resolver.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - resolver.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass jshint.');
  });
});
define('alyssa-science-fair/tests/router.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - router.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass jshint.');
  });
});
define('alyssa-science-fair/tests/test-helper', ['exports', 'alyssa-science-fair/tests/helpers/resolver', 'ember-qunit'], function (exports, _alyssaScienceFairTestsHelpersResolver, _emberQunit) {

  (0, _emberQunit.setResolver)(_alyssaScienceFairTestsHelpersResolver['default']);
});
define('alyssa-science-fair/tests/test-helper.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - test-helper.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass jshint.');
  });
});
/* jshint ignore:start */

require('alyssa-science-fair/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;

/* jshint ignore:end */
//# sourceMappingURL=tests.map