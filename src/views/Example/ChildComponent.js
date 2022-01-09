import React from 'react';
import './Demo.scss'

class ChildComponent extends React.Component {

    state = {
        showJobs: false
    }

    handleShowHide = () => {
        this.setState({
            showJobs: !this.state.showJobs
        })
    }

    handleOnClickDelete = (job) => {
        this.props.deleteAJob(job);
    }

    render() {

        let { def } = this.props;
        let { showJobs } = this.state;

        let check = showJobs === true ? 'showJobs = true' : 'showJobs = false';
        //console.log(">>>> check conditional", check)
        return (
            <>
                {showJobs === false ?
                    <div><button className='btn-show'
                        onClick={() => this.handleShowHide()}>Show</button>
                    </div>
                    :
                    <>
                        <div className='job-lists'> {
                            def.map((item, index) => {
                                return (
                                    <div key={item.id}>
                                        {item.title} - {item.salary}
                                        <></> <span onClick={() => this.handleOnClickDelete(item)}>x</span>
                                    </div>
                                )
                            })
                        }
                        </div>
                        <div>
                            <button onClick={() => this.handleShowHide()}>Hide</button>
                        </div>
                    </>
                }
            </>
        );
    }
}

// Viết theo function components:
// const ChildComponent = (props) => {
//     let { name, age, address, def } = props;
//     return (
//         <>
//             <div>
//                 Child Components : {name} - {age} - {address}
//             </div>
//             <div className='job-lists'> {
//                 def.map((item, index) => {
//                     if (item.salary >= 500) {
//                         return (
//                             <div key={item.id}>
//                                 {item.title} - {item.salary}
//                             </div>
//                         )
//                     }
//                 })
//             }

//             </div>
//         </>
//     );
// }


export default ChildComponent;

