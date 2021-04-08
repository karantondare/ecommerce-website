import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { loadStripe } from "@stripe/stripe-js";
import { CartProvider } from "use-shopping-cart";
import { Toaster } from "react-hot-toast";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Result from "./pages/Result";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const queryClient = new QueryClient();

const stripePromise = loadStripe(
  "pk_test_51IQ8QtKpG66ezzfCTp4moljMCaKezPXhOkPt2h0T9NHInoUPm3CAMBZdCS2Phh6xBwNbuvOnPiEXKttOHFwSNcsR00T2AbYYdb"
);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <CartProvider
        mode="checkout-session"
        stripe={stripePromise}
        currency="INR"
      >
        <BrowserRouter>
          <Navbar />
          <Toaster position="bottom-center" />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/result" component={Result} />
            <Route path="/:productId" component={Product} />
          </Switch>
          <Footer />
        </BrowserRouter>
      </CartProvider>
    </QueryClientProvider>
  );
}

export default App;
