const req = require.context(
  '../packages',
  true,
  /.story.js|.story.js|.story.jsx|.story.jsx|.story.ts|.story.tsx$/,
);

export default {
  modules: req.keys().map(req),
  options: {
    name: 'LSK.js',
  },
  knobs: false,
};
