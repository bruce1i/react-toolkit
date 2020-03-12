import React, { useState } from 'react';
import { Table, Tag } from 'antd';

const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: (text) => <a href="/">{text}</a>,
    },
    {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
    },
    {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
    },
    {
        title: 'Tags',
        key: 'tags',
        dataIndex: 'tags',
        render: (tags) => (
            <span>
                {tags.map((tag) => {
                    let color = tag.length > 5 ? 'geekblue' : 'green';
                    if (tag === 'loser') {
                        color = 'volcano';
                    }
                    return (
                        <Tag color={color} key={tag}>
                            {tag.toUpperCase()}
                        </Tag>
                    );
                })}
            </span>
        ),
    },
    {
        title: 'Action',
        key: 'action',
        render: (text, record) => (
            <span>
                <a href="/" style={{ marginRight: 16 }}>
                    Invite
                    {record.name}
                </a>
                <a href="/">Delete</a>
            </span>
        ),
    },
];

const data = [
    {
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
        tags: ['nice', 'developer'],
    },
    {
        key: '2',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
        tags: ['loser'],
    },
    {
        key: '3',
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
    },
];

function Mode2() {
    const [count, setCount] = useState(0);

    const handleBtnClick = () => {
        setCount(count + 1);
    };

    return (
        <div>
            <h2>
                Mode 2. wow!
                <span role="img" aria-label="money">🤑</span>
                Cool.
            </h2>
            Count:
            {' '}
            <span>{count}</span>
            <br />
            <button type="button" onClick={handleBtnClick}>Click</button>
            <br />
            <Table columns={columns} dataSource={data} />
        </div>
    );
}

export default Mode2;
