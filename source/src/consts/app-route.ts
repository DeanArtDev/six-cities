const AppRoute = {
  ROOT: `/`,
  SING_IN: `/sing-in`,
  DETAIL: `/detail-:id?`,
  FAVORITES: `/favorites`,
  setDetailWay: (id) => `/detail-${id}`,
};

export default AppRoute;
