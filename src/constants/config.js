const devMode = (process.env.NODE_ENV !== 'development');

export default {
  // App Details
  appName: 'SmyL',

  // Build Configuration - eg. Debug or Release?
  DEV: devMode,

  // Google Analytics - uses a 'dev' account while we're testing
  gaTrackingId: (devMode) ? 'UA-8426-2' : 'UA-84286-1',
};
