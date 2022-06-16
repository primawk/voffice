import axios from "axios";
import { useEffect, useState } from "react";
import Modal from "../components/Modal";

const Rooms = () => {
  const [rooms, setRooms] = useState([]);
  const fetchRooms = async () => {
    try {
      const roomList = await axios.get("http://localhost:3500/rooms", {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      });
      setRooms(roomList.data);
    } catch (error) {
      console.log(error.response.data.message);
    }
  };

  useEffect(() => {
    fetchRooms();
  }, []);

  console.log(rooms);

  const renderRooms = () => {
    return rooms.map((room) => {
      return (
        <div className="grid grid-cols-1 m-3" key={room.id}>
          {/* single product */}
          <div className="bg-white shadow-md rounded overflow-hidden group">
            {/* product image */}
            <div className="relative">
              <img src="" className="relative h-80 object-cover" />
            </div>
            {/* product content */}
            <div className="pt-4 pb-3 px-4">
              <h4 className="font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">
                {room.roomName}
              </h4>
              <div className="flex items-baseline mb-1 space-x-2 font-roboto">
                <p className="text-xl text-primary font-semibold">
                  {room.costPerHour} Credit / Hour
                </p>
              </div>
              <div>
                <Modal roomId={room.id} />
              </div>
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <div className="h-full min-w-full w-max bg-gray-100">
      <div className="flex items-center justify-between py-7 px-10">
        <div>
          <h1 className="text-3xl text-gray-700 font-bold">Rooms</h1>
        </div>
      </div>
      <div className="flex px-5">{renderRooms()}</div>
    </div>
  );
};

export default Rooms;
