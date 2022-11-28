import React from "react"
import Header from "../components/header";
const Home=()=>{
    return (
        <div className="page">
       <Header/>
        
      
        <div className="page-wrapper">
          <div className="page-body">
            <div className="container-xl d-flex flex-column justify-content-center">
              <div className="empty">
                <div className="empty-img"><img src="./static/illustrations/undraw_printing_invoices_5r4r.svg" height="128" alt=""/>
                </div>
                <p className="empty-title">No results found</p>
                <p className="empty-subtitle text-muted">
                  Try adjusting your search or filter to find what you're looking for.
                </p>
                <div className="empty-action">
                  <a href="./." className="btn btn-primary">
                    
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg>
                    Add your first client
                  </a>
                </div>
              </div>
            </div>
          </div>
          <footer className="footer footer-transparent d-print-none">
            <div className="container-xl">
              <div className="row text-center align-items-center flex-row-reverse">
                <div className="col-lg-auto ms-lg-auto">
                  <ul className="list-inline list-inline-dots mb-0">
                    <li className="list-inline-item"><a href="./docs/" className="link-secondary">Documentation</a></li>
                    <li className="list-inline-item"><a href="./license.html" className="link-secondary">License</a></li>
                    <li className="list-inline-item"><a href="https://github.com/tabler/tabler" target="_blank" className="link-secondary" rel="noopener">Source code</a></li>
                    <li className="list-inline-item">
                      <a href="https://github.com/sponsors/codecalm" target="_blank" className="link-secondary" rel="noopener">
                        
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon text-pink icon-filled icon-inline" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" /></svg>
                        Sponsor
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-12 col-lg-auto mt-3 mt-lg-0">
                  <ul className="list-inline list-inline-dots mb-0">
                    <li className="list-inline-item">
                      Copyright &copy; 2022
                      <a href="." className="link-secondary">Tabler</a>.
                      All rights reserved.
                    </li>
                    <li className="list-inline-item">
                      <a href="./changelog.html" className="link-secondary" rel="noopener">
                        v1.0.0-beta16
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    )
}
export default Home;