import React, { useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrentProfile } from '../../actions/profile';
import Spinner from '../layout/ui/spinner';
import DashboardActions from './DashboardActions';
import Experience from './Experience';
import Education from './Education';
import { Link } from 'react-router-dom';

const Dashboard = ( {  auth: { user },
    profile: { profile, loading },
    getCurrentProfile }) => {

    useEffect(() => {
        getCurrentProfile();
    },[getCurrentProfile]);
    //[] is used to call the getCurrentProfile only once
    return loading && profile === null ? (
    <Spinner /> 
    ) :
    (
        <Fragment>
            <h1 className='large text-primary'>Dashboard</h1>
            <p className='lead'>
                <i className='fas fa-user' /> Welcome {user && user.name}
            </p>
            {  profile !== null ? (
                <Fragment>
                    <DashboardActions />
                    <Experience experience={profile.experience} />
                    <Education education={profile.education} />
                </Fragment>
            ) : (
                <Fragment>
                    <p>You have not yet setup a portfolio, please add some info</p>
                    <Link to='/create-portfolio' className='btn btn-primary my-1'>
                        Create Portfolio
                    </Link>
                </Fragment>
            )}

        </Fragment>
    )
}

Dashboard.propTypes = {
    getCurrentProfile: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired,
};
 
const mapStateToProps = state => ({
    profile: state.profile,
    auth: state.register
});

export default connect(mapStateToProps,{ getCurrentProfile } ) (Dashboard);

