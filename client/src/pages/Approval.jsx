import React from 'react'

const Approval = () => {
  return (
    <div className="overflow-x-auto">
  <table className="table table-zebra w-full">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Purpose</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
        <th>1</th>
        <td>Cy Ganderton</td>
        <td>Purpose 1</td>
        <td className='flex space-x-5'>
            <button className='btn bg-green-500 border-none btn-xs'>Approve</button>
            <button className='btn bg-red-500 border-none btn-xs'>Reject</button>
        </td>
      </tr>
      {/* row 2 */}
      <tr>
        <th>2</th>
        <td>Hart Hagerty</td>
        <td>Purpose 2</td>
        <td className='flex space-x-5'>
            <button className='btn bg-green-500 border-none btn-xs'>Approve</button>
            <button className='btn bg-red-500 border-none btn-xs'>Reject</button>
        </td>
      </tr>
      {/* row 3 */}
      <tr>
        <th>3</th>
        <td>Brice Swyre</td>
        <td>Purpose 3</td>
        <td className='flex space-x-5'>
            <button className='btn bg-green-500 border-none btn-xs'>Approve</button>
            <button className='btn bg-red-500 border-none btn-xs'>Reject</button>
        </td>
      </tr>
    </tbody>
  </table>
</div>
  )
}

export default Approval