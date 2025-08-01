import * as React$1 from 'react';
import React__default from 'react';
import { z } from 'zod';

interface ButtonProps extends React__default.ButtonHTMLAttributes<HTMLButtonElement> {
    size?: 'large' | 'medium' | 'small' | 'xSmall';
    primary?: boolean;
    children: string | React__default.ReactNode;
    beforeIcon?: React__default.ReactNode;
    afterIcon?: React__default.ReactNode;
}
declare const Button: (props: ButtonProps) => React__default.JSX.Element;

interface DividerProps {
    className?: string;
    label?: string;
}
declare const Divider: (props: DividerProps) => React$1.JSX.Element;

interface InputProps extends React__default.InputHTMLAttributes<HTMLInputElement> {
    sizes?: 'large' | 'medium' | 'small' | 'xSmall';
    beforeIcon?: React__default.ReactNode;
    onClear?: () => void;
    showClear?: boolean;
    label?: string;
    helperText?: string;
    error?: boolean;
}
declare const Input: (props: InputProps) => React__default.JSX.Element;

interface ModalProps {
    overlayClassName?: string;
    headerClassName?: string;
    contentClassName?: string;
    dialogClassName?: string;
    footerClassName?: string;
    title?: string;
    description?: string;
    children?: React.ReactNode;
    isOpen: boolean;
    icon?: React.ReactNode;
    footer?: React.ReactNode;
}
declare const Modal: (props: ModalProps) => React$1.JSX.Element;

interface SegmentedProps {
    className?: string;
    options?: {
        id: string;
        label: string;
    }[];
    onChange?: (value: string) => void;
    value?: string;
    defaultSelected?: string;
}
declare const Segmented: (props: SegmentedProps) => React$1.JSX.Element;

interface SwitchProps extends Omit<React__default.InputHTMLAttributes<HTMLInputElement>, 'type'> {
    className?: string;
    sizes?: 'lg' | 'md' | 'sm' | 'xsm';
}
declare const Switch: React__default.ForwardRefExoticComponent<SwitchProps & React__default.RefAttributes<HTMLInputElement>>;

interface BgLoginProps {
    children?: React.ReactNode;
    className?: string;
}
declare const BgLogin: (props: BgLoginProps) => React$1.JSX.Element;

interface CardLoginProps {
    children?: React.ReactNode;
    className?: string;
}
declare const CardLogin: (props: CardLoginProps) => React$1.JSX.Element;

interface LoginProps {
    className?: string;
    onSubmit?: (data: LoginFormData) => void;
    logoUrl?: string;
    imageUrl?: string;
    linkInstagram?: string;
    linkFacebook?: string;
    linkSupport?: string;
}
declare const loginSchema: z.ZodObject<{
    email: z.ZodEmail;
    password: z.ZodString;
    remember: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
type LoginFormData = z.infer<typeof loginSchema>;
declare const Login: (props: LoginProps) => React$1.JSX.Element;

export { BgLogin, Button, CardLogin, Divider, Input, Login, Modal, Segmented, Switch };
