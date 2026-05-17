export default {
  routes: [
    {
      method: 'GET',
      path: '/realisations',
      handler: 'realisation.find',
      config: { auth: false },
    },
    {
      method: 'GET',
      path: '/realisations/:id',
      handler: 'realisation.findOne',
      config: { auth: false },
    },
  ],
};
