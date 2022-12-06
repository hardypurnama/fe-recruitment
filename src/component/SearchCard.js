import React from "react"
import { Form,Button, Container } from "react-bootstrap"

function SearchCard (){
   
        return(
            <Container>
                <Form className="d-flex">
                    <Form.Control
                        type="Search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                    />
                <Button class="btn btn-primary btn-lg" type="button">Search</Button>
        
                </Form>
            </Container>
            
        );
        
    
}


export default SearchCard;