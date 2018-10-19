import React, { Component } from 'react';
import { getAllProfiles, addProfile, conditionalAlumniProfile } from '../Redux/Actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

class Alumni extends Component {

    state = {

    }

    componentDidMount() {
        this.props.getAllProfiles();
    }

    render() {
        return (
            <div className = "App">
                {/* HEADER */}
                <div>
                    <header>
                        <div class='logo'>
                            <h2 style = {{fontFamily: 'mali'}}>
                                REDWOOD FOREST
                            </h2>
                        </div>
                        <nav class="active">
                            <ul>
                                <li><a href="timeline" class="active">Home</a></li>
                                <li><a href="profile">Profile</a></li>
                                <li><a href="alumni">Alumni</a></li>
                            </ul>
                        </nav>
                        <div class="menu-toggle"><i class="fa fa-bars" aria-hidden="true"></i></div>
                    </header>
                </div>

                {/* BODY */}
                <div className='profile'>
                    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: 'center'}}>
                    <div style = {{marginTop: 120, display: 'flex',flexWrap: "wrap", justifyContent: 'center'}}>
                        {
                            this.props.profiles.map((prof) => {
                                return (
                                    <div className="ProfilesMap" key={prof.profile_id} style={{ fontSize: '0.7vw', backgroundColor: 'rgba(255, 99, 71, 0.5)' }}>
                                        <Link to='/alumni-profile'onClick={() => this.props.changeAlumniId(prof.profile_id)} type="image" name="image">
                                            <img style={{ border: 2, maxWidth: '80%', height: 'auto', maxHeight: 200, marginTop: 5, borderRadius: 10 }} src={prof.image} />
                                        </Link>
                                        <p className="text-center font-italic" style = {{fontWeight: 'bold'}}>{prof.first_name} {prof.last_name} {prof.date.date.substring(0, 4)} Cohort</p>
                                    </div>
                                )
                            })
                        }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


const mapStateToProps = state => ({
    profiles: state.profiles,
    alumniId: state.alumniId
})

const mapDispatchToProps = dispatch => ({
    getAllProfiles: () => dispatch(getAllProfiles()),
    addProfile: (alumni) => dispatch(addProfile(alumni)),
    changeAlumniId: id => dispatch(conditionalAlumniProfile(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Alumni);
