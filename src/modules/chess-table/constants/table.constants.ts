import { ICell } from "../models/table/table.model";

export const INITIAL_CELLS: ICell[][] = [
  [
    {
      id: '00',
      color: 'white',
      piece: null,
      displayedInfo: {
        left: '8',
      }
    },
    {
      id: '01',
      color: 'black',
      piece: null,

    },
    {
      id: '02',
      color: 'white',
      piece: null,
    },
    {
      id: '03',
      color: 'black',
      piece: {
        id: '4',
        type: 'pawn',
        color: 'white',
        image: 'wp',
      },
    },
    {
      id: '04',
      color: 'white',
      piece: null,

    },
    {
      id: '05',
      color: 'black',
      piece: null,

    },
    {
      id: '06',
      color: 'white',
      piece: null,

    },
    {
      id: '07',
      color: 'black',
      piece: null,

    },
  ],

  [
    {
      id: '10',
      color: 'black',
      displayedInfo: {
        left: '7',
      },
      piece: null,
    },
    {
      id: '11',
      color: 'white',
      piece: null
    },
    {
      id: '12',
      color: 'black',
      piece: null
    },
    {
      id: '13',
      color: 'white',
      piece: {
        id: '20',
        type: 'king',
        color: 'white',
        image: 'wk',
      },
    },
    {
      id: '14',
      color: 'black',
      piece: {
        id: '21',
        type: 'king',
        color: 'black',
        image: 'bk',
      },
    },
    {
      id: '15',
      color: 'white',
      piece: null,
    },
    {
      id: '16',
      color: 'black',
      piece: null,
    },
    {
      id: '17',
      color: 'white', piece: null,


      // piece: {
      //   id: '21',
      //   type: 'king',
      //   color: 'white',
      //   image: 'wk',
      // },
    },
  ],

  [
    {
      id: '20',
      color: 'white',
      piece: null,
      displayedInfo: {
        left: '6',
      }
    },
    {
      id: '21',
      color: 'black',
      piece: null,
    },
    {
      id: '22',
      color: 'white',
      piece: null,
    },
    {
      id: '23',
      color: 'black',
      piece: null,
    },
    {
      id: '24',
      color: 'white',
      piece: null,
    },
    {
      id: '25',
      color: 'black',
      piece: null,
    },
    {
      id: '26',
      color: 'white',
      piece: null,
    },
    {
      id: '27',
      color: 'black',
      piece: null,
    },
  ],

  [
    {
      id: '30',
      color: 'black',
      piece: null,
      displayedInfo: {
        left: '5',
      }
    },
    {
      id: '31',
      color: 'white',
      piece: null,
    },
    {
      id: '32',
      color: 'black',
      piece: null,
    },
    {
      id: '33',
      color: 'white',
      piece: null,
    },
    {
      id: '34',
      color: 'black',
      piece: null,
    },
    {
      id: '35',
      color: 'white',
      piece: null,
    },
    {
      id: '36',
      color: 'black',
      piece: null,
    },
    {
      id: '37',
      color: 'white',
      piece: null,
    },
  ],

  [
    {
      id: '40',
      color: 'white',
      piece: null,
      displayedInfo: {
        left: '4',
      }
    },
    {
      id: '41',
      color: 'black',
      piece: null,
    },
    {
      id: '42',
      color: 'white',
      piece: null,
    },
    {
      id: '43',
      color: 'black',
      piece: null,
    },
    {
      id: '44',
      color: 'white',
      piece: null,
    },
    {
      id: '45',
      color: 'black',
      piece: null,
    },
    {
      id: '46',
      color: 'white',
      piece: null,
    },
    {
      id: '47',
      color: 'black',
      piece: null,
    },
  ],

  [
    {
      id: '50',
      color: 'black',
      piece: null,
      displayedInfo: {
        left: '3',
      }
    },
    {
      id: '51',
      color: 'white',
      piece: null,
    },
    {
      id: '52',
      color: 'black',
      piece: null,
    },
    {
      id: '53',
      color: 'white',
      piece: null,
    },
    {
      id: '54',
      color: 'black',
      piece: null,
    },
    {
      id: '55',
      color: 'white',
      piece: null,
    },
    {
      id: '56',
      color: 'black',
      piece: null,
    },
    {
      id: '57',
      color: 'white',
      piece: null,
    },
  ],

  [
    {
      id: '60',
      color: 'white',
      piece: null,
      displayedInfo: {
        left: '2',
      }
    },
    {
      id: '61',
      color: 'black',
      piece: null,
    },
    {
      id: '62',
      color: 'white',
      piece: null,
    },
    {
      id: '63',
      color: 'black',
      piece: null,
    },
    {
      id: '64',
      color: 'white',
      piece: null,
    },
    {
      id: '65',
      color: 'black',
      piece: null,
    },
    {
      id: '66',
      color: 'white',
      piece: null,
    },
    {
      id: '67',
      color: 'black',
      piece: null,
    },
  ],

  [
    {
      id: '70',
      color: 'black',
      piece: {
        id: '9',
        type: 'pawn',
        color: 'black',
        image: 'bp',
      },
      displayedInfo: {
        left: '1',
        bottom: 'A',
      }
    },
    {
      id: '71',
      color: 'white',
      piece: {
        id: '10',
        type: 'pawn',
        color: 'black',
        image: 'bp',
      },
      displayedInfo: {
        bottom: 'B',
      }
    },
    {
      id: '72',
      color: 'black',
      piece: {
        id: '11',
        type: 'pawn',
        color: 'black',
        image: 'bp',
      },
      displayedInfo: {
        bottom: 'C',
      }
    },
    {
      id: '73',
      color: 'white',
      piece: {
        id: '12',
        type: 'pawn',
        color: 'black',
        image: 'bp',
      },
      displayedInfo: {
        bottom: 'D',
      }
    },
    {
      id: '74',
      color: 'black',
      piece: {
        id: '13',
        type: 'pawn',
        color: 'black',
        image: 'bp',
      },
      displayedInfo: {
        bottom: 'E',
      }
    },
    {
      id: '75',
      color: 'white',
      piece: {
        id: '14',
        type: 'pawn',
        color: 'black',
        image: 'bp',
      },
      displayedInfo: {
        bottom: 'F',
      }
    },
    {
      id: '76',
      color: 'black',
      piece: {
        id: '15',
        type: 'pawn',
        color: 'black',
        image: 'bp',
      },
      displayedInfo: {
        bottom: 'G',
      }
    },
    {
      id: '77',
      color: 'white',
      piece: {
        id: '16',
        type: 'pawn',
        color: 'black',
        image: 'bp',
      },
      displayedInfo: {
        bottom: 'H',
      }
    },
  ],

];
