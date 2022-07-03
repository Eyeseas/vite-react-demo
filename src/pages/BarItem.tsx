import { useLocation, useNavigate, useParams } from "react-router-dom";
import { deleteInvoice, getOne } from "@/mockData/data";
interface InvoiceItem {
    number: string;
    name: string;
    date: string;
    amount: number;
    due: string;
}
export default function () {
    let navigate = useNavigate();
    let location = useLocation();
    let params = useParams()
    let invoice: InvoiceItem = getOne(parseInt(params.itemId, 10));

    return (
        <main style={{ padding: "1rem" }}>
            <h2>Total Due: {invoice.amount}</h2>
            <p>
                {invoice.name}: {invoice.number}
            </p>
            <p>Due Date: {invoice.due}</p>
            <p>
                <button
                    onClick={() => {
                        deleteInvoice(invoice.number);
                        navigate("/invoices" + location.search);
                    }}
                >
                    Delete
                </button>
            </p>
        </main>
    )
}