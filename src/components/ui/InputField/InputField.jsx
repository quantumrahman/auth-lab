'use client';

import { Mail, LockKeyhole, User, EyeOff, Eye as EyeOpen } from 'lucide-react';
import { useState } from 'react';

const InputField = ({ 
    fieldType = "mail", 
    type = "text", 
    placeholder = "Email Address", 
    name,
    value,
    onChange,
    error = ""
}) => {
    const [showPassword, setShowPassword] = useState(false);

    const iconsStyles = `transition-colors duration-300 ${
        error ? "text-red-400" : "text-gray-300 group-focus-within:text-violet-500"
    }`;
    const showIconStyle = error
        ? "text-red-400"
        : "text-gray-300"
    ;

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <>
            <div className="w-full max-w-[400px] h-13 overflow-hidden relative group">
                <input 
                    id={ name }
                    type={ type === "password" ? showPassword ? "text" : "password" : "text" } 
                    placeholder={ placeholder }
                    name={ name }
                    value={ value }
                    onChange={ onChange }
                    className={`w-full h-full border-[1.5px] border-gray-300 rounded-lg pl-12 transition-colors duration-300 font-geist-mono text-gray-800 font-normal text-lg outline-none placeholder:font-normal ${type === "password" ? "pr-12" : "pr-5"} ${error ? "bg-red-50/50 border-red-300" : "bg-transparent focus:outline-none focus:ring-0 focus:bg-violet-50/50 focus:border-violet-300"} ${ error ? "placeholder:text-red-300" : "placeholder:text-gray-300 focus:placeholder:text-violet-300"}`}
                />
                <div className="w-9.5 h-full absolute top-0 left-0 flex items-center justify-end">
                    { fieldType === "mail" && <Mail size={22} className={iconsStyles}></Mail> }
                    { fieldType === "password" && <LockKeyhole size={22} className={iconsStyles}></LockKeyhole> }
                    { fieldType === "user" && <User size={24} className={iconsStyles}></User> }
                </div>
                { type === "password" && (
                    <div className="w-9.5 h-full absolute top-0 right-0 flex items-center justify-start">
                        <div 
                            onClick={handleShowPassword}
                            className="cursor-pointer focus:outline-none"
                        >
                            { showPassword ? (
                                <EyeOpen 
                                    size={24} 
                                    className={showIconStyle}
                                />
                            ) : (
                                <EyeOff 
                                    size={24} 
                                    className={showIconStyle} 
                                />
                            ) }
                        </div>
                    </div>
                ) }
            </div>
        </>
    );
};

export default InputField;
