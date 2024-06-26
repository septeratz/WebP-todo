import React, {useState} from 'react';
import EditTask from '../modals/EditTask'

const Card = ({taskObj, index, deleteTask, updateListArray}) => {
    const [modal, setModal] = useState(false);

    const colors = [
        {
            primaryColor : "#5D93E1",
            secondaryColor : "#ECF3FC"
        },
        {
            primaryColor : "#F9D288",
            secondaryColor : "#FEFAF1"
        },
        {
            primaryColor : "#5DC250",
            secondaryColor : "#F2FAF1"
        },
        {
            primaryColor : "#F48687",
            secondaryColor : "#FDF1F1"
        },
        {
            primaryColor : "#B964F7",
            secondaryColor : "#F3F0FD"
        }
    ]


    const categoryColor = () => {
        let category = taskObj.Category;
        if(category === "Work"){
            return colors[0];
        }
        if(category === "Home"){
            return colors[1];
        }
        if(category === "School"){
            return colors[2];
        }
        if(category === "Exercise") {
            return colors[3];
        }
        if(category === "Others"){
            return colors[4];
        }
    }

    const toggle = () => {
        setModal(!modal);
    }

    const updateTask = (obj) => {
        updateListArray(obj, index)
    }

    const handleDelete = () => {
        deleteTask(index)
    }

    return (
        <div class = "card-wrapper mr-5">
            <div class = "card-top" style={{"background-color": categoryColor().primaryColor}}></div>
            <div class = "task-holder">
                <span class = "card-header" style={{"background-color": categoryColor().secondaryColor, "border-radius": "10px"}}>{taskObj.Name}</span>
                <p className = "mt-3">{taskObj.Description}</p>
    
                <div style={{border: "1px"}}>
                    <p className='mt-4'>{taskObj.Category}</p>
                </div>
    
                <div style={{"position": "absolute", "top":"160px", "left":"160px"}}>
                    <button style={{"color" : categoryColor().primaryColor, "cursor" : "pointer"}} onClick = {() => setModal(true)}>Edit</button>
                    <button style = {{"color" : categoryColor().primaryColor, "cursor" : "pointer"}} onClick = {handleDelete}>Delete</button>
                </div>
            </div>
            <EditTask modal = {modal} toggle = {toggle} updateTask = {updateTask} taskObj = {taskObj}/>
        </div>
    );
};

export default Card;