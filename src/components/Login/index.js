import React, { Component } from 'react';
import Logo from '../assets/LogoThumbnail.png';
import Ricky from '../assets/Ricky.jpg';
import Kevin from '../assets/Kevin.jpg';
import Eric from '../assets/Eric.jpg';
import Modal from 'react-modal';

import { Link } from 'react-router-dom'
import {getAllProfiles, addProfile} from '../Redux/Actions';
import { connect } from 'react-redux';

// color pallete: https://www.colorcombos.com/color-schemes/386/ColorCombo386.html


const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};


class Login extends Component {
    constructor() {
        super();
        this.openModal = this.openModal.bind(this);
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    openModal() {
        this.setState({ modalIsOpen: true });
    }

    afterOpenModal() {
        // references are now sync'd and can be accessed.
        this.subtitle.style.color = '#f00';
    }

    closeModal() {
        this.setState({ modalIsOpen: false });
    }

    componentDidMount() {
        this.props.getAllProfiles();
    }

    
    addCohortMember = () => {
        console.log({first_name: this.state.firstName, last_name: this.state.lastName, gender_id: this.state.gender, location: this.state.address, image: this.state.imgUrl, experience_id: this.state.experience, grad_date_id: 1})
        this.props.addProfile({"first_name": this.state.firstName, "last_name": this.state.lastName, "gender_id": this.state.gender, "location": this.state.address, "image": this.state.imgUrl, "experience_id": this.state.experience, "grad_date_id": 1})
        this.setState({
            firstName: '',
            lastName: '',
            gender: '',
            address: '',
            imgUrl: '',
            modalIsOpen: false,
            noticeStatus: true
        })
    }

    state = {
        email: '',
        password: '',
        modalIsOpen: false,

        firstName: '',
        lastName: '',
        gender: '',
        experience: 1,
        address: '',
        imgUrl: '',

        genderTitle: 'Gender',

        noticeStatus: false
    }


    render() {
        return (
            <div>

                {/*                                           HEADER                                                */}
                <div className="header">
                    <a href="#default" className="logo" >
                        Redwood Forest
                    </a>
                    <div className="header-right" style={{ color: 'white' }}>
                        <a className="active" href="https://redwoodcodeacademy.com/" target="_blank" >Join The Community!</a>
                        <a style={{ color: "white" }} href="https://www.switchup.org/bootcamps/redwood-code-academy" target="_blank">Reviews</a>
                        <a href="#contact" style={{ color: "white" }}>Contact</a>
                        <a href="#about" style={{ color: "white" }}>About</a>
                        <a style={{ color: "white" }} onClick={() => this.openModal()} >Find Your Cohort</a>
                    </div>
                </div>

                <Modal
                    isOpen={this.state.modalIsOpen}
                    onAfterOpen={this.afterOpenModal}
                    onRequestClose={this.closeModal}
                    style={customStyles}
                    contentLabel="SignUp Modal"
                >
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', width: '100%' }}>
                        <img alt="Logo" src={Logo} className="LogoThumbnail" style={{ width: 75, height: 75, margin: 0, marginRight: 5 }} />
                        <h2 style={{ alignSelf: 'flex-end', margin: 0, fontFamily: 'mali' }} ref={subtitle => this.subtitle = subtitle}>Find Your Cohort!</h2>
                        <div style={{ flex: 1 }}></div>
                        <button className="btn, btn-info" onClick={this.closeModal} style={{ width: 30, height: 30, alignSelf: 'flex-start', justifySelf: 'flex-end' }}>&times;</button>
                    </div>

                    <div>
                        <div style={{ alignSelf: 'flex-end', fontFamily: 'Open Sans Condensed', color: 'black', width: 400, marginTop: 20 }}>
                            <label style={{ margin: 0, fontWeight: 'bold' }}>First Name</label>
                            <input value={this.state.firstName} onChange={(e) => this.setState({ firstName: e.target.value })} type="text" className="form-control" placeholder="First Name" style={{ marginBottom: 10 }} />
                            <label style={{ margin: 0, fontWeight: 'bold' }}>Last Name</label>
                            <input value={this.state.lastName} onChange={(e) => this.setState({ lastName: e.target.value })} type="text" className="form-control" placeholder="First Name" style={{ marginBottom: 10 }} />
                            <label style={{ margin: 0, fontWeight: 'bold' }}>Password</label>
                            <input value={this.state.setPassword} onChange={(e) => this.setState({ setPassword: e.target.value })} type="password" className="form-control" placeholder="Password" style={{ marginBottom: 10 }} />
                            <label style={{ margin: 0, fontWeight: 'bold' }}>Cohort Graduation Date</label> <br />
                            {/* <div className="dropdown">
                                <button className="dropbtn">{this.state.EmployeeName}</button>
                                <div className="dropdown-content">
                                    {
                                        this.props.employees.map((x, i) => (
                                            <a key = {i} value = {x.employee_id} onClick = {() => this.employeePick(x.employee_id, x.name)} >{x.name}</a>
                                        ))
                                    }
                                </div>
                            </div> */}
                            <label style={{ margin: 0, fontWeight: 'bold' }}>Email</label>
                            <input value={this.state.email} onChange={(e) => this.setState({ email: e.target.value })} type="text" className="form-control" placeholder="Enter Email Address" style={{ marginBottom: 10 }} />
                            <label style={{ margin: 0, fontWeight: 'bold' }}>Gender</label>
                            <div className="dropdown">
                                <button className="dropbtn">{this.state.genderTitle}</button>
                                <div className="dropdown-content">
                                    <a onClick={() => this.setState({ gender: 1, genderTitle: "Male" })}>Male</a>
                                    <a onClick={() => this.setState({ gender: 2, genderTitle: "Female" })}>Female</a>
                                </div>
                            </div>
                            <label style={{ margin: 0, fontWeight: 'bold' }}>Address</label>
                            <input value={this.state.address} onChange={(e) => this.setState({ address: e.target.value })} type="text" className="form-control" placeholder="Address" style={{ marginBottom: 10 }} />
                            <label style={{ margin: 0, fontWeight: 'bold' }}>Insert Image Link</label>
                            <input value={this.state.imgUrl} onChange={(e) => this.setState({ imgUrl: e.target.value })} type="text" className="form-control" placeholder="Image HyperLink" style={{ marginBottom: 10 }} />
                        </div>
                        <button type="submit" onClick={() => this.addCohortMember()} className="btn btn-info float-right" style={{ marginTop: 20 }}>Sign Up!</button>
                    </div>
                </Modal>




                {/*                                           Enter ZIP                                                */}
                <div className="BackgroundImage" id="home">
                { this.state.noticeStatus &&
                <div className="alert">
                    <span className="closebtn" onClick = {() => this.setState({ noticeStatus: false})}>&times;</span>
                    <strong>Success</strong> Welcome to the Official Redwood Code Academy Alumni Network!
                </div>
                }
                    <div className="FindTutor">
                        <div className="form-group custom-form">
                            <div className="form-group">
                                <img alt="Logo" src={Logo} className="LogoThumbnail" style={{ width: 75, height: 75, marginBottom: 0 }} />
                                <p className="LogoThumbnail" style={{ fontWeight: 'bold', fontStyle: "italic", marginTop: 0, marginBottom: 40 }}>Redwood Forest</p>
                                <h4 style={{ fontFamily: 'Mali' }}>Good Morning!</h4>
                                <p style={{ color: '#505050', fontSize: 12, fontFamily: 'Open Sans Condensed', fontWeight: "bold" }}>Connect With Your Redwood Code Academy Alumni!</p>
                                <hr style={{ marginBottom: 30, marginTop: 20 }} />
                                <p style={{ textAlign: 'center', color: '#505050', fontFamily: 'Open Sans Condensed' }}>Ask Question, Find Jobs, Network!</p>
                                <label style={{ margin: 0, fontWeight: 'bold', fontFamily: 'Mali' }}>Email</label>
                                <input value={this.state.email} onChange={(e) => this.setState({ email: e.target.value })} type="text" className="form-control" placeholder="Email Address" />
                                <label style={{ margin: 0, fontWeight: 'bold', fontFamily: 'Mali' }}>Password</label>
                                <input value={this.state.password} onChange={(e) => this.setState({ password: e.target.value })} type="text" className="form-control" placeholder="Enter Your Password" />
                            </div>
                            <Link type="submit" to='/profile' className="btn btn-info float-right" style={{ marginBottom: 40 }}>Login!</Link>
                        </div>
                        <div className="custom-form2">
                            <div style={{ alignSelf: 'flex-end', marginLeft: 20, fontFamily: 'Srisakdi', color: 'white', width: 300 }}>
                            </div>
                        </div>
                    </div>
                </div>

                {/*                                           CONTACT                                                */}
                <div className="Information" style={{ backgroundColor: "#936A4A", color: "#D5A253", marginTop: -20 }}>
                    <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                        <h2 id="contact" style={{ flex: 1, marginBottom: 5, marginTop: 25 }}>Contact Us</h2>
                        <div>
                            <button className="btn btn-light" style={{ borderColor: '#936A4A', backgroundColor: '#936A4A' }}><i className="fab fa-facebook-square fa-2x"></i></button>
                            <button className="btn btn-light" style={{ borderColor: '#936A4A', backgroundColor: '#936A4A' }}><i className="fab fa-twitter fa-2x"></i></button>
                            <button className="btn btn-light" style={{ borderColor: '#936A4A', backgroundColor: '#936A4A' }}><i className="fab fa-flickr fa-2x"></i></button>
                            <button className="btn btn-light" style={{ borderColor: '#936A4A', backgroundColor: '#936A4A' }}><i className="fab fa-instagram fa-2x"></i></button>
                            <button className="btn btn-light" style={{ borderColor: '#936A4A', backgroundColor: '#936A4A' }}><i className="fab fa-tumblr fa-2x"></i></button>
                        </div>
                        <h6 style={{ fontFamily: 'Open Sans Condensed', marginTop: 5 }}>Email us at:<a style={{ marginLeft: 5, color: "#D5A253" }} href="" target="_top">RedwoodForest@Gmail.com</a></h6>
                        <h6 style={{ fontFamily: 'Open Sans Condensed', marginTop: 5 }}>For More Information Call us at:  <a style={{ marginLeft: 5, color: "#D5A253" }} href="" target="_top">(714) 714-7147</a></h6>
                    </div>


                    {/*                                           ABOUT US                                                */}
                    <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                        <h2 id="about" style={{ flex: 1, marginBottom: 5, marginTop: 25 }}>About Us</h2>
                        <div>
                            <img className="profileThumbnail" style={{ margin: 4 }} src={Kevin} alt="Kevin" />
                            <img className="profileThumbnail" style={{ margin: 4 }} src={Eric} alt="Eric" />
                            <img className="profileThumbnail" style={{ margin: 4 }} src={Ricky} alt="Ricky" />
                        </div>
                    </div>
                </div>
            </div>
        )


    }
}

const mapStateToProps = state => ({
    profiles: state.profiles
})

const mapDispatchToProps = dispatch => ({
    getAllProfiles: () => dispatch(getAllProfiles()),
    addProfile: (alumni) => dispatch(addProfile(alumni))
})

export default connect (mapStateToProps, mapDispatchToProps) (Login);
