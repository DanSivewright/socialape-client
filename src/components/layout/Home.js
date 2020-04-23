import React, { useState, useEffect } from 'react'
import { Row, Col } from 'antd'
import Axios from 'axios'
import { Scream } from '../Scream'

export const Home = () => {
    const [screams, setScreams] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)

        Axios.get('/screams')
        .then(res => {
            setScreams(res.data)
            setLoading(false)
        })
        .catch(err => {
            setLoading(false)
        })
    }, [])

    return (
        <div className="container">
        
           
            <Row justify="center" gutter={[16, 16]} >
                <Col sm={24} md={16}>
                    {loading ? <p>Loading...</p> : screams.map(scream => (
                        <Scream key={scream.screamId} scream={scream}/>
                    ))}
                </Col>
                <Col sm={24} md={8}>Profile</Col>
            </Row>
        </div>
        
    )
}