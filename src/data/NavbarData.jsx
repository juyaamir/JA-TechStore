const navbarData = [
    {
      label: 'Home',
      path: '/',
    },
    {
      label: 'Mobiles',
      path: '/mobiles',
      subMenu: [
        {
          label: 'iPhone',
          path: '/iphone',
        },
        {
          label: 'Galaxy Samsung',
          path: '/galaxy-samsung',
        },
        {
          label: 'Accessories',
          path: '/mob-accessories',
        },
        ]
    },
    {
      label: 'Computers & Tablets',
      path: '/computers-tablets',
      subMenu: [
        {
          label: 'Laptops',
          path: '/laptops',
        },
        {
          label: 'Tablets',
          path: '/tablets',
        },
        {
          label: 'Accessories',
          path: '/comp-accessories',
        }
      ]
    },
    {
      label: "Today's Deals",
      path: '/todays-deals',
    
    subMenu: [
      {
        label: 'Best Sellers',
        path: '/best-sellers',
      },
      {
        label: 'Deals of the Day',
        path: '/deals-of-the-day',
      },
    ],
  },
];

export default navbarData;