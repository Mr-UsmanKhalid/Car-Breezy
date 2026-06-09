(function () {

  /* ─────────────────────────────────────────
     1. INJECT CSS
  ───────────────────────────────────────── */
  if (!document.getElementById('cb-research-styles')) {
    const link = document.createElement('link');
    link.id   = 'cb-research-styles';
    link.rel  = 'stylesheet';
    link.href = '../styles/research.css';
    document.head.appendChild(link);
  }

  /* ─────────────────────────────────────────
     2. VIEWPORT DETECTION
     (for responsive behavior)
  ───────────────────────────────────────── */
  function isMobile() {
    return window.innerWidth < 600;
  }

  function isTablet() {
    return window.innerWidth >= 600 && window.innerWidth <= 1024;
  }

  /* ─────────────────────────────────────────
     3. CAR DATA (mirrors car-listing data)
        Add / remove cars here to keep in sync
  ───────────────────────────────────────── */
  const cars = [
    { id: 1,  status: 'new',  make: 'BMW',           model: 'X5 xDrive40i',           year: 2024, price: 65900,  oldPrice: null,   fuel: 'Petrol',        transmission: 'Automatic', mileage: '0 km',       img: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&q=80', type: 'suv',        specs: { interior: { Seats: '5', Upholstery: 'Leather', Infotainment: '12.3" iDrive', Sunroof: 'Panoramic', 'Climate Control': 'Tri-zone', 'Sound System': 'Harman Kardon' }, exterior: { Colour: 'Alpine White', Wheels: '21" Alloy', Headlights: 'LED Adaptive', 'Roof Rails': 'Yes', 'Parking Sensors': 'Front & Rear', Camera: '360°' }, engine: { Engine: '3.0L 6-cyl', Power: '340 hp', Torque: '450 Nm', '0-100 km/h': '5.5 sec', 'Top Speed': '250 km/h', Drivetrain: 'AWD xDrive' }, dimensions: { Length: '4,922 mm', Width: '2,004 mm', Height: '1,745 mm', Wheelbase: '2,975 mm', 'Boot Space': '650 L', 'Kerb Weight': '2,085 kg' } } },
    { id: 2,  status: 'new',  make: 'Mercedes-AMG',  model: 'S63 E Performance',       year: 2024, price: 186200, oldPrice: null,   fuel: 'Hybrid Petrol', transmission: 'Automatic', mileage: '0 km',       img: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&q=80', type: 'sedan',      specs: { interior: { Seats: '5', Upholstery: 'Nappa Leather', Infotainment: '12.8" MBUX OLED', Sunroof: 'Panoramic', 'Climate Control': 'Four-zone', 'Sound System': 'Burmester 4D Surround' }, exterior: { Colour: 'Obsidian Black', Wheels: '21" AMG Forged Alloy', Headlights: 'Digital Light', Spoiler: 'AMG Rear Lip Spoiler', 'Parking Sensors': 'Front & Rear', Camera: '360° Camera' }, engine: { Engine: '4.0L V8 Biturbo Hybrid', Power: '791 hp', Torque: '1430 Nm', '0-100 km/h': '3.3 sec', 'Top Speed': '290 km/h', Drivetrain: 'AWD' }, dimensions: { Length: '5,336 mm', Width: '1,954 mm', Height: '1,515 mm', Wheelbase: '3,216 mm', 'Boot Space': '305 L', 'Kerb Weight': '2,595 kg' } } },
    { id: 3,  status: 'new',  make: 'Porsche',       model: '911 Carrera',             year: 2024, price: 114400, oldPrice: null,   fuel: 'Petrol',        transmission: 'Automatic', mileage: '0 km',       img: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80', type: 'sports car', specs: { interior: { Seats: '4', Upholstery: 'Leather', Infotainment: '10.9" Touchscreen', Sunroof: 'Optional', 'Climate Control': 'Dual-zone', 'Sound System': 'BOSE Surround Sound' }, exterior: { Colour: 'Guards Red', Wheels: '19"/20" Carrera Wheels', Headlights: 'LED Matrix', Spoiler: 'Active Rear Spoiler', 'Parking Sensors': 'Front & Rear', Camera: '360° Camera' }, engine: { Engine: '3.0L Twin-Turbo Flat-6', Power: '379 hp', Torque: '450 Nm', '0-100 km/h': '4.2 sec', 'Top Speed': '293 km/h', Drivetrain: 'RWD' }, dimensions: { Length: '4,519 mm', Width: '1,852 mm', Height: '1,300 mm', Wheelbase: '2,450 mm', 'Boot Space': '132 L', 'Kerb Weight': '1,505 kg' } } },
    { id: 4,  status: 'new',  make: 'Audi',          model: 'Q7 55 TFSI',              year: 2024, price: 82500,  oldPrice: null,   fuel: 'Petrol',        transmission: 'Automatic', mileage: '0 km',       img: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&q=80', type: 'suv',        specs: { interior: { Seats: '7', Upholstery: 'Valcona Leather', Infotainment: '10.1" MMI', Sunroof: 'Panoramic', 'Climate Control': 'Quad-zone', 'Sound System': 'Bang & Olufsen' }, exterior: { Colour: 'Glacier White', Wheels: '22" Alloy', Headlights: 'Matrix LED', 'Roof Rails': 'Yes', 'Parking Sensors': 'Front & Rear', Camera: '360°' }, engine: { Engine: '3.0L V6 TFSI', Power: '340 hp', Torque: '500 Nm', '0-100 km/h': '5.9 sec', 'Top Speed': '250 km/h', Drivetrain: 'Quattro AWD' }, dimensions: { Length: '5,063 mm', Width: '1,968 mm', Height: '1,741 mm', Wheelbase: '2,994 mm', 'Boot Space': '865 L', 'Kerb Weight': '2,195 kg' } } },
    { id: 5,  status: 'used', make: 'Toyota',        model: 'Camry 2.5 SE',            year: 2021, price: 24900,  oldPrice: 28500,  fuel: 'Petrol',        transmission: 'Automatic', mileage: '42,000 km',  img: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=800&q=80', type: 'sedan',      specs: { interior: { Seats: '5', Upholstery: 'Fabric', Infotainment: '9" Touchscreen', Sunroof: 'None', 'Climate Control': 'Dual-zone', 'Sound System': 'JBL Premium' }, exterior: { Colour: 'Midnight Black', Wheels: '18" Alloy', Headlights: 'LED', Spoiler: 'Integrated', 'Parking Sensors': 'Rear', Camera: 'Reversing' }, engine: { Engine: '2.5L 4-cyl', Power: '203 hp', Torque: '252 Nm', '0-100 km/h': '7.6 sec', 'Top Speed': '210 km/h', Drivetrain: 'FWD' }, dimensions: { Length: '4,885 mm', Width: '1,840 mm', Height: '1,455 mm', Wheelbase: '2,825 mm', 'Boot Space': '428 L', 'Kerb Weight': '1,575 kg' } } },
    { id: 6,  status: 'used', make: 'Honda',         model: 'CR-V EX-L',               year: 2020, price: 27500,  oldPrice: 31000,  fuel: 'Petrol',        transmission: 'Automatic', mileage: '58,000 km',  img: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800&q=80', type: 'suv',        specs: { interior: { Seats: '5', Upholstery: 'Leather', Infotainment: '7" Touchscreen', Sunroof: 'Panoramic', 'Climate Control': 'Dual-zone', 'Sound System': 'Premium Audio' }, exterior: { Colour: 'Lunar Silver', Wheels: '18" Alloy', Headlights: 'LED', 'Roof Rails': 'Yes', 'Parking Sensors': 'Rear', Camera: 'Reversing' }, engine: { Engine: '1.5L Turbo', Power: '190 hp', Torque: '243 Nm', '0-100 km/h': '8.1 sec', 'Top Speed': '200 km/h', Drivetrain: 'AWD' }, dimensions: { Length: '4,607 mm', Width: '1,855 mm', Height: '1,679 mm', Wheelbase: '2,661 mm', 'Boot Space': '522 L', 'Kerb Weight': '1,607 kg' } } },
    { id: 7,  status: 'used', make: 'Nissan',        model: 'Maxima Platinum',         year: 2019, price: 28900,  oldPrice: 34000,  fuel: 'Petrol',        transmission: 'Automatic', mileage: '31,000 km',  img: './Images/Nissan.jpg',                                                   type: 'sedan',      specs: { interior: { Seats: '5', Upholstery: 'Leather', Infotainment: '8" NissanConnect', Sunroof: 'Panoramic', 'Climate Control': 'Dual-zone', 'Sound System': 'BOSE Premium Audio' }, exterior: { Colour: 'Pearl White', Wheels: '19" Alloy', Headlights: 'LED', Spoiler: 'Integrated', 'Parking Sensors': 'Front & Rear', Camera: '360° Around View Monitor' }, engine: { Engine: '3.5L V6', Power: '300 hp', Torque: '354 Nm', '0-100 km/h': '5.9 sec', 'Top Speed': '250 km/h', Drivetrain: 'FWD' }, dimensions: { Length: '4,897 mm', Width: '1,860 mm', Height: '1,435 mm', Wheelbase: '2,775 mm', 'Boot Space': '405 L', 'Kerb Weight': '1,632 kg' } } },
    { id: 8,  status: 'used', make: 'Hyundai',       model: 'i30 N',                   year: 2021, price: 22900,  oldPrice: 26500,  fuel: 'Petrol',        transmission: 'Manual',    mileage: '28,000 km',  img: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800&q=80', type: 'hatchback',  specs: { interior: { Seats: '5', Upholstery: 'Sport Fabric', Infotainment: '10.25" Touchscreen', Sunroof: 'None', 'Climate Control': 'Dual-zone', 'Sound System': 'Bose Premium' }, exterior: { Colour: 'Performance Blue', Wheels: '19" N Alloy', Headlights: 'LED', Spoiler: 'Rear Wing', 'Parking Sensors': 'Rear', Camera: 'Reversing' }, engine: { Engine: '2.0L Turbo', Power: '280 hp', Torque: '392 Nm', '0-100 km/h': '5.4 sec', 'Top Speed': '250 km/h', Drivetrain: 'FWD' }, dimensions: { Length: '4,341 mm', Width: '1,795 mm', Height: '1,447 mm', Wheelbase: '2,650 mm', 'Boot Space': '381 L', 'Kerb Weight': '1,430 kg' } } },
    { id: 9,  status: 'new',  make: 'Volkswagen',    model: 'Golf GTI',                year: 2024, price: 38900,  oldPrice: null,   fuel: 'Petrol',        transmission: 'Manual',    mileage: '0 km',       img: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?w=800&q=80', type: 'hatchback',  specs: { interior: { Seats: '5', Upholstery: 'Sport Cloth', Infotainment: '10" Touchscreen', Sunroof: 'Optional', 'Climate Control': 'Dual-zone', 'Sound System': 'Harman Kardon' }, exterior: { Colour: 'Tornado Red', Wheels: '18" Dallas Alloy', Headlights: 'LED Matrix', Spoiler: 'Rear Lip', 'Parking Sensors': 'Front & Rear', Camera: 'Reversing' }, engine: { Engine: '2.0L TSI Turbo', Power: '245 hp', Torque: '370 Nm', '0-100 km/h': '6.3 sec', 'Top Speed': '250 km/h', Drivetrain: 'FWD' }, dimensions: { Length: '4,284 mm', Width: '1,789 mm', Height: '1,456 mm', Wheelbase: '2,631 mm', 'Boot Space': '374 L', 'Kerb Weight': '1,432 kg' } } },
    { id: 10, status: 'new',  make: 'Honda',         model: 'Civic Type R',            year: 2024, price: 42700,  oldPrice: null,   fuel: 'Petrol',        transmission: 'Manual',    mileage: '0 km',       img: './Images/Honda_civic.jpg',                                              type: 'hatchback',  specs: { interior: { Seats: '5', Upholstery: 'Alcantara/Leather', Infotainment: '9" Honda CONNECT', Sunroof: 'None', 'Climate Control': 'Dual-zone', 'Sound System': 'Bose Premium' }, exterior: { Colour: 'Championship White', Wheels: '20" BBS Alloy', Headlights: 'Full LED', Spoiler: 'Rear Wing', 'Parking Sensors': 'Front & Rear', Camera: '360°' }, engine: { Engine: '2.0L VTEC Turbo', Power: '329 hp', Torque: '420 Nm', '0-100 km/h': '5.4 sec', 'Top Speed': '275 km/h', Drivetrain: 'FWD' }, dimensions: { Length: '4,589 mm', Width: '1,890 mm', Height: '1,405 mm', Wheelbase: '2,735 mm', 'Boot Space': '351 L', 'Kerb Weight': '1,432 kg' } } },
    { id: 11, status: 'new',  make: 'Ford',          model: 'Focus ST',                year: 2024, price: 35200,  oldPrice: null,   fuel: 'Petrol',        transmission: 'Manual',    mileage: '0 km',       img: 'https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=800&q=80', type: 'hatchback',  specs: { interior: { Seats: '5', Upholstery: 'Sport Fabric', Infotainment: '13.2" SYNC 4', Sunroof: 'Panoramic', 'Climate Control': 'Dual-zone', 'Sound System': 'B&O Audio' }, exterior: { Colour: 'Mean Green', Wheels: '19" ST Alloy', Headlights: 'LED', Spoiler: 'Rear Spoiler', 'Parking Sensors': 'Front & Rear', Camera: 'Reversing' }, engine: { Engine: '2.3L EcoBoost Turbo', Power: '280 hp', Torque: '420 Nm', '0-100 km/h': '5.7 sec', 'Top Speed': '250 km/h', Drivetrain: 'FWD' }, dimensions: { Length: '4,391 mm', Width: '1,825 mm', Height: '1,476 mm', Wheelbase: '2,648 mm', 'Boot Space': '375 L', 'Kerb Weight': '1,385 kg' } } },
    { id: 12, status: 'new',  make: 'BMW',           model: '4 Series Convertible',    year: 2024, price: 72900,  oldPrice: null,   fuel: 'Petrol',        transmission: 'Automatic', mileage: '0 km',       img: './Images/Bmw_s4.jpg',                                                   type: 'convertible', specs: { interior: { Seats: '4', Upholstery: 'Vernasca Leather', Infotainment: '12.3" iDrive 7', Sunroof: 'Soft-top Convertible', 'Climate Control': 'Dual-zone', 'Sound System': 'Harman Kardon' }, exterior: { Colour: 'Portimao Blue', Wheels: '19" M Sport Alloy', Headlights: 'LED Adaptive', Spoiler: 'Integrated Rear', 'Parking Sensors': 'Front & Rear', Camera: '360°' }, engine: { Engine: '2.0L 4-cyl TwinPower', Power: '255 hp', Torque: '400 Nm', '0-100 km/h': '6.1 sec', 'Top Speed': '250 km/h', Drivetrain: 'RWD' }, dimensions: { Length: '4,776 mm', Width: '1,852 mm', Height: '1,397 mm', Wheelbase: '2,851 mm', 'Boot Space': '300 L', 'Kerb Weight': '1,750 kg' } } },
    { id: 13, status: 'new',  make: 'Mercedes-Benz', model: 'E-Class Cabriolet',       year: 2024, price: 88500,  oldPrice: null,   fuel: 'Petrol',        transmission: 'Automatic', mileage: '0 km',       img: 'https://images.unsplash.com/photo-1700183421717-30b3f8a9329e?q=80&w=872', type: 'convertible', specs: { interior: { Seats: '4', Upholstery: 'Nappa Leather', Infotainment: '11.9" MBUX', Sunroof: 'Fabric Soft-Top', 'Climate Control': 'Tri-zone', 'Sound System': 'Burmester 3D' }, exterior: { Colour: 'Selenite Grey', Wheels: '20" AMG Alloy', Headlights: 'Multibeam LED', Spoiler: 'Retractable Rear', 'Parking Sensors': 'Front & Rear', Camera: '360°' }, engine: { Engine: '2.0L Turbo 4-cyl', Power: '255 hp', Torque: '400 Nm', '0-100 km/h': '6.4 sec', 'Top Speed': '250 km/h', Drivetrain: 'RWD' }, dimensions: { Length: '4,826 mm', Width: '1,860 mm', Height: '1,407 mm', Wheelbase: '2,873 mm', 'Boot Space': '310 L', 'Kerb Weight': '1,855 kg' } } },
    { id: 14, status: 'new',  make: 'Tesla',         model: 'Model 3 Long Range',      year: 2024, price: 54990,  oldPrice: null,   fuel: 'Electric',      transmission: 'Automatic', mileage: '0 km',       img: 'https://images.unsplash.com/photo-1561580125-028ee3bd62eb?w=800&q=80', type: 'electric',   specs: { interior: { Seats: '5', Upholstery: 'Vegan Leather', Infotainment: '15.4" Touchscreen', Sunroof: 'Glass Roof', 'Climate Control': 'Dual-zone', 'Sound System': 'Premium Audio' }, exterior: { Colour: 'Pearl White', Wheels: '19" Tempest Alloy', Headlights: 'LED', Spoiler: 'Optional', 'Parking Sensors': 'Ultrasonic', Camera: '360° Sentry Mode' }, engine: { Engine: 'Dual Motor Electric', Power: '358 hp', Torque: '493 Nm', '0-100 km/h': '4.4 sec', 'Top Speed': '233 km/h', Drivetrain: 'AWD' }, dimensions: { Length: '4,694 mm', Width: '1,849 mm', Height: '1,443 mm', Wheelbase: '2,875 mm', 'Boot Space': '682 L', 'Kerb Weight': '1,844 kg' } } },
    { id: 15, status: 'new',  make: 'Toyota',        model: 'Alphard Executive',       year: 2024, price: 71000,  oldPrice: null,   fuel: 'Hybrid Petrol', transmission: 'Automatic', mileage: '0 km',       img: './Images/Toyota.jpg',                                                   type: 'minivan',    specs: { interior: { Seats: '7', Upholstery: 'Semi-Aniline Leather', Infotainment: '11.6" Executive Display', Sunroof: 'Panoramic', 'Climate Control': 'Quad-zone', 'Sound System': 'JBL Premium' }, exterior: { Colour: 'Precious Silver', Wheels: '18" Chrome Alloy', Headlights: 'LED', 'Roof Rails': 'No', 'Parking Sensors': 'Front & Rear', Camera: '360°' }, engine: { Engine: '2.5L Hybrid 4-cyl', Power: '246 hp', Torque: '239 Nm', '0-100 km/h': '8.5 sec', 'Top Speed': '180 km/h', Drivetrain: 'FWD' }, dimensions: { Length: '4,995 mm', Width: '1,850 mm', Height: '1,895 mm', Wheelbase: '3,000 mm', 'Boot Space': '810 L', 'Kerb Weight': '2,100 kg' } } },
    { id: 16, status: 'new',  make: 'Lexus',         model: 'LC 500',                  year: 2024, price: 98700,  oldPrice: null,   fuel: 'Petrol',        transmission: 'Automatic', mileage: '0 km',       img: 'https://images.unsplash.com/photo-1577496550006-f24a50e9d50c?w=500',  type: 'coupe',      specs: { interior: { Seats: '4', Upholstery: 'Semi-Aniline Leather', Infotainment: '12.3" Touchscreen', Sunroof: 'Panoramic', 'Climate Control': 'Dual-zone', 'Sound System': 'Mark Levinson 13-spk' }, exterior: { Colour: 'Infrared', Wheels: '21" Dark Alloy', Headlights: 'LED Blade', Spoiler: 'Integrated', 'Parking Sensors': 'Front & Rear', Camera: '360°' }, engine: { Engine: '5.0L V8 NA', Power: '471 hp', Torque: '540 Nm', '0-100 km/h': '4.4 sec', 'Top Speed': '270 km/h', Drivetrain: 'RWD' }, dimensions: { Length: '4,770 mm', Width: '1,920 mm', Height: '1,345 mm', Wheelbase: '2,870 mm', 'Boot Space': '197 L', 'Kerb Weight': '1,975 kg' } } },
    { id: 17, status: 'used', make: 'Jeep',          model: 'Grand Cherokee Limited',  year: 2020, price: 33500,  oldPrice: 39000,  fuel: 'Petrol',        transmission: 'Automatic', mileage: '47,000 km',  img: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800&q=80', type: 'suv',        specs: { interior: { Seats: '5', Upholstery: 'Leather', Infotainment: '8.4" Uconnect', Sunroof: 'Panoramic', 'Climate Control': 'Dual-zone', 'Sound System': 'Alpine Premium' }, exterior: { Colour: 'Brilliant Black', Wheels: '20" Polished Alloy', Headlights: 'LED', 'Roof Rails': 'Yes', 'Parking Sensors': 'Front & Rear', Camera: '360°' }, engine: { Engine: '3.6L V6 Pentastar', Power: '293 hp', Torque: '353 Nm', '0-100 km/h': '7.4 sec', 'Top Speed': '200 km/h', Drivetrain: '4WD Quadra-Trac II' }, dimensions: { Length: '4,828 mm', Width: '1,943 mm', Height: '1,782 mm', Wheelbase: '2,915 mm', 'Boot Space': '1,026 L', 'Kerb Weight': '2,049 kg' } } },
    { id: 18, status: 'used', make: 'BMW',           model: '3 Series 330i',           year: 2020, price: 34200,  oldPrice: 40500,  fuel: 'Petrol',        transmission: 'Automatic', mileage: '39,000 km',  img: './Images/bmw_s3.jpg',                                                   type: 'sedan',      specs: { interior: { Seats: '5', Upholstery: 'Dakota Leather', Infotainment: '10.25" iDrive', Sunroof: 'Optional', 'Climate Control': 'Tri-zone', 'Sound System': 'Harman Kardon' }, exterior: { Colour: 'Mineral Grey', Wheels: '18" M Sport Alloy', Headlights: 'LED', Spoiler: 'Integrated', 'Parking Sensors': 'Front & Rear', Camera: 'Reversing' }, engine: { Engine: '2.0L 4-cyl TwinPower', Power: '255 hp', Torque: '400 Nm', '0-100 km/h': '5.8 sec', 'Top Speed': '250 km/h', Drivetrain: 'RWD' }, dimensions: { Length: '4,709 mm', Width: '1,827 mm', Height: '1,435 mm', Wheelbase: '2,851 mm', 'Boot Space': '480 L', 'Kerb Weight': '1,530 kg' } } },
    { id: 19, status: 'used', make: 'Mazda',         model: 'Mazda3 Hatchback',        year: 2021, price: 21400,  oldPrice: 25500,  fuel: 'Petrol',        transmission: 'Automatic', mileage: '33,000 km',  img: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800&q=80', type: 'hatchback',  specs: { interior: { Seats: '5', Upholstery: 'Leather', Infotainment: '8.8" Mazda Connect', Sunroof: 'Panoramic', 'Climate Control': 'Dual-zone', 'Sound System': 'BOSE' }, exterior: { Colour: 'Soul Red Crystal', Wheels: '18" Alloy', Headlights: 'LED', Spoiler: 'Rear Spoiler', 'Parking Sensors': 'Rear', Camera: 'Reversing' }, engine: { Engine: '2.5L SkyActiv-G', Power: '186 hp', Torque: '252 Nm', '0-100 km/h': '7.4 sec', 'Top Speed': '210 km/h', Drivetrain: 'AWD' }, dimensions: { Length: '4,459 mm', Width: '1,797 mm', Height: '1,440 mm', Wheelbase: '2,726 mm', 'Boot Space': '295 L', 'Kerb Weight': '1,460 kg' } } },
    { id: 20, status: 'used', make: 'Audi',          model: 'A5 Cabriolet',            year: 2019, price: 36800,  oldPrice: 43000,  fuel: 'Petrol',        transmission: 'Automatic', mileage: '51,000 km',  img: 'https://images.unsplash.com/photo-1637051373254-edf5c8e7a6f6?q=80&w=890', type: 'convertible', specs: { interior: { Seats: '4', Upholstery: 'Fine Nappa Leather', Infotainment: '8.3" MMI Navigation Plus', Sunroof: 'Fabric Soft-Top', 'Climate Control': 'Dual-zone', 'Sound System': 'Bang & Olufsen' }, exterior: { Colour: 'Navarra Blue', Wheels: '19" Alloy', Headlights: 'LED', Spoiler: 'Integrated', 'Parking Sensors': 'Front & Rear', Camera: 'Reversing' }, engine: { Engine: '2.0L TFSI Turbo', Power: '249 hp', Torque: '370 Nm', '0-100 km/h': '6.4 sec', 'Top Speed': '250 km/h', Drivetrain: 'FWD' }, dimensions: { Length: '4,686 mm', Width: '1,846 mm', Height: '1,386 mm', Wheelbase: '2,771 mm', 'Boot Space': '380 L', 'Kerb Weight': '1,750 kg' } } },
    { id: 21, status: 'used', make: 'Volvo',         model: 'XC60 T6 Inscription',     year: 2021, price: 38900,  oldPrice: 45000,  fuel: 'Hybrid Petrol', transmission: 'Automatic', mileage: '24,000 km',  img: 'https://images.unsplash.com/photo-1710866566744-efe7be345bd4?q=80&w=1471', type: 'suv',        specs: { interior: { Seats: '5', Upholstery: 'Nappa Leather', Infotainment: '9" Sensus Connect', Sunroof: 'Panoramic', 'Climate Control': 'Four-zone', 'Sound System': 'Bowers & Wilkins' }, exterior: { Colour: 'Crystal White Pearl', Wheels: '20" Diamond Cut Alloy', Headlights: 'LED Thor Hammer', 'Roof Rails': 'Yes', 'Parking Sensors': 'Front & Rear', Camera: '360°' }, engine: { Engine: '2.0L T6 PHEV', Power: '340 hp', Torque: '590 Nm', '0-100 km/h': '5.5 sec', 'Top Speed': '230 km/h', Drivetrain: 'AWD' }, dimensions: { Length: '4,688 mm', Width: '1,902 mm', Height: '1,658 mm', Wheelbase: '2,865 mm', 'Boot Space': '505 L', 'Kerb Weight': '2,100 kg' } } },
    { id: 22, status: 'used', make: 'Ford',          model: 'Mustang GT',              year: 2020, price: 38500,  oldPrice: 44500,  fuel: 'Petrol',        transmission: 'Manual',    mileage: '36,000 km',  img: 'https://images.unsplash.com/photo-1494905998402-395d579af36f?w=800&q=80', type: 'sports car', specs: { interior: { Seats: '4', Upholstery: 'Leather/Alcantara', Infotainment: '12" SYNC 4', Sunroof: 'None', 'Climate Control': 'Dual-zone', 'Sound System': 'B&O Audio' }, exterior: { Colour: 'Race Red', Wheels: '19" Alloy', Headlights: 'LED', Spoiler: 'Deck Lid Spoiler', 'Parking Sensors': 'Rear', Camera: 'Reversing' }, engine: { Engine: '5.0L V8 Coyote', Power: '450 hp', Torque: '529 Nm', '0-100 km/h': '4.8 sec', 'Top Speed': '250 km/h', Drivetrain: 'RWD' }, dimensions: { Length: '4,784 mm', Width: '1,916 mm', Height: '1,381 mm', Wheelbase: '2,720 mm', 'Boot Space': '408 L', 'Kerb Weight': '1,750 kg' } } },
    { id: 23, status: 'used', make: 'Lexus',         model: 'ES 350 F Sport',          year: 2020, price: 35900,  oldPrice: 41000,  fuel: 'Petrol',        transmission: 'Automatic', mileage: '29,000 km',  img: './Images/lexus.jpg',                                                    type: 'sedan',      specs: { interior: { Seats: '5', Upholstery: 'Semi-Aniline Leather', Infotainment: '12.3" Touchscreen', Sunroof: 'Panoramic', 'Climate Control': 'Tri-zone', 'Sound System': 'Mark Levinson' }, exterior: { Colour: 'Obsidian Black', Wheels: '19" F Sport Alloy', Headlights: 'Triple LED', Spoiler: 'Integrated', 'Parking Sensors': 'Front & Rear', Camera: '360°' }, engine: { Engine: '3.5L V6 NA', Power: '302 hp', Torque: '363 Nm', '0-100 km/h': '6.6 sec', 'Top Speed': '210 km/h', Drivetrain: 'FWD' }, dimensions: { Length: '4,975 mm', Width: '1,865 mm', Height: '1,445 mm', Wheelbase: '2,870 mm', 'Boot Space': '454 L', 'Kerb Weight': '1,740 kg' } } },
    { id: 24, status: 'used', make: 'Renault',       model: 'Megane RS Trophy',        year: 2020, price: 26700,  oldPrice: 32000,  fuel: 'Petrol',        transmission: 'Manual',    mileage: '22,000 km',  img: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&q=80', type: 'hatchback',  specs: { interior: { Seats: '5', Upholstery: 'Alcantara/Leather', Infotainment: '9.3" RS Monitor', Sunroof: 'None', 'Climate Control': 'Dual-zone', 'Sound System': 'Focal Premium' }, exterior: { Colour: 'Liquid Yellow', Wheels: '19" OZ Racing Alloy', Headlights: 'Pure Vision LED', Spoiler: 'Rear Splitter', 'Parking Sensors': 'Rear', Camera: 'Reversing' }, engine: { Engine: '1.8L Turbo 4-cyl', Power: '300 hp', Torque: '420 Nm', '0-100 km/h': '5.4 sec', 'Top Speed': '270 km/h', Drivetrain: 'FWD' }, dimensions: { Length: '4,360 mm', Width: '1,814 mm', Height: '1,443 mm', Wheelbase: '2,669 mm', 'Boot Space': '341 L', 'Kerb Weight': '1,474 kg' } } },
  ];

  /* ─────────────────────────────────────────
     4. SHARED HELPERS
  ───────────────────────────────────────── */
  function fmt(n) { return '$' + Number(n).toLocaleString(); }

  /* ─────────────────────────────────────────
     5. SEARCH LOGIC
        Scores & ranks results by relevance
  ───────────────────────────────────────── */
  function scoreMatch(car, query) {
    const q     = query.toLowerCase().trim();
    const words = q.split(/\s+/).filter(Boolean);
    const full  = (car.make + ' ' + car.model + ' ' + car.year + ' ' + car.type + ' ' + car.fuel + ' ' + car.status).toLowerCase();
    let score   = 0;

    words.forEach(function (w) {
      /* exact make / model start → highest weight */
      if (car.make.toLowerCase().startsWith(w))  score += 10;
      if (car.model.toLowerCase().includes(w))   score += 8;
      if (car.make.toLowerCase().includes(w))    score += 6;
      if (String(car.year).includes(w))          score += 4;
      if (car.type.toLowerCase().includes(w))    score += 3;
      if (car.fuel.toLowerCase().includes(w))    score += 2;
      if (car.status.toLowerCase().includes(w))  score += 2;
      if (full.includes(w))                      score += 1;
    });

    return score;
  }

  function searchCars(query) {
    if (!query || query.trim().length < 1) return [];
    return cars
      .map(function (c) { return { car: c, score: scoreMatch(c, query) }; })
      .filter(function (r) { return r.score > 0; })
      .sort(function (a, b) { return b.score - a.score; })
      .slice(0, 8)                              /* cap dropdown at 8 */
      .map(function (r) { return r.car; });
  }

  /* ─────────────────────────────────────────
     6. INJECT SEARCH BAR HTML
        Placed inside .cb-search-wrap in navbar
  ───────────────────────────────────────── */
  function buildDropdown() {
    const dd = document.createElement('div');
    dd.id        = 'cb-research-dropdown';
    dd.className = 'cb-research-dropdown';
    dd.setAttribute('role', 'listbox');
    dd.setAttribute('aria-label', 'Search results');
    return dd;
  }

  /* ─────────────────────────────────────────
     7. MODAL BRIDGE
        Re-uses the existing #clModal from
        car-listing-component. If not mounted
        yet, wait and retry.
  ───────────────────────────────────────── */
  var TABS     = ['Interior', 'Exterior', 'Engine', 'Dimensions'];
  var TAB_KEYS = ['interior', 'exterior', 'engine', 'dimensions'];

  function openCarModal(car) {
    /* The modal is injected by car-listing.js.
       If the component hasn't loaded yet, bail gracefully. */
    var overlay = document.getElementById('clModal');
    if (!overlay) {
      console.warn('[research.js] #clModal not found — is car-listing loaded?');
      return;
    }

    overlay.style.display    = 'flex';
    overlay.style.opacity    = '0';
    overlay.style.transition = 'opacity .25s ease';

    document.getElementById('clModalImg').src           = car.img;
    document.getElementById('clModalImg').alt           = car.make + ' ' + car.model;
    document.getElementById('clModalBadge').textContent = car.status === 'new' ? 'New' : 'Used';
    document.getElementById('clModalBadge').className   = 'cl-modal-gallery-badge ' + car.status;
    document.getElementById('clModalMake').textContent  = car.make + ' · ' + car.year;
    document.getElementById('clModalName').textContent  = car.model;
    document.getElementById('clModalPrice').textContent = fmt(car.price);
    document.getElementById('clModalOld').textContent   = car.oldPrice ? fmt(car.oldPrice) : '';

    TAB_KEYS.forEach(function (key, i) {
      var grid = document.getElementById('clSpecs' + i);
      var data = car.specs[key] || {};
      grid.innerHTML = Object.entries(data).map(function (entry) {
        return '<div class="cl-spec-item"><div class="cl-spec-label">' + entry[0] + '</div><div class="cl-spec-value">' + entry[1] + '</div></div>';
      }).join('');
    });

    document.querySelectorAll('.cl-tab-btn').forEach(function (btn, i) {
      btn.classList.toggle('active', i === 0);
    });
    document.querySelectorAll('.cl-tab-panel').forEach(function (panel, i) {
      panel.classList.toggle('active', i === 0);
    });

    requestAnimationFrame(function () {
      requestAnimationFrame(function () { overlay.style.opacity = '1'; });
    });

    document.body.style.overflow = 'hidden';
  }

  /* ─────────────────────────────────────────
     8. RENDER DROPDOWN ITEMS
  ───────────────────────────────────────── */
  function renderItems(results, dropdown, query) {
    dropdown.innerHTML = '';

    if (results.length === 0) {
      dropdown.innerHTML = '<div class="cb-research-empty">No results for &ldquo;' + escHtml(query) + '&rdquo;</div>';
      showDropdown(dropdown);
      return;
    }

    results.forEach(function (car) {
      var item = document.createElement('div');
      item.className   = 'cb-research-item';
      item.setAttribute('role', 'option');
      item.setAttribute('tabindex', '0');
      item.setAttribute('data-id', car.id);

      var badge = car.status === 'new'
        ? '<span class="cb-research-badge new">New</span>'
        : '<span class="cb-research-badge used">Used</span>';

      var saveLine = car.oldPrice
        ? '<span class="cb-research-save">Save ' + fmt(car.oldPrice - car.price) + '</span>'
        : '';

      item.innerHTML = [
        '<img class="cb-research-thumb" src="' + car.img + '" alt="" loading="lazy">',
        '<div class="cb-research-info">',
          '<div class="cb-research-name">' + escHtml(car.make) + ' <strong>' + escHtml(car.model) + '</strong></div>',
          '<div class="cb-research-meta">' + car.year + ' &middot; ' + escHtml(car.type) + ' &middot; ' + escHtml(car.fuel) + '</div>',
        '</div>',
        '<div class="cb-research-right">',
          '<div class="cb-research-price">' + fmt(car.price) + '</div>',
          saveLine,
          badge,
        '</div>',
      ].join('');

      item.addEventListener('click', function () {
        openCarModal(car);
        hideDropdown(dropdown);
        /* clear input */
        var inp = document.querySelector('.cb-search-input');
        if (inp) inp.value = '';
      });

      item.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          item.click();
        }
        if (e.key === 'ArrowDown') {
          e.preventDefault();
          var next = item.nextElementSibling;
          if (next && next.classList.contains('cb-research-item')) next.focus();
        }
        if (e.key === 'ArrowUp') {
          e.preventDefault();
          var prev = item.previousElementSibling;
          if (prev && prev.classList.contains('cb-research-item')) {
            prev.focus();
          } else {
            var inp2 = document.querySelector('.cb-search-input');
            if (inp2) inp2.focus();
          }
        }
      });

      dropdown.appendChild(item);
    });

    showDropdown(dropdown);
  }

  function showDropdown(dd) { dd.classList.add('open'); }
  function hideDropdown(dd) { dd.classList.remove('open'); }

  function escHtml(str) {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  /* ─────────────────────────────────────────
     9. INIT — attach to existing search input
  ───────────────────────────────────────── */
  function init() {
    var wrap = document.querySelector('.cb-search-wrap');
    var inp  = document.querySelector('.cb-search-input');
    if (!wrap || !inp) {
      console.warn('[research.js] .cb-search-wrap / .cb-search-input not found');
      return;
    }

    var dropdown = buildDropdown();
    wrap.appendChild(dropdown);
    wrap.style.position = 'relative'; /* anchor for absolute dropdown */

    /* debounced input handler */
    var debounceTimer;
    inp.addEventListener('input', function () {
      clearTimeout(debounceTimer);
      var q = this.value.trim();
      if (q.length === 0) { hideDropdown(dropdown); return; }
      debounceTimer = setTimeout(function () {
        var results = searchCars(q);
        renderItems(results, dropdown, q);
      }, 120);
    });

    /* keyboard nav: arrow-down enters list */
    inp.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        var first = dropdown.querySelector('.cb-research-item');
        if (first) first.focus();
      }
      if (e.key === 'Escape') {
        hideDropdown(dropdown);
      }
    });

    /* close on outside click */
    document.addEventListener('click', function (e) {
      if (!wrap.contains(e.target)) hideDropdown(dropdown);
    });

    /* close on resize if mobile view lost */
    window.addEventListener('resize', function () {
      if (!isMobile() && dropdown.classList.contains('open')) {
        hideDropdown(dropdown);
      }
    });
  }

  /* ─────────────────────────────────────────
     10. BOOT
  ───────────────────────────────────────── */
  function waitForNavbar() {
    var wrap = document.querySelector('.cb-search-wrap');
    if (wrap) {
      init();
    } else {
      setTimeout(waitForNavbar, 50);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', waitForNavbar);
  } else {
    waitForNavbar();
  }

})();