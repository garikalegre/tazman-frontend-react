import React, { FC, FormEvent } from 'react';
import { Form as AntForm, Icon, Input, Button } from 'antd';
import { WrappedFormUtils } from 'antd/lib/form/Form';

type FormData = {
    email: string;
    password: string;
};

type Props = {
    form: WrappedFormUtils;
    onSubmit: (formData: FormData) => void;
};

const Form: FC<Props> = ({ form, onSubmit }) => {
    const { getFieldDecorator } = form;

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        form.validateFields((err, { email, password }) => {
            if (!err) {
                if (password.length < 8)
                    form.setFields({
                        password: {
                            value: password,
                            errors: [
                                new Error(
                                    'Password must be at least 8 characters'
                                )
                            ]
                        }
                    });
                else {
                    onSubmit({ email, password });
                }
            }
        });
    };

    return (
        <AntForm onSubmit={handleSubmit} className="login-form">
            <AntForm.Item>
                {getFieldDecorator('email', {
                    rules: [
                        {
                            required: true,
                            message: 'Please input your Email!'
                        }
                    ]
                })(
                    <Input
                        prefix={
                            <Icon
                                type="mail"
                                style={{ color: 'rgba(0,0,0,.25)' }}
                            />
                        }
                        type="email"
                        placeholder="Email"
                    />
                )}
            </AntForm.Item>
            <AntForm.Item>
                {getFieldDecorator('password', {
                    rules: [
                        {
                            required: true,
                            message: 'Please input your Password!'
                        }
                    ]
                })(
                    <Input
                        prefix={
                            <Icon
                                type="lock"
                                style={{ color: 'rgba(0,0,0,.25)' }}
                            />
                        }
                        type="password"
                        placeholder="Password"
                    />
                )}
            </AntForm.Item>
            <AntForm.Item>
                <Button
                    type="primary"
                    htmlType="submit"
                    className="login-form-button"
                >
                    Log in
                </Button>
            </AntForm.Item>
        </AntForm>
    );
};

export const LoginForm = AntForm.create<any>()(Form);
