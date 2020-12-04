export const original = {
  members: [
    {
      id: '5f3411b7bf69de20180ca1bc',
      fullName: 'Phyllis Sipe',
      dateOfBirth: '7/13/1931',
      medicaId: '9605327155',
      lob: 'MedicaID',
      planProduct: 'LTSS',
      timeLob: '1y1m1d',
      poc: 50,
    },
    {
      id: '5f299357bf69e01e58f384bf',
      fullName: 'Connie Tressler',
      dateOfBirth: '8/21/1944',
      medicaId: '3305618583',
      lob: 'MedicaID',
      planProduct: 'LTSS',
      timeLob: '1y1m1d',
      poc: 50,
    },
    {
      id: '5f047dc6bf69e107b0180c5b',
      fullName: 'Richard Pyles',
      dateOfBirth: '10/19/1922',
      medicaId: '9502282420',
      lob: 'MedicaID',
      planProduct: 'LTSS',
      timeLob: '1y1m1d',
      poc: 50,
    },
  ],
  count: 3,
};
export const successFilter = {
  fullName: 'Phyllis Sipe',
  lob: ['MedicaID'],
  planProduct: ['LTSS'],
  poc: 50,
  sort: 'ASC',
};
export const filterResponse = [
  {
    id: '5f3411b7bf69de20180ca1bc',
    fullName: 'Phyllis Sipe',
    dateOfBirth: '7/13/1931',
    medicaId: '9605327155',
    lob: 'MedicaID',
    planProduct: 'LTSS',
    timeLob: '1y1m1d',
    poc: 50,
  },
];
export const filterArrayResponse = [
  {
    dateOfBirth: '7/13/1931',
    fullName: 'Phyllis Sipe',
    id: '5f3411b7bf69de20180ca1bc',
    lob: 'MedicaID',
    medicaId: '9605327155',
    planProduct: 'LTSS',
    poc: 50,
    timeLob: '1y1m1d',
  },
  {
    dateOfBirth: '8/21/1944',
    fullName: 'Connie Tressler',
    id: '5f299357bf69e01e58f384bf',
    lob: 'MedicaID',
    medicaId: '3305618583',
    planProduct: 'LTSS',
    poc: 50,
    timeLob: '1y1m1d',
  },
  {
    dateOfBirth: '10/19/1922',
    fullName: 'Richard Pyles',
    id: '5f047dc6bf69e107b0180c5b',
    lob: 'MedicaID',
    medicaId: '9502282420',
    planProduct: 'LTSS',
    poc: 50,
    timeLob: '1y1m1d',
  },
];
export const failFilter = {
  fullName: 'Alan Turing',
  lob: ['MedicaI'],
  planProduct: ['LTS'],
  poc: 1,
  sort: 'DESC',
};
export const emptyResult = [];

export const succesArrayFilters = {
  lob: ['MedicaID', 'Medica'],
  planProduct: ['LTSS', 'LTE'],
};

export const failArrayFilters = {
  lob: ['Med', 'Medica'],
  planProduct: ['SS', 'LTE'],
};
