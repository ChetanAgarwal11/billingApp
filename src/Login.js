import React from 'react';
import { Button, Form , Segment, FormGroup, Grid, Divider} from 'semantic-ui-react'

const Login = () => (
    <Segment placeholder>
        <Grid columns={2} stackable >
            <Divider vertical>Or</Divider>
            <Grid.Row>
                <Grid.Column>
                <Form >
                    <Form.Group unstackable widths={2}>
                    <Form.Input label='First name' placeholder='First name' required/>
                    <Form.Input label='Last name' placeholder='Last name' />
                    </Form.Group>
                    <Form.Group widths={2}>
                    <Form.Input label='Address' placeholder='Address' required/>
                    <Form.Input label='Phone' placeholder='Phone' required/>
                    </Form.Group>
                    <FormGroup widths={2}>
                    <Form.Input label='email address' placeholder= 'abc@gmail.com' required/>
                    <Form.Input label='password' required/>
                    </FormGroup>
                    <Form.Checkbox label='I agree to the Terms and Conditions' required/>
                    <Button type='submit'>Sign Up</Button>
                </Form>
                </Grid.Column>
                <Grid.Column>
                <Form >
                    <Form.Group unstackable widths={2}>
                    <Form.Input label='email address' />
                    <Form.Input label='password' />
                    </Form.Group>
                    
                    <Button type='submit'>Login</Button>
                </Form>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    </Segment>
  )

export default Login;



