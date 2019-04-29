export const Settings : Object = {
  columns: {
    id: {
      title: 'Invoice Number',
      type: 'idstring',
      editable : false,
      createdable : false
    },
    date: {
      title: 'Date',
      type: 'date',
      editable : true,
      createdable : false
    },
    comment: {
      title: 'Comment',
      type : 'string',
      editable : true,
      createdable: true
    },
    func: {
      title: '',
      editable : false
    }
  },
};

export const InvoicesData: any[] =[
  {
    id: 1,
    date: '2018-12-17',
    comment: 'AUD 80',
  },
  {
    id: 2,
    date: '2019-02-02',
    comment: `AUD 70`,
  },
  {
    id: 3,
    date: '2019-02-03',
    comment: `pending`,
  },
  {
    id: 4,
    date: '2019-02-04',
    comment: `pending`,
  },
  {
    id: 5,
    date: '2019-02-05',
    comment: `pending`,
  },
  {
    id: 6,
    date: '2019-02-06',
    comment: `pending`,
  },
  {
    id: 7,
    date: '2019-02-07',
    comment: `pending`,
  },
  {
    id: 8,
    date: '2019-02-08',
    comment: `pending`,
  },
  {
    id: 9,
    date: '2019-02-09',
    comment: `pending`,
  },
  {
    id: 10,
    date: '2019-02-10',
    comment: `pending`,
  },
  {
    id: 11,
    date: '2019-02-11',
    comment: `pending`,
  },
  {
    id: 12,
    date: '2019-02-12',
    comment: `pending`,
  }
];



