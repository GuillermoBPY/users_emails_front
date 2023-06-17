import React from 'react';
import { Button, Spinner } from 'react-bootstrap';

const ButtonLoading = ({ isLoading, children, style, className, ...props }) => {

    return (
        <Button
            disabled={isLoading}
            className={'button-loading ' + className}
            style={{minWidth: 110, ...style}}
            {...props}
        >
            {isLoading ? (
                <>
                    <span className="visually-hidden">Loading</span>
                    <Spinner
                        as="span"
                        animation="border"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                    />
                </>
            ) : children}
        </Button>
    );
};

export default ButtonLoading;