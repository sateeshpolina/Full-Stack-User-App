import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import axios from 'axios';
import { Grid, Card, Typography, FormControl, InputLabel, Select, MenuItem } from '@mui/material';

const UserTable = () => {
    const [users, setUsers] = useState([]);
    const [paging, setPaging] = useState({});
    const [page, setPage] = useState(1);
    const [size, setSize] = useState(5);
    const [total, setTotal] = useState(0);
    const [sortField, setSortField] = useState('name');
    const [sortDirection, setSortDirection] = useState('asc');

    const fetchUsers = async () => {
        const res = await axios.get(
            `http://localhost:5000/api/users?page=${page}&size=${size}&sort=${sortField}`
        );
        setUsers(res.data.data);
        setPaging(res.data.paging);
        setTotal(res.data.paging.totalResults);
    };

    useEffect(() => {
        fetchUsers();
    }, [page, size, sortField]);

    const handleSort = (column, direction) => {
        setSortField(column.sortField || 'name');
        setSortDirection(direction);
    };

    const columns = [
        {
            name: 'ID',
            selector: row => row.id,
            sortable: true,
            sortField: 'id', // add this to help identify sort field
        },
        {
            name: 'Name',
            selector: row => row.name,
            sortable: true,
            sortField: 'name',
        },
        {
            name: 'Email',
            selector: row => row.email,
            sortable: true,
            sortField: 'email', // add this to help identify sort field
        },
        {
            name: 'Role',
            selector: row => row.role,
            sortable: true,
            sortField: 'role',
        },
        {
            name: 'Status',
            selector: row => row.status,
            sortable: true,
            sortField: 'status', // add this to help identify sort field
        },
    ];

    return (


        <div style={{ padding: '16px', maxWidth: '1200px', margin: '0 auto' }}>
            <Grid container spacing={2} alignItems="center" justifyContent='space-between' style={{ marginBottom: '8px' }}>
                <Grid item xs={6}>
                    <Typography variant="h6" style={{ fontWeight: 600, textAlign: 'left' }}>User Information</Typography>
                </Grid>
                <Grid item xs={6}>
                    <FormControl style={{ minWidth: 120 }} variant="outlined">
                        <InputLabel >Sort By</InputLabel>
                        <Select
                            value={sortField}
                            onChange={(e) => setSortField(e.target.value)}
                            label="Sort By"
                            style={{
                                backgroundColor: 'white',

                                padding: '4px 8px',  // Reduced padding for a sleeker look
                                height: '36px',  // Reduced height
                                fontSize: '0.875rem',  // Slightly smaller font size
                                transition: 'border-color 0.3s ease',
                            }}
                            MenuProps={{
                                PaperProps: {
                                    style: {
                                        borderRadius: '8px',
                                        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
                                    },
                                },
                            }}
                        >
                            <MenuItem value="name">Name</MenuItem>
                            <MenuItem value="id">ID</MenuItem>
                            <MenuItem value="email">Email</MenuItem>
                            <MenuItem value="role">Role</MenuItem>
                            <MenuItem value="status">Status</MenuItem>
                        </Select>
                    </FormControl>

                </Grid>

            </Grid>

            <Card style={{ padding: '16px' }}>
                <DataTable
                    columns={columns}
                    data={users}
                    pagination
                    paginationServer
                    paginationTotalRows={total}
                    paginationPerPage={size}
                    paginationDefaultPage={page}
                    onChangePage={setPage}
                    onSort={handleSort}
                    sortServer
                    responsive
                    highlightOnHover
                    striped
                    customStyles={customStyles}
                />
            </Card>
        </div>

    );
};
const customStyles = {
    subHeader: {
        style: {
            backgroundColor: 'blue',
        },
    },
    head: {
        style: {
            color: 'black',
            fontSize: '13px',
            fontWeight: 600,
            minHeight: '2px',
        },
    },
    headRow: {
        style: {
            backgroundColor: '#ADC8E3',
            minHeight: '45px',
            borderBottomWidth: '1px',
            borderBottomColor: '#ffffff',
            borderBottomStyle: 'solid',
        },
    },

    rows: {
        style: {
            fontSize: '13px',
            minHeight: '45px',
            fontWeight: 600
        },
    },
}
export default UserTable;
