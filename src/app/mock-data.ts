import { DataFormat } from './dataFormat';


export const Settings : Object = {
  columns: {
    id: {
      title: 'Invoice Number',
      editable : false
    },
    date: {
      title: 'Date',
      editable : false
    },
    comment: {
      title: 'Comment',
      editable : true
    },
    func: {
      title: '',
      editable : false
    }
  },
};

export const InvoicesData: DataFormat[] =[
  {
    id: 1,
    date: '2018-12-17',
    comment: '$ 80.0',
  },
  {
    id: 2,
    date: '2019-02-03',
    comment: `haven't pay`,
  },
  {
    id: 3,
    date: '2019-02-03',
    comment: `haven't pay`,
  },
  {
    id: 4,
    date: '2019-02-03',
    comment: `haven't pay`,
  },
  {
    id: 5,
    date: '2019-02-03',
    comment: `haven't pay`,
  },
  {
    id: 6,
    date: '2019-02-03',
    comment: `haven't pay`,
  },
  {
    id: 7,
    date: '2019-02-03',
    comment: `haven't pay`,
  },
  {
    id: 8,
    date: '2019-02-03',
    comment: `haven't pay`,
  },
  {
    id: 9,
    date: '2019-02-03',
    comment: `haven't pay`,
  },
  {
    id: 10,
    date: '2019-02-03',
    comment: `haven't pay`,
  },
  {
    id: 11,
    date: '2019-02-03',
    comment: `haven't pay`,
  }
];



