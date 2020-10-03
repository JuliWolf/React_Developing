import React, {useState, useEffect} from 'react';
import Modal from  '../../components/UI/Modal/Modal';
import Aux from '../Aux/Aux';

const withErrorHandler = (WrappedComponent, axios) => {
    const [error, setError] = useState(null);
    return props => {

        const reqInterceptor = axios.interceptors.request.use(req => {
            setError(null);
            return req;
        });

        const resInterceptor = axios.interceptors.response.use(res => {
            return res;
        }, err => {
            setError(err);
        });

        useEffect(() => {
            axios.interceptors.request.eject(reqInterceptor);
            axios.interceptors.response.eject(resInterceptor);
        }, [reqInterceptor, resInterceptor]);


        const errorConfirmedHandler = () => {
            setError(null);
        };

        return (
            <Aux>
                <Modal
                    show={error}
                    modalClosed={errorConfirmedHandler}
                >
                    {error ? error.message : null}
                </Modal>
                <WrappedComponent {...props}/>
            </Aux>
        );
    };
};

export default withErrorHandler;
