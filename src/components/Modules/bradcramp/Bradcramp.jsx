'use client';
import StarTitle from '@/components/Templates/StarTitle/StarTitle';
import React from 'react';

function Bradcramp({title}) {
  return (
    <div className="mt-16">
      <p className="text-gray-500">{title}</p>
      <StarTitle title={title} />
    </div>
  );
}

export default Bradcramp;
