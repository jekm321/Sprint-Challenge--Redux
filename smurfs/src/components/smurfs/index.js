import React from 'react';
import Smurf from './Smurf';

export default class smurfs extends React.Component {

    render() {
        return (
            <div>
                {this.props.smurfs.map(smurf => {
                    return (
                        <div className="list__Item" key={smurf.id}>
                            <Smurf
                                {...this.props}
                                id={smurf.id}
                                name={smurf.name}
                                age={smurf.age}
                                height={smurf.height}
                                deleteSmurf={this.props.deleteSmurf}
                            />
                        </div>)
                })}
            </div>
        );
    }
};