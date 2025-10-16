export default function Header({isLoading}) {
  return (
    <>
      {/* Bootstrap CSS CDN */}
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
        rel="stylesheet"
      />

      <nav
        // className={`navbar shadow-sm sticky-top ${isLoading ? 'd-none' : 'd-block'}`}
        className={`navbar shadow-sm sticky-top ${isLoading ? 'd-none' : 'd-block'}`}
        style={{
          minHeight: "80px",
          background: "#757C8A",
        }}
      >
        <div className="container-fluid justify-content-center py-2">
          <div className="d-flex align-items-center">
            <img
              src="https://tse3.mm.bing.net/th/id/OIP.TVjBbKorZdiSHJWBqC5amgHaH6?pid=Api&P=0&h=180"
              alt="Chef Claude Logo"
              className="me-3"
              style={{
                width: "48px",
                height: "48px",
                objectFit: "cover",
                borderRadius: "50%",
                border: "3px solid #fff",
                background: "#fff",
              }}
            />
            <span
              className="fw-bold"
              style={{
                fontSize: "2rem",
                color: "#fff",
                letterSpacing: "0.5px",
              }}
            >
              FlavorForge
            </span>
          </div>
        </div>
      </nav>
    </>
  );
}