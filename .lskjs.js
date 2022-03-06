module.exports = {
  concurrency: 10,
  ncu: {
    dep: 'prod,dev,peer,optional',
    packages: '/^@(lskjs)/.*$/',
    newest: 1,
  }
};
