import React, { useState } from 'react'
import { Link, BrowserRouter as Router } from 'react-router-dom';

import { Layout, Menu, Select, Tag, Button, Popover } from 'antd';

import Xarrow, { useXarrow, Xwrapper } from 'react-xarrows';
import Draggable from 'react-draggable';
import MenuItem from 'antd/lib/menu/MenuItem';
import WorkflowPreview from '../WorkflowPreview';

// antd icons
import { PlusCircleOutlined } from '@ant-design/icons'
import PopoverComp from '../PopoverComp';

const { Content, Sider } = Layout;
const { SubMenu } = Menu;
const { Option } = Select;

const DraggableBox = ({ id, children, className }) => {
	const updateXarrow = useXarrow();

	return (
		<Draggable onDrag={updateXarrow} onStop={updateXarrow}>
			<div id={id} className={className}>
				{children}
			</div>
		</Draggable>
	)
}

const CreateWorkFlow = () => {

	const [showTrigger, setShowTrigger] = useState(false);
	const [subCategory, setSubcategory] = useState(false);

	const [populateTriggerBox, setPopulateTriggerBox] = useState(false);

	let [formVal, setFormval] = useState({})

	const showSubcategory = (val) => {
		setFormval(formVal = ({
			trigger: val
		}))
		setSubcategory(true);
	}

	const showNext = (val) => {
		setFormval(formVal = ({
			...formVal,
			subCategory: val
		}))
	}

	const showTriggerBox = () => {
		setPopulateTriggerBox(true)
		setShowTrigger(true);
	}

	return (
		<Layout>
			{/* <div style={{}}>
				<div className="p-5 text-white text-center">
					<div className='p-2 w-52 bg-green-500'>
						Save current workflow
					</div>
				</div>
			</div> */}
			<Layout>
				{!showTrigger ? (
					<Sider width={288} theme='light' className="site-layout-background mr-1 text-white select-none h-screen" >
						<div className='m-3 p-2 text-center bg-slate-500 text-white'> CREATE WORKFLOW </div>
						<div className='text-black m-3 text-base bg-blue-400 text-center p-2'> Trigger</div>
						<Menu className='text-white'>
							<div className='p-2'></div>
							<Tag color='processing'>
								Trigger category
							</Tag>
							<MenuItem>
								<Select onSelect={(val) => showSubcategory(val)} placeholder="Select Trigger" defaultValue={"Select Trigger"} className='w-52'>
									<Option value="Audio Event">Audit Event</Option>
									<Option value="Cloud Security Assessment">Cloud Security Assessment</Option>
								</Select>
							</MenuItem>
							<div className='p-2'></div>

							{subCategory ? (
								<>
									<Tag color='processing'>
										Sub category
									</Tag>
									<MenuItem>
										<Select onSelect={(val) => showNext(val)} placeholder="Select Trigger" defaultValue={"Select Trigger"} className='w-52'>
											<Option value="Audio Event">Audit Event</Option>
											<Option value="Cloud Security Assessment">Cloud Security Assessment</Option>
										</Select>
									</MenuItem>
								</>
							) : ''
							}
						</Menu>
						<div className='absolute bottom-6 left-2 flex'>
							<Button className='w-32'>Cancel</Button>
							{formVal.subCategory ? (
								<Button onClick={showTriggerBox} className='w-32' style={{ background: 'lightBlue' }}>Next</Button>
							) : (
								<Button className='w-32'>Next</Button>
							)}
						</div>
					</Sider>
				) : (
					<WorkflowPreview formVal={formVal} />
				)}
				<Layout className=''>
					<Content
						className="site-layout-backgroung"
						style={{
							padding: 24,
							margin: 0,
						}}
					>
						<div className="site-layout-background text-white min-h-screen text-center">
							<Xwrapper>
								<div className='flex p-5 items-center mt-40'>
									<DraggableBox id={'elem1'}
										className='border-2 border-blue-400 w-20 h-9 text-sm 
										p-1 mr-10 mt-5 bg-gray-600'
									>
										<div onClick={() => setShowTrigger(true)}>
											WHEN
										</div>
									</DraggableBox>
									{showTrigger ? (
										<>
											<DraggableBox id={'elem2'} className='w-20 text-sm p-1 text-center'>
												<div className='m-auto'>
													<h3 className='text-blue-400 text-center'>Trigger</h3>
													<div className='border-2 border-blue-400 w-56 h-32 bg-gray-600 pt-5'>
														{!populateTriggerBox ? (
															<div>Undefined</div>

														) : (
															<div>
																<p className='text-xl'>{formVal.trigger}</p>
																<p className='text-sm'>
																> {formVal.subCategory}</p>
															</div>
														)}
													</div>
												</div>
											</DraggableBox>
											<Xarrow start={'elem1'} end={'elem2'} showHead={false} />
										</>
									) : ''
									}
									{showTrigger ? (
										<>

											<DraggableBox id={'elem3'} className='mt-56'>
												<div>
													<Popover
														trigger="hover"
														placement='right'
														content={<PopoverComp />}
														color="blue"
													>
														<PlusCircleOutlined style={{ padding: '5px', color: 'gray' }} className='scale-150' />
													</Popover>
												</div>
											</DraggableBox>
											<Xarrow start={'elem2'} end={'elem3'} showHead={false} />
										</>
									) : ''
									}
								</div>

							</Xwrapper>
						</div>
					</Content>
				</Layout>
			</Layout>
		</Layout>
	)
}

export default CreateWorkFlow
