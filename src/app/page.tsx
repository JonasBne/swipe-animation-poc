'use client';

import Image from 'next/image'
import { useState } from 'react';
import {useSwipeable} from 'react-swipeable';
import classNames from 'classnames';

export default function Home() {
    const handlers = useSwipeable({
    onSwipedRight: () => setShowDeleteAction(true),
    onSwipedLeft: () => setShowDeleteAction(false),
    delta: 15,
    preventScrollOnSwipe: true,
  });

  const [showDeleteAction, setShowDeleteAction] = useState(false);

  return (
    <main>
          <div
      className={classNames('border-b border-grey-medium h-full', {
        'flex items-center': showDeleteAction,
      })}
      {...handlers}
    >
      {showDeleteAction && (
        <div
          className="flex flex-col justify-center bg-red-danger-opacity p-2 m-2 rounded-lg text-white bg-red-600"
          onClick={() => alert('you have clicked')}
        >
          delete
        </div>
      )}
      <div
        className={classNames('py-4 pr-4 w-full', {
          'pl-4': !showDeleteAction,
        })}
      >
            <div
      className="flex items-center gap-x-4"
    >
      <div className="flex flex-col gap-y-1 w-full">
        <span>Test device</span>
      </div>
    </div>
      </div>
    </div>
    </main>
  )
}
