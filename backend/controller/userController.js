
function paginate(array, page = 1, size = 2) {
    const total = array.length;
    const start = (page - 1) * size;
    const end = start + size;
    return {
        data: array.slice(start, end),
        paging: {
            previous: page > 1 ? `/api/users?page=${page - 1}&size=${size}` : null,
            next: end < total ? `/api/users?page=${page + 1}&size=${size}` : null,
            totalResults: total
        }
    };
}

const getUsers = (req, res) => {
    const { page = 1, size = 2, sort } = req.query;
    const data = [
        { name: 'Jorn', id: 0, email: 'jorn@example.com', role: 'Admin', status: 'Active' },
        { name: 'Markus', id: 3, email: 'markus@example.com', role: 'Manager', status: 'Inactive' },
        { name: 'Andrew', id: 2, email: 'andrew@example.com', role: 'User', status: 'Active' },
        { name: 'Ori', id: 4, email: 'ori@example.com', role: 'Admin', status: 'Pending' },
        { name: 'Mike', id: 1, email: 'mike@example.com', role: 'User', status: 'Active' },
        { name: 'Sophia', id: 5, email: 'sophia@example.com', role: 'Manager', status: 'Inactive' },
        { name: 'Liam', id: 6, email: 'liam@example.com', role: 'User', status: 'Active' },
        { name: 'Emma', id: 7, email: 'emma@example.com', role: 'Admin', status: 'Pending' },
        { name: 'Noah', id: 8, email: 'noah@example.com', role: 'Manager', status: 'Active' },
        { name: 'Ava', id: 9, email: 'ava@example.com', role: 'User', status: 'Inactive' }
    ];
    let sortedUsers = [...data];

    if (sort && data[0][sort] !== undefined) {
        sortedUsers.sort((a, b) => (a[sort] > b[sort] ? 1 : -1));
    }

    const result = paginate(sortedUsers, parseInt(page), parseInt(size));
    res.json(result);
};

module.exports = { getUsers }