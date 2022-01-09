import React from 'react';
import ChildComponent from './ChildComponent';
import AddComponent from './AddComponent';

class MyComponent extends React.Component {

    state = {
        arrJobs: [
            { id: '1', title: 'developer', salary: '500' },
            { id: '2', title: 'tester', salary: '400' },
            { id: '3', title: 'Project Manager', salary: '1000' }
        ]
    }

    addNewJob = (job) => {
        console.log('Check from parents', job);

        // let currentJobs = this.state.arrJobs;
        // currentJobs.push(job);

        this.setState({
            arrJobs: [...this.state.arrJobs, job]
            // arrJos: currentJobs
        })
    }

    deleteAJob = (job) => {
        let currentJobs = this.state.arrJobs;

        currentJobs = currentJobs.filter(item => item.id !== job.id);
        this.setState({
            arrJobs: currentJobs
        })
    }

    render() {
        return (
            <>
                <AddComponent addNewJob={this.addNewJob} />

                <ChildComponent def={this.state.arrJobs}
                    deleteAJob={this.deleteAJob} />
            </>
        );
    }
}

export default MyComponent;

