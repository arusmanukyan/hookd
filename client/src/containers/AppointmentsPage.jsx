import React, { PropTypes } from "react";
import { Card, CardText } from 'material-ui/Card';
import { Link } from 'react-router';
import BookingForm from '../components/BookingForm.jsx';
import Auth from '../modules/Auth';
import helpers from "../../dist/js/helper"

class AppointmentsPage extends React.Component {
    //class constructor
    constructor(props) {
        super(props);
        // set initial component state
        this.state = {
            errors: "",
            user: {
                first_name: Auth.getFirstName(),
                last_name: Auth.getLastName(),
                likedStyles: []
            },
            appointment: {
                barber: "Noah",
                month: "1",
                day: "1",
                year: "2017",
                hour: "1",
                ampm: "PM",
                chosenStyle: "none chosen"
            },
            showSelected: 1000000
        };
        this.doBooking = this.doBooking.bind(this);
        this.updateBookingForm = this.updateBookingForm.bind(this);
        this.updateChosenStyle = this.updateChosenStyle.bind(this);
    }
    componentWillMount(){
        // get user styles from db 
        var self = this;
        const savedStyles = helpers.getSavedStyles(Auth.getToken()).then(function(styles){
            if (!styles || !styles.data || styles.status !== 200){
                console.error("something went wrong: ", styles);
            } else {
                const updatedUser = self.state.user;
                updatedUser.likedStyles = styles.data.likedStyles;
                self.setState({
                    user: updatedUser
                });
            }
        });
    }

    doBooking(event){
        const self = this;
        event.preventDefault();
        // send the appointment object to the server
        helpers.createAppointment(Auth.getToken(), this.state.appointment).then(function(appt){
            if(appt.data){
                self.setState({
                    errors: "Appointment created successfully!"
                });
            }
        });
    }

    updateBookingForm(event){
        var newAppt = this.state.appointment;
        newAppt[event.target.name] = event.target.value;
        this.setState({appointment: newAppt});
    }

    updateChosenStyle(i){
        // put the id of the chosen style into the appointment data
        var newAppt = this.state.appointment;
        newAppt.chosenStyle = this.state.user.likedStyles[i]._id;
        this.setState({appointment: newAppt});
        // set the item that show show a selected class
        this.setState({showSelected: i});
    }

    render() {
        return (
            <Card className="container">
                <BookingForm 
                    message={this.state.errors}
                    onSubmit={this.doBooking} 
                    onChange={this.updateBookingForm} 
                    client={this.state.user} 
                    chooseStyle={this.updateChosenStyle}
                    selectedStyle={this.state.showSelected}
                    />
            </Card>
        );
    }
}


AppointmentsPage.contextTypes = {
//  router: PropTypes.object.isRequired
};

export default AppointmentsPage;