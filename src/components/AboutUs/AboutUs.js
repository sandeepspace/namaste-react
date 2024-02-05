import { Component } from "react";
import User from "../UserClass/UserClass"

// export const AboutUs = () => {
//     return (
//         <div className="about-us">
//             <h1>About Us</h1>
//             <h2>This is the food ordering app.</h2>
//             <User name={'Sandeep (Class based component)'} />
//         </div>
//     )
// }

export class AboutUs extends Component {

    constructor(props){
        super(props);
        console.log('Parent Constructor Called!!!');
    }

    componentDidMount(){
        console.log('Parent Component Did Mount!!!');
    }

    render() {
        console.log('Parent Render Called!!!');
        return (
            <div className="about-us">
                <h1>About Us</h1>
                <h2>This is the food ordering app.</h2>
                <User name={'First (Class based component)'} />
                {/* <User name={'Second (Class based component)'} /> */}
            </div>
        )
    }
}

// Parent Constructor Called!!!
// Parent Render Called!!!
   // First (Class based component)Child Constructor Called!!!
   // First (Class based component)Child Render Called!!!

   // Second (Class based component)Child Constructor Called!!!
   // Second (Class based component)Child Render Called!!!

   //<DOM UPDATED - IN SINGLE BATCH>

   // First (Class based component)Child Component Did Mount!!!
   // Second (Class based component)Child Component Did Mount!!!
//  Parent Component Did Mount!!!