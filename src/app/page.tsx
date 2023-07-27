'use client';

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const MESSAGES = [
  { id: 0, author: "Title", message: "dolor sit amet, consect" },
];

const MESSAGE_DELETE_ANIMATION = { height: 0, opacity: 0 };
const MESSAGE_DELETE_TRANSITION = {
  opacity: {
    transition: {
      duration: 0
    }
  }
};

const App = () => {
  const [messagesList, setMessagesList] = useState(MESSAGES);
  const [showActions, setShowActions] = useState(false);

  const handleDrag = (info: any) => {
    const dragDistance = info.point.x;
    if (dragDistance < 275) {
      setShowActions(true);
    }
  }

  const handleDragEnd = (info: any) => {
    const dragDistance = info.point.x;
  };

  return (
    <main className="h-screen w-screen bg-gray-900 text-white p-10">
      <header>
        <h1 className="mb-2">Messages</h1>
      </header>
      <ul className="mt-3 list-none">
        <AnimatePresence>
          {messagesList.map((message) => (
            <motion.li
              key={message.id}
              exit={MESSAGE_DELETE_ANIMATION}
              transition={MESSAGE_DELETE_TRANSITION}
              className="relative border-t border-gray-700"
            >
              <motion.div
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                onDragEnd={(_, info) => handleDragEnd(info)}
                className="relative flex items-center bg-gray-900 hover:cursor-pointer"
                onDrag={(_, info) => handleDrag(info)}
              >
                <div className="message-text flex-1 ml-3 py-2">
                  <h3>{message.author}</h3>
                  <p className="text-gray-400 text-sm">{message.message}</p>
                </div>
              </motion.div>
              {
                showActions &&               (
                  <div className="absolute h-full top-1/2 right-0 flex -translate-y-1/2">
                    <div className=" bg-orange-500 h-full flex flex-col items-center justify-center p-2" onClick={() => setShowActions(false)}>
                      Cancel
                    </div>
                    <div className="bg-red-500 h-full flex flex-col items-center justify-center p-2" onClick={() => setShowActions(false)}>
                      Delete
                    </div>
                  </div>
                )
              }
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>
    </main>
  );
};

export default App;