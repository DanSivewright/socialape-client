import React from 'react'
import { Card, Typography } from 'antd'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

// Instantiate Dayjs
dayjs.extend(relativeTime);

export const Scream = ({ scream: { body, createdAt, userImage, userHandle, screamId, likeCount, commentCount } }) => {
    const image = {
        height: 150,
        backgroundImage: `url('${userImage}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    }
    return (
        <Card
            hoverable
            style={{ marginTop: 16}}
            cover={
                <div style={image}/>
            }
        >
            <Typography.Title level={3}>{userHandle}</Typography.Title>
            <Typography>{dayjs(createdAt).fromNow()}</Typography>
            <Typography.Paragraph>{body}</Typography.Paragraph>
        </Card>
    )
}
