import React from 'react';
import { Button, Modal, DatePicker } from 'antd';

function I18n() {
    const handleModalClick = () => {
        Modal.confirm({
            title: 'Do you Want to delete these items?',
            content: 'Some descriptions',
            onOk() {
                console.log('OK');
            },
            onCancel() {
                console.log('Cancel');
            },
        });
    };

    return (
        <div>
            <h2>I18n</h2>
            <Button onClick={handleModalClick}>显示模态框</Button>
            <DatePicker />
        </div>
    );
}

export default I18n;
