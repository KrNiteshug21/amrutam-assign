import React, { useState } from "react";
import { AiTwotoneLeftCircle, AiTwotoneRightCircle } from "react-icons/ai";
import SuccessModal from "../Wrapper/SuccesModal";

interface AppointmentProps {
  doctor: string;
  mode: string[][];
  slot: string[][];
  morning: string[];
  evening: string[];
}

interface ModalProps {
  header: string;
  msg: string;
  trigger: boolean;
}

const appointment: AppointmentProps = {
  doctor: "Dr. John Doe",
  mode: [
    ["In-clinic", "45 Mins"],
    ["Video", "45 Mins"],
    ["Chat", "10 Mins"],
  ],
  slot: [
    ["Mon, 10 Oct", "10 slots"],
    ["Tue, 11 Oct", "10 slots"],
    ["Wed, 12 Oct", "10 slots"],
    ["Thu, 13 Oct", "10 slots"],
    ["Fri, 14 Oct", "10 slots"],
    ["Sat, 15 Oct", "10 slots"],
    ["Sun, 16 Oct", "10 slots"],
  ],
  morning: [
    "09:00 AM",
    "09:30 AM",
    "10:00 AM",
    "10:15 AM",
    "10:45 AM",
    "11:00 AM",
  ],
  evening: [
    "04:00 PM",
    "04:15 PM",
    "04:30 PM",
    "04:45 PM",
    "05:00 PM",
    "05:15 PM",
  ],
};

const initAppintment = {
  doctor: "",
  mode: ["", ""],
  slot: ["", ""],
  morning: "",
  evening: "",
};

const initModal: ModalProps = {
  header: "",
  msg: "",
  trigger: false,
};

const Appointment: React.FC = () => {
  const [selectedMode, setSelectedMode] = useState(initAppintment);
  const [modal, setModal] = useState<ModalProps>();

  const handleSumbmit = () => {
    console.log(selectedMode);
    setSelectedMode(initAppintment);
    setModal({
      header: "Appointment Booked",
      msg: "Your appointment has been booked successfully",
      trigger: true,
    });
  };

  return (
    <>
      {modal?.trigger && (
        <SuccessModal
          modalObj={modal}
          clickFunction={() => setModal(initModal)}
        />
      )}
      <div className="space-y-6 border-2 p-4 rounded-lg min-h-screen">
        <div className="flex justify-between items-center border-2 p-4 rounded-lg text-xl">
          <h2 className="font-semibold">Appointemnt Fee</h2>
          <p className="font-semibold text-green-800">₹699.00</p>
        </div>

        <div className="space-y-4">
          <div className="flex justify-between items-center pl-2">
            <h2 className="flex items-center gap-2 font-bold text-xl tracking-wide">
              <span>Select</span> <span>you</span> <span>mode</span>{" "}
            </h2>
            <hr className="bg-gray-900 w-full" />
          </div>
          <div className="flex justify-between items-center gap-4">
            {appointment.mode.map((mode) => (
              <button
                key={mode[0]}
                onClick={() => setSelectedMode({ ...selectedMode, mode })}
                className={`${
                  selectedMode.mode === mode
                    ? "border-green-800 bg-green-50 text-green-700"
                    : ""
                } flex-auto border-2 p-2 rounded-lg`}
              >
                <span className="flex justify-center items-center gap-2 font-semibold text-lg">
                  {mode[0]}

                  {selectedMode.mode === mode && (
                    <img
                      className="bg-green-800 rounded-full w-6 h-6"
                      src="/img/vectors/tick.svg"
                      alt="tick"
                    />
                  )}
                </span>
                <span className="block text-gray-700">{mode[1]}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex justify-between items-center pl-2">
            <h2 className="flex items-center gap-2 font-bold text-xl tracking-wide">
              <span>Pick </span> <span>a</span>
              <span> time</span> <span>slot</span>
            </h2>
            <hr className="w-full" />
            <img src="/img/vectors/calender.svg" alt="Calendar" />
          </div>
          <div className="flex items-center gap-4">
            <AiTwotoneLeftCircle className="w-12 h-12 cursor-pointer" />
            <div className="flex items-stretch gap-4 overflow-hidden">
              {appointment.slot.map((slot) => (
                <div
                  style={{ flex: "0 0 auto" }}
                  key={slot[0]}
                  onClick={() =>
                    setSelectedMode({ ...selectedMode, slot: slot })
                  }
                  className={`${
                    selectedMode.slot === slot
                      ? "border-green-800 bg-green-50 text-green-700"
                      : ""
                  } border-2 px-4 py-2 rounded-lg cursor-pointer`}
                >
                  <h3>{slot[0]}</h3>
                  <p>{slot[1]}</p>
                </div>
              ))}
            </div>
            <AiTwotoneRightCircle className="w-12 h-12 cursor-pointer" />
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="pl-2 font-bold text-lg">Morning</h2>
          <div className="flex flex-wrap gap-4">
            {appointment.morning.map((time) => (
              <button
                key={time}
                onClick={() =>
                  setSelectedMode({ ...selectedMode, morning: time })
                }
                disabled={selectedMode.evening !== ""}
                className={`${
                  selectedMode.morning === time
                    ? "border-green-800 bg-green-50 text-green-700"
                    : ""
                } border-2 px-4 py-2 rounded-lg`}
              >
                {time}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="pl-2 font-bold text-lg">Evening</h2>
          <div className="flex flex-wrap gap-4">
            {appointment.evening.map((time) => (
              <button
                key={time}
                onClick={() =>
                  setSelectedMode({
                    ...selectedMode,
                    evening: selectedMode.evening === time ? "" : time,
                  })
                }
                disabled={selectedMode.morning !== ""}
                className={`${
                  selectedMode.evening === time
                    ? "border-green-800 bg-green-50 text-green-700"
                    : ""
                } border-2 px-4 py-2 rounded-lg`}
              >
                {time}
              </button>
            ))}
          </div>
        </div>

        <div className="w-full">
          <button
            onClick={handleSumbmit}
            className="border-2 bg-green-800 p-2 rounded-lg w-full text-white text-xl"
          >
            Make an Appointment
          </button>
        </div>
      </div>
    </>
  );
};

export default Appointment;
