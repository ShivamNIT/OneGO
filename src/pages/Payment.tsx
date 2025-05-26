import { useCallback } from "react";
import useRazorpay, { RazorpayOptions } from "react-razorpay";

export default function App() {
  const [Razorpay] = useRazorpay();

  const handlePayment = useCallback(async() => {
    // const order = createOrder();

    const options: RazorpayOptions = {
      key: "YOUR_KEY_ID",
      amount: "3000",
      currency: "INR",
      name: "Acme Corp",
      description: "Test Transaction",
      image: "https://example.com/your_logo",
      order_id: "1102",
      handler: (res) => {
        console.log(res);
      },
      prefill: {
        name: "Piyush Garg",
        email: "youremail@example.com",
        contact: "9999999999",
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#3399cc",
      },
    };

    const rzpay = new Razorpay(options);
    rzpay.open();
  }, [Razorpay]);

  return (
    <div className="App">
      <button onClick={handlePayment}>Click</button>
    </div>
  );
}

function createOrder(params: any) {
    throw new Error("Function not implemented.");
}
