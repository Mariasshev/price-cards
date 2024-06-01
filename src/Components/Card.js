import React from 'react';

export function Card (props)
{
    return(
        <div className='col-12 col-md-4 text-center'>
            <div className='price-card'>
                    <div className='text-center'>
                        <img src={props.image} alt=''/>
                    </div>

                    <h4 className='text-success'>{props.name}</h4>
                    <h1>${props.price}</h1>
                    <p>per month</p>

                    <div className='row'>
                        <div className='col-12 border-card'>
                            <div className='row'>
                                <div className='col-6'>
                                    <p className='text-start'>Storage</p>
                                </div>
                                <div className='col-6'>
                                    <p className='text-end'>{props.storage}</p>
                                </div>
                            </div>
                        </div>

                        <div className='col-12 border-card'>
                            <div className='row'>
                                <div className='col-6'>
                                    <p className='text-start'>Users</p>
                                </div>
                                <div className='col-6'>
                                    <p className='text-end'>{props.users}</p>
                                </div>
                            </div>
                        </div>

                        <div className='col-12 border-card'>
                            <div className='row'>
                                <div className='col-6'>
                                    <p className='text-start'>Projects</p>
                                </div>
                                <div className='col-6'>
                                    <p className='text-end'>{props.projects}</p>
                                </div>
                            </div>
                        </div>

                        <div className='col-12 pt-3'>
                            <div className='row'>
                                <div className='col-6'>
                                    <p className='text-start'>Support</p>
                                </div>
                                <div className='col-6'>
                                    <p className='text-end fw-bold'>{props.support ? 'Available' : 'Not Available'}</p>
                                </div>
                            </div>
                        </div>

                        <div className='col-12 pt-3 text-center'>
                            <button className='btn py-3 px-5 btn-success text-uppercase'>select plan</button>
                        </div>
                    </div>
            </div>
        </div>
    );
}