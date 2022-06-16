import React from 'react'

const Bookings = () => {
  return (
    <div className="h-full min-w-full w-max bg-gray-100">
      <div className="flex items-center justify-between py-7 px-10">
        <div>
          <h1 className="text-3xl text-gray-700 font-bold">Rooms</h1>
        </div>
      </div>
      <div className="px-5">
        <table className="table w-full">
          <thead>
            <tr>
              <th className="bg-white border-b py-4 px-4 text-center border-gray-200 shadow-sm">
                No
              </th>
              <th className="bg-white border-b py-4 px-4 text-center border-gray-200 shadow-sm">
               Name
              </th>
              <th className="bg-white border-b py-4 px-4 text-center border-gray-200">
                Cost / Hour
              </th>
            
              <th className="bg-white border-b py-4 px-4 text-center border-gray-200">
                Actions
              </th>
            </tr>
          </thead>
        </table>
      </div>
    </div>
  )
}

export default Bookings