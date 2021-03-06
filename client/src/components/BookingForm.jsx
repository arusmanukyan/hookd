import React, { PropTypes } from 'react';
import { Card, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Favorites from "../components/Favorites.jsx";
import { Link } from 'react-router';

const BookingForm = ({
  message,
  client,
  onSubmit,
  onChange,
  chooseStyle,
  selectedStyle
}) => (
    <form action="/" onSubmit={onSubmit} id="appointment-form">
      <h2 className="card-heading">Book an Appointment</h2>

        {message && <p className="success-message">{message}<br /><Link style={{fontSize:"20px",fontWeight:"bold"}} to="/pay">Pay for your appointment now.</Link></p>}
      
        <div className="form-row">
           <div>Appointment For:</div>
            {client.first_name} {client.last_name}
        </div>
        <div className="form-row">
           <div>Select Barber:</div>
             <select
               name = "barber"
               type="text"
               className="required"
               onChange={onChange}
                >
                <option value="Noah">Noah</option>
                <option value="Bryant">Bryant</option>
                <option value="Arus">Arus</option>
                <option value="Harold">Harold</option>
                <option value="Mo">Mo</option>
            </select>
        </div>
        <div className="form-row">
           <div>Appointment Date:</div>
             <select
               name = "month"
               className="required"
               onChange={onChange}
                >
              <option value="1">Jan</option>
              <option value="2">Feb</option>
              <option value="3">Mar</option>
              <option value="4">Apr</option>
              <option value="5">May</option>
              <option value="6">Jun</option>
              <option value="7">Jul</option>
              <option value="8">Aug</option>
              <option value="9">Sep</option>
              <option value="10">Oct</option>
              <option value="11">Nov</option>
              <option value="12">Dec</option>
            </select>
            <select
               name = "day"
               className="required"
               onChange={onChange}
                >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
              <option value="13">13</option>
              <option value="14">14</option>
              <option value="15">15</option>
              <option value="16">16</option>
              <option value="17">17</option>
              <option value="18">18</option>
              <option value="19">19</option>
              <option value="20">20</option>
              <option value="21">21</option>
              <option value="22">22</option>
              <option value="23">23</option>
              <option value="24">24</option>
              <option value="25">25</option>
              <option value="26">26</option>
              <option value="27">27</option>
              <option value="28">28</option>
              <option value="29">29</option>
              <option value="30">30</option>
              <option value="31">31</option>
            </select>
             <select
               name = "year"
               className="required"
               onChange={onChange}
                >
              <option value="2017">2017</option>
              <option value="2018">2018</option>
            </select>
        </div>
        <div className="form-row">
           <div>Appointment Time:</div>
             <select
               name = "hour"
               className="required"
               onChange={onChange}
                >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
            </select>
            <select
               name = "ampm"
               className="required"
               onChange={onChange}
                >
              <option value="PM">PM</option>
              <option value="AM">AM</option>
            </select>
        </div>      

      <Favorites 
        faveStyles={client.likedStyles} 
        thumbSize="smallThumb"
        titleText="Choose a Style (optional)"
        clickHandler={chooseStyle}
        selected={selectedStyle}
         />

      <br style={{clear: "both"}} />
      <div className="button-line">
        <RaisedButton type="submit" label="Book Your Appointment" primary />
      </div>
    </form>
);

BookingForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  client: PropTypes.object.isRequired,
  chooseStyle: PropTypes.func.isRequired,
  selectedStyle: PropTypes.number.isRequired,
  message: PropTypes.string
};

export default BookingForm;