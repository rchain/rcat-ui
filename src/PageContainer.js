import React, { Component } from 'react';
import { connect } from 'react-redux';
import PublicRoutes from './pages/public/PublicPagesContainer';
import ProtectedRoutes from './pages/protected/ProtectedPagesContainer';
import Loading from './components/notifications/Loading';
import * as Sentry from '@sentry/browser';

class PageContainer extends Component {

    componentDidCatch(error, errorInfo) {
        this.setState({ error });
        Sentry.withScope(scope => {
            scope.setExtras(errorInfo);
            const eventId = Sentry.captureException(error);
            this.setState({eventId})
        });
    }

    render() {
        return (
            <>
                <PublicRoutes />
                <ProtectedRoutes />
                {this.props.loader > 0 ?
                    <Loading />
                    :
                    <></>
                }                
            </>
        );
    }
} 

function mapStateToProps(state) {
    return {
        loader: state.loader
    }
}

export default connect(
    mapStateToProps
)(PageContainer);
