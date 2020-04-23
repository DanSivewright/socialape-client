import React, { useState } from 'react'

// antd
import { Input, Button, Alert, Badge } from 'antd';
import Axios from 'axios';
import { useHistory, Link } from 'react-router-dom';

export const Login = () => {
    // Styles 
    const styles = {
        margin: {
            margin: '10px 0 10px 0'
        },
        center: {
            textAlign: 'center'
        }
    }

    // State
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const [errors, setErrors] = useState([])
    const history = useHistory()

    const handleSubmit = () => {
        setLoading(true)
        Axios.post('/login', { email, password })
            .then(res => {
                setLoading(false)
                setErrors([])
                localStorage.setItem('FBIdToken', `Bearer ${res.data.token}`)
                history.push('/')
            })
            .catch(err => {
                setErrors(err.response.data)
                setLoading(false)
            })
    }
    return (
        <div className="container" style={styles.center}>
             {errors.email && (
                <Alert
                    message="Error"
                    description={errors.email}
                    type="error"
                    showIcon
                />
            )}
             {errors.general && (
                <Alert
                    message="Error"
                    description={errors.general}
                    type="error"
                    showIcon
                />
            )}
             {errors.password && (
                <Alert
                    message="Error"
                    description={errors.password}
                    type="error"
                    showIcon
                />
            )}

            <Input
                style={styles.margin} 
                placeholder="email" 
                name="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                disabled={loading ? true : false}
            />
            <Input.Password
                style={styles.margin} 
                placeholder="Password"
                name="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                disabled={loading ? true : false}
            />

            <Button
                style={styles.margin}
                type="primary" 
                block
                onClick={handleSubmit}
                loading={loading ? true : false}
            >
                    Login
            </Button>
            <Badge 
                dot
                styles={styles.margin}
            >
                Don't have an account ? 
                <Link to="/signup"> Signup</Link>
            </Badge>
        </div>
    )
}
