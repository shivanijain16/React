import React from 'react';
import ReactDOM from 'react-dom/client';

const restaurantList = [
  {
    type: 'restaurant',
    data: {
      type: 'F',
      id: '92224',
      name: 'KFC',
      uuid: 'a2717b9f-acbe-4a90-b6de-c767f8244898',
      city: '65',
      area: 'Db Mall',
      totalRatingsString: '1000+ ratings',
      cloudinaryImageId: 'bdcd233971b7c81bf77e1fa4471280eb',
      cuisines: ['Burgers', 'Biryani', 'American', 'Snacks', 'Fast Food'],
      tags: [],
      costForTwo: 32500,
      costForTwoString: '₹325 FOR TWO',
      deliveryTime: 37,
      minDeliveryTime: 37,
      maxDeliveryTime: 37,
      slaString: '37 MINS',
      lastMileTravel: 2.0999999046325684,
      slugs: {
        restaurant: 'kfc-db-mall-test-gwalior',
        city: 'gwalior',
      },
      cityState: '65',
      address:
        'Food court Counter 01, 3rd Floor, DB Mall, Opp Gwalior Railway Station, Gwalior,MP-474002',
      locality: 'Gwalior Railway Station',
      parentId: 547,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: '40% off',
        shortDescriptionList: [
          {
            meta: '40% off | Use SWIGGYIT',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        descriptionList: [
          {
            meta: '40% off up to ₹80 | Use code SWIGGYIT',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        subHeader: '',
        headerType: 0,
        superFreedel: '',
      },
      aggregatedDiscountInfoV2: {
        header: '40% OFF',
        shortDescriptionList: [
          {
            meta: 'Use SWIGGYIT',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        descriptionList: [
          {
            meta: '40% off up to ₹80 | Use code SWIGGYIT',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        subHeader: '',
        headerType: 0,
        superFreedel: '',
      },
      ribbon: [
        {
          type: 'PROMOTED',
        },
      ],
      chain: [],
      feeDetails: {
        fees: [
          {
            name: 'distance',
            fee: 1900,
            message: '',
          },
          {
            name: 'time',
            fee: 0,
            message: '',
          },
          {
            name: 'special',
            fee: 0,
            message: '',
          },
        ],
        totalFees: 1900,
        message: '',
        title: 'Delivery Charge',
        amount: '1900',
        icon: '',
      },
      availability: {
        opened: true,
        nextOpenMessage: '',
        nextCloseMessage: '',
      },
      longDistanceEnabled: 0,
      rainMode: 'NONE',
      thirdPartyAddress: false,
      thirdPartyVendor: '',
      adTrackingID: 'cid=6007800~p=1~eid=00000186-8cb5-244a-391b-557c008b0108',
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: '2 kms',
      hasSurge: false,
      sla: {
        restaurantId: '92224',
        deliveryTime: 37,
        minDeliveryTime: 37,
        maxDeliveryTime: 37,
        lastMileTravel: 2.0999999046325684,
        lastMileDistance: 0,
        serviceability: 'SERVICEABLE',
        rainMode: 'NONE',
        longDistance: 'NOT_LONG_DISTANCE',
        preferentialService: false,
        iconType: 'EMPTY',
      },
      promoted: true,
      avgRating: '3.6',
      totalRatings: 1000,
      new: false,
    },
    subtype: 'basic',
  },
  {
    type: 'restaurant',
    data: {
      type: 'F',
      id: '253987',
      name: "McDonald's",
      uuid: 'aff67bb8-20d1-4477-aa8b-79a6250f9da3',
      city: '65',
      area: 'Shinde Ki Chhawani',
      totalRatingsString: '1000+ ratings',
      cloudinaryImageId: '1293a58ab5610f4c730c3d8cb6ac1b65',
      cuisines: ['American'],
      tags: [],
      costForTwo: 40000,
      costForTwoString: '₹400 FOR TWO',
      deliveryTime: 24,
      minDeliveryTime: 24,
      maxDeliveryTime: 24,
      slaString: '24 MINS',
      lastMileTravel: 1.2000000476837158,
      slugs: {
        restaurant: 'mcdonalds-mp-gwalior-lashkar',
        city: 'gwalior',
      },
      cityState: '65',
      address:
        'MP Gwalior, Shop No. G-28 A, DD City Mall. Nagar Lashkar, MLB Road.,Gwalior (MP)- 474009',
      locality: 'MP Gwalior',
      parentId: 630,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: '40% off',
        shortDescriptionList: [
          {
            meta: '40% off | Use TRYNEW',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        descriptionList: [
          {
            meta: '40% off up to ₹80 | Use code TRYNEW',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        subHeader: '',
        headerType: 0,
        superFreedel: '',
      },
      aggregatedDiscountInfoV2: {
        header: '40% OFF',
        shortDescriptionList: [
          {
            meta: 'Use TRYNEW',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        descriptionList: [
          {
            meta: '40% off up to ₹80 | Use code TRYNEW',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        subHeader: '',
        headerType: 0,
        superFreedel: '',
      },
      chain: [],
      feeDetails: {
        fees: [
          {
            name: 'distance',
            fee: 1900,
            message: '',
          },
          {
            name: 'time',
            fee: 0,
            message: '',
          },
          {
            name: 'special',
            fee: 0,
            message: '',
          },
        ],
        totalFees: 1900,
        message: '',
        title: 'Delivery Charge',
        amount: '1900',
        icon: '',
      },
      availability: {
        opened: true,
        nextOpenMessage: '',
        nextCloseMessage: '',
      },
      longDistanceEnabled: 0,
      rainMode: 'NONE',
      thirdPartyAddress: false,
      thirdPartyVendor: '',
      adTrackingID: '',
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: '1.2 kms',
      hasSurge: false,
      sla: {
        restaurantId: '253987',
        deliveryTime: 24,
        minDeliveryTime: 24,
        maxDeliveryTime: 24,
        lastMileTravel: 1.2000000476837158,
        lastMileDistance: 0,
        serviceability: 'SERVICEABLE',
        rainMode: 'NONE',
        longDistance: 'NOT_LONG_DISTANCE',
        preferentialService: false,
        iconType: 'EMPTY',
      },
      promoted: false,
      avgRating: '4.2',
      totalRatings: 1000,
      new: false,
    },
    subtype: 'basic',
  },
  {
    type: 'restaurant',
    data: {
      type: 'F',
      id: '646505',
      name: "La Pino'z Pizza",
      uuid: '68cf23c7-b8be-4167-b240-0c894b20f2de',
      city: '65',
      area: 'Gwalior',
      totalRatingsString: '100+ ratings',
      cloudinaryImageId: '57a56b68fa69d5fa79443df6d7444521',
      cuisines: ['Pizzas', 'Italian', 'Pastas', 'Mexican', 'Desserts'],
      tags: [],
      costForTwo: 40000,
      costForTwoString: '₹400 FOR TWO',
      deliveryTime: 23,
      minDeliveryTime: 23,
      maxDeliveryTime: 23,
      slaString: '23 MINS',
      lastMileTravel: 1.2000000476837158,
      slugs: {
        restaurant: 'la-pinoz-pizza-laxmibai-marg-lashkar',
        city: 'gwalior',
      },
      cityState: '65',
      address:
        'GURUDWARA GATE, MAHARANI LAXMIBAI MARG, PHOOLBAGH, LASHKAR, GWALIOR',
      locality: 'Phoolbaugh',
      parentId: 4961,
      unserviceable: false,
      veg: true,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: '50% off',
        shortDescriptionList: [
          {
            meta: '50% off | Use TRYNEW',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        descriptionList: [
          {
            meta: '50% off up to ₹100 | Use code TRYNEW',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        subHeader: '',
        headerType: 0,
        superFreedel: '',
      },
      aggregatedDiscountInfoV2: {
        header: '50% OFF',
        shortDescriptionList: [
          {
            meta: 'Use TRYNEW',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        descriptionList: [
          {
            meta: '50% off up to ₹100 | Use code TRYNEW',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        subHeader: '',
        headerType: 0,
        superFreedel: '',
      },
      chain: [],
      feeDetails: {
        fees: [
          {
            name: 'distance',
            fee: 1900,
            message: '',
          },
          {
            name: 'time',
            fee: 0,
            message: '',
          },
          {
            name: 'special',
            fee: 0,
            message: '',
          },
        ],
        totalFees: 1900,
        message: '',
        title: 'Delivery Charge',
        amount: '1900',
        icon: '',
      },
      availability: {
        opened: true,
        nextOpenMessage: '',
        nextCloseMessage: '',
      },
      longDistanceEnabled: 0,
      rainMode: 'NONE',
      thirdPartyAddress: false,
      thirdPartyVendor: '',
      adTrackingID: '',
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: '1.2 kms',
      hasSurge: false,
      sla: {
        restaurantId: '646505',
        deliveryTime: 23,
        minDeliveryTime: 23,
        maxDeliveryTime: 23,
        lastMileTravel: 1.2000000476837158,
        lastMileDistance: 0,
        serviceability: 'SERVICEABLE',
        rainMode: 'NONE',
        longDistance: 'NOT_LONG_DISTANCE',
        preferentialService: false,
        iconType: 'EMPTY',
      },
      promoted: false,
      avgRating: '3.5',
      totalRatings: 100,
      new: false,
    },
    subtype: 'basic',
  },
  {
    type: 'restaurant',
    data: {
      type: 'F',
      id: '85940',
      name: 'Alfanzo',
      uuid: '859f2ade-e479-4bbc-bde1-81b74528091e',
      city: '65',
      area: 'city centre',
      totalRatingsString: '5000+ ratings',
      cloudinaryImageId: 'elxdmika77ruzlsuuvex',
      cuisines: [
        'North Indian',
        'Chinese',
        'South Indian',
        'Desserts',
        'Juices',
        'Sweets',
        'Grill',
        'Biryani',
        'Kebabs',
      ],
      tags: [],
      costForTwo: 25000,
      costForTwoString: '₹250 FOR TWO',
      deliveryTime: 28,
      minDeliveryTime: 28,
      maxDeliveryTime: 28,
      slaString: '28 MINS',
      lastMileTravel: 3,
      slugs: {
        restaurant: 'alfanzo-mahalgaon-city-centre',
        city: 'gwalior',
      },
      cityState: '65',
      address:
        'Madhav To Scindia Marg, Opposite Fortune Plaza, City Centre, Mahalgaon, Gwalior',
      locality: 'Mahalgaon',
      parentId: 29932,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: '60% off',
        shortDescriptionList: [
          {
            meta: '60% off | Use WELCOMEBACK',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        descriptionList: [
          {
            meta: '60% off up to ₹100 | Use code WELCOMEBACK',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        subHeader: '',
        headerType: 0,
        superFreedel: '',
      },
      aggregatedDiscountInfoV2: {
        header: '60% OFF',
        shortDescriptionList: [
          {
            meta: 'Use WELCOMEBACK',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        descriptionList: [
          {
            meta: '60% off up to ₹100 | Use code WELCOMEBACK',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        subHeader: '',
        headerType: 0,
        superFreedel: '',
      },
      ribbon: [
        {
          type: 'PROMOTED',
        },
      ],
      chain: [],
      feeDetails: {
        fees: [
          {
            name: 'distance',
            fee: 1900,
            message: '',
          },
          {
            name: 'time',
            fee: 0,
            message: '',
          },
          {
            name: 'special',
            fee: 0,
            message: '',
          },
        ],
        totalFees: 1900,
        message: '',
        title: 'Delivery Charge',
        amount: '1900',
        icon: '',
      },
      availability: {
        opened: true,
        nextOpenMessage: '',
        nextCloseMessage: '',
      },
      longDistanceEnabled: 0,
      rainMode: 'NONE',
      thirdPartyAddress: false,
      thirdPartyVendor: '',
      adTrackingID: 'cid=5963867~p=4~eid=00000186-8cb5-244a-391b-557d008b047c',
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: '3 kms',
      hasSurge: false,
      sla: {
        restaurantId: '85940',
        deliveryTime: 28,
        minDeliveryTime: 28,
        maxDeliveryTime: 28,
        lastMileTravel: 3,
        lastMileDistance: 0,
        serviceability: 'SERVICEABLE',
        rainMode: 'NONE',
        longDistance: 'NOT_LONG_DISTANCE',
        preferentialService: false,
        iconType: 'EMPTY',
      },
      promoted: true,
      avgRating: '4.1',
      totalRatings: 5000,
      new: false,
    },
    subtype: 'basic',
  },
  {
    type: 'restaurant',
    data: {
      type: 'F',
      id: '236485',
      name: 'Pizza Fuel Cafe - Phoolbagh',
      uuid: '215aef69-8ace-4bea-a24b-8b9a0c6358eb',
      city: '65',
      area: 'Ravi Nagar',
      totalRatingsString: '500+ ratings',
      cloudinaryImageId: 'c3dwq2ine3zh17imnt9e',
      cuisines: [
        'Pizzas',
        'Italian',
        'Fast Food',
        'Snacks',
        'American',
        'Continental',
      ],
      tags: [],
      costForTwo: 25000,
      costForTwoString: '₹250 FOR TWO',
      deliveryTime: 29,
      minDeliveryTime: 29,
      maxDeliveryTime: 29,
      slaString: '29 MINS',
      lastMileTravel: 0.20000000298023224,
      slugs: {
        restaurant: 'pizza-fuel-cafe-lashkar-lashkar-2',
        city: 'gwalior',
      },
      cityState: '65',
      address:
        'INFRONT OF ATITHI INN, NEAR SAI BABA TEMPLE, PHOOLBAGH, LASHKAR',
      locality: 'Lashkar',
      parentId: 158582,
      unserviceable: false,
      veg: true,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: '60% off',
        shortDescriptionList: [
          {
            meta: '60% off | Use WELCOMEBACK',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        descriptionList: [
          {
            meta: '60% off up to ₹100 | Use code WELCOMEBACK',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        subHeader: '',
        headerType: 0,
        superFreedel: '',
      },
      aggregatedDiscountInfoV2: {
        header: '60% OFF',
        shortDescriptionList: [
          {
            meta: 'Use WELCOMEBACK',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        descriptionList: [
          {
            meta: '60% off up to ₹100 | Use code WELCOMEBACK',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        subHeader: '',
        headerType: 0,
        superFreedel: '',
      },
      chain: [],
      feeDetails: {
        fees: [
          {
            name: 'distance',
            fee: 1900,
            message: '',
          },
          {
            name: 'time',
            fee: 0,
            message: '',
          },
          {
            name: 'special',
            fee: 0,
            message: '',
          },
        ],
        totalFees: 1900,
        message: '',
        title: 'Delivery Charge',
        amount: '1900',
        icon: '',
      },
      availability: {
        opened: true,
        nextOpenMessage: '',
        nextCloseMessage: '',
      },
      longDistanceEnabled: 0,
      rainMode: 'NONE',
      thirdPartyAddress: false,
      thirdPartyVendor: '',
      adTrackingID: '',
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: '0.2 kms',
      hasSurge: false,
      sla: {
        restaurantId: '236485',
        deliveryTime: 29,
        minDeliveryTime: 29,
        maxDeliveryTime: 29,
        lastMileTravel: 0.20000000298023224,
        lastMileDistance: 0,
        serviceability: 'SERVICEABLE',
        rainMode: 'NONE',
        longDistance: 'NOT_LONG_DISTANCE',
        preferentialService: false,
        iconType: 'EMPTY',
      },
      promoted: false,
      avgRating: '3.8',
      totalRatings: 500,
      new: false,
    },
    subtype: 'basic',
  },
  {
    type: 'restaurant',
    data: {
      type: 'F',
      id: '122382',
      name: 'Dream Arena',
      uuid: '50bbe85e-c1f3-40e5-8ad0-f66412327b6b',
      city: '65',
      area: 'Lashkar',
      totalRatingsString: '1000+ ratings',
      cloudinaryImageId: 'rywzskldw3gzuunqbd8i',
      cuisines: [
        'Pizzas',
        'Beverages',
        'Chinese',
        'Continental',
        'Pastas',
        'Snacks',
      ],
      tags: [],
      costForTwo: 22000,
      costForTwoString: '₹220 FOR TWO',
      deliveryTime: 27,
      minDeliveryTime: 27,
      maxDeliveryTime: 27,
      slaString: '27 MINS',
      lastMileTravel: 0.20000000298023224,
      slugs: {
        restaurant: 'dream-arena-city-centre-lashkar',
        city: 'gwalior',
      },
      cityState: '65',
      address: '6 Kherapdati Colony, Phoolbagh',
      locality: 'Phoolbagh',
      parentId: 74732,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: '60% off',
        shortDescriptionList: [
          {
            meta: '60% off | Use WELCOMEBACK',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        descriptionList: [
          {
            meta: '60% off up to ₹100 | Use code WELCOMEBACK',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        subHeader: '',
        headerType: 0,
        superFreedel: '',
      },
      aggregatedDiscountInfoV2: {
        header: '60% OFF',
        shortDescriptionList: [
          {
            meta: 'Use WELCOMEBACK',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        descriptionList: [
          {
            meta: '60% off up to ₹100 | Use code WELCOMEBACK',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        subHeader: '',
        headerType: 0,
        superFreedel: '',
      },
      chain: [],
      feeDetails: {
        fees: [
          {
            name: 'distance',
            fee: 1900,
            message: '',
          },
          {
            name: 'time',
            fee: 0,
            message: '',
          },
          {
            name: 'special',
            fee: 0,
            message: '',
          },
        ],
        totalFees: 1900,
        message: '',
        title: 'Delivery Charge',
        amount: '1900',
        icon: '',
      },
      availability: {
        opened: true,
        nextOpenMessage: '',
        nextCloseMessage: '',
      },
      longDistanceEnabled: 0,
      rainMode: 'NONE',
      thirdPartyAddress: false,
      thirdPartyVendor: '',
      adTrackingID: '',
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: '0.2 kms',
      hasSurge: false,
      sla: {
        restaurantId: '122382',
        deliveryTime: 27,
        minDeliveryTime: 27,
        maxDeliveryTime: 27,
        lastMileTravel: 0.20000000298023224,
        lastMileDistance: 0,
        serviceability: 'SERVICEABLE',
        rainMode: 'NONE',
        longDistance: 'NOT_LONG_DISTANCE',
        preferentialService: false,
        iconType: 'EMPTY',
      },
      promoted: false,
      avgRating: '3.8',
      totalRatings: 1000,
      new: false,
    },
    subtype: 'basic',
  },
  {
    type: 'restaurant',
    data: {
      type: 'F',
      id: '445232',
      name: 'Waffles Pizza Company',
      uuid: 'f66e8d1c-acb6-4879-b983-c833e3dc5f6a',
      city: '65',
      area: 'Lashkar',
      totalRatingsString: '100+ ratings',
      cloudinaryImageId: 'djyr7mxkltsnrunnbmdn',
      cuisines: [
        'Pizzas',
        'Continental',
        'Fast Food',
        'Ice Cream',
        'Beverages',
      ],
      tags: [],
      costForTwo: 25000,
      costForTwoString: '₹250 FOR TWO',
      deliveryTime: 29,
      minDeliveryTime: 29,
      maxDeliveryTime: 29,
      slaString: '29 MINS',
      lastMileTravel: 2.4000000953674316,
      slugs: {
        restaurant: 'waffles-pizza-gwalior-lashkar-lashkar',
        city: 'gwalior',
      },
      cityState: '65',
      address:
        'G-1 Ground Floor OM Sai Complex, Maina Wali Gali, Lashkar, Gwalior',
      locality: 'Lashkar',
      parentId: 268157,
      unserviceable: false,
      veg: true,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: '60% off',
        shortDescriptionList: [
          {
            meta: '60% off | Use TRYNEW',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        descriptionList: [
          {
            meta: '60% off up to ₹120 | Use code TRYNEW',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        subHeader: '',
        headerType: 0,
        superFreedel: '',
      },
      aggregatedDiscountInfoV2: {
        header: '60% OFF',
        shortDescriptionList: [
          {
            meta: 'Use TRYNEW',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        descriptionList: [
          {
            meta: '60% off up to ₹120 | Use code TRYNEW',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        subHeader: '',
        headerType: 0,
        superFreedel: '',
      },
      ribbon: [
        {
          type: 'PROMOTED',
        },
      ],
      chain: [],
      feeDetails: {
        fees: [
          {
            name: 'distance',
            fee: 1900,
            message: '',
          },
          {
            name: 'time',
            fee: 0,
            message: '',
          },
          {
            name: 'special',
            fee: 0,
            message: '',
          },
        ],
        totalFees: 1900,
        message: '',
        title: 'Delivery Charge',
        amount: '1900',
        icon: '',
      },
      availability: {
        opened: true,
        nextOpenMessage: '',
        nextCloseMessage: '',
      },
      longDistanceEnabled: 0,
      rainMode: 'NONE',
      thirdPartyAddress: false,
      thirdPartyVendor: '',
      adTrackingID: 'cid=5908228~p=7~eid=00000186-8cb5-244a-391b-557e008b071d',
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: '2.4 kms',
      hasSurge: false,
      sla: {
        restaurantId: '445232',
        deliveryTime: 29,
        minDeliveryTime: 29,
        maxDeliveryTime: 29,
        lastMileTravel: 2.4000000953674316,
        lastMileDistance: 0,
        serviceability: 'SERVICEABLE',
        rainMode: 'NONE',
        longDistance: 'NOT_LONG_DISTANCE',
        preferentialService: false,
        iconType: 'EMPTY',
      },
      promoted: true,
      avgRating: '3.7',
      totalRatings: 100,
      new: false,
    },
    subtype: 'basic',
  },
  {
    type: 'restaurant',
    data: {
      type: 'F',
      id: '228779',
      name: 'Zhen Bang Chow',
      uuid: 'f80492c7-880b-4db5-8258-e4fac8a1e8ef',
      city: '65',
      area: 'Ravi Nagar',
      totalRatingsString: '1000+ ratings',
      cloudinaryImageId: 'dmyj4pvm2t1l1zg1dof2',
      cuisines: [
        'Chinese',
        'Snacks',
        'Fast Food',
        'Beverages',
        'Continental',
        'Italian',
      ],
      tags: [],
      costForTwo: 22000,
      costForTwoString: '₹220 FOR TWO',
      deliveryTime: 19,
      minDeliveryTime: 19,
      maxDeliveryTime: 19,
      slaString: '19 MINS',
      lastMileTravel: 0.20000000298023224,
      slugs: {
        restaurant: 'zhen-bang-chow-lashkar-lashkar',
        city: 'gwalior',
      },
      cityState: '65',
      address: '6 Kherapdati Colony, Phoolbagh',
      locality: 'Lashkar',
      parentId: 229929,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: '60% off',
        shortDescriptionList: [
          {
            meta: '60% off | Use TRYNEW',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        descriptionList: [
          {
            meta: '60% off up to ₹120 | Use code TRYNEW',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        subHeader: '',
        headerType: 0,
        superFreedel: '',
      },
      aggregatedDiscountInfoV2: {
        header: '60% OFF',
        shortDescriptionList: [
          {
            meta: 'Use TRYNEW',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        descriptionList: [
          {
            meta: '60% off up to ₹120 | Use code TRYNEW',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        subHeader: '',
        headerType: 0,
        superFreedel: '',
      },
      chain: [],
      feeDetails: {
        fees: [
          {
            name: 'distance',
            fee: 1900,
            message: '',
          },
          {
            name: 'time',
            fee: 0,
            message: '',
          },
          {
            name: 'special',
            fee: 0,
            message: '',
          },
        ],
        totalFees: 1900,
        message: '',
        title: 'Delivery Charge',
        amount: '1900',
        icon: '',
      },
      availability: {
        opened: true,
        nextOpenMessage: '',
        nextCloseMessage: '',
      },
      longDistanceEnabled: 0,
      rainMode: 'NONE',
      thirdPartyAddress: false,
      thirdPartyVendor: '',
      adTrackingID: '',
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: '0.2 kms',
      hasSurge: false,
      sla: {
        restaurantId: '228779',
        deliveryTime: 19,
        minDeliveryTime: 19,
        maxDeliveryTime: 19,
        lastMileTravel: 0.20000000298023224,
        lastMileDistance: 0,
        serviceability: 'SERVICEABLE',
        rainMode: 'NONE',
        longDistance: 'NOT_LONG_DISTANCE',
        preferentialService: false,
        iconType: 'EMPTY',
      },
      promoted: false,
      avgRating: '3.7',
      totalRatings: 1000,
      new: false,
    },
    subtype: 'basic',
  },
  {
    type: 'restaurant',
    data: {
      type: 'F',
      id: '125828',
      name: 'Atithi Inn',
      uuid: '50923574-8e02-41cd-8e2a-93e98cdc2f2d',
      city: '65',
      area: 'Ravi Nagar',
      totalRatingsString: 'Too Few Ratings',
      cloudinaryImageId: 'rmib3vjuwx5nde1zs2ks',
      cuisines: ['Indian', 'Chinese', 'North Indian'],
      tags: [],
      costForTwo: 45000,
      costForTwoString: '₹450 FOR TWO',
      deliveryTime: 19,
      minDeliveryTime: 19,
      maxDeliveryTime: 19,
      slaString: '19 MINS',
      lastMileTravel: 0.20000000298023224,
      slugs: {
        restaurant: 'atithi-inn-lashkar-lashkar',
        city: 'gwalior',
      },
      cityState: '65',
      address:
        'City Square, Main Phoolbagh, Sai Baba Mandir Road, Near GDA Office, Ravi Nagar, Lashkar, Gwalior',
      locality: 'LASHKAR',
      parentId: 37581,
      unserviceable: false,
      veg: true,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      chain: [],
      feeDetails: {
        fees: [
          {
            name: 'distance',
            fee: 1900,
            message: '',
          },
          {
            name: 'time',
            fee: 0,
            message: '',
          },
          {
            name: 'special',
            fee: 0,
            message: '',
          },
        ],
        totalFees: 1900,
        message: '',
        title: 'Delivery Charge',
        amount: '1900',
        icon: '',
      },
      availability: {
        opened: true,
        nextOpenMessage: '',
        nextCloseMessage: '',
      },
      longDistanceEnabled: 0,
      rainMode: 'NONE',
      thirdPartyAddress: false,
      thirdPartyVendor: '',
      adTrackingID: '',
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: '0.2 kms',
      hasSurge: false,
      sla: {
        restaurantId: '125828',
        deliveryTime: 19,
        minDeliveryTime: 19,
        maxDeliveryTime: 19,
        lastMileTravel: 0.20000000298023224,
        lastMileDistance: 0,
        serviceability: 'SERVICEABLE',
        rainMode: 'NONE',
        longDistance: 'NOT_LONG_DISTANCE',
        preferentialService: false,
        iconType: 'EMPTY',
      },
      promoted: false,
      avgRating: '--',
      totalRatings: 0,
      new: false,
    },
    subtype: 'basic',
  },
  {
    type: 'restaurant',
    data: {
      type: 'F',
      id: '581581',
      name: 'Grameen Kulfi',
      uuid: 'cc7b18a2-7e9f-4f2d-a487-04213774c0e5',
      city: '65',
      area: 'Kailash Vihar',
      totalRatingsString: '50+ ratings',
      cloudinaryImageId: 'sfj390yz54wis6bblzfd',
      cuisines: ['Ice Cream', 'Desserts'],
      tags: [],
      costForTwo: 12000,
      costForTwoString: '₹120 FOR TWO',
      deliveryTime: 26,
      minDeliveryTime: 26,
      maxDeliveryTime: 26,
      slaString: '26 MINS',
      lastMileTravel: 4,
      slugs: {
        restaurant: 'grameen-kulfi-kailash-vihar-city-centre-city-centre',
        city: 'gwalior',
      },
      cityState: '65',
      address:
        's, Shop At 63/2, Kailash Vihar City centre, Gwalior, MP-474011, Gwalior, Gwalior, Madhya Pradesh, 474011',
      locality: 'City centre',
      parentId: 12175,
      unserviceable: false,
      veg: true,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: '50% off',
        shortDescriptionList: [
          {
            meta: '50% off | Use SWIGGYIT',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        descriptionList: [
          {
            meta: '50% off up to ₹100 on select items | Use code SWIGGYIT',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        subHeader: '',
        headerType: 0,
        superFreedel: '',
      },
      aggregatedDiscountInfoV2: {
        header: '50% OFF',
        shortDescriptionList: [
          {
            meta: 'Use SWIGGYIT',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        descriptionList: [
          {
            meta: '50% off up to ₹100 on select items | Use code SWIGGYIT',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        subHeader: '',
        headerType: 0,
        superFreedel: '',
      },
      ribbon: [
        {
          type: 'PROMOTED',
        },
      ],
      chain: [],
      feeDetails: {
        fees: [
          {
            name: 'distance',
            fee: 2400,
            message: '',
          },
          {
            name: 'time',
            fee: 0,
            message: '',
          },
          {
            name: 'special',
            fee: 0,
            message: '',
          },
        ],
        totalFees: 2400,
        message: '',
        title: 'Delivery Charge',
        amount: '2400',
        icon: '',
      },
      availability: {
        opened: true,
        nextOpenMessage: '',
        nextCloseMessage: '',
      },
      longDistanceEnabled: 0,
      rainMode: 'NONE',
      thirdPartyAddress: false,
      thirdPartyVendor: '',
      adTrackingID: 'cid=6000550~p=10~eid=00000186-8cb5-244a-391b-557f008b0a73',
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: '4 kms',
      hasSurge: false,
      sla: {
        restaurantId: '581581',
        deliveryTime: 26,
        minDeliveryTime: 26,
        maxDeliveryTime: 26,
        lastMileTravel: 4,
        lastMileDistance: 0,
        serviceability: 'SERVICEABLE',
        rainMode: 'NONE',
        longDistance: 'NOT_LONG_DISTANCE',
        preferentialService: false,
        iconType: 'EMPTY',
      },
      promoted: true,
      avgRating: '4.6',
      totalRatings: 50,
      new: false,
    },
    subtype: 'basic',
  },
];

const Title = () => {
  return (
    <img
      className='logo'
      src='https://obs.line-scdn.net/0m0339dd5b72513e8a8d6127b836e5ecf1e128f1da5cb7?0'
      alt='Food Villa'
    />
  );
};

const Header = () => {
  return (
    <>
      <nav>
        <Title />
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Cart</li>
        </ul>
      </nav>
    </>
  );
};

const RestaurantCard = (props) => {
  const { name, cloudinaryImageId, cuisines, lastMileTravelString } = props;
  return (
    <div className='card'>
      <img
        src={
          'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/' +
          cloudinaryImageId
        }
      />
      <h3>{name}</h3>
      <h5>{cuisines?.splice(0, 3).join(', ')}</h5>
      <h6>{lastMileTravelString}</h6>
    </div>
  );
};
const Body = () => {
  return (
    <div className='restaurant-list'>
      {restaurantList.map((restaurant) => {
        return <RestaurantCard key={restaurant.data.id} {...restaurant.data} />;
      })}
    </div>
  );
};
const Footer = () => {
  return <h3>FOoter</h3>;
};

const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout />);
