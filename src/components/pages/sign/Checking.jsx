import React from "react";
import '../../../App.css';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';
import axios from 'axios';
import bcrypt from 'bcryptjs';
import Navbar from "../../navbar/Navbar";
import { useNavigate } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

export default function Checking(){
    const [missingAddress, setMissingAddress] = React.useState(true);
    const [username, setUsername] = React.useState(null);
    setMissingAddress(true);
    const [zip, setZip] = React.useState("");
    const [email, setEmail] = React.useState("");
    
    //     constructor(props) {
    //         super(props);
    //         this.handleChange = this.handleChange.bind(this);
    //         this.handleSubmit = this.handleSubmit.bind(this);
    //     }
    
    // handleChange(Event) {
    //     this.setState({[Event.target.name]: Event.target.value})
    // }

    // handleSubmit(Event) {
    //     Event.preventDefault();
    //     if(this.state.companyID != '' && this.state.companyPassword != ''){
    //         var hashedPass;
    //         hashedPass = bcrypt.hashSync(this.state.companyPassword,5, (err,hash)=>{
    //           if(!err){
    //             hashedPass = hash;
    //           }
    //         });
      
    //         axios.post('/sign-up', {
    //             companyID: this.state.companyID,
    //             email: this.state.email,
    //             companyPassword: hashedPass,
    //             compName: this.state.compName,
    //             domain: this.state.domain,
    //             establishment: this.state.establishment,
    //             occupation: this.state.occupation,
    //             location: this.state.location,
    //             size: this.state.size,
    //             numOfCeo: this.state.numOfCeo,
    //             numOfManagers: this.state.numOfManagers,
    //             numOfEmployees: this.state.numOfEmployees,
    //             systemUsed: this.state.systemUsed})
    //           .then(res =>{
    //               //console.log(res.json());
    //               console.log(res);
    //                 if(res.status === 200){
    //                     //this.app();
    //                     //history.push('/login');
    //                 }else if (res.status === 400){
    //                     console.log("duplicate ID");
    //                 }
    //         }).catch(err =>{
    //                 // console.log("duplicate ID");
    //                 // console.log(err);
    //         });
    //     }  
    // }

    // {!missingAddress ? (
    //     <Alert className="center-alert" variant="danger">
    //       <p className="text-center">
    //         {
    //           "Please file the Address filed ( Country, City, Street)"
    //         }
    //       </p>
    //     </Alert>
    //   ) : null}

//     history.push(
//         mode === "giver"
//           ? Paths.dashboard.link()
//           : Paths.takerLanding.root.link()
//       );
// const history = useHistory();

// register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm({
//     mode: "onBlur",
//     reValidateMode: "onChange",
//     defaultValues: getDefaultData(firebase.auth().currentUser),
//   });

// Need to be in the return
/*{ <Form.Group controlId="licenseNumber" className="pt-4">
        <SolidIconCountry className="icons-size icons-red-color" />
        <Form.Label className="P-labels">{t("City")}</Form.Label>
        <Form.Control
        className="P-inputs"
        onChange={(e) => setCitySelect(e.target.value)}
        />
    </Form.Group> }*/

/*{ <Form.Group controlId="companyName" className="mt-3">    
    <Form.Label>{t("Zip")}</Form.Label>
    <Form.Control
        type="email"
        onChange={(e) => setZip(e.target.value)}
        value={zip}
    />
    </Form.Group> }*/

        return (
            <>
            <Navbar />
            <div className="register-container" ref={this.props.containerRef}>
                <h1 className="sign-up">SIGN UP</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="form">
                        <div className="form-group">
                            {/* <label htmlFor="company id">Company ID : </label> */}
                            <input type="number" name="companyID" placeholder="Company id" onChange={this.handleChange} required/>
                        </div>
                        { <div className="form-group">
                            {/* <label htmlFor="email">Email : </label> */}
                            <input type="text" name="email" placeholder="Email" onChange={this.handleChange} required/>
                        </div> }
                        <div className="form-group">
                            {/* <label htmlFor="password">Password : </label> */}
                            <input type="text" name="companyPassword" placeholder="Password" onChange={this.handleChange} required/>
                        </div>
                            <div className="form-group">
                            {/* <label htmlFor="organization name">Organization's name : </label> */}
                            <input type="text" name="compName" placeholder="Organization's name" onChange={this.handleChange} required/>
                        </div>
                        <div className="form-group">
                            {/* <label htmlFor="organization domain">Organization's domain : </label> */}
                            <input type="text" name="domain" placeholder="Organization's domain" onChange={this.handleChange} required/>
                        </div>
                        <div className="form-group">
                            {/* <label htmlFor="date of establishment">Date of establishment : </label> */}
                            <input type="text" name="establishment" placeholder="Date of establishment of the company" onChange={this.handleChange} required/>
                        </div>
                        <div className="form-group">
                            {/* <label htmlFor="occupation">The organization is local or global : </label> */}
                            <input type="text" name="occupation" placeholder="Local or Global" onChange={this.handleChange} required/>
                        </div>
                        <div className="form-group">
                            {/* <label htmlFor="location">The organization’s location : </label> */}
                            <input type="text" name="location" placeholder="The organization’s location" onChange={this.handleChange} required/>
                        </div>
                        <div className="form-group">
                            {/* <label htmlFor="organization size">Organization’s size : </label> */}
                            <input type="number" name="size" placeholder="Organization’s size" onChange={this.handleChange} required/>
                        </div>
                        <div className="form-group">
                            {/* <label htmlFor="num of ceo">Number of CEOs and Deputy CEOs : </label> */}
                            <input type="number" name="numOfCeo" placeholder="Number of CEOs and Deputy CEOs" onChange={this.handleChange} required/>
                        </div>
                        <div className="form-group">
                            {/* <label htmlFor="amount of managers">Amount of managers : </label> */}
                            <input type="number" name="numOfManagers" placeholder="Amount of department heads&team leaders" onChange={this.handleChange} required/>
                        </div>
                        <div className="form-group">
                            {/* <label htmlFor="Amount of employees">Amount of regular employees : </label> */}
                            <input type="number" name="numOfEmployees" placeholder="Amount of regular employees" onChange={this.handleChange} required/>
                        </div>
                        <div className="form-group">
                            {/* <label htmlFor="organization system used">Organization’s operation system used : </label> */}
                            <input type="text" name="systemUsed" placeholder="Organization’s operation system used" onChange={this.handleChange} required/>
                        </div>
                        <div className="registerbtn">
                            {/* <button type="submit" class="btn btn-primary">Submit</button> */}
                            <Button type="submit" endIcon={<SendIcon />} color="primary" variant="contained">
                              Sign Up
                            </Button>
                        </div>
                    </div>
                </form>
            </div>
            </>
        );
}