'use client'

import React, { useState } from 'react'

export default function Home() {
  const [history, setHistory] = useState('')
  const [prediction, setPrediction] = useState<string | null>(null)

  const handlePredict = () => {
    const pCount = history.split('').filter((c) => c.toUpperCase() === 'P').length
    const bCount = history.split('').filter((c) => c.toUpperCase() === 'B').length

    // โมเดลจำลองความน่าจะเป็นเบื้องต้น
    const predicted = pCount > bCount ? 'B' : 'P'
    setPrediction(predicted)
  }

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
      <div className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center">ทำนายผลบาคาร่า</h1>

        <label className="block mb-2 font-semibold">กรอกผลย้อนหลัง 10 ตา (P/B):</label>
        <input
          type="text"
          maxLength={10}
          value={history}
          onChange={(e) => setHistory(e.target.value.toUpperCase())}
          className="w-full p-2 border rounded mb-4"
          placeholder="ตัวอย่าง: PPBBPBBPBP"
        />

        <button
          onClick={handlePredict}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full"
        >
          ทำนายผลถัดไป
        </button>

        {prediction && (
          <div className="mt-4 text-center text-lg">
            ผลที่คาดว่าจะออกต่อไปคือ: <span className="font-bold">{prediction}</span>
          </div>
        )}
      </div>
    </main>
  )
}
