import React, { useState } from 'react'
// antd
import { Input, Button, Alert, Badge } from 'antd';
import Axios from 'axios';
import { useHistory, Link } from 'react-router-dom';

export const Signup = () => {
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
    const [handle, setHandle] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const [errors, setErrors] = useState([])
    const history = useHistory()

    const handleSubmit = () => {
        setLoading(true)
        Axios.post('/signup', { email, password, confirmPassword, handle })
            .then(res => {
                setLoading(false)
                setErrors([])
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
             {errors.confirmPassword && (
                <Alert
                    message="Error"
                    description={errors.confirmPassword}
                    type="error"
                    showIcon
                />
            )}
             {errors.handle && (
                <Alert
                    message="Error"
                    description={errors.handle}
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
            <Input
                style={styles.margin} 
                placeholder="User Handle" 
                name="handle"
                value={handle}
                onChange={e => setHandle(e.target.value)}
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
            <Input.Password
                style={styles.margin} 
                placeholder="Confirm Password"
                name="confirmPassword"
                value={confirmPassword}
                onChange={e => setConfirmPassword(e.target.value)}
                disabled={loading ? true : false}
            />

            <Button
                style={styles.margin}
                type="primary" 
                block
                onClick={handleSubmit}
                loading={loading ? true : false}
            >
                    Signup
            </Button>
            <Badge 
                dot
                styles={styles.margin}
            >
                Already have an account ? 
                <Link to="/signup"> Login</Link>
            </Badge>
        </div>
    )
}
