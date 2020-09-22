export let userColumns = [

      {
        Header: 'Email',
        accessor: 'email',
      },
      {
        Header: 'Name',
        accessor: 'name',
      },
      {
        Header: 'Rol',
        accessor: props1 => [props1.roles.name_role],
      },
      {
        Header: 'Personal',
        accessor: props1 => props1.personal ? [props1.personal.name+" "+props1.personal.last_names] : [],
      },

]
