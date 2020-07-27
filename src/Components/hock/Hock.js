import React from 'react'
import { deleteProduct } from '../../apiServices';

// const HighOrderComponent = Component => {

//     return class WithDataComponent extends React.Component {
//         state = {
//             data: { name: "Alex", status: "student" }
//         }

//         render() {
//             return (
//                 <Component {...this.state.data} />
//             )
//         }
//     }
// }
// export default HighOrderComponent;



const HighOrderComponent = Component => {

    return class WithDataComponent extends React.Component {

        state = {

        }

        // componentDidMount() {
        //     console.group(`WithLog ouput @${Component.name}`);
        //     console.log(this.props);
        //     console.groupEnd();
        // }

        deleteCard = (e) => {
            const id = e.target.dataset.id;
            deleteProduct(id)
                .then(() => {
                    this.props.deleteCardItem(id);
                })
                .catch(error => console.log(error))
        }

        render() {
            const { isOpen } = this.state;
            return (
                <>
                    {/* <button type="button" onClick={this.toggler} >{isOpen ? "Hide" : "Show"}</button> */}
                    <Component {...this.props}/>
                    {/* <Component {...this.props}>
                        <button type="button" data-id={this.props.product.id} onClick={this.deleteCard}>Delete</button>
                        <button type="button" data-button="editbutton" >Edit</button>
                    </Component> */}
                </>
            )
        }
    }
}
export default HighOrderComponent;























// const getData = (data) => {
//         return data
// }

// const highOrderFunction = (func) => {
//     const data = { name: "Alex", status: "student" }

//     return func(data)
// }

// export const result = highOrderFunction(getData);

