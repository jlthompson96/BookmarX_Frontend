import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { getAllUsers } from '../services/UserServices';
import { useEffect, useState } from 'react';
import { UserTSO } from '../common/types';
import { userTableColumns } from '../common/tableHeaders';


function UserList() {

    const [userList, setUserList] = useState<UserTSO[]>([]);


    useEffect(() => {
        console.log(userList);
        const getUserList = async () => {
            await getAllUsers().then((response) => {
                setUserList(response.data);
            })
                .catch(function (error) {
                    console.log(error);
                });
        }
        if (userList === null || userList.length === 0) {
            getUserList();
        }
    }, [userList]);

    return (
        <Box sx={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={userList}
                columns={userTableColumns}
                loading={!userList.length}
                initialState={{
                    pagination: {
                        paginationModel: {
                            pageSize: 5,
                        },
                    },
                }}
                pageSizeOptions={[5, 10, 15]}
                disableRowSelectionOnClick
            />
        </Box>
    );
}

export default UserList;