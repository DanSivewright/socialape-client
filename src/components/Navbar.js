import React from 'react'
import { Link } from 'react-router-dom'

// antd imports 
import { Menu } from 'antd'
import { HomeOutlined, FormOutlined, EditOutlined } from '@ant-design/icons'

export const Navbar = () => {
    return (
        <div className="container">
            <Menu mode="horizontal">
                <Menu.Item component={Link} to="/">
                    <Link to="/"/>
                    <HomeOutlined />
                    Home
                </Menu.Item>
                <Menu.Item>  
                    <Link to="/login"/>
                    <FormOutlined />
                    Login
                </Menu.Item>
                <Menu.Item>
                    <Link to="/signup"/>
                    <EditOutlined />
                    Signup
                </Menu.Item>
            </Menu>
        </div>
    )
}
