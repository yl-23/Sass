import React, { Component } from 'react'
import { Layout, Menu } from 'antd'
import {
	MenuUnfoldOutlined,
	MenuFoldOutlined,
	UserOutlined,
	VideoCameraOutlined,
	UploadOutlined,
} from '@ant-design/icons'
import './index.css'
const { Header, Sider, Content } = Layout
class Home extends Component {
	state = {
		collapsed: false,
	}

	toggle = () => {
		this.setState({
			collapsed: !this.state.collapsed,
		})
	}
	render() {
		return (
			<Layout className="weiteng-main">
				<Sider
					trigger={null}
					collapsible
					collapsed={this.state.collapsed}
				>
					<div className="logo logo-url">
                        <img src="https://tsdms-test.oss-cn-beijing.aliyuncs.com/bizcard/04b8ef7d-f99e-4a90-a273-00ef14b8ac3c.png?Expires=1639634610&OSSAccessKeyId=LTAI4GE6r7yQVyPkFz1Lvu2n&Signature=urj7mTjbzZNkL1xkTdsj8E34YsM%3D&response-content-disposition=attachment%3B%20filename%3D04b8ef7d-f99e-4a90-a273-00ef14b8ac3c.png" alt="" />
                    </div>
					<Menu
						theme="dark"
						mode="inline"
						defaultSelectedKeys={['1']}
					>
						<Menu.Item key="1" icon={<UserOutlined />}>
							nav 1
						</Menu.Item>
						<Menu.Item key="2" icon={<VideoCameraOutlined />}>
							nav 2
						</Menu.Item>
						<Menu.Item key="3" icon={<UploadOutlined />}>
							nav 3
						</Menu.Item>
					</Menu>
				</Sider>
				<Layout className="site-layout">
					<Header
						className="site-layout-background"
						style={{ padding: 0 ,height:50,lineHeight:50,backgroundColor:'#fff'}}
					>
						{React.createElement(
							this.state.collapsed
								? MenuUnfoldOutlined
								: MenuFoldOutlined,
							{
								className: 'trigger',
								onClick: this.toggle,
							}
						)}
					</Header>
					<Content
						className="site-layout-background"
						style={{
							padding: 24,
							minHeight: 280,
						}}
					>
						Content
					</Content>
				</Layout>
			</Layout>
		)
	}
}
export default Home
