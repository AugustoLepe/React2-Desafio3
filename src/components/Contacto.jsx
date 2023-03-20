import { Button, Form } from 'react-bootstrap';

const Contacto = () => {
    return (
        <container className="text-center">
            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Correo:</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="descripcion">
                    <Form.Label>Descripción:</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>
                <Button variant="danger">Enviar</Button>
            </Form>
        </container>
    );
}

export default Contacto;