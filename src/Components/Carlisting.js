/* ═══════════════════════════════════════
   CAR LISTING COMPONENT
   Sections: New Cars, Used Cars, Offers
   + Filter Bar + Car Detail Modal
═══════════════════════════════════════ */

$(document).ready(function () {

  /* ══════════════════════════════════════
  DATA In JSON FORMAT
  ══════════════════════════════════════ */
  const cars = [
    /* ─── NEW CARS ─── */
    {
      id: 1, status: 'new', type: 'suv',
      make: 'BMW', model: 'X5 xDrive40i',
      year: 2024, price: 65900, oldPrice: null,
      fuel: 'Petrol', transmission: 'Automatic', mileage: '0 km',
      img: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&q=80',
      specs: {
        interior:   { Seats: '5', Upholstery: 'Leather', Infotainment: '12.3" iDrive', Sunroof: 'Panoramic', 'Climate Control': 'Tri-zone', 'Sound System': 'Harman Kardon' },
        exterior:   { Colour: 'Alpine White', Wheels: '21" Alloy', Headlights: 'LED Adaptive', 'Roof Rails': 'Yes', 'Parking Sensors': 'Front & Rear', Camera: '360°' },
        engine:     { Engine: '3.0L 6-cyl', Power: '340 hp', Torque: '450 Nm', '0-100 km/h': '5.5 sec', 'Top Speed': '250 km/h', Drivetrain: 'AWD xDrive' },
        dimensions: { Length: '4,922 mm', Width: '2,004 mm', Height: '1,745 mm', Wheelbase: '2,975 mm', 'Boot Space': '650 L', 'Kerb Weight': '2,085 kg' }
      }
    },
    {
      id: 2, status: 'new', type: 'sedan',
      make: 'Mercedes-AMG', model: 'S63 E Performance',
      year: 2024, price: 186200, oldPrice: null,
      fuel: 'Hybrid Petrol', transmission: 'Automatic', mileage: '0 km',
      img: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&q=80',
      specs: {
        interior:   { Seats: '5', Upholstery: 'Nappa Leather', Infotainment: '12.8" MBUX OLED', Sunroof: 'Panoramic', 'Climate Control': 'Four-zone', 'Sound System': 'Burmester 4D Surround' },
        exterior:   { Colour: 'Obsidian Black', Wheels: '21" AMG Forged Alloy', Headlights: 'Digital Light', Spoiler: 'AMG Rear Lip Spoiler', 'Parking Sensors': 'Front & Rear', Camera: '360° Camera' },
        engine:     { Engine: '4.0L V8 Biturbo Hybrid', Power: '791 hp', Torque: '1430 Nm', '0-100 km/h': '3.3 sec', 'Top Speed': '290 km/h', Drivetrain: 'AWD' },
        dimensions: { Length: '5,336 mm', Width: '1,954 mm', Height: '1,515 mm', Wheelbase: '3,216 mm', 'Boot Space': '305 L', 'Kerb Weight': '2,595 kg' }
      }
    },
    {
      id: 3, status: 'new', type: 'sports car',
      make: 'Porsche', model: '911 Carrera',
      year: 2024, price: 114400, oldPrice: null,
      fuel: 'Petrol', transmission: 'Automatic', mileage: '0 km',
      img: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80',
      specs: {
        interior:   { Seats: '4', Upholstery: 'Leather', Infotainment: '10.9" Touchscreen', Sunroof: 'Optional', 'Climate Control': 'Dual-zone', 'Sound System': 'BOSE Surround Sound' },
        exterior:   { Colour: 'Guards Red', Wheels: '19"/20" Carrera Wheels', Headlights: 'LED Matrix', Spoiler: 'Active Rear Spoiler', 'Parking Sensors': 'Front & Rear', Camera: '360° Camera' },
        engine:     { Engine: '3.0L Twin-Turbo Flat-6', Power: '379 hp', Torque: '450 Nm', '0-100 km/h': '4.2 sec', 'Top Speed': '293 km/h', Drivetrain: 'RWD' },
        dimensions: { Length: '4,519 mm', Width: '1,852 mm', Height: '1,300 mm', Wheelbase: '2,450 mm', 'Boot Space': '132 L', 'Kerb Weight': '1,505 kg' }
      }
    },
    {
      id: 4, status: 'new', type: 'suv',
      make: 'Audi', model: 'Q7 55 TFSI',
      year: 2024, price: 82500, oldPrice: null,
      fuel: 'Petrol', transmission: 'Automatic', mileage: '0 km',
      img: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&q=80',
      specs: {
        interior:   { Seats: '7', Upholstery: 'Valcona Leather', Infotainment: '10.1" MMI', Sunroof: 'Panoramic', 'Climate Control': 'Quad-zone', 'Sound System': 'Bang & Olufsen' },
        exterior:   { Colour: 'Glacier White', Wheels: '22" Alloy', Headlights: 'Matrix LED', 'Roof Rails': 'Yes', 'Parking Sensors': 'Front & Rear', Camera: '360°' },
        engine:     { Engine: '3.0L V6 TFSI', Power: '340 hp', Torque: '500 Nm', '0-100 km/h': '5.9 sec', 'Top Speed': '250 km/h', Drivetrain: 'Quattro AWD' },
        dimensions: { Length: '5,063 mm', Width: '1,968 mm', Height: '1,741 mm', Wheelbase: '2,994 mm', 'Boot Space': '865 L', 'Kerb Weight': '2,195 kg' }
      }
    },

    /* ─── NEW CARS — 8 EXTRA (added) ─── */

    /* Hatchback 1 */
    {
      id: 9, status: 'new', type: 'hatchback',
      make: 'Volkswagen', model: 'Golf GTI',
      year: 2024, price: 38900, oldPrice: null,
      fuel: 'Petrol', transmission: 'Manual', mileage: '0 km',
      img: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?w=800&q=80',
      specs: {
        interior:   { Seats: '5', Upholstery: 'Sport Cloth', Infotainment: '10" Touchscreen', Sunroof: 'Optional', 'Climate Control': 'Dual-zone', 'Sound System': 'Harman Kardon' },
        exterior:   { Colour: 'Tornado Red', Wheels: '18" Dallas Alloy', Headlights: 'LED Matrix', Spoiler: 'Rear Lip', 'Parking Sensors': 'Front & Rear', Camera: 'Reversing' },
        engine:     { Engine: '2.0L TSI Turbo', Power: '245 hp', Torque: '370 Nm', '0-100 km/h': '6.3 sec', 'Top Speed': '250 km/h', Drivetrain: 'FWD' },
        dimensions: { Length: '4,284 mm', Width: '1,789 mm', Height: '1,456 mm', Wheelbase: '2,631 mm', 'Boot Space': '374 L', 'Kerb Weight': '1,432 kg' }
      }
    },
    /* Hatchback 2 */
    {
      id: 10, status: 'new', type: 'hatchback',
      make: 'Honda', model: 'Civic Type R',
      year: 2024, price: 42700, oldPrice: null,
      fuel: 'Petrol', transmission: 'Manual', mileage: '0 km',
      img: './Image/Honda_civic.jpg',
      specs: {
        interior:   { Seats: '5', Upholstery: 'Alcantara/Leather', Infotainment: '9" Honda CONNECT', Sunroof: 'None', 'Climate Control': 'Dual-zone', 'Sound System': 'Bose Premium' },
        exterior:   { Colour: 'Championship White', Wheels: '20" BBS Alloy', Headlights: 'Full LED', Spoiler: 'Rear Wing', 'Parking Sensors': 'Front & Rear', Camera: '360°' },
        engine:     { Engine: '2.0L VTEC Turbo', Power: '329 hp', Torque: '420 Nm', '0-100 km/h': '5.4 sec', 'Top Speed': '275 km/h', Drivetrain: 'FWD' },
        dimensions: { Length: '4,589 mm', Width: '1,890 mm', Height: '1,405 mm', Wheelbase: '2,735 mm', 'Boot Space': '351 L', 'Kerb Weight': '1,432 kg' }
      }
    },
    /* Hatchback 3 */
    {
      id: 11, status: 'new', type: 'hatchback',
      make: 'Ford', model: 'Focus ST',
      year: 2024, price: 35200, oldPrice: null,
      fuel: 'Petrol', transmission: 'Manual', mileage: '0 km',
      img: 'https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=800&q=80',
      specs: {
        interior:   { Seats: '5', Upholstery: 'Sport Fabric', Infotainment: '13.2" SYNC 4', Sunroof: 'Panoramic', 'Climate Control': 'Dual-zone', 'Sound System': 'B&O Audio' },
        exterior:   { Colour: 'Mean Green', Wheels: '19" ST Alloy', Headlights: 'LED', Spoiler: 'Rear Spoiler', 'Parking Sensors': 'Front & Rear', Camera: 'Reversing' },
        engine:     { Engine: '2.3L EcoBoost Turbo', Power: '280 hp', Torque: '420 Nm', '0-100 km/h': '5.7 sec', 'Top Speed': '250 km/h', Drivetrain: 'FWD' },
        dimensions: { Length: '4,391 mm', Width: '1,825 mm', Height: '1,476 mm', Wheelbase: '2,648 mm', 'Boot Space': '375 L', 'Kerb Weight': '1,385 kg' }
      }
    },
    /* Convertible 1 */
    {
      id: 12, status: 'new', type: 'convertible',
      make: 'BMW', model: '4 Series Convertible',
      year: 2024, price: 72900, oldPrice: null,
      fuel: 'Petrol', transmission: 'Automatic', mileage: '0 km',
      img: './Image/Bmw_s4.jpg',
      specs: {
        interior:   { Seats: '4', Upholstery: 'Vernasca Leather', Infotainment: '12.3" iDrive 7', Sunroof: 'Soft-top Convertible', 'Climate Control': 'Dual-zone', 'Sound System': 'Harman Kardon' },
        exterior:   { Colour: 'Portimao Blue', Wheels: '19" M Sport Alloy', Headlights: 'LED Adaptive', Spoiler: 'Integrated Rear', 'Parking Sensors': 'Front & Rear', Camera: '360°' },
        engine:     { Engine: '2.0L 4-cyl TwinPower', Power: '255 hp', Torque: '400 Nm', '0-100 km/h': '6.1 sec', 'Top Speed': '250 km/h', Drivetrain: 'RWD' },
        dimensions: { Length: '4,776 mm', Width: '1,852 mm', Height: '1,397 mm', Wheelbase: '2,851 mm', 'Boot Space': '300 L', 'Kerb Weight': '1,750 kg' }
      }
    },
    /* Convertible 2 */
    {
      id: 13, status: 'new', type: 'convertible',
      make: 'Mercedes-Benz', model: 'E-Class Cabriolet',
      year: 2024, price: 88500, oldPrice: null,
      fuel: 'Petrol', transmission: 'Automatic', mileage: '0 km',
      img: 'https://images.unsplash.com/photo-1700183421717-30b3f8a9329e?q=80&w=872&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      specs: {
        interior:   { Seats: '4', Upholstery: 'Nappa Leather', Infotainment: '11.9" MBUX', Sunroof: 'Fabric Soft-Top', 'Climate Control': 'Tri-zone', 'Sound System': 'Burmester 3D' },
        exterior:   { Colour: 'Selenite Grey', Wheels: '20" AMG Alloy', Headlights: 'Multibeam LED', Spoiler: 'Retractable Rear', 'Parking Sensors': 'Front & Rear', Camera: '360°' },
        engine:     { Engine: '2.0L Turbo 4-cyl', Power: '255 hp', Torque: '400 Nm', '0-100 km/h': '6.4 sec', 'Top Speed': '250 km/h', Drivetrain: 'RWD' },
        dimensions: { Length: '4,826 mm', Width: '1,860 mm', Height: '1,407 mm', Wheelbase: '2,873 mm', 'Boot Space': '310 L', 'Kerb Weight': '1,855 kg' }
      }
    },
    /* Others 1 — Electric */
    {
      id: 14, status: 'new', type: 'electric',
      make: 'Tesla', model: 'Model 3 Long Range',
      year: 2024, price: 54990, oldPrice: null,
      fuel: 'Electric', transmission: 'Automatic', mileage: '0 km',
      img: 'https://images.unsplash.com/photo-1561580125-028ee3bd62eb?w=800&q=80',
      specs: {
        interior:   { Seats: '5', Upholstery: 'Vegan Leather', Infotainment: '15.4" Touchscreen', Sunroof: 'Glass Roof', 'Climate Control': 'Dual-zone', 'Sound System': 'Premium Audio' },
        exterior:   { Colour: 'Pearl White', Wheels: '19" Tempest Alloy', Headlights: 'LED', Spoiler: 'Optional', 'Parking Sensors': 'Ultrasonic', Camera: '360° Sentry Mode' },
        engine:     { Engine: 'Dual Motor Electric', Power: '358 hp', Torque: '493 Nm', '0-100 km/h': '4.4 sec', 'Top Speed': '233 km/h', Drivetrain: 'AWD' },
        dimensions: { Length: '4,694 mm', Width: '1,849 mm', Height: '1,443 mm', Wheelbase: '2,875 mm', 'Boot Space': '682 L', 'Kerb Weight': '1,844 kg' }
      }
    },
    /* Others 2 — Minivan */
    {
      id: 15, status: 'new', type: 'minivan',
      make: 'Toyota', model: 'Alphard Executive',
      year: 2024, price: 71000, oldPrice: null,
      fuel: 'Hybrid Petrol', transmission: 'Automatic', mileage: '0 km',
      img: './Image/Toyota.jpg',
      specs: {
        interior:   { Seats: '7', Upholstery: 'Semi-Aniline Leather', Infotainment: '11.6" Executive Display', Sunroof: 'Panoramic', 'Climate Control': 'Quad-zone', 'Sound System': 'JBL Premium' },
        exterior:   { Colour: 'Precious Silver', Wheels: '18" Chrome Alloy', Headlights: 'LED', 'Roof Rails': 'No', 'Parking Sensors': 'Front & Rear', Camera: '360°' },
        engine:     { Engine: '2.5L Hybrid 4-cyl', Power: '246 hp', Torque: '239 Nm', '0-100 km/h': '8.5 sec', 'Top Speed': '180 km/h', Drivetrain: 'FWD' },
        dimensions: { Length: '4,995 mm', Width: '1,850 mm', Height: '1,895 mm', Wheelbase: '3,000 mm', 'Boot Space': '810 L', 'Kerb Weight': '2,100 kg' }
      }
    },
    /* Others 3 — Coupe */
    {
      id: 16, status: 'new', type: 'coupe',
      make: 'Lexus', model: 'LC 500',
      year: 2024, price: 98700, oldPrice: null,
      fuel: 'Petrol', transmission: 'Automatic', mileage: '0 km',
      img: 'https://images.unsplash.com/photo-1577496550006-f24a50e9d50c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGV4dXMlMjBMQyUyMDUwMHxlbnwwfHwwfHx8MA%3D%3D',
      specs: {
        interior:   { Seats: '4', Upholstery: 'Semi-Aniline Leather', Infotainment: '12.3" Touchscreen', Sunroof: 'Panoramic', 'Climate Control': 'Dual-zone', 'Sound System': 'Mark Levinson 13-spk' },
        exterior:   { Colour: 'Infrared', Wheels: '21" Dark Alloy', Headlights: 'LED Blade', Spoiler: 'Integrated', 'Parking Sensors': 'Front & Rear', Camera: '360°' },
        engine:     { Engine: '5.0L V8 NA', Power: '471 hp', Torque: '540 Nm', '0-100 km/h': '4.4 sec', 'Top Speed': '270 km/h', Drivetrain: 'RWD' },
        dimensions: { Length: '4,770 mm', Width: '1,920 mm', Height: '1,345 mm', Wheelbase: '2,870 mm', 'Boot Space': '197 L', 'Kerb Weight': '1,975 kg' }
      }
    },

    /* ─── USED CARS (original 4) ─── */
    {
      id: 5, status: 'used', type: 'sedan',
      make: 'Toyota', model: 'Camry 2.5 SE',
      year: 2021, price: 24900, oldPrice: 28500,
      fuel: 'Petrol', transmission: 'Automatic', mileage: '42,000 km',
      img: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=800&q=80',
      specs: {
        interior:   { Seats: '5', Upholstery: 'Fabric', Infotainment: '9" Touchscreen', Sunroof: 'None', 'Climate Control': 'Dual-zone', 'Sound System': 'JBL Premium' },
        exterior:   { Colour: 'Midnight Black', Wheels: '18" Alloy', Headlights: 'LED', Spoiler: 'Integrated', 'Parking Sensors': 'Rear', Camera: 'Reversing' },
        engine:     { Engine: '2.5L 4-cyl', Power: '203 hp', Torque: '252 Nm', '0-100 km/h': '7.6 sec', 'Top Speed': '210 km/h', Drivetrain: 'FWD' },
        dimensions: { Length: '4,885 mm', Width: '1,840 mm', Height: '1,455 mm', Wheelbase: '2,825 mm', 'Boot Space': '428 L', 'Kerb Weight': '1,575 kg' }
      }
    },
    {
      id: 6, status: 'used', type: 'suv',
      make: 'Honda', model: 'CR-V EX-L',
      year: 2020, price: 27500, oldPrice: 31000,
      fuel: 'Petrol', transmission: 'Automatic', mileage: '58,000 km',
      img: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800&q=80',
      specs: {
        interior:   { Seats: '5', Upholstery: 'Leather', Infotainment: '7" Touchscreen', Sunroof: 'Panoramic', 'Climate Control': 'Dual-zone', 'Sound System': 'Premium Audio' },
        exterior:   { Colour: 'Lunar Silver', Wheels: '18" Alloy', Headlights: 'LED', 'Roof Rails': 'Yes', 'Parking Sensors': 'Rear', Camera: 'Reversing' },
        engine:     { Engine: '1.5L Turbo', Power: '190 hp', Torque: '243 Nm', '0-100 km/h': '8.1 sec', 'Top Speed': '200 km/h', Drivetrain: 'AWD' },
        dimensions: { Length: '4,607 mm', Width: '1,855 mm', Height: '1,679 mm', Wheelbase: '2,661 mm', 'Boot Space': '522 L', 'Kerb Weight': '1,607 kg' }
      }
    },
    {
      id: 7, status: 'used', type: 'sedan',
      make: 'Nissan', model: 'Maxima Platinum',
      year: 2019, price: 28900, oldPrice: 34000,
      fuel: 'Petrol', transmission: 'Automatic', mileage: '31,000 km',
      img: './Image/Nissan.jpg',
      specs: {
        interior:   { Seats: '5', Upholstery: 'Leather', Infotainment: '8" NissanConnect', Sunroof: 'Panoramic', 'Climate Control': 'Dual-zone', 'Sound System': 'BOSE Premium Audio' },
        exterior:   { Colour: 'Pearl White', Wheels: '19" Alloy', Headlights: 'LED', Spoiler: 'Integrated', 'Parking Sensors': 'Front & Rear', Camera: '360° Around View Monitor' },
        engine:     { Engine: '3.5L V6', Power: '300 hp', Torque: '354 Nm', '0-100 km/h': '5.9 sec', 'Top Speed': '250 km/h', Drivetrain: 'FWD' },
        dimensions: { Length: '4,897 mm', Width: '1,860 mm', Height: '1,435 mm', Wheelbase: '2,775 mm', 'Boot Space': '405 L', 'Kerb Weight': '1,632 kg' }
      }
    },
    {
      id: 8, status: 'used', type: 'hatchback',
      make: 'Hyundai', model: 'i30 N',
      year: 2021, price: 22900, oldPrice: 26500,
      fuel: 'Petrol', transmission: 'Manual', mileage: '28,000 km',
      img: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800&q=80',
      specs: {
        interior:   { Seats: '5', Upholstery: 'Sport Fabric', Infotainment: '10.25" Touchscreen', Sunroof: 'None', 'Climate Control': 'Dual-zone', 'Sound System': 'Bose Premium' },
        exterior:   { Colour: 'Performance Blue', Wheels: '19" N Alloy', Headlights: 'LED', Spoiler: 'Rear Wing', 'Parking Sensors': 'Rear', Camera: 'Reversing' },
        engine:     { Engine: '2.0L Turbo', Power: '280 hp', Torque: '392 Nm', '0-100 km/h': '5.4 sec', 'Top Speed': '250 km/h', Drivetrain: 'FWD' },
        dimensions: { Length: '4,341 mm', Width: '1,795 mm', Height: '1,447 mm', Wheelbase: '2,650 mm', 'Boot Space': '381 L', 'Kerb Weight': '1,430 kg' }
      }
    },

    /* ─── USED CARS — 8 EXTRA (added) ─── */
    {
      id: 17, status: 'used', type: 'suv',
      make: 'Jeep', model: 'Grand Cherokee Limited',
      year: 2020, price: 33500, oldPrice: 39000,
      fuel: 'Petrol', transmission: 'Automatic', mileage: '47,000 km',
      img: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800&q=80',
      specs: {
        interior:   { Seats: '5', Upholstery: 'Leather', Infotainment: '8.4" Uconnect', Sunroof: 'Panoramic', 'Climate Control': 'Dual-zone', 'Sound System': 'Alpine Premium' },
        exterior:   { Colour: 'Brilliant Black', Wheels: '20" Polished Alloy', Headlights: 'LED', 'Roof Rails': 'Yes', 'Parking Sensors': 'Front & Rear', Camera: '360°' },
        engine:     { Engine: '3.6L V6 Pentastar', Power: '293 hp', Torque: '353 Nm', '0-100 km/h': '7.4 sec', 'Top Speed': '200 km/h', Drivetrain: '4WD Quadra-Trac II' },
        dimensions: { Length: '4,828 mm', Width: '1,943 mm', Height: '1,782 mm', Wheelbase: '2,915 mm', 'Boot Space': '1,026 L', 'Kerb Weight': '2,049 kg' }
      }
    },
    {
      id: 18, status: 'used', type: 'sedan',
      make: 'BMW', model: '3 Series 330i',
      year: 2020, price: 34200, oldPrice: 40500,
      fuel: 'Petrol', transmission: 'Automatic', mileage: '39,000 km',
      img: './Image/bmw_s3.jpg',
      specs: {
        interior:   { Seats: '5', Upholstery: 'Dakota Leather', Infotainment: '10.25" iDrive', Sunroof: 'Optional', 'Climate Control': 'Tri-zone', 'Sound System': 'Harman Kardon' },
        exterior:   { Colour: 'Mineral Grey', Wheels: '18" M Sport Alloy', Headlights: 'LED', Spoiler: 'Integrated', 'Parking Sensors': 'Front & Rear', Camera: 'Reversing' },
        engine:     { Engine: '2.0L 4-cyl TwinPower', Power: '255 hp', Torque: '400 Nm', '0-100 km/h': '5.8 sec', 'Top Speed': '250 km/h', Drivetrain: 'RWD' },
        dimensions: { Length: '4,709 mm', Width: '1,827 mm', Height: '1,435 mm', Wheelbase: '2,851 mm', 'Boot Space': '480 L', 'Kerb Weight': '1,530 kg' }
      }
    },
    {
      id: 19, status: 'used', type: 'hatchback',
      make: 'Mazda', model: 'Mazda3 Hatchback',
      year: 2021, price: 21400, oldPrice: 25500,
      fuel: 'Petrol', transmission: 'Automatic', mileage: '33,000 km',
      img: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800&q=80',
      specs: {
        interior:   { Seats: '5', Upholstery: 'Leather', Infotainment: '8.8" Mazda Connect', Sunroof: 'Panoramic', 'Climate Control': 'Dual-zone', 'Sound System': 'BOSE' },
        exterior:   { Colour: 'Soul Red Crystal', Wheels: '18" Alloy', Headlights: 'LED', Spoiler: 'Rear Spoiler', 'Parking Sensors': 'Rear', Camera: 'Reversing' },
        engine:     { Engine: '2.5L SkyActiv-G', Power: '186 hp', Torque: '252 Nm', '0-100 km/h': '7.4 sec', 'Top Speed': '210 km/h', Drivetrain: 'AWD' },
        dimensions: { Length: '4,459 mm', Width: '1,797 mm', Height: '1,440 mm', Wheelbase: '2,726 mm', 'Boot Space': '295 L', 'Kerb Weight': '1,460 kg' }
      }
    },
    {
      id: 20, status: 'used', type: 'convertible',
      make: 'Audi', model: 'A5 Cabriolet',
      year: 2019, price: 36800, oldPrice: 43000,
      fuel: 'Petrol', transmission: 'Automatic', mileage: '51,000 km',
      img: 'https://images.unsplash.com/photo-1637051373254-edf5c8e7a6f6?q=80&w=890&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      specs: {
        interior:   { Seats: '4', Upholstery: 'Fine Nappa Leather', Infotainment: '8.3" MMI Navigation Plus', Sunroof: 'Fabric Soft-Top', 'Climate Control': 'Dual-zone', 'Sound System': 'Bang & Olufsen' },
        exterior:   { Colour: 'Navarra Blue', Wheels: '19" Alloy', Headlights: 'LED', Spoiler: 'Integrated', 'Parking Sensors': 'Front & Rear', Camera: 'Reversing' },
        engine:     { Engine: '2.0L TFSI Turbo', Power: '249 hp', Torque: '370 Nm', '0-100 km/h': '6.4 sec', 'Top Speed': '250 km/h', Drivetrain: 'FWD' },
        dimensions: { Length: '4,686 mm', Width: '1,846 mm', Height: '1,386 mm', Wheelbase: '2,771 mm', 'Boot Space': '380 L', 'Kerb Weight': '1,750 kg' }
      }
    },
    {
      id: 21, status: 'used', type: 'suv',
      make: 'Volvo', model: 'XC60 T6 Inscription',
      year: 2021, price: 38900, oldPrice: 45000,
      fuel: 'Hybrid Petrol', transmission: 'Automatic', mileage: '24,000 km',
      img: 'https://images.unsplash.com/photo-1710866566744-efe7be345bd4?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      specs: {
        interior:   { Seats: '5', Upholstery: 'Nappa Leather', Infotainment: '9" Sensus Connect', Sunroof: 'Panoramic', 'Climate Control': 'Four-zone', 'Sound System': 'Bowers & Wilkins' },
        exterior:   { Colour: 'Crystal White Pearl', Wheels: '20" Diamond Cut Alloy', Headlights: 'LED Thor Hammer', 'Roof Rails': 'Yes', 'Parking Sensors': 'Front & Rear', Camera: '360°' },
        engine:     { Engine: '2.0L T6 PHEV', Power: '340 hp', Torque: '590 Nm', '0-100 km/h': '5.5 sec', 'Top Speed': '230 km/h', Drivetrain: 'AWD' },
        dimensions: { Length: '4,688 mm', Width: '1,902 mm', Height: '1,658 mm', Wheelbase: '2,865 mm', 'Boot Space': '505 L', 'Kerb Weight': '2,100 kg' }
      }
    },
    {
      id: 22, status: 'used', type: 'sports car',
      make: 'Ford', model: 'Mustang GT',
      year: 2020, price: 38500, oldPrice: 44500,
      fuel: 'Petrol', transmission: 'Manual', mileage: '36,000 km',
      img: 'https://images.unsplash.com/photo-1494905998402-395d579af36f?w=800&q=80',
      specs: {
        interior:   { Seats: '4', Upholstery: 'Leather/Alcantara', Infotainment: '12" SYNC 4', Sunroof: 'None', 'Climate Control': 'Dual-zone', 'Sound System': 'B&O Audio' },
        exterior:   { Colour: 'Race Red', Wheels: '19" Alloy', Headlights: 'LED', Spoiler: 'Deck Lid Spoiler', 'Parking Sensors': 'Rear', Camera: 'Reversing' },
        engine:     { Engine: '5.0L V8 Coyote', Power: '450 hp', Torque: '529 Nm', '0-100 km/h': '4.8 sec', 'Top Speed': '250 km/h', Drivetrain: 'RWD' },
        dimensions: { Length: '4,784 mm', Width: '1,916 mm', Height: '1,381 mm', Wheelbase: '2,720 mm', 'Boot Space': '408 L', 'Kerb Weight': '1,750 kg' }
      }
    },
    {
      id: 23, status: 'used', type: 'sedan',
      make: 'Lexus', model: 'ES 350 F Sport',
      year: 2020, price: 35900, oldPrice: 41000,
      fuel: 'Petrol', transmission: 'Automatic', mileage: '29,000 km',
      img: './Image/lexus.jpg',
      specs: {
        interior:   { Seats: '5', Upholstery: 'Semi-Aniline Leather', Infotainment: '12.3" Touchscreen', Sunroof: 'Panoramic', 'Climate Control': 'Tri-zone', 'Sound System': 'Mark Levinson' },
        exterior:   { Colour: 'Obsidian Black', Wheels: '19" F Sport Alloy', Headlights: 'Triple LED', Spoiler: 'Integrated', 'Parking Sensors': 'Front & Rear', Camera: '360°' },
        engine:     { Engine: '3.5L V6 NA', Power: '302 hp', Torque: '363 Nm', '0-100 km/h': '6.6 sec', 'Top Speed': '210 km/h', Drivetrain: 'FWD' },
        dimensions: { Length: '4,975 mm', Width: '1,865 mm', Height: '1,445 mm', Wheelbase: '2,870 mm', 'Boot Space': '454 L', 'Kerb Weight': '1,740 kg' }
      }
    },
    {
      id: 24, status: 'used', type: 'hatchback',
      make: 'Renault', model: 'Megane RS Trophy',
      year: 2020, price: 26700, oldPrice: 32000,
      fuel: 'Petrol', transmission: 'Manual', mileage: '22,000 km',
      img: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&q=80',
      specs: {
        interior:   { Seats: '5', Upholstery: 'Alcantara/Leather', Infotainment: '9.3" RS Monitor', Sunroof: 'None', 'Climate Control': 'Dual-zone', 'Sound System': 'Focal Premium' },
        exterior:   { Colour: 'Liquid Yellow', Wheels: '19" OZ Racing Alloy', Headlights: 'Pure Vision LED', Spoiler: 'Rear Splitter', 'Parking Sensors': 'Rear', Camera: 'Reversing' },
        engine:     { Engine: '1.8L Turbo 4-cyl', Power: '300 hp', Torque: '420 Nm', '0-100 km/h': '5.4 sec', 'Top Speed': '270 km/h', Drivetrain: 'FWD' },
        dimensions: { Length: '4,360 mm', Width: '1,814 mm', Height: '1,443 mm', Wheelbase: '2,669 mm', 'Boot Space': '341 L', 'Kerb Weight': '1,474 kg' }
      }
    },
  ];

  const offers = [
    { tag: 'Weekend Deal',  title: '20% Off All SUVs',             desc: 'This weekend only — save big on our full SUV range.',         img: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800&q=80', btn: 'Claim Offer' },
    { tag: 'Finance Deal',  title: '0% APR for 36 Months',         desc: 'Drive away today with zero interest on selected models.',     img: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&q=80', btn: 'Learn More'  },
    { tag: 'Trade-In',      title: 'Get $3,000 Extra on Trade-In',  desc: 'Trade in your current car and get an extra $3,000 bonus.',   img: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&q=80', btn: 'Get a Quote' },
  ];

  const FILTERS  = ['All', 'Hatchback', 'Sedan', 'SUV', 'Convertible', 'Electric', 'Coupe', 'Minivan'];
  const TABS     = ['Interior', 'Exterior', 'Engine', 'Dimensions'];
  const TAB_KEYS = ['interior', 'exterior', 'engine', 'dimensions'];

  /* How many cards are shown initially before "View All" */
  const INITIAL_SHOW = 4;

  let activeNewFilter  = 'all';
  let newViewAllOpen   = false;
  let usedViewAllOpen  = false;

  /* ══════════════════════════════════════ HELPERS ══════════════════════════════════════ */
  function fmt(n){ return '$' + Number(n).toLocaleString(); }

  function carCard(car){
    return `
      <div class="cl-card" data-id="${car.id}">
        <div class="cl-card-img-wrap">
          <img class="cl-card-img" src="${car.img}" alt="${car.make} ${car.model}" loading="lazy">
          <span class="cl-card-badge ${car.status}">${car.status === 'new' ? 'New' : 'Used'}</span>
        </div>
        <div class="cl-card-body">
          <p class="cl-card-make">${car.make}</p>
          <h3 class="cl-card-name">${car.model}</h3>
          <div class="cl-card-meta">
            <span>⛽ ${car.fuel}</span>
            <span>⚙️ ${car.transmission}</span>
            <span>📍 ${car.mileage}</span>
          </div>
          <div class="cl-card-footer">
            <div>
              <span class="cl-card-price">${fmt(car.price)}</span>
              ${car.oldPrice ? `<span class="cl-card-price-old">${fmt(car.oldPrice)}</span>` : ''}
            </div>
            <button class="cl-card-view">View</button>
          </div>
        </div>
      </div>`;
  }

  /* ══════════════════════════════════════ FILTER BAR ══════════════════════════════════════ */
  function filterBar(){
    return `
      <div class="cl-filter-bar" id="clFilterBar">
        ${FILTERS.map(f => `
          <button class="cl-filter-btn ${f === 'All' ? 'active' : ''}"
                  data-filter="${f.toLowerCase()}">${f}</button>
        `).join('')}
      </div>`;
  }

  /* ══════════════════════════════════════ SECTIONS ══════════════════════════════════════ */
  function newCarsSection(){
    const newCars = cars.filter(c => c.status === 'new');
    const shown   = newCars.slice(0, INITIAL_SHOW);
    const total   = newCars.length;

    return `
      <section class="cl-section" id="new-cars">
        <div class="cl-section-header">
          <div>
            <h2 class="cl-section-title">New Cars</h2>
            <p class="cl-section-sub">Brand new vehicles with full manufacturer warranty</p>
          </div>
          <a href="#" class="cl-view-all" id="clNewViewAll" data-section="new">
            View all <span class="cl-view-all-count">(${total})</span>
          </a>
        </div>
        ${filterBar()}
        <div class="cl-grid" id="clNewGrid">
          ${shown.map(carCard).join('')}
        </div>
      </section>`;
  }

  function usedCarsSection(){
    const usedCars = cars.filter(c => c.status === 'used');
    const shown    = usedCars.slice(0, INITIAL_SHOW);
    const total    = usedCars.length;

    return `
      <section class="cl-section" id="used-cars" style="background:#fafafa;">
        <div class="cl-section-header">
          <div>
            <h2 class="cl-section-title">Used Cars</h2>
            <p class="cl-section-sub">Certified pre-owned vehicles at great prices</p>
          </div>
          <a href="#" class="cl-view-all" id="clUsedViewAll" data-section="used">
            View all <span class="cl-view-all-count">(${total})</span>
          </a>
        </div>
        <div class="cl-grid" id="clUsedGrid">
          ${shown.map(carCard).join('')}
        </div>
      </section>`;
  }

  function offersSection(){
    return `
      <section class="cl-section" id="offers">
        <div class="cl-section-header">
          <div>
            <h2 class="cl-section-title">Current Offers</h2>
            <p class="cl-section-sub">Limited-time deals you don't want to miss</p>
          </div>
        </div>
        <div class="cl-offers-grid">
          ${offers.map(o => `
            <div class="cl-offer-card">
              <img class="cl-offer-bg" src="${o.img}" alt="${o.title}">
              <div class="cl-offer-overlay"></div>
              <div class="cl-offer-body">
                <span class="cl-offer-tag">${o.tag}</span>
                <h3 class="cl-offer-title">${o.title}</h3>
                <p class="cl-offer-desc">${o.desc}</p>
                <button class="cl-offer-btn">${o.btn}</button>
              </div>
            </div>
          `).join('')}
        </div>
      </section>`;
  }

  /* ══════════════════════════════════════ MODAL ══════════════════════════════════════ */
  function modalHTML(){
    return `
      <div class="cl-modal-overlay" id="clModal" style="display:none;">
        <div class="cl-modal" id="clModalBox">

          <button class="cl-modal-close" id="clModalClose">
            <i class="fas fa-times"></i>
          </button>

          <div class="cl-modal-inner">

            <div class="cl-modal-gallery">
              <img class="cl-modal-gallery-img" id="clModalImg" src="" alt="">
              <span class="cl-modal-gallery-badge" id="clModalBadge"></span>
            </div>

            <div class="cl-modal-content">
              <div class="cl-modal-top">
                <div>
                  <p class="cl-modal-make" id="clModalMake"></p>
                  <h2 class="cl-modal-name" id="clModalName"></h2>
                </div>
                <div class="cl-modal-price-wrap">
                  <div class="cl-modal-price"     id="clModalPrice"></div>
                  <div class="cl-modal-price-old"  id="clModalOld"></div>
                  <div class="cl-modal-price-label">Starting price</div>
                </div>
              </div>

              <div class="cl-modal-tabs" id="clModalTabs">
                ${TABS.map((t, i) => `
                  <button class="cl-tab-btn ${i === 0 ? 'active' : ''}"
                          data-tab="${i}">${t}</button>
                `).join('')}
              </div>

              ${TAB_KEYS.map((key, i) => `
                <div class="cl-tab-panel ${i === 0 ? 'active' : ''}" id="clTabPanel${i}">
                  <div class="cl-spec-grid" id="clSpecs${i}"></div>
                </div>
              `).join('')}

              <div class="cl-modal-cta">
                <button class="cl-btn-primary">Book a Test Drive</button>
                <button class="cl-btn-secondary">Get Finance Quote</button>
              </div>
            </div>

          </div>
        </div>
      </div>`;
  }

  /* ══════════════════════════════════════ OPEN / CLOSE MODAL ══════════════════════════════════════ */
  function openModal(car){
    const overlay = document.getElementById('clModal');
    overlay.style.display    = 'flex';
    overlay.style.opacity    = '0';
    overlay.style.transition = 'opacity .25s ease';

    document.getElementById('clModalImg').src           = car.img;
    document.getElementById('clModalImg').alt           = `${car.make} ${car.model}`;
    document.getElementById('clModalBadge').textContent = car.status === 'new' ? 'New' : 'Used';
    document.getElementById('clModalBadge').className   = `cl-modal-gallery-badge ${car.status}`;
    document.getElementById('clModalMake').textContent  = `${car.make} · ${car.year}`;
    document.getElementById('clModalName').textContent  = car.model;
    document.getElementById('clModalPrice').textContent = fmt(car.price);
    document.getElementById('clModalOld').textContent   = car.oldPrice ? fmt(car.oldPrice) : '';

    TAB_KEYS.forEach(function(key, i){
      const grid = document.getElementById('clSpecs' + i);
      const data = car.specs[key] || {};
      grid.innerHTML = Object.entries(data).map(([label, val]) => `
        <div class="cl-spec-item">
          <div class="cl-spec-label">${label}</div>
          <div class="cl-spec-value">${val}</div>
        </div>
      `).join('');
    });

    document.querySelectorAll('.cl-tab-btn').forEach(function(btn, i){
      btn.classList.toggle('active', i === 0);
    });
    document.querySelectorAll('.cl-tab-panel').forEach(function(panel, i){
      panel.classList.toggle('active', i === 0);
    });

    requestAnimationFrame(function(){
      requestAnimationFrame(function(){
        overlay.style.opacity = '1';
      });
    });

    document.body.style.overflow = 'hidden';
  }

  function closeModal(){
    const overlay = document.getElementById('clModal');
    overlay.style.opacity = '0';
    setTimeout(function(){ overlay.style.display = 'none'; }, 250);
    document.body.style.overflow = '';
  }

  /* ══════════════════════════════════════ VIEW ALL LOGIC ══════════════════════════════════════ */
  function renderNewGrid(filter, showAll){
    const filtered = cars.filter(function(c){
      return c.status === 'new' && (filter === 'all' || c.type === filter);
    });
    const toShow = showAll ? filtered : filtered.slice(0, INITIAL_SHOW);
    const grid   = document.getElementById('clNewGrid');
    grid.innerHTML = toShow.length
      ? toShow.map(carCard).join('')
      : '<p style="color:#888;padding:20px 0;">No cars found for this filter.</p>';

    // Update View All link text
    const link = document.getElementById('clNewViewAll');
    if(link){
      if(showAll){
        link.innerHTML = 'Show less';
      } else {
        link.innerHTML = `View all <span class="cl-view-all-count">(${filtered.length})</span>`;
      }
    }
    bindCardClicks();
  }

  function renderUsedGrid(showAll){
    const usedCars = cars.filter(c => c.status === 'used');
    const toShow   = showAll ? usedCars : usedCars.slice(0, INITIAL_SHOW);
    const grid     = document.getElementById('clUsedGrid');
    grid.innerHTML = toShow.map(carCard).join('');

    // Update View All link text
    const link = document.getElementById('clUsedViewAll');
    if(link){
      if(showAll){
        link.innerHTML = 'Show less';
      } else {
        link.innerHTML = `View all <span class="cl-view-all-count">(${usedCars.length})</span>`;
      }
    }
    bindCardClicks();
  }

  /* ══════════════════════════════════════ FILTER LOGIC ══════════════════════════════════════ */
  function applyFilter(filter){
    activeNewFilter = filter;
    newViewAllOpen  = false;          // reset expand state when filter changes
    renderNewGrid(filter, false);
  }

  /* ══════════════════════════════════════ EVENT BINDING ══════════════════════════════════════ */
  function bindCardClicks(){
    document.querySelectorAll('.cl-card').forEach(function(card){
      card.addEventListener('click', function(){
        const id  = parseInt(this.dataset.id);
        const car = cars.find(c => c.id === id);
        if(car) openModal(car);
      });
    });
  }

  function bindAll(){
    bindCardClicks();

    /* Filter buttons */
    document.querySelectorAll('.cl-filter-btn').forEach(function(btn){
      btn.addEventListener('click', function(){
        document.querySelectorAll('.cl-filter-btn').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        applyFilter(this.dataset.filter);
      });
    });

    /* Tab buttons inside modal */
    document.querySelectorAll('.cl-tab-btn').forEach(function(btn){
      btn.addEventListener('click', function(){
        const idx = parseInt(this.dataset.tab);
        document.querySelectorAll('.cl-tab-btn').forEach(b => b.classList.remove('active'));
        document.querySelectorAll('.cl-tab-panel').forEach(p => p.classList.remove('active'));
        this.classList.add('active');
        document.getElementById('clTabPanel' + idx).classList.add('active');
      });
    });

    /* View All — New Cars */
    document.getElementById('clNewViewAll').addEventListener('click', function(e){
      e.preventDefault();
      newViewAllOpen = !newViewAllOpen;
      renderNewGrid(activeNewFilter, newViewAllOpen);
    });

    /* View All — Used Cars */
    document.getElementById('clUsedViewAll').addEventListener('click', function(e){
      e.preventDefault();
      usedViewAllOpen = !usedViewAllOpen;
      renderUsedGrid(usedViewAllOpen);
    });

    /* Modal close */
    document.getElementById('clModalClose').addEventListener('click', closeModal);
    document.getElementById('clModal').addEventListener('click', function(e){
      if(e.target === this) closeModal();
    });
    document.addEventListener('keydown', function(e){
      if(e.key === 'Escape') closeModal();
    });
  }

  /* ══════════════════════════════════════ CSS LOADER ══════════════════════════════════════ */
  function loadCSS(){
    const link = document.createElement('link');
    link.rel   = 'stylesheet';
    link.href  = './src/Styles/Carlisting.css';
    document.head.appendChild(link);
  }

  /* ══════════════════════════════════════ INIT ══════════════════════════════════════ */
  function init(){
    const root = document.getElementById('car-listing-component');
    if(!root){ console.error('#car-listing-component not found'); return; }

    root.innerHTML =
      newCarsSection()  +
      usedCarsSection() +
      offersSection()   +
      modalHTML();

    loadCSS();
    bindAll();
  }

  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();