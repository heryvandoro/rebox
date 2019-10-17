import React, { Component } from 'react';
import { Button, Form, Input, Spin } from 'antd';
import { FormComponentProps } from 'antd/lib/form';
import { hasError } from '@rebox/utilities/form/validator';

interface LoginFormProps extends FormComponentProps {
	onSubmit: any;
	isLoading: boolean;
}

class LoginForm extends Component<LoginFormProps, any> {
	render() {
		const { onSubmit, form, isLoading } = this.props;
		const { getFieldDecorator, getFieldsError } = form;
		return (
			<Form
				className="form-big"
				onSubmit={(e) => onSubmit(e, form)}>
				<Form.Item label="Username">
					{getFieldDecorator("username", {
						rules: [
							{
								required: true,
								message: 'Username must be filled',
							},
						],
					})(<Input placeholder="John Doe" />)}
				</Form.Item>
				<Form.Item label="Password">
					{getFieldDecorator("password", {
						rules: [{ required: true, message: 'Password must be filled' }],
					})(<Input type="password" placeholder="Your Password" />)}
				</Form.Item>
				<div className="mt-4">
					<Button
						size="large"
						htmlType="submit"
						disabled={hasError(getFieldsError()) || isLoading}
						type="primary"
						block
					>
						{isLoading ? <Spin /> : 'Login'}
					</Button>
				</div>
			</Form>
		);
	}
}

export default Form.create<LoginFormProps>()(LoginForm);
