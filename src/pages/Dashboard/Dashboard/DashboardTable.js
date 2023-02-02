import React from 'react';
import { Link } from 'react-router-dom';

export const DashboardTable = ({ info, name, index }) => {
    console.log(info)
    return (
        <tbody>
            <tr>
                <td>
                    <div className="flex items-center space-x-3">
                        <div>{index + 1}</div>
                        <div>
                            <div className="font-bold">{name}</div>
                            <div className="text-sm opacity-50">United States</div>
                        </div>
                    </div>
                </td>
                <td>
                    {info.tretment}
                </td>
                <td>{info.slots}</td>
                <td>
                    {
                        info.price && !info.paid && <Link to={`/dashboard/payment/${info._id}`}><button className=' btn btn-primary btn-sm'>Pay</button></Link>
                    }
                    {
                        info.price && info.paid && <span>Paid <br />
                            {info._id}</span>
                    }
                </td>
            </tr>
        </tbody>
    )
}


