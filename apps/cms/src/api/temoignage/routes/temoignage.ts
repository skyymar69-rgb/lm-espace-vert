export default {
  routes: [
    {
      method: 'GET',
      path: '/temoignages',
      handler: 'temoignage.find',
      config: { auth: false },
    },
    {
      method: 'GET',
      path: '/temoignages/:id',
      handler: 'temoignage.findOne',
      config: { auth: false },
    },
  ],
};
