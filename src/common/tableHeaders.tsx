import { GridColDef } from "@mui/x-data-grid/models/colDef/gridColDef";

export const userTableColumns: GridColDef[] = [
    // { field: 'id', headerName: 'ID', width: 90 },
    {
        field: 'firstName',
        headerName: 'First name',
        width: 200,
        editable: true,
    },
    {
        field: 'lastName',
        headerName: 'Last name',
        width: 200,
        editable: true,
    },
    {
        field: 'emailAddress',
        headerName: 'Email Address',
        type: 'number',
        width: 200,
        editable: true,
    },
    {
        field: 'age',
        headerName: 'Age',
        type: 'number',
        width: 110,
        editable: true,
    },
    {
        field: 'favoriteBooks',
        headerName: 'Favorite Books',
        description: 'This column has a value getter and is not sortable.',
        width: 200,
        // valueGetter: (params: GridValueGetterParams) =>
        //     `${params.row. || ''}`,
    },
    {
        field: 'favoriteGenres',
        headerName: 'Favorite Genres',
        description: 'This column has a value getter and is not sortable.',
        width: 200,
        // valueGetter: (params: GridValueGetterParams) =>
        //     `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },
];