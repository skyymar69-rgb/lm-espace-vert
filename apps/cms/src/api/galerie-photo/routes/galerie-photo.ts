export default {
  routes: [
    {
      method: 'GET',
      path: '/galerie-photos',
      handler: 'galerie-photo.find',
      config: { auth: false },
    },
    {
      method: 'GET',
      path: '/galerie-photos/:id',
      handler: 'galerie-photo.findOne',
      config: { auth: false },
    },
  ],
};
