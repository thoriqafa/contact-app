import React from "react";
import ContactItemBody from "./ContactItemBody";
import ContactItemImage from "./ContactItemImage";
import DeleteButton from "./DeleteButton";

function ContactItem({ id, imageUrl, name, tag, onDelete }){
    return (
        <div className="contact-item">
            <ContactItemImage imageUrl={imageUrl}/>
            <ContactItemBody name={name} tag={tag}/>
            <DeleteButton id={id} onDelete={onDelete} />
        </div>
    );
}

export default ContactItem;