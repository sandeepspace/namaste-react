
// const User = () => {
//   return (
//     <div className="user-card">
//         <h2>Name : Sandeep</h2>
//         <h3>Location : Noida</h3>
//         <h4>+91 8127826378</h4>
//     </div>
//   )
// }

// export default User;

import React from "react"

class User extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            count1: 0,
            count2: 1
        }
        console.log(props);
        console.log(this.props.name + 'Child Constructor Called!!!');
    }

    componentDidMount(){
        console.log(this.props.name + 'Child Component Did Mount!!!');
    }

    render() {
        const { name } = this.props;
        const { count1, count2 } = this.state;

        console.log(this.props.name + 'Child Render Called!!!');

        return (
            <div className="user-card">
                <h1>Count 1: {count1}</h1>
                <h1>Count 2: {count2}</h1>
                <h2>Name : {name}</h2>
                <h3>Location : Noida</h3>
                <h4>+91 8127826378</h4>
                <button type="button" onClick={()=>{
                    this.setState({
                        count1: count1 + 1,
                        count2: count2 + 1, 
                    })
                }}>+</button>
            </div>
        )
    }
}
export default User; 