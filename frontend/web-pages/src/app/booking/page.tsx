'use client';

import { useState } from 'react';
import DatePicker from 'react-datepicker';
import emailjs from 'emailjs-com';
import 'react-datepicker/dist/react-datepicker.css';

export default function Booking() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    instagram: '',
    email: '',
    service: 'Haircut',
    message: '',
  });

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const bookingData = {
      ...formData,
      appointment_date: selectedDate.toISOString(),
    };

    try {
      // ✅ Send to MySQL via your API route
      const res = await fetch('/api/book', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bookingData),
      });

      const result = await res.json();

      if (result.success) {
        alert('Booking saved to database!');

        // ✅ Optional: Also send with EmailJS
        await emailjs.send(
          'service_d9mpx4t',
          'template_hrj234f',
          {
            ...formData,
            date: selectedDate.toString(),
          },
          '63HB6ZvWl85W5jtXI'
        );
      } else {
        alert('Error saving booking: ' + result.error);
      }
    } catch (error) {
      console.error(error);
      alert('There was an error sending your booking.');
    }
  };

  return (
    <div className="p-8 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-center">Book an Appointment</h1>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" value={formData.name} onChange={handleChange} required className="border p-2" />
        <input name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} required className="border p-2" />
        <input name="instagram" placeholder="Instagram Handle" value={formData.instagram} onChange={handleChange} required className="border p-2" />
        <input name="email" placeholder="Email (optional)" value={formData.email} onChange={handleChange} className="border p-2" />

        <select name="service" value={formData.service} onChange={handleChange} className="border p-2">
          <option>Haircut</option>
          <option>Haircut + Beard</option>
          <option>Kids Haircut</option>
        </select>

        <label>Select Date & Time:</label>
        <DatePicker
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date!)}
          showTimeSelect
          timeIntervals={45}
          dateFormat="Pp"
          className="border p-2"
        />

        <textarea name="message" placeholder="Additional message (optional)" value={formData.message} onChange={handleChange} className="border p-2" />

        <button type="submit" className="bg-black text-white py-2 px-4 rounded">Submit</button>
      </form>
    </div>
  );
}
