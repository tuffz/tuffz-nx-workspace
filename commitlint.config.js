module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'scope-enum': [
      2,
      'always',
      [
        'core',
        'coding-booth-com',
        'ericbuettner-com',
        'tuffz-com',
        'coding-booth-com-feature-under-construction',
        'ericbuettner-com-feature-career-timeline',
        'ericbuettner-com-feature-profile-snapshot',
        'shared-ui-anchor',
        'shared-ui-footer',
        'shared-ui-image-embed',
        'shared-ui-social-media-icons',
        'shared-utils-location-formatting',
      ],
    ],
    'type-enum': [
      2,
      'always',
      [
        'build',
        'ci',
        'docs',
        'feat',
        'fix',
        'perf',
        'refactor',
        'revert',
        'style',
        'test',
        'release',
      ],
    ],
  },
};
