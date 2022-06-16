import { useState, Fragment } from "react";
import axios from "axios";
import { Dialog, Transition } from "@headlessui/react";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Modal = ({ roomId }) => {
  const [open, setOpen] = useState(false);
  const [clients, setClients] = useState(false);
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");

  const navigate = useNavigate();

  const fetchClients = async () => {
    try {
      const clientList = await axios.get("http://localhost:3500/clients", {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      });
      setClients(clientList.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:3500/bookings",
        JSON.stringify({ startTime, endTime, roomId }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      console.log(JSON.stringify(response?.data));
      navigate("/home/rooms"); // navigate to the recent url location or intended location
    } catch (err) {
      console.log(err);
    }
  };

  console.log(roomId);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="m-auto h-full rounded-md mt-auto bg-pink-800 text-white font-bold hover:brightness-110 cursor-pointer transition active:scale-95 text-sm gap-2 flex justify-center items-center shadow p-3"
      >
        Book
      </button>
      <Transition appear show={open} as={Fragment}>
        <Dialog
          onClose={() => setOpen(false)}
          className="fixed inset-0 z-50 overflow-y-auto flex justify-center items-center"
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-50"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-50"
          >
            <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-40" />
          </Transition.Child>

          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-80 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-80 scale-100 -translate-y-5"
          >
            <div className="w-[790px] bg-gray-50 rounded-2xl fixed z-10 flex flex-col">
              <div className="w-full py-4 px-7 text-2xl flex items-center gap-2">
                {/* <MdAdminPanelSettings className="text-sky-400" /> */}
                <span className="font-bold bg-gradient-to-r from-sky-400 to-emerald-400 bg-clip-text text-transparent">
                  Book a room
                </span>
              </div>
              <form onSubmit={handleSubmit} className="px-7">
                <div className="w-full flex flex-col p-4 bg-white ring ring-emerald-200 rounded-xl">
                  <div className="flex h-[98px] gap-5">
                    <div className="w-full flex flex-col">
                      <label
                        htmlFor="startTime"
                        className="text-xl font-thin text-sky-500 mb-1 cursor-pointer leading-tight"
                      >
                        Start:
                      </label>
                      <div className="w-full relative flex items-center">
                        <input
                          id="startTime"
                          type="time"
                          required
                          onChange={(e) => setStartTime(e.target.value)}
                          defaultValue="13:00"
                          className={`h-10 w-full px-3 rounded-lg focus:outline-none border transition cursor-pointer placeholder:font-semibold placeholder:text-gray-300`}
                        />
                      </div>
                    </div>
                    <div className="w-full flex flex-col">
                      <label
                        htmlFor="endTime"
                        className="text-xl font-thin text-sky-400 mb-1 cursor-pointer leading-tight"
                      >
                        Username:
                      </label>
                      <div className="w-full relative flex items-center">
                        <input
                          id="endTime"
                          type="time"
                          required
                          onChange={(e) => setEndTime(e.target.value)}
                          defaultValue="13:00"
                          className={`h-10 w-full px-3 rounded-lg focus:outline-none border transition cursor-pointer placeholder:font-semibold placeholder:text-gray-300`}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center gap-3 py-5">
                  <button
                    type="submit"
                    className="h-10 w-32 rounded-lg bg-green-400 disabled:bg-green-300 hover:brightness-110 disabled:hover:brightness-100 font-bold text-white active:scale-95 disabled:active:scale-100 transition flex items-center justify-center gap-2"
                  >
                    Book
                  </button>
                  <div
                    onClick={() => {
                      setOpen(false);
                    }}
                    className="h-10 w-32 rounded-lg bg-red-400 hover:brightness-110 font-bold text-white active:scale-95 transition"
                  >
                    Cancel
                  </div>
                </div>
              </form>
            </div>
          </Transition.Child>
        </Dialog>
      </Transition>
    </>
  );
};

export default Modal;
