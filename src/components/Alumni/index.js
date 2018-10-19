import React, { Component } from 'react';
import { getAllProfiles, addProfile, conditionalAlumniProfile } from '../Redux/Actions';
import { connect } from 'react-redux';

class Alumni extends Component {

    state = {

    }

    componentDidMount() {
        this.props.getAllProfiles();
    }

    render() {
        return (
            <div>
                <div className="header headerBackground">
                    <a href="#default" className="logo">Redwood Forest</a>
                    <div className="header-right">
                        <a style = {{ opacity: 0.6, backgroundColor: 'gainsboro'}}href="login">Home</a>
                        <a style = {{ opacity: 0.6, backgroundColor: 'gainsboro', marginLeft: 5}}href="profile">Profile</a>
                    </div>
                </div>
                <div>
                <div style = {{display: "flex", flexWrap: "wrap", justifyContent: 'center'}}>
                        {
                            this.props.profiles.map((prof) => {
                                return (
                                    <div className = "ProfilesMap" key={prof.profile_id} style = {{fontSize: '0.8vw'}}>
                                        <input onClick = {() => this.props.changeAlumniId(prof.profile_id)} type="image" style={{ border: 2, maxWidth: '80%', height: 'auto', maxHeight: 200, marginTop: 5, borderRadius: 10}} src="https://static.posters.cz/image/750/posters/star-wars-episode-vii-the-force-awakens-kylo-ren-crouch-i27998.jpg" name="image"></input>
                                        <p className="text-center font-italic">{prof.first_name} {prof.last_name} {prof.date.date.substring(0,4)} Cohort</p>
                                        <hr style={{ width: '100%' }} ></hr>
                                        <p className="text-center font-italic"><strong>Occupation:</strong> {prof.current_job}</p>
                                        <hr style={{ width: '100%' }}></hr>
                                        <p className="text-center font-italic"><strong>Education:</strong> {prof.education}</p>
                                        <p className="text-center font-italic"><strong>Skills:</strong> {prof.skills}</p>
                                        <p className="text-center font-italic"><strong>Current Project:</strong> {prof.projects}</p>
                                    </div>
                                )
                            })

                        }
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
