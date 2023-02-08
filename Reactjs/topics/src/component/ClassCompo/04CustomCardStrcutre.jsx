import React, { Component } from 'react';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBBtn } from 'mdb-react-ui-kit';
class ClassCompoPropsExmaple extends Component {
    render() {
        return (
            <>

                <br />
                {/* <p> <strong>window.location.origin </strong> {window.location.origin + this.props.imgurl}</p> */}
                {/* <p> <strong>window.location.origin </strong> {window.location.origin +"/"+ this.props.imgurl}</p>
                <MDBCardImage src={window.location.origin +'/'+this.props.imgurl} position='top' alt='...' />
                
                <br />
                <p> <strong>process.env.PUBLIC_URL </strong> {process.env.PUBLIC_URL + this.props.imgurl}</p>
                
                <MDBCardImage src={"../../"+process.env.PUBLIC_URL + this.props.imgurl} position='top' alt='...' /> */}
                <MDBCard>
                    <MDBCardImage src={window.location.origin +"/"+ this.props.imgurl} position='top' alt='...' />
                    <MDBCardBody>
                        <MDBCardTitle>{this.props.title}</MDBCardTitle>
                        <MDBCardText>
                            {this.props.children}
                        </MDBCardText>
                        <MDBBtn href='#'>Button</MDBBtn>
                    </MDBCardBody>
                </MDBCard>
            </>
        );
    }
}

export default ClassCompoPropsExmaple;