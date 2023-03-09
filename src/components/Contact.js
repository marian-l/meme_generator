import React from "react"
import Star from "./Star"

export default function Contact() {
        const [contact, setContact] = React.useState(
        {
            lastName: "Lippold",
            firstName: "Marian",
            number: "015736799795",
            age: 24,
            sex: "a lot",
            interest: "your mother, coding",
            isFavorite: true
        })

        function toggleFavorite() {
            setContact(prevContact => {
                return {
                    ...prevContact,
                    isFavorite: !prevContact.isFavorite
                }
            })
        }

    return (
        <div className="state--contact">
            <Star 
            isFilled={contact.isFavorite}
            handleClick={toggleFavorite}/> {/*the handleClick prop needs to be set because this is 
            not a native html element. When i used onClick, it would not work AT ALL. */}
            <p>{contact.age}</p>
            <p>{contact.lastName}</p>
            <p>{contact.firstName}</p>
            <p>{contact.sex}</p>
            <p>{contact.interest}</p>
        </div>
            )
}