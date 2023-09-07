import "./App.css";
import BokingPageAbj3 from "./Components/BokingPageAbj3";
import BookingPageAbj1 from "./Components/BookingPageAbj1";
import BookingPageAbj2 from "./Components/BookingPageAbj2";
import BookingPageIB1 from "./Components/BookingPageIB1";
import BookingPageIB2 from "./Components/BookingPageIB2";
import BookingPageIB3 from "./Components/BookingPageIB3";
import BookingPageLag1 from "./Components/BookingPageLag1";
import BookingPageLag2 from "./Components/BookingPageLag2";
import BookingPageLag3 from "./Components/BookingPageLag3";
import BookingSuccessIB1 from "./Components/BookingSuccessIB1";
import BrowseSpeacialistPage from "./Components/BrowseSpeacialistPage";
import DoctorsinAbuja from "./Components/DoctorsinAbuja";
import DoctorsinIbadan from "./Components/DoctorsinIbadan";
import DoctorsinLagos from "./Components/DoctorsinLagos";
import HomePage from "./Components/HomePage";
import LoginPage from "./Components/LoginPage";
import LoginSuccessPage from "./Components/LoginSuccessPage";
import LogoutConfirmation from "./Components/LogoutConfirmation";
import PPMyAppointment from "./Components/PPMyAppointment";
import PPMyInbox from "./Components/PPMyInbox";
import PatientProfilePage from "./Components/PatientProfilePage";
import Payemnt from "./Components/Payemnt";
import PaymentFailure from "./Components/PaymentFailure";
import PaymentSuccess from "./Components/PaymentSuccess";
import SignUpSuccessPage from "./Components/SignUpSuccessPage";
import SignupPage from "./Components/SignupPage";
import WebsitePage from "./Components/WebsitePage";

import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<WebsitePage />} />
          <Route path="/HomePage" element={<HomePage />} />
          <Route path="/LoginPage" element={<LoginPage />} />
          <Route path="/SignupPage" element={<SignupPage />} />
          <Route path="/SignUpSuccessPage" element={<SignUpSuccessPage />} />
          <Route path="/LoginSuccessPage" element={<LoginSuccessPage />} />
          <Route path="/PatientProfilePage" element={<PatientProfilePage />} />
          <Route
            path="/BrowseSpeacialistPage"
            element={<BrowseSpeacialistPage />}
          />
          <Route path="/DoctorsinLagos" element={<DoctorsinLagos />} />
          <Route path="/DoctorsinAbuja" element={<DoctorsinAbuja />} />
          <Route path="/DoctorsinIbadan" element={<DoctorsinIbadan />} />
          <Route path="/PPMyAppointment" element={<PPMyAppointment />} />
          <Route path="/PPMyInbox" element={<PPMyInbox />} />
          <Route path="/LogoutConfirmation" element={<LogoutConfirmation />} />
          <Route path="/BookingPageIB1" element={<BookingPageIB1 />} />
          <Route path="/BookingPageIB2" element={<BookingPageIB2 />} />
          <Route path="/BookingPageIB3" element={<BookingPageIB3 />} />
          <Route path="/BookingPageAbj1" element={<BookingPageAbj1 />} />
          <Route path="/BookingPageAbj2" element={<BookingPageAbj2 />} />
          <Route path="/BokingPageAbj3" element={<BokingPageAbj3 />} />
          <Route path="/BookingPageLag1" element={<BookingPageLag1 />} />
          <Route path="/BookingPageLag2" element={<BookingPageLag2 />} />
          <Route path="/BookingPageLag3" element={<BookingPageLag3 />} />
          <Route path="/BookingSuccessIB1" element={<BookingSuccessIB1 />} />
          <Route path="/Payemnt" element={<Payemnt />} />
          <Route path="/PaymentSuccess" element={<PaymentSuccess />} />
          <Route path="/PaymentFailure" element={<PaymentFailure />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
