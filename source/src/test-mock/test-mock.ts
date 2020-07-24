const mockOffers = [
  {
    id: 333,
    title: `Beautiful & luxurious apartment at great location`,
    typeHousing: `apartment`,
    price: 200,
    isPremium: false,
    features: [`Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
    bedrooms: 2,
    maxAdults: 4,
    isFavorite: true,
    host: {
      avatarUrl: `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/12.jpg`,
      id: 25,
      isPro: true,
      name: `Angelina`,
    },
    city: {
      coordinates: [48.85661, 2.351499],
      zoom: 13,
      name: `Paris`,
    },
    location: {
      coordinates: [52.3909553943508, 4.929309666406198],
      zoom: 16,
    },
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      Aliquam aut distinctio ex recusandae. Debitis fugiat inventore itaque magni mollitia pariatur reprehenderit sapiente ullam.
      Cumque ducimus, est iusto nam natus neque nostrum quae veniam. A culpa eaque in laboriosam odio repellendus sequi sit voluptates.
      Ad adipisci architecto assumenda at autem consectetur consequuntur culpa, cumque debitis earum et eum ipsa iure nam,
      officiis placeat, quae qui quidem ratione rem tempore ut voluptate.`,
    rating: 1.7,
    images: [`apartment-01.jpg`, `apartment-02.jpg`, `apartment-03.jpg`, `room.jpg`, `studio-photos.jpg`, `studio-01.jpg`],
    prevImage: `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/12.jpg`,
    isProStatus: false,
  },
  {
    id: 777,
    title: `Beautiful & luxurious apartment at great location`,
    typeHousing: `apartment`,
    price: 200,
    isPremium: false,
    features: [`Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
    bedrooms: 2,
    maxAdults: 4,
    isFavorite: true,
    host: {
      avatarUrl: `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/12.jpg`,
      id: 25,
      isPro: true,
      name: `Angelina`,
    },
    city: {
      coordinates: [48.85661, 2.351499],
      zoom: 13,
      name: `Paris`,
    },
    location: {
      coordinates: [52.3909553943508, 4.929309666406198],
      zoom: 16,
    },
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      Aliquam aut distinctio ex recusandae. Debitis fugiat inventore itaque magni mollitia pariatur reprehenderit sapiente ullam.
      Cumque ducimus, est iusto nam natus neque nostrum quae veniam. A culpa eaque in laboriosam odio repellendus sequi sit voluptates.
      Ad adipisci architecto assumenda at autem consectetur consequuntur culpa, cumque debitis earum et eum ipsa iure nam,
      officiis placeat, quae qui quidem ratione rem tempore ut voluptate.`,
    rating: 1.7,
    images: [`apartment-01.jpg`, `apartment-02.jpg`, `apartment-03.jpg`, `room.jpg`, `studio-photos.jpg`, `studio-01.jpg`],
    isProStatus: false,
    prevImage: `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/12.jpg`,
  },
];

export const TestMock = {
  offers: [
    {
      city: {
        name: `Brussels`,
        location: {
          latitude: 50.846557,
          longitude: 4.351697,
          zoom: 13
        }
      },
      // eslint-disable-next-line camelcase
      preview_image: `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/15.jpg`,
      images: [`https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/6.jpg`],
      title: `Waterfront with extraordinary view`,
      // eslint-disable-next-line camelcase
      is_favorite: false,
      // eslint-disable-next-line camelcase
      is_premium: false,
      rating: 3.7,
      type: `hotel`,
      bedrooms: 3,
      // eslint-disable-next-line camelcase
      max_adults: 6,
      price: 109,
      goods: [`Towels`, `Washer`, `Air conditioning`, `Cable TV`, `Washing machine`, `Fridge`, `Breakfast`],
      host: {
        id: 25,
        name: `Angelina`,
        // eslint-disable-next-line camelcase
        is_pro: true,
        // eslint-disable-next-line camelcase
        avatar_url: `img/avatar-angelina.jpg`
      },
      // eslint-disable-next-line camelcase
      id: 33,
      name: `Angelina`,
      // eslint-disable-next-line camelcase
      is_pro: true,
      // eslint-disable-next-line camelcase
      avatar_url: `img/avatar-angelina.jpg`,
      description: `Discover daily local life in city center, friendly neighborhood, clandestine casino, karaoke, old-style artisans, art gallery and artist studio downstairs.`,
      location: {
        latitude: 50.837557,
        longitude: 4.339697,
        zoom: 16
      },
      latitude: 50.837557,
      longitude: 4.339697,
      zoom: 16,
    },
    {
      city: {
        name: `Paris`,
        location: {
          latitude: 50.846557,
          longitude: 4.351697,
          zoom: 13
        }
      },
      // eslint-disable-next-line camelcase
      preview_image: `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/15.jpg`,
      images: [`https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/6.jpg`],
      title: `Waterfront with extraordinary view`,
      // eslint-disable-next-line camelcase
      is_favorite: false,
      // eslint-disable-next-line camelcase
      is_premium: false,
      rating: 3.7,
      type: `hotel`,
      bedrooms: 3,
      // eslint-disable-next-line camelcase
      max_adults: 6,
      price: 109,
      goods: [`Towels`, `Washer`, `Air conditioning`, `Cable TV`, `Washing machine`, `Fridge`, `Breakfast`],
      host: {
        id: 25,
        name: `Angelina`,
        // eslint-disable-next-line camelcase
        is_pro: true,
        // eslint-disable-next-line camelcase
        avatar_url: `img/avatar-angelina.jpg`
      },
      // eslint-disable-next-line camelcase
      id: 22,
      name: `Angelina`,
      // eslint-disable-next-line camelcase
      is_pro: true,
      // eslint-disable-next-line camelcase
      avatar_url: `img/avatar-angelina.jpg`,
      description: `Discover daily local life in city center, friendly neighborhood, clandestine casino, karaoke, old-style artisans, art gallery and artist studio downstairs.`,
      location: {
        latitude: 50.837557,
        longitude: 4.339697,
        zoom: 16
      },
      latitude: 50.837557,
      longitude: 4.339697,
      zoom: 16,
    },
  ],
  adaptedOffers: [
    {
      id: 333,
      title: `Beautiful & luxurious apartment at great location`,
      typeHousing: `apartment`,
      price: 200,
      isPremium: false,
      features: [`Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
      bedrooms: 2,
      maxAdults: 4,
      isFavorite: true,
      host: {
        avatarUrl: `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/12.jpg`,
        id: 25,
        isPro: true,
        name: `Angelina`,
      },
      city: {
        coordinates: [48.85661, 2.351499],
        zoom: 13,
        name: `Paris`,
      },
      location: {
        coordinates: [52.3909553943508, 4.929309666406198],
        zoom: 16,
      },
      description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      Aliquam aut distinctio ex recusandae. Debitis fugiat inventore itaque magni mollitia pariatur reprehenderit sapiente ullam.
      Cumque ducimus, est iusto nam natus neque nostrum quae veniam. A culpa eaque in laboriosam odio repellendus sequi sit voluptates.
      Ad adipisci architecto assumenda at autem consectetur consequuntur culpa, cumque debitis earum et eum ipsa iure nam,
      officiis placeat, quae qui quidem ratione rem tempore ut voluptate.`,
      rating: 1.7,
      images: [`apartment-01.jpg`, `apartment-02.jpg`, `apartment-03.jpg`, `room.jpg`, `studio-photos.jpg`, `studio-01.jpg`],
      prevImage: `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/12.jpg`,
      isProStatus: false,
    },
    {
      id: 777,
      title: `Beautiful & luxurious apartment at great location`,
      typeHousing: `apartment`,
      price: 200,
      isPremium: false,
      features: [`Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
      bedrooms: 2,
      maxAdults: 4,
      isFavorite: true,
      host: {
        avatarUrl: `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/12.jpg`,
        id: 25,
        isPro: true,
        name: `Angelina`,
      },
      city: {
        coordinates: [48.85661, 2.351499],
        zoom: 13,
        name: `Paris`,
      },
      location: {
        coordinates: [52.3909553943508, 4.929309666406198],
        zoom: 16,
      },
      description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      Aliquam aut distinctio ex recusandae. Debitis fugiat inventore itaque magni mollitia pariatur reprehenderit sapiente ullam.
      Cumque ducimus, est iusto nam natus neque nostrum quae veniam. A culpa eaque in laboriosam odio repellendus sequi sit voluptates.
      Ad adipisci architecto assumenda at autem consectetur consequuntur culpa, cumque debitis earum et eum ipsa iure nam,
      officiis placeat, quae qui quidem ratione rem tempore ut voluptate.`,
      rating: 1.7,
      images: [`apartment-01.jpg`, `apartment-02.jpg`, `apartment-03.jpg`, `room.jpg`, `studio-photos.jpg`, `studio-01.jpg`],
      isProStatus: false,
      prevImage: `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/12.jpg`,
    },
  ],
  comments: [
    {
      id: 1,
      user: {
        id: 17,
        // eslint-disable-next-line camelcase
        is_pro: false,
        name: `Emely`,
        // eslint-disable-next-line camelcase
        avatar_url: `https://htmlacademy-react-3.appspot.com/six-cities/static/avatar/8.jpg`,
      },
      rating: 5,
      comment: `The room was spacious and clean. The pool looked nothing e sauna and spa were closed for lunar new year holiday.`,
      date: `2020-02-12T03:29:40.085Z`,
    }
  ],
  adaptedComments: [
    {
      id: 1,
      rating: 3,
      date: `2020-02-13T01:42:13.129Z`,
      comment: `We loved it so much, the house, the veiw, the location`,
      user: {
        avatarUrl: `https://htmlacademy-react-3.appspot.com/six-cities/static/avatar/7.jpg`,
        name: `Mollie`,
        id: 16,
        isPro: false,
      },
    },
    {
      user: {
        id: 13,
        isPro: true,
        name: `Dean`,
        avatarUrl: `https://htmlacademy-react-3.appspot.com/six-cities/static/avatar/7.jpg`,
        avatarUrl2: `https://htmlacademy-react-3.appspot.com/six-cities/static/avatar/7.jpg`,
      },
      id: 5,
      rating: 1,
      date: `2020-02-13T01:42:13.129Z`,
      comment: `We loved it so much, the house, the veiw, the location`,
    },
  ],
  cities: [`Paris`, `Brussels`, `Hamburg`, `Amsterdam`, `Cologne`],
  coordinates: [
    [52.3909553943508, 4.929309666406198],
    [52.3909553943508, 4.929309666406198],
    [52.3909553943508, 4.929309666406198],
    [52.3909553943508, 4.929309666406198],
  ],
  settingMap: {
    cityCoordinates: [52.3909553943508, 4.929309666406198],
    zoom: 16
  },
  authorizationStatus: {
    AUTH: `AUTH`,
    NOT_AUTH: `NOT_AUTH`,
  },
  authInfo: {
    id: 313,
    email: `email@email.com`,
    name: `You`,
    avatarUrl: `/avatar.svg`,
    isPro: true,
  },
  authInfoNotAdapted: {
    id: 313,
    email: `email@email.com`,
    name: `You`,
    // eslint-disable-next-line camelcase
    avatar_url: `/avatar.svg`,
    // eslint-disable-next-line camelcase
    is_pro: true,
  },
  favoriteOffers: {
    'Paris': mockOffers,
    'Moscow': mockOffers,
  },
  commentPost: {
    "comment": `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
    "rating": 4
  }
};
