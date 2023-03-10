import React from "react"

export default function Forms() {
    const [formData, setFormData] = React.useState(
        {firstName: "", 
        lastName: "", 
        email: "", 
        comments: "",
        checkBox: true,
        employment: true,
        favColor: ""}) // need to be exactly the same as the name in HTML elements!

    function handleChange(event) {
        // event.target => DOM-Object, in dem das Event passiert.
        const {name, value, type, checked} = event.target;
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value // checkbox check, everything except checkbox uses String-values.
                        // [event.target.name] is a computed property, a feature introduced in ES6 (fixes syntax errors related to . in these) 
                        // shorthand "name" seems to still need the brackets. 
            }
        })
    }

    function handleSubmit() {
        event.preventDefault() // stops rerendering which would cause all formData values to be overwritten by default
        submitToApi(formData) // how will i pass this to laravel API?
    }

    return (
        <form>
            <input
                type="text"
                placeholder="First Name"
                onChange={handleChange}
                name="firstName"
                value={formData.firstName} /** this prevents inconsistencies between the HTML Element and the React State and turns the inputs into controlled components by giving state the control about the value */
            />
            <input
                type="text"
                placeholder="Last Name"
                onChange={handleChange}
                name="lastName"
                value={formData.lastName} /** this prevents inconsistencies between the HTML Element and the React State and turns the inputs into controlled components by giving state the control about the value */                
            />
            <input
                type="text"
                placeholder="Email"
                onChange={handleChange}
                name="email"
                value={formData.email} /** this prevents inconsistencies between the HTML Element and the React State and turns the inputs into controlled components by giving state the control about the value */                
            />
            <textarea 
                value={formData.comments} 
                name="comments"
                onChange={handleChange}
            />
            <input 
                type="checkbox" 
                id="relationToLabel"
                checked={formData.checkBox}
                onChange={handleChange}
                name="checkbox"
            />
            <label 
                htmlFor="relationToLabel">
                    Click this text to check Checkbox
            </label>

            <fieldset>
                <legend> Employment </legend>

                <input 
                    type="radio"
                    id="unemployed"
                    name="unemployed"
                    value="unemployed"
                    checked={formData.employment === "unemployed"}
                    onChange={handleChange}
                />
                <label htmlFor="unemployed">Unemployed</label>
                <br />

                <input 
                    type="radio"
                    id="part-time"
                    name="part-time"
                    value="part-time"
                    checked={formData.employment === "part-time"}
                    onChange={handleChange}
                />
                <label htmlFor="part-time">Part-time</label>
                <br />

                <input 
                    type="radio"
                    id="full-time"
                    name="full-time"
                    value="full-time"
                    checked={formData.employment === "full-time"}
                    onChange={handleChange}
                />
                <label htmlFor="full-time">Full-Time</label>
                <br />
            </fieldset>

            <label htmlFor="favColor"></label>
            <br />
            <select 
                id="favColor"
                value={formData.favColor}
                onChange={handleChange}
                name="favColor"
            >
                <option value="">--Choose--</option>
                <option value="red">Red</option>
                <option value="yellow">Yellow</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
                <option value="orange">Orange</option>
                <option value="indigo">Indigo</option>
                <option value="magenta">Magenta</option>
            </select>

            <button onClick={handleSubmit}>Submit</button> {/* submit button per default */}
        </form>
    )
}