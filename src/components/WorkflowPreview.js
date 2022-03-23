import React from 'react'
import { Layout, Menu, Button, Radio } from 'antd';

const { Sider } = Layout;

function WorkflowPreview({ formVal }) {
	return (
		<>
			<Sider width={288} theme='light' className="site-layout-background mr-1 text-white select-none h-screen" >
				<div className='m-3 text-base bg-blue-400 text-center p-2'> Trigger Workflow Preview</div>
				<Menu className='text-white'>
					<div className='p-2'></div>

					<div className='ml-5 flex'>
						<Radio checked style={{ marginTop: '3px' }} />
						<p className='text-lg'>{formVal.trigger}</p>
					</div>
					<p className='text-sm -mt-3 ml-14'>{formVal.subCategory}</p>

					<div className='p-2'></div>
				</Menu>
				<div className='absolute bottom-6 left-2 flex'>
					<Button className='w-32'>Cancel</Button>
					<Button className='w-32'>Next</Button>
				</div>
			</Sider>
		</>
	)
}

export default WorkflowPreview