import React from 'react';
import LoginIcon from '@mui/icons-material/Login';
import { ActionButton } from '@/shared/common/action-button';

export function LoginButton() {
    const handleClick = () => {
        window.location.href = '/login';
    };

    return (
        <ActionButton onClick={handleClick}>
            <LoginIcon />
        </ActionButton>
    );
}
