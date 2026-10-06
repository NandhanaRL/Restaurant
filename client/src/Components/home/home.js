import React from "react";

export function Home() {
  return (
    <>
      <nav className="navbar navbar-expand-lg wine-navbar">
        <div className="container">
          <a className="navbar-brand" href="#">La Belle Cuisine</a>

          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><a className="nav-link" href="#specials">Chef’s Specials</a></li>
            <li className="nav-item"><a className="nav-link" href="/addmenu">Add Menu</a></li>
            <li className="nav-item"><a className="nav-link" href="/viewmenu">View Menu</a></li>
            <li className="nav-item"><a className="nav-link" href="#reservations">Reservations</a></li>
            <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>

      <div className="wine-hero text-center text-light">
        <h1 className="display-4 fw-bold">Experience Fine Dining</h1>
        <p className="lead">Exquisite flavors, curated by our chefs</p>
        <a href="#reservations" className="btn btn-light btn-lg">Book a Table</a>
      </div>
<section id="specials" className="wine-specials py-5">
  <div className="container">

    {/* Heading */}
    <h2 className="mb-5 text-center w-100">Chef’s Specials</h2>

    {/* Cards Row */}
    <div className="row justify-content-center">

      {/* Card 1 */}
      <div className="col-md-4 d-flex justify-content-center mb-4">
        <div className="card wine-card h-100 text-center">
          <img
            src="https://www.fineandwild.com/cdn/shop/files/Truffle_Risotto_Lifestyle_Image_FINE_WILD_UK_f7c8494e-da97-47d1-ac99-918944e2ea9d.jpg?v=1718100319&width=1500"
            className="card-img-top"
            alt="Truffle Risotto"
          />
          <div className="card-body">
            <h5 className="card-title">Truffle Risotto</h5>
            <p className="card-text">
              Creamy risotto infused with truffle essence.
            </p>
          </div>
        </div>
      </div>

      {/* Card 2 */}
      <div className="col-md-4 d-flex justify-content-center mb-4">
        <div className="card wine-card h-100 text-center">
          <img
            src="https://huonaqua-com-au.assets.ionatahosting.net/uploads/2025/09/Untitled-design-5-768x432.png"
            className="card-img-top"
            alt="Seared Salmon"
          />
          <div className="card-body">
            <h5 className="card-title">Seared Salmon</h5>
            <p className="card-text">
              Perfectly seared salmon with wine reduction.
            </p>
          </div>
        </div>
      </div>

      {/* Card 3 */}
      <div className="col-md-4 d-flex justify-content-center mb-4">
        <div className="card wine-card h-100 text-center">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3XPFTpRcsflURITz57aSR84QIyZJsv0EPqw&s"
            className="card-img-top"
            alt="Chocolate Soufflé"
          />
          <div className="card-body">
            <h5 className="card-title">Chocolate Soufflé</h5>
            <p className="card-text">
              Rich, airy soufflé with a molten center.
            </p>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>

<section id="reservations" className="wine-reservations py-5">
  <div className="container">
    <div className="row justify-content-center text-center">
      <div className="col-md-8">     
        <h2 className="mb-4">Reserve Your Table</h2>
        <p className="lead mb-4">
          Indulge in an unforgettable dining experience. Book your table now.
        </p>
        <a href="#contact" className="btn btn-light btn-lg">
          Make a Reservation
        </a>
      </div>
    </div>
  </div>
</section>

      <div className="container mt-5">
        <div
          className="p-4 rounded text-center"
          style={{
            backgroundColor: "#4b1c2f",
          }}
        >
          <h3
            style={{
              color: "#e0a96d",
              fontWeight: 700,
            }}
          >
            📞 Contact Us
          </h3>

          <p style={{ color: "#e0a96d" }}>
            <strong style={{ color: "#f8f9fa" }}>Phone:</strong> +014 321 523 23
          </p>

          <p style={{ color: "#e0a96d" }}>
            <strong style={{ color: "#f8f9fa" }}>Email:</strong> info@example.com
          </p>
        </div>
      </div>
    </>
  );
}