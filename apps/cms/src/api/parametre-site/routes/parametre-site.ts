export default {
  routes: [
    {
      method: 'GET',
      path: '/parametre-site',
      handler: 'parametre-site.find',
      config: { auth: false },
    },
  ],
};
