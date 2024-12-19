import {Button, Modal, ModalHeader, ModalBody, ModalFooter, Form,FormGroup, Input, Label,} from 'reactstrap'
import { useState } from 'react'

export default function CustomModal(props){
    console.log("Entrei na função")
// {title: "", description: "", completed: false}
    const [activeItem, setActiveItem] = useState(props.activeItem)
    const handleChange = (e) => {
        let {name, value} = e.target

        if (e.target.type == "checkbox"){
            value = e.target.checked
        }

        const activeItemFunc = { ...activeItem, [name]: value}

        setActiveItem(activeItemFunc)
    }
    
    const {toggle, onSave } = props


    return(
        <Modal isOpen={true} toggle={toggle}>
            <ModalHeader toggle={toggle}>
                Todo Item
            </ModalHeader>
            <ModalBody>
                <Form>
                    <FormGroup>
                        <Label for="todo-title">Title</Label>
                        <Input
                            type='text'
                            id='todo-title'
                            name='title'
                            value={activeItem.title}
                            onChange={handleChange}
                            placeholder='Enter Todo Title'
                        ></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="todo-description">Description</Label>
                        <Input
                            type='text'
                            id='todo-description'
                            name='description'
                            value={activeItem.description}
                            onChange={handleChange}
                            placeholder='Enter Todo description'
                        ></Input>
                    </FormGroup>
                    <FormGroup check>
                        <Label check>
                            <Input
                                type='checkbox'
                                name='completed'
                                checked={activeItem.completed}
                                onChange={handleChange}
                            />
                            Completed
                        </Label>
                    </FormGroup>
                </Form>
            </ModalBody>
            <ModalFooter>
                <Button
                    color='success'
                    onClick={() => onSave(activeItem)}
                >
                    Save
                </Button>
            </ModalFooter>
        </Modal>
    )
}